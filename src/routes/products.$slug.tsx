import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Star, Truck, ShieldCheck, Leaf } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { formatINR, useCart } from "@/lib/cart-context";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product not found — MangoBliz" }] };
    return {
      meta: [
        { title: `${p.name} — MangoBliz` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — MangoBliz` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold">Product not found</h1>
      <Link to="/shop" className="text-mango-600 underline mt-4 inline-block">Back to shop</Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 py-10">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-mango-600">Home</Link> /{" "}
        <Link to="/shop" className="hover:text-mango-600">Shop</Link> /{" "}
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="aspect-square rounded-3xl overflow-hidden bg-mango-50 shadow-xl">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-mango-600 font-semibold">{product.categoryName}</p>
          <h1 className="text-4xl font-bold mt-2 text-foreground">{product.name}</h1>
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-mango-500 text-mango-500" : "text-mango-200"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} · {product.reviews} reviews</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-4xl font-bold text-mango-700">{formatINR(product.price)}</span>
            <span className="text-sm text-muted-foreground">{product.pricePerKg}</span>
          </div>

          <p className="mt-6 text-foreground/80 leading-relaxed">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div><dt className="text-muted-foreground">Origin</dt><dd className="font-medium">{product.origin}</dd></div>
            <div><dt className="text-muted-foreground">Season</dt><dd className="font-medium">{product.season}</dd></div>
          </dl>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-1 bg-mango-50 rounded-full p-1">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-mango-100"><Minus className="h-4 w-4" /></button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-mango-100"><Plus className="h-4 w-4" /></button>
            </div>
            <button
              onClick={() => add(product, qty)}
              className="flex-1 h-12 rounded-full bg-gradient-to-r from-mango-500 to-mango-600 text-white font-semibold hover:from-mango-600 hover:to-mango-700 transition-all shadow-lg shadow-mango-500/30"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
            <Feature icon={<Truck className="h-4 w-4" />} text="24h shipping" />
            <Feature icon={<ShieldCheck className="h-4 w-4" />} text="Quality guarantee" />
            <Feature icon={<Leaf className="h-4 w-4" />} text="Naturally ripened" />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-mango-50 text-mango-700">
      {icon}
      <span className="font-medium">{text}</span>
    </div>
  );
}
