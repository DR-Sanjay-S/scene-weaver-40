import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, CheckCircle2, XCircle } from "lucide-react";
import type { Product } from "../data/products";

export default function ProductCard({ p, index = 0 }: { p: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
      className="glass rounded-3xl overflow-hidden group hover:shadow-mango transition-shadow flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {p.tag && (
          <span className="absolute top-3 left-3 gradient-mango text-white text-xs font-semibold px-3 py-1 rounded-full shadow-mango">
            {p.tag}
          </span>
        )}
        <span
          className={`absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1 ${
            p.available
              ? "bg-emerald-500/90 text-white"
              : "bg-rose-500/90 text-white"
          }`}
        >
          {p.available ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
          {p.available ? "In Season" : "Sold Out"}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-1 text-mango-600 text-xs mb-2">
          <Star size={13} fill="currentColor" /> 4.9 · Premium Grade
        </div>
        <h3 className="font-display text-xl font-semibold leading-tight">{p.name}</h3>
        <p className="text-sm text-ink/65 mt-1.5 leading-relaxed flex-1">{p.description}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-ink/55">Price / KG</div>
            <div className="font-display text-2xl font-bold text-gradient-mango">
              ₹{p.pricePerKg.toLocaleString("en-IN")}
            </div>
          </div>
          <Link
            to={`/order?product=${p.id}`}
            className="gradient-mango text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-mango active:scale-95 hover:scale-105 transition-transform whitespace-nowrap"
          >
            Order Now
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
