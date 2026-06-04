import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, getByCategory } from "@/lib/products";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Mango Categories — MangoBliz" },
      { name: "description", content: "Explore the five king varieties: Alphonso, Kesar, Banganapalli, Dasheri, Himsagar." },
      { property: "og:title", content: "Mango Categories — MangoBliz" },
      { property: "og:description", content: "Explore the five king varieties of Indian mangoes." },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-mango-700 to-mango-500 bg-clip-text text-transparent">
          Mango Varieties
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Every region of India produces its own legendary mango. Meet the five kings.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const count = getByCategory(c.slug).length;
          return (
            <Link
              key={c.slug}
              to="/shop"
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg hover:shadow-2xl transition-all"
            >
              <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-mango-500/90 text-xs font-semibold mb-3">
                  {count} {count === 1 ? "product" : "products"}
                </span>
                <h2 className="text-2xl font-bold">{c.name}</h2>
                <p className="text-sm text-white/85 mt-1">{c.blurb}</p>
                <span className="inline-flex items-center gap-1 text-mango-300 text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                  Shop {c.name.split(" ")[0]} →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
