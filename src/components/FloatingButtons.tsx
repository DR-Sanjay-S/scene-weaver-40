import { Phone, MessageCircle, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BRAND } from "../config";

export default function FloatingButtons() {
  const { pathname } = useLocation();
  const hideOrder = pathname === "/order";

  return (
    <>
      {/* Desktop / tablet — right side floating stack */}
      <div className="hidden sm:flex fixed right-5 bottom-5 z-40 flex-col gap-3">
        <a
          href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(
            "Hi Mangobliz! I'd like to place an order.",
          )}`}
          target="_blank"
          rel="noopener"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-mango flex items-center justify-center hover:scale-110 transition-transform"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href={`tel:${BRAND.phoneRaw}`}
          aria-label="Call Mangobliz"
          className="w-14 h-14 rounded-full gradient-mango text-white shadow-mango flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* Mobile — bottom action bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur-xl border-t border-mango-100 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] flex gap-2 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]">
        <a
          href={`tel:${BRAND.phoneRaw}`}
          className="flex-1 h-12 rounded-2xl bg-mango-50 text-mango-700 font-semibold flex items-center justify-center gap-2 active:scale-95 transition"
          aria-label="Call"
        >
          <Phone size={18} /> Call
        </a>
        <a
          href={`https://wa.me/${BRAND.whatsappRaw}`}
          target="_blank"
          rel="noopener"
          className="flex-1 h-12 rounded-2xl bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 active:scale-95 transition"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
        {!hideOrder && (
          <Link
            to="/order"
            className="flex-1 h-12 rounded-2xl gradient-mango text-white font-semibold flex items-center justify-center gap-2 active:scale-95 transition shadow-mango"
          >
            <ShoppingBag size={18} /> Order
          </Link>
        )}
      </div>
    </>
  );
}
