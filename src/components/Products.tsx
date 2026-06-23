import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Section from "./Section";
import alphonso from "../assets/alphonso.jpg";
import kesar from "../assets/kesar.jpg";
import banganapalli from "../assets/banganapalli.jpg";
import dasheri from "../assets/dasheri.jpg";
import himsagar from "../assets/himsagar.jpg";
import sampler from "../assets/sampler.jpg";

const products = [
  { name: "Alphonso Premium", origin: "Ratnagiri, MH", price: 1499, rating: 4.9, img: alphonso, tag: "Bestseller" },
  { name: "Kesar Classic", origin: "Gir, GJ", price: 1199, rating: 4.8, img: kesar, tag: null },
  { name: "Banganapalli Gold", origin: "Andhra Pradesh", price: 999, rating: 4.7, img: banganapalli, tag: null },
  { name: "Dasheri Deluxe", origin: "Malihabad, UP", price: 899, rating: 4.7, img: dasheri, tag: null },
  { name: "Himsagar Bengal", origin: "Murshidabad, WB", price: 1099, rating: 4.8, img: himsagar, tag: "Limited" },
  { name: "Tasting Sampler", origin: "All varieties", price: 1799, rating: 5.0, img: sampler, tag: "Gift" },
];

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function Products() {
  return (
    <Section
      id="products"
      eyebrow="Shop the season"
      title={
        <>
          Pick your <span className="text-gradient-mango">favourite variety</span>.
        </>
      }
      subtitle="Six premium boxes, each cold-chained and delivered within 48 hours of picking."
      className="bg-gradient-to-b from-cream to-mango-50/40"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass rounded-3xl overflow-hidden group hover:shadow-mango transition-shadow"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {p.tag && (
                <span className="absolute top-3 left-3 gradient-mango text-white text-xs font-semibold px-3 py-1 rounded-full shadow-mango">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1 text-mango-600 text-sm mb-2">
                <Star size={14} fill="currentColor" /> {p.rating}
              </div>
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-ink/60 mt-1">{p.origin}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-display text-2xl font-bold text-gradient-mango">{inr(p.price)}</div>
                <button className="gradient-mango text-white text-sm font-semibold px-5 py-2 rounded-full shadow-mango hover:scale-105 transition-transform">
                  Add
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
