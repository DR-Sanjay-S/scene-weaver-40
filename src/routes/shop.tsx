import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products, type MangoCategory } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Premium Mangoes — MangoBliz" },
      { name: "description", content: "Browse our full collection of premium Indian mangoes. Alphonso, Kesar, Banganapalli, Dasheri, Himsagar." },
      { property: "og:title", content: "Shop Premium Mangoes — MangoBliz" },
      { property: "og:description", content: "Browse our full collection of premium Indian mangoes." },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<"all" | MangoCategory>("all");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");

  const filtered = useMemo(() => {
    let list = products.filter((p) => (cat === "all" ? true : p.category === cat));
    if (q.trim()) {
      const t = q.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(t) || p.tagline.toLowerCase().includes(t));
    }
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, cat, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-mango-700 to-mango-500 bg-clip-text text-transparent">
          Shop Mangoes
        </h1>
        <p className="mt-2 text-muted-foreground">Hand-picked, sun-ripened, shipped within 24 hours.</p>
      </header>

      <div className="flex flex-col gap-4 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search mangoes..."
            className="w-full h-12 pl-11 pr-4 rounded-full border border-mango-200 bg-white focus:outline-none focus:ring-2 focus:ring-mango-400"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2 justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterChip active={cat === "all"} onClick={() => setCat("all")}>All</FilterChip>
            {categories.map((c) => (
              <FilterChip key={c.slug} active={cat === c.slug} onClick={() => setCat(c.slug)}>
                {c.name.replace(" Mango", "")}
              </FilterChip>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="h-10 px-4 rounded-full border border-mango-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-mango-400"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          No mangoes match your search. <Link to="/shop" className="text-mango-600 underline">Clear filters</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-gradient-to-r from-mango-500 to-mango-600 text-white shadow-md shadow-mango-500/30"
          : "bg-white border border-mango-200 text-foreground/70 hover:border-mango-400"
      }`}
    >
      {children}
    </button>
  );
}
