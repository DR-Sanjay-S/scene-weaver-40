import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import heroMango from "../assets/hero-mango.png";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-mango-300/40 via-mango-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-leaf/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold text-mango-700 mb-6">
            <Leaf size={14} /> Mango season is here
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Taste the <span className="text-gradient-mango">sunshine</span>,<br />
            box by box.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
            Hand-picked Alphonso, Kesar, Dasheri and more — ripened on the tree, cold-chained to
            your doorstep within 48 hours. No middlemen. No regrets.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group gradient-mango text-white font-semibold px-7 py-3.5 rounded-full shadow-mango flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Shop Mangoes
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="glass px-7 py-3.5 rounded-full font-semibold text-ink hover:bg-white/80 transition"
            >
              Our Story
            </a>
          </div>

          <div className="mt-12 flex gap-8">
            {[
              { n: "50K+", l: "Happy boxes" },
              { n: "12", l: "Varieties" },
              { n: "4.9★", l: "Avg rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient-mango">{s.n}</div>
                <div className="text-xs text-ink/60 uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 m-auto w-72 h-72 sm:w-96 sm:h-96 rounded-full gradient-mango blur-3xl opacity-50" />
          <img
            src={heroMango}
            alt="Ripe Alphonso mango"
            width={520}
            height={520}
            className="relative w-72 sm:w-96 lg:w-[520px] drop-shadow-2xl animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
}
