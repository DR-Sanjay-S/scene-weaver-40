export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category:
    | "Mango Benefits"
    | "Recipes"
    | "Storage Tips"
    | "Season Updates"
    | "Health"
    | "News";
  date: string;
  readTime: string;
  cover: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "health-benefits-of-mangoes",
    title: "7 surprising health benefits of eating mangoes daily",
    excerpt: "From gut health to glowing skin — here's why nutritionists call the mango the 'king of fruits'.",
    category: "Health",
    date: "2026-05-12",
    readTime: "4 min",
    cover: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "alphonso-vs-kesar",
    title: "Alphonso vs Kesar: which mango is right for you?",
    excerpt: "A side-by-side tasting guide covering flavour, texture, price and best uses.",
    category: "Mango Benefits",
    date: "2026-05-04",
    readTime: "5 min",
    cover: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "aamras-recipe",
    title: "The perfect homemade aamras in 10 minutes",
    excerpt: "Grandma's foolproof recipe for silky, saffron-kissed aamras with just three ingredients.",
    category: "Recipes",
    date: "2026-04-27",
    readTime: "3 min",
    cover: "https://images.unsplash.com/photo-1605027990121-cbae9b3a9ea9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "how-to-ripen-store-mangoes",
    title: "How to ripen & store mangoes the right way",
    excerpt: "Simple tricks to get your box ripening evenly and keep them fresh for longer.",
    category: "Storage Tips",
    date: "2026-04-18",
    readTime: "4 min",
    cover: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2026-mango-season",
    title: "Mango season 2026: what to expect this year",
    excerpt: "Early harvests, weather updates and the varieties peaking in Bangalore markets.",
    category: "Season Updates",
    date: "2026-04-02",
    readTime: "3 min",
    cover: "https://images.unsplash.com/photo-1519096845289-95806ee03a1a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mangobliz-launches-bangalore",
    title: "Mangobliz now delivers across Bangalore",
    excerpt: "Same-day dispatch across BTM, Whitefield, HSR, Indiranagar & more. Here's how it works.",
    category: "News",
    date: "2026-03-20",
    readTime: "2 min",
    cover: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80",
  },
];
