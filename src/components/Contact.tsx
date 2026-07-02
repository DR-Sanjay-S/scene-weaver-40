import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import { BRAND } from "../config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(BRAND.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `[Mangobliz Contact] ${form.subject} — ${form.name}`,
          ...form,
          source: "Contact Form",
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", subject: "General", message: "" });
    } catch (err) {
      setStatus("error");
      setError("Couldn't send right now. Please try WhatsApp or call us directly.");
    }
  };

  const contactCards = [
    { icon: Phone, label: "Phone", value: BRAND.phone, href: `tel:${BRAND.phoneRaw}` },
    { icon: MessageCircle, label: "WhatsApp", value: BRAND.phone, href: `https://wa.me/${BRAND.whatsappRaw}` },
    { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: Clock, label: "Business Hours", value: BRAND.hours },
    { icon: MapPin, label: "Location", value: BRAND.address },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Questions? <span className="text-gradient-mango">Say hello.</span></>}
      subtitle="Bulk orders, gifting, or just want to chat about mangoes? We'd love to hear from you."
    >
      <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-3.5"
        >
          {contactCards.map((c) => {
            const Tag = c.href ? "a" : "div";
            return (
              <Tag
                key={c.label}
                {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener" } : {})}
                className="glass rounded-2xl p-4 sm:p-5 flex items-start gap-4 hover:bg-white/85 transition"
              >
                <div className="w-11 h-11 rounded-xl gradient-mango text-white flex items-center justify-center shrink-0">
                  <c.icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-ink/60">{c.label}</div>
                  <div className="font-semibold mt-0.5 break-words">{c.value}</div>
                </div>
              </Tag>
            );
          })}
          <div className="glass rounded-2xl overflow-hidden aspect-[16/10]">
            <iframe
              title="Mangobliz location"
              src="https://www.google.com/maps?q=Bangalore&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={submit}
          className="lg:col-span-3 glass rounded-3xl p-5 sm:p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your name">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
            </Field>
            <Field label="Email">
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
            </Field>
            <Field label="Phone">
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
            </Field>
            <Field label="Subject">
              <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputCls}>
                <option>General</option>
                <option>Order Enquiry</option>
                <option>Bulk Order</option>
                <option>Feedback</option>
              </select>
            </Field>
          </div>
          <Field label="Message">
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} />
          </Field>

          {status === "sent" && (
            <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-sm">
              <CheckCircle2 size={16} /> Message sent! We'll be in touch soon.
            </div>
          )}
          {status === "error" && (
            <div className="text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto gradient-mango text-white font-semibold px-6 py-3.5 rounded-full shadow-mango hover:scale-[1.02] active:scale-95 disabled:opacity-60 transition inline-flex items-center justify-center gap-2"
          >
            {status === "sending" ? "Sending…" : (<>Send message <Send size={16} /></>)}
          </button>
        </motion.form>
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
