import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Section from "./Section";

const reviews = [
  {
    name: "Priya Mehta",
    city: "Mumbai",
    text: "The Alphonso box from MangoBliz tasted like the mangoes my grandmother used to bring home. I cried a little. 10/10.",
  },
  {
    name: "Arjun Kapoor",
    city: "Bangalore",
    text: "Ordered the sampler for my parents' anniversary. They've ordered it again twice this month. Best gift I've ever sent.",
  },
  {
    name: "Sneha Roy",
    city: "Kolkata",
    text: "Finally Himsagar that actually tastes like Himsagar. Cold-chain is no joke — arrived perfectly chilled and sweet.",
  },
];

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="What people say"
      title={
        <>
          Loved by <span className="text-gradient-mango">mango people</span>, everywhere.
        </>
      }
      className="bg-gradient-to-b from-mango-50/40 to-cream"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-3xl p-7 hover:shadow-mango transition-shadow"
          >
            <div className="flex gap-1 text-mango-500 mb-4">
              {[...Array(5)].map((_, k) => (
                <Star key={k} size={16} fill="currentColor" />
              ))}
            </div>
            <blockquote className="text-ink/80 leading-relaxed font-display text-lg">
              "{r.text}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full gradient-mango text-white font-semibold flex items-center justify-center">
                {r.name[0]}
              </div>
              <div>
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-ink/60">{r.city}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
