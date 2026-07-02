import { motion } from "framer-motion";
import { Phone, MessageCircle, Building2, UtensilsCrossed, Gift, Store, Truck, PartyPopper } from "lucide-react";
import Section from "./Section";
import { BRAND } from "../config";

const uses = [
  { Icon: UtensilsCrossed, label: "Hotels & Restaurants" },
  { Icon: PartyPopper, label: "Events & Weddings" },
  { Icon: Gift, label: "Corporate Gifting" },
  { Icon: Store, label: "Retail & Fruit Shops" },
  { Icon: Building2, label: "Supermarkets" },
  { Icon: Truck, label: "Distributors" },
];

export default function BulkOrders() {
  return (
    <Section
      id="bulk"
      eyebrow="For businesses"
      title={
        <>
          Bulk Orders — <span className="text-gradient-mango">50 to 500 KG</span>
        </>
      }
      subtitle="Special pricing, priority dispatch and dedicated support for large orders."
      className="bg-gradient-to-b from-mango-50/60 to-cream"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[2rem] overflow-hidden gradient-mango p-1 shadow-mango"
      >
        <div className="rounded-[calc(2rem-4px)] bg-white/95 backdrop-blur p-6 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-mango-700 bg-mango-100 px-3 py-1 rounded-full mb-4">
                Bulk pricing available on request
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                Perfect for hotels, events & <span className="text-gradient-mango">retail chains</span>.
              </h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                Order anywhere from 50 KG up to 500 KG per shipment. Talk to our team for volume
                pricing, custom packaging and delivery schedules.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {uses.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-ink/80">
                    <span className="w-8 h-8 rounded-lg bg-mango-100 text-mango-700 flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-mango-50 to-mango-100/60 border border-mango-200/60 p-6 sm:p-7">
              <div className="text-xs uppercase tracking-widest text-mango-700 font-semibold">
                Call or WhatsApp
              </div>
              <div className="mt-1 font-display text-3xl sm:text-4xl font-bold text-ink">
                {BRAND.phone}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="h-14 flex-1 rounded-2xl gradient-mango text-white font-semibold flex items-center justify-center gap-2 shadow-mango active:scale-95 hover:scale-[1.02] transition"
                >
                  <Phone size={18} /> Call Now
                </a>
                <a
                  href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
                    "Hi Mangobliz, I'd like a bulk order quote.",
                  )}`}
                  target="_blank"
                  rel="noopener"
                  className="h-14 flex-1 rounded-2xl bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 shadow-mango active:scale-95 hover:scale-[1.02] transition"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
              <p className="mt-4 text-xs text-ink/60 leading-relaxed">
                Response within 2 business hours. Bulk deliveries available across Bangalore.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
