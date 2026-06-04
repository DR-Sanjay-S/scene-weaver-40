import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Award, Truck, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MangoBliz — Our Story" },
      { name: "description", content: "MangoBliz partners directly with India's finest mango growers to deliver naturally ripened fruit from orchard to door." },
      { property: "og:title", content: "About MangoBliz — Our Story" },
      { property: "og:description", content: "Farm-direct premium mangoes, ripened the traditional way." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-8 py-14">
      <header className="text-center mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-mango-600 font-semibold">Our Story</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold bg-gradient-to-r from-mango-700 to-mango-500 bg-clip-text text-transparent">
          From Orchard to Door
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          MangoBliz was born from a simple frustration — supermarket mangoes don't taste like the ones from our grandparents' villages.
        </p>
      </header>

      <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-14">
        <img src="https://images.unsplash.com/photo-1605027990121-cbae9e0642db?auto=format&fit=crop&w=1600&q=80" alt="Mango orchard" loading="lazy" className="h-full w-full object-cover" />
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          We work directly with third-generation orchardists in Ratnagiri, Junagadh, Kurnool, Malihabad and Murshidabad — the legendary
          terroirs of Indian mangoes. No middlemen, no cold storage, no artificial ripening.
        </p>
        <p>
          Every fruit is hand-picked at the right moment, ripened naturally in hay-lined wooden crates, and dispatched within 24 hours.
          Our packaging is designed to absorb shock and breathe — the way mangoes have always travelled best.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Leaf, title: "Naturally Ripened", text: "No chemicals, no carbide. Only sun and time." },
          { icon: Award, title: "GI-Tagged Origins", text: "Sourced from geographically certified regions." },
          { icon: Truck, title: "24h Dispatch", text: "From orchard to your door within a day." },
          { icon: Heart, title: "Farmer-First", text: "Fair prices paid directly to growers." },
        ].map((v) => (
          <div key={v.title} className="rounded-2xl p-6 bg-white border border-mango-100 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-mango-100 text-mango-700 flex items-center justify-center mb-3">
              <v.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{v.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
