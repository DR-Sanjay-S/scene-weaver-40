import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-b from-mango-900 to-black text-mango-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥭</span>
            <span className="text-xl font-bold">MangoBliz</span>
          </div>
          <p className="text-sm text-mango-200/80 max-w-xs">
            Premium hand-picked mangoes from India's finest orchards, delivered fresh to your door.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-mango-500 transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-mango-500 transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-mango-500 transition-colors"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-mango-100">Shop</h4>
          <ul className="space-y-2 text-sm text-mango-200/80">
            <li><Link to="/shop" className="hover:text-mango-300">All Mangoes</Link></li>
            <li><Link to="/categories" className="hover:text-mango-300">Categories</Link></li>
            <li><Link to="/cart" className="hover:text-mango-300">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-mango-100">Company</h4>
          <ul className="space-y-2 text-sm text-mango-200/80">
            <li><Link to="/about" className="hover:text-mango-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-mango-300">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-mango-300">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-mango-100">Legal</h4>
          <ul className="space-y-2 text-sm text-mango-200/80">
            <li><Link to="/privacy" className="hover:text-mango-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-mango-300">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 text-xs text-mango-200/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} MangoBliz. All rights reserved.</p>
          <p>Made with 🥭 in India</p>
        </div>
      </div>
    </footer>
  );
}
