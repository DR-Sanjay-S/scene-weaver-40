import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Section from "./Section";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`MangoBliz inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@mangobliz.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={
        <>
          Questions? <span className="text-gradient-mango">Say hello.</span>
        </>
      }
      subtitle="Bulk orders, gifting, or just want to chat about mangoes? We'd love to hear from you."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "hello@mangobliz.com" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210" },
            { icon: MapPin, label: "Orchards", value: "Ratnagiri, Maharashtra, India" },
          ].map((c) => (
            <div key={c.label} className="glass rounded-2xl p-5 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl gradient-mango text-white flex items-center justify-center shrink-0">
                <c.icon size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink/60">{c.label}</div>
                <div className="font-semibold mt-0.5">{c.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={submit}
          className="lg:col-span-3 glass rounded-3xl p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/70 border border-white/80 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mango-500"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/70 border border-white/80 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mango-500"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="How can we help?"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-white/70 border border-white/80 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-mango-500"
          />
          <button
            type="submit"
            className="gradient-mango text-white font-semibold px-6 py-3.5 rounded-full shadow-mango hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Send message <Send size={16} />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
