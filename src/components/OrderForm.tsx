import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Minus,
  Plus,
  MapPin,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Section from "./Section";
import { products, getProductById } from "../data/products";
import { BRAND } from "../config";

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function OrderForm() {
  const [params] = useSearchParams();
  const initialId = params.get("product") ?? products[0].id;

  const [productId, setProductId] = useState<string>(initialId);
  const [qty, setQty] = useState<number>(BRAND.minOrderKg);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    area: "",
    pincode: "",
    city: "Bangalore",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const p = params.get("product");
    if (p && getProductById(p)) setProductId(p);
  }, [params]);

  const product = useMemo(() => getProductById(productId) ?? products[0], [productId]);
  const subtotal = product.pricePerKg * qty;
  const grandTotal = subtotal + BRAND.deliveryCharge;

  const cityIsValid = form.city.trim().toLowerCase() === BRAND.deliveryCity.toLowerCase();
  const pincodeIsValid = /^5[6-9]\d{4}$/.test(form.pincode.trim()); // Bangalore range 560xxx-562xxx

  const qtyOptions: number[] = [];
  for (let k = BRAND.minOrderKg; k <= BRAND.maxOrderKg; k += BRAND.quantityStepKg) qtyOptions.push(k);

  const changeQty = (delta: number) => {
    setQty((q) => {
      const next = q + delta * BRAND.quantityStepKg;
      if (next < BRAND.minOrderKg) return BRAND.minOrderKg;
      return next;
    });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (qty < BRAND.minOrderKg || qty % BRAND.quantityStepKg !== 0) {
      setErrorMsg(`Minimum order is ${BRAND.minOrderKg} KG and must be in multiples of ${BRAND.quantityStepKg} KG.`);
      return;
    }
    if (!cityIsValid) {
      setErrorMsg(`Sorry — we currently deliver only within ${BRAND.deliveryCity}.`);
      return;
    }
    if (!pincodeIsValid) {
      setErrorMsg("Please enter a valid Bangalore pincode (e.g. 560001).");
      return;
    }

    setStatus("sending");
    try {
      const payload = {
        _subject: `[Mangobliz Order] ${product.name} × ${qty} KG — ${form.name}`,
        ...form,
        product: product.name,
        productId: product.id,
        pricePerKg: product.pricePerKg,
        quantityKg: qty,
        subtotal,
        deliveryCharge: BRAND.deliveryCharge,
        grandTotal,
        source: "Order Form",
      };
      const res = await fetch(BRAND.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
      setErrorMsg("We couldn't submit your order right now. Please WhatsApp or call us.");
    }
  };

  if (status === "sent") {
    return (
      <Section eyebrow="Order received" title={<>Thank you, <span className="text-gradient-mango">{form.name || "friend"}!</span></>}>
        <div className="glass rounded-3xl p-6 sm:p-10 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full gradient-mango text-white flex items-center justify-center shadow-mango">
            <CheckCircle2 size={30} />
          </div>
          <p className="mt-5 text-ink/75 leading-relaxed">
            Your order for <b>{product.name} × {qty} KG</b> ({fmt(grandTotal)}) has been received.
            Our team will call you within 2 business hours to confirm delivery.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="glass px-6 py-3 rounded-full font-semibold">Back to home</Link>
            <Link to="/products" className="gradient-mango text-white px-6 py-3 rounded-full font-semibold shadow-mango">Continue browsing</Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section
      eyebrow="Place your order"
      title={<>Order <span className="text-gradient-mango">fresh mangoes</span></>}
      subtitle={`Minimum ${BRAND.minOrderKg} KG · Delivery only within ${BRAND.deliveryCity} · ₹${BRAND.deliveryCharge} delivery`}
    >
      <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={submit}
          className="lg:col-span-3 space-y-5"
        >
          {/* Product picker */}
          <div className="glass rounded-3xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2">
              <ShoppingBag size={18} className="text-mango-600" /> Choose your mango
            </h3>
            <Field label="Selected Mango">
              <select value={productId} onChange={(e) => setProductId(e.target.value)} className={inputCls}>
                {products.map((p) => (
                  <option key={p.id} value={p.id} disabled={!p.available}>
                    {p.name} — {fmt(p.pricePerKg)}/KG {p.available ? "" : "(Sold out)"}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Price per KG">
                <input readOnly value={fmt(product.pricePerKg)} className={`${inputCls} bg-white/60 font-semibold`} />
              </Field>
              <Field label={`Quantity (min ${BRAND.minOrderKg} KG · step ${BRAND.quantityStepKg} KG)`}>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => changeQty(-1)}
                    className="w-12 h-12 rounded-xl bg-mango-100 text-mango-700 flex items-center justify-center active:scale-95 disabled:opacity-40"
                    disabled={qty <= BRAND.minOrderKg} aria-label="Decrease">
                    <Minus size={18} />
                  </button>
                  <select
                    value={qtyOptions.includes(qty) ? qty : ""}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className={`${inputCls} text-center font-semibold flex-1`}
                  >
                    {!qtyOptions.includes(qty) && <option value={qty}>{qty} KG</option>}
                    {qtyOptions.map((k) => <option key={k} value={k}>{k} KG</option>)}
                  </select>
                  <button type="button" onClick={() => changeQty(1)}
                    className="w-12 h-12 rounded-xl bg-mango-100 text-mango-700 flex items-center justify-center active:scale-95" aria-label="Increase">
                    <Plus size={18} />
                  </button>
                </div>
              </Field>
            </div>
          </div>

          {/* Customer details */}
          <div className="glass rounded-3xl p-5 sm:p-6 space-y-4">
            <h3 className="font-display text-xl font-semibold">Your details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
              </Field>
              <Field label="Phone number">
                <input required type="tel" inputMode="tel" pattern="[0-9+\s-]{10,}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
              </Field>
              <Field label="Area / Locality">
                <input required placeholder="e.g. Indiranagar" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} className={inputCls} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Delivery address">
                  <textarea required rows={3} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={`${inputCls} resize-none`} />
                </Field>
              </div>
              <Field label="City">
                <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputCls} />
              </Field>
              <Field label="Pincode">
                <input required inputMode="numeric" pattern="\d{6}" placeholder="560001" value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} className={inputCls} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Order notes (optional)">
                  <textarea rows={2} placeholder="Ripeness preference, landmark, delivery time…" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={`${inputCls} resize-none`} />
                </Field>
              </div>
            </div>

            {!cityIsValid && form.city.trim() && (
              <div className="flex items-start gap-2 text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-sm">
                <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                Currently we deliver only within <b className="mx-1">{BRAND.deliveryCity}</b>. Please update the city field.
              </div>
            )}

            <div className="flex items-start gap-2 text-mango-800 bg-mango-50 border border-mango-200 rounded-xl px-4 py-3 text-sm">
              <MapPin size={16} className="mt-0.5 shrink-0 text-mango-600" />
              Delivery available only inside {BRAND.deliveryCity}. A flat delivery fee of {fmt(BRAND.deliveryCharge)} applies.
            </div>
          </div>

          {errorMsg && (
            <div className="text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-sm">{errorMsg}</div>
          )}
        </motion.form>

        {/* Summary */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="glass rounded-3xl p-5 sm:p-6 lg:sticky lg:top-24">
            <h3 className="font-display text-xl font-semibold mb-4">Order summary</h3>
            <div className="flex items-center gap-3 pb-4 border-b border-mango-100">
              <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="min-w-0">
                <div className="font-semibold truncate">{product.name}</div>
                <div className="text-xs text-ink/60">{fmt(product.pricePerKg)} / KG × {qty} KG</div>
              </div>
            </div>
            <dl className="mt-4 space-y-2.5 text-sm">
              <Row label="Subtotal" value={fmt(subtotal)} />
              <Row label={<span className="inline-flex items-center gap-1.5"><Truck size={13} /> Delivery</span>} value={fmt(BRAND.deliveryCharge)} />
              <div className="h-px bg-mango-100 my-2" />
              <Row label={<span className="font-display text-base font-semibold">Grand Total</span>}
                value={<span className="font-display text-xl font-bold text-gradient-mango">{fmt(grandTotal)}</span>} />
            </dl>

            <button
              type="submit"
              form=""
              onClick={(e) => {
                e.preventDefault();
                const f = document.querySelector("form");
                f?.requestSubmit();
              }}
              disabled={status === "sending"}
              className="mt-6 w-full h-14 rounded-2xl gradient-mango text-white font-semibold shadow-mango active:scale-95 hover:scale-[1.02] disabled:opacity-60 transition inline-flex items-center justify-center gap-2"
            >
              {status === "sending" ? "Placing order…" : "Place Order"}
            </button>
            <p className="mt-3 text-[11px] text-ink/55 text-center leading-relaxed">
              We'll call you to confirm before dispatch. Pay on delivery or online.
            </p>
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}

const inputCls =
  "w-full bg-white/80 border border-white/80 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-mango-500";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-ink/60 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-ink/70">{label}</dt>
      <dd className="text-ink font-medium">{value}</dd>
    </div>
  );
}
