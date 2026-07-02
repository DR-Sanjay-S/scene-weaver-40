import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, MapPin } from "lucide-react";
import heroMango from "../assets/hero-mango.png";

export default function Hero() {
  return (
    <section id="top" className="relative pt-6 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-mango-300/40 via-mango-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-leaf/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold text-mango-700 mb-5">
            <Leaf size={14} /> Mango season is here
          </span>
          <h1 className="font-display text-[2.25rem] leading-[1.08] sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Taste the <span className="text-gradient-mango">sunshine</span>,<br className="hidden sm:block" />
            box by box.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink/70 max-w-xl leading-relaxed mx-auto lg:mx-0">
            Hand-picked organic Alphonso, Kesar, Dasheri and more — ripened on the tree,
            cold-chained to your doorstep across Bangalore.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm text-ink/60">
            <MapPin size={14} className="text-mango-600" />
            Currently delivering only within Bangalore
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <Link
              to="/order"
              className="group gradient-mango text-white font-semibold px-7 py-4 rounded-full shadow-mango flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform"
            >
              Order Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="glass px-7 py-4 rounded-full font-semibold text-ink hover:bg-white/80 transition text-center"
            >
              Browse Varieties
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
            {[
              { n: "50K+", l: "Boxes shipped" },
              { n: "12", l: "Varieties" },
              { n: "4.9★", l: "Avg rating" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-mango">{s.n}</div>
                <div className="text-[10px] sm:text-xs text-ink/60 uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="absolute inset-0 m-auto w-64 h-64 sm:w-96 sm:h-96 rounded-full gradient-mango blur-3xl opacity-50" />
          <img
            src={heroMango}
            alt="Ripe organic mango"
            width={520}
            height={520}
            className="relative w-56 sm:w-80 lg:w-[520px] drop-shadow-2xl animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
}
