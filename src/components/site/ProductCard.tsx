import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { formatINR, useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="group rounded-2xl bg-white border border-mango-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block aspect-[4/3] overflow-hidden bg-mango-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </Link>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-1 text-xs text-mango-700">
          <Star className="h-3 w-3 fill-mango-500 text-mango-500" />
          <span className="font-semibold">{product.rating}</span>
          <span className="text-muted-foreground">({product.reviews})</span>
        </div>
        <Link to="/products/$slug" params={{ slug: product.slug }}>
          <h3 className="font-semibold text-foreground hover:text-mango-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground line-clamp-1">{product.tagline}</p>
        <div className="flex items-end justify-between pt-2">
          <div>
            <div className="text-lg font-bold text-mango-700">{formatINR(product.price)}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{product.pricePerKg}</div>
          </div>
          <button
            onClick={() => add(product)}
            className="px-3 py-2 rounded-full bg-gradient-to-r from-mango-500 to-mango-600 text-white text-xs font-semibold hover:from-mango-600 hover:to-mango-700 transition-all shadow-md shadow-mango-500/30"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
