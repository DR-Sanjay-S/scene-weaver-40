import { motion } from "framer-motion";
import { Sprout, Hand, Snowflake, ShieldCheck } from "lucide-react";
import Section from "./Section";

const features = [
  { icon: Sprout, title: "Farm-fresh always", desc: "Picked at peak ripeness from our own orchards. Never artificially ripened." },
  { icon: Hand, title: "Hand-selected", desc: "Every mango inspected by our family team. Bruised fruit never ships." },
  { icon: Snowflake, title: "Cold-chain delivery", desc: "Temperature-controlled all the way to your door. Sweetness sealed in." },
  { icon: ShieldCheck, title: "100% satisfaction", desc: "Not blown away? We replace the box or refund. No questions, no nonsense." },
];

export default function WhyChooseUs() {
  return (
    <Section
      id="why"
      eyebrow="Why MangoBliz"
      title={
        <>
          The mango world has middlemen.<br />
          <span className="text-gradient-mango">We don't.</span>
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass rounded-3xl p-7 hover:shadow-mango transition-shadow"
          >
            <div className="w-12 h-12 rounded-2xl gradient-mango shadow-mango flex items-center justify-center text-white mb-5">
              <f.icon size={22} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-ink/65 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
