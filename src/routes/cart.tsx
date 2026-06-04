import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { formatINR, useCart } from "@/lib/cart-context";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — MangoBliz" },
      { name: "description", content: "Review your mango selection before checkout." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, setQty, remove } = useCart();
  const shipping = subtotal > 0 && subtotal < 999 ? 99 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mx-auto h-20 w-20 rounded-full bg-mango-100 text-mango-600 flex items-center justify-center mb-6">
          <ShoppingBag className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Add some mangoes — your tastebuds will thank you.</p>
        <Link to="/shop" className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-mango-500 to-mango-600 text-white font-semibold shadow-lg shadow-mango-500/30 hover:from-mango-600 hover:to-mango-700">
          Browse Mangoes
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart ({items.length})</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-3">
          {items.map((i) => (
            <div key={i.slug} className="flex gap-4 p-4 rounded-2xl bg-white border border-mango-100 shadow-sm">
              <img src={i.image} alt={i.name} className="h-24 w-24 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <Link to="/products/$slug" params={{ slug: i.slug }} className="font-semibold hover:text-mango-600 line-clamp-1">{i.name}</Link>
                <div className="text-mango-700 font-bold mt-1">{formatINR(i.price)}</div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 bg-mango-50 rounded-full p-1">
                    <button onClick={() => setQty(i.slug, i.qty - 1)} className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-mango-100"><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => setQty(i.slug, i.qty + 1)} className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-mango-100"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => remove(i.slug)} className="text-muted-foreground hover:text-destructive p-2" aria-label="Remove">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl bg-white border border-mango-100 shadow-sm p-6 space-y-4">
            <h2 className="font-bold text-lg">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <Row label="Subtotal" value={formatINR(subtotal)} />
              <Row label="Shipping" value={shipping === 0 ? "FREE" : formatINR(shipping)} />
              {subtotal > 0 && subtotal < 999 && (
                <p className="text-xs text-mango-700 bg-mango-50 rounded-lg p-2">
                  Add {formatINR(999 - subtotal)} more for free shipping!
                </p>
              )}
            </div>
            <div className="border-t border-mango-100 pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-mango-700">{formatINR(total)}</span>
            </div>
            <Link to="/checkout" className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-mango-500 to-mango-600 text-white font-semibold shadow-lg shadow-mango-500/30 hover:from-mango-600 hover:to-mango-700">
              Checkout
            </Link>
            <Link to="/shop" className="block text-center text-sm text-mango-700 hover:underline">Continue shopping</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
