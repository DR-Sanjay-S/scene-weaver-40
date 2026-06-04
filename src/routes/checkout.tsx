import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock } from "lucide-react";
import { formatINR, useCart } from "@/lib/cart-context";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — MangoBliz" },
      { name: "description", content: "Complete your MangoBliz order." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [placing, setPlacing] = useState(false);
  const shipping = subtotal > 0 && subtotal < 999 ? 99 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Nothing to checkout</h1>
        <p className="mt-2 text-muted-foreground">Your cart is empty.</p>
      </div>
    );
  }

  const onPlace = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlacing(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "Customer");
    setTimeout(() => {
      clear();
      navigate({ to: "/order-success", search: { name } as any });
    }, 900);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Checkout</h1>
      <form onSubmit={onPlace} className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Section title="Contact">
            <Grid>
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
            </Grid>
          </Section>

          <Section title="Shipping Address">
            <Grid>
              <Field label="Address" name="address" required full />
              <Field label="City" name="city" required />
              <Field label="State" name="state" required />
              <Field label="Pincode" name="pincode" required />
              <Field label="Landmark (optional)" name="landmark" full />
            </Grid>
          </Section>

          <Section title="Payment">
            <div className="space-y-3">
              {["Cash on Delivery", "UPI / Net Banking", "Credit / Debit Card"].map((m, i) => (
                <label key={m} className="flex items-center gap-3 p-4 rounded-xl border border-mango-100 cursor-pointer hover:border-mango-400 transition-colors">
                  <input type="radio" name="payment" defaultChecked={i === 0} className="accent-mango-600" />
                  <span className="font-medium">{m}</span>
                </label>
              ))}
            </div>
          </Section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl bg-white border border-mango-100 shadow-sm p-6 space-y-4">
            <h2 className="font-bold text-lg">Your Order</h2>
            <ul className="space-y-2 text-sm max-h-60 overflow-auto">
              {items.map((i) => (
                <li key={i.slug} className="flex justify-between gap-2">
                  <span className="text-foreground/80 line-clamp-1">{i.name} × {i.qty}</span>
                  <span className="font-medium whitespace-nowrap">{formatINR(i.price * i.qty)}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-mango-100 pt-3 space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatINR(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "FREE" : formatINR(shipping)}</span></div>
              <div className="flex justify-between font-bold text-base pt-2"><span>Total</span><span className="text-mango-700">{formatINR(total)}</span></div>
            </div>
            <button disabled={placing} className="w-full h-12 rounded-full bg-gradient-to-r from-mango-500 to-mango-600 text-white font-semibold shadow-lg shadow-mango-500/30 hover:from-mango-600 hover:to-mango-700 disabled:opacity-60 inline-flex items-center justify-center gap-2">
              <Lock className="h-4 w-4" />
              {placing ? "Placing order…" : `Place Order · ${formatINR(total)}`}
            </button>
            <p className="text-xs text-muted-foreground text-center">By placing this order you agree to our Terms.</p>
          </div>
        </aside>
      </form>
      <style>{`.cinput{width:100%;height:44px;padding:0 16px;border-radius:12px;border:1px solid color-mix(in oklab,var(--color-mango-300) 50%,white);background:white;outline:none;transition:all .2s}.cinput:focus{border-color:var(--color-mango-500);box-shadow:0 0 0 3px color-mix(in oklab,var(--color-mango-300) 40%,transparent)}`}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl bg-white border border-mango-100 shadow-sm p-6">
      <h2 className="font-bold text-lg mb-4">{title}</h2>
      {children}
    </section>
  );
}
function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-4">{children}</div>;
}
function Field({ label, name, type = "text", required, full }: { label: string; name: string; type?: string; required?: boolean; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      <input name={name} type={type} required={required} className="cinput" />
    </label>
  );
}
