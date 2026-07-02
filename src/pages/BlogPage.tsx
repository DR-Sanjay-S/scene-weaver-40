import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Section from "../components/Section";
import { blogPosts, type BlogPost } from "../data/blog";
import { Calendar, Clock } from "lucide-react";

const categories = ["All", "Mango Benefits", "Recipes", "Storage Tips", "Season Updates", "Health", "News"] as const;

export default function BlogPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo<BlogPost[]>(
    () => (cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <Section
      eyebrow="Mangobliz Journal"
      title={
        <>
          Stories, recipes & <span className="text-gradient-mango">mango wisdom</span>.
        </>
      }
      subtitle="Fresh reads from the orchard — updated every season."
    >
      <div className="flex gap-2 overflow-x-auto pb-3 -mx-2 px-2 mb-8 scrollbar-hide">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition ${
              cat === c
                ? "gradient-mango text-white shadow-mango"
                : "glass text-ink/75 hover:text-mango-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
            className="glass rounded-3xl overflow-hidden group hover:shadow-mango transition-shadow flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={post.cover}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="self-start text-[11px] font-semibold uppercase tracking-wider text-mango-700 bg-mango-100 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-ink/65 mt-2 leading-relaxed flex-1">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-ink/55">
                <span className="inline-flex items-center gap-1.5"><Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </span>
                <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-ink/60 py-10">No posts in this category yet.</div>
      )}
    </Section>
  );
}
