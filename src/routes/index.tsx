import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { FloatingMango } from "@/components/ui/floating-mango";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mangoria — Premium Mangoes Delivered Fresh" },
      { name: "description", content: "Hand-picked, sun-ripened mangoes shipped to your door. Taste the king of fruits." },
      { property: "og:title", content: "Mangoria — Premium Mangoes Delivered Fresh" },
      { property: "og:description", content: "Hand-picked, sun-ripened mangoes shipped to your door." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-black p-4 md:p-8">
      <Card className="h-[600px] md:h-[700px] w-full bg-black/[0.96] relative overflow-hidden border-neutral-800">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#ffb84d" />

        <div className="flex h-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-200 to-amber-500 leading-tight">
              Mangoria
            </h1>
            <p className="mt-2 text-amber-300/80 text-sm uppercase tracking-[0.3em]">
              The King of Fruits
            </p>
            <p className="mt-6 text-neutral-300 max-w-lg text-base md:text-lg leading-relaxed">
              Hand-picked from sun-drenched orchards and shipped within 24 hours.
              Sweet, juicy, and unforgettable — taste mangoes the way they were meant to be.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black hover:bg-amber-300 transition-colors">
                Shop Mangoes
              </button>
              <button className="rounded-full border border-amber-400/40 px-6 py-3 font-semibold text-amber-200 hover:bg-amber-400/10 transition-colors">
                Our Orchards
              </button>
            </div>
          </div>

          {/* Right content — floating mango */}
          <div className="flex-1 relative min-h-[300px]">
            <FloatingMango />
          </div>
        </div>
      </Card>
    </main>
  );
}
