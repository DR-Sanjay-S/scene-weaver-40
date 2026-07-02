import Section from "./Section";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";

export default function Products({ preview = false }: { preview?: boolean }) {
  const list = preview ? products.slice(0, 3) : products;
  return (
    <Section
      id="products"
      eyebrow="Our varieties"
      title={
        <>
          Sunshine, sorted by <span className="text-gradient-mango">variety</span>.
        </>
      }
      subtitle="Every box is hand-picked, weighed and packed the same morning it ships."
    >
      <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <ProductCard key={p.id} p={p} index={i} />
        ))}
      </div>
      {preview && (
        <div className="mt-10 flex justify-center">
          <Link
            to="/products"
            className="glass px-6 py-3 rounded-full font-semibold text-ink inline-flex items-center gap-2 hover:bg-white transition"
          >
            View all varieties <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </Section>
  );
}
