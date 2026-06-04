import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MangoBliz" },
      { name: "description", content: "Get in touch with the MangoBliz team for bulk orders, partnerships, and support." },
      { property: "og:title", content: "Contact MangoBliz" },
      { property: "og:description", content: "Get in touch with MangoBliz." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll reply within 24 hours.");
    }, 800);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8 py-14">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-mango-700 to-mango-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="mt-3 text-muted-foreground">We typically reply within 24 hours.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <InfoRow icon={<Mail className="h-5 w-5" />} label="Email" value="hello@mangobliz.com" />
          <InfoRow icon={<Phone className="h-5 w-5" />} label="Phone" value="+91 99999 99999" />
          <InfoRow icon={<MapPin className="h-5 w-5" />} label="Office" value="Mumbai, Maharashtra, India" />
          <div className="rounded-2xl bg-gradient-to-br from-mango-500 to-mango-700 text-white p-6">
            <h3 className="font-bold text-lg">Bulk & corporate orders</h3>
            <p className="text-sm text-white/85 mt-1">Gifting 50+ boxes? We offer custom packaging and direct shipping.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 bg-white border border-mango-100 rounded-2xl p-6 shadow-sm">
          <Field label="Name"><input required className="input" placeholder="Your name" /></Field>
          <Field label="Email"><input required type="email" className="input" placeholder="you@email.com" /></Field>
          <Field label="Subject"><input required className="input" placeholder="How can we help?" /></Field>
          <Field label="Message"><textarea required rows={5} className="input resize-none" placeholder="Tell us a bit more..." /></Field>
          <button disabled={sending} className="w-full h-12 rounded-full bg-gradient-to-r from-mango-500 to-mango-600 text-white font-semibold hover:from-mango-600 hover:to-mango-700 transition-all shadow-lg shadow-mango-500/30 disabled:opacity-60">
            {sending ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>

      <style>{`.input{width:100%;height:44px;padding:0 16px;border-radius:12px;border:1px solid color-mix(in oklab,var(--color-mango-300) 50%,white);background:white;outline:none;transition:all .2s}.input:focus{border-color:var(--color-mango-500);box-shadow:0 0 0 3px color-mix(in oklab,var(--color-mango-300) 40%,transparent)}textarea.input{height:auto;padding:12px 16px}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-mango-100">
      <div className="h-10 w-10 rounded-full bg-mango-100 text-mango-700 flex items-center justify-center">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
}
