import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/order-success")({
  validateSearch: (s: Record<string, unknown>) => ({ name: typeof s.name === "string" ? s.name : "" }),
  head: () => ({
    meta: [
      { title: "Order Confirmed — MangoBliz" },
      { name: "description", content: "Your MangoBliz order has been placed successfully." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  const { name } = Route.useSearch();
  const orderId = "MB-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <div className="mx-auto h-24 w-24 rounded-full bg-leaf/15 text-leaf flex items-center justify-center mb-6 animate-scale-in">
        <CheckCircle2 className="h-14 w-14" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold">Order Confirmed{name ? `, ${name}!` : "!"}</h1>
      <p className="mt-3 text-muted-foreground">
        Your mangoes are being hand-picked at the orchard. You'll get tracking details over email shortly.
      </p>
      <div className="mt-6 inline-block px-5 py-2 rounded-full bg-mango-50 text-mango-700 text-sm font-semibold">
        Order ID: {orderId}
      </div>
      <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/shop" className="px-6 py-3 rounded-full bg-gradient-to-r from-mango-500 to-mango-600 text-white font-semibold shadow-lg shadow-mango-500/30 hover:from-mango-600 hover:to-mango-700">
          Continue Shopping
        </Link>
        <Link to="/" className="px-6 py-3 rounded-full border border-mango-300 text-mango-700 font-semibold hover:bg-mango-50">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
