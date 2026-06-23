import { motion } from "framer-motion";
import Section from "./Section";
import alphonso from "../assets/alphonso.jpg";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Our story"
      title={
        <>
          Three generations of <span className="text-gradient-mango">mango love</span>.
        </>
      }
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 gradient-mango rounded-3xl opacity-20 blur-2xl" />
          <img
            src={alphonso}
            alt="MangoBliz orchards"
            loading="lazy"
            width={800}
            height={800}
            className="relative rounded-3xl shadow-mango w-full object-cover aspect-square"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-ink/75 text-lg leading-relaxed"
        >
          <p>
            MangoBliz began in 1978 when our grandfather planted his first Alphonso sapling on a
            dusty patch of land in Ratnagiri. Today, our family tends to over 8,000 trees across
            four orchards — and we still hand-pick every single fruit.
          </p>
          <p>
            We don't artificially ripen with chemicals. We don't ship before peak sweetness. And we
            don't sell what we wouldn't serve our own kids.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { n: "8,000+", l: "Trees" },
              { n: "4", l: "Orchards" },
              { n: "47 yrs", l: "Heritage" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5 text-center">
                <div className="font-display text-2xl font-bold text-gradient-mango">{s.n}</div>
                <div className="text-xs text-ink/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
