import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import { BRAND } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-mango-100 bg-gradient-to-b from-cream to-mango-50/60 pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Mangobliz" className="h-12 w-auto mb-4" />
          <p className="text-ink/70 max-w-sm leading-relaxed">
            Premium hand-picked mangoes from our family orchards, delivered fresh across Bangalore.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Mail, href: `mailto:${BRAND.email}` },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-11 h-11 glass rounded-full flex items-center justify-center hover:bg-white text-ink/70 hover:text-mango-600 transition"
                aria-label="social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-semibold mb-4">Explore</div>
          <ul className="space-y-2.5 text-ink/70 text-sm">
            <li><Link to="/" className="hover:text-mango-600">Home</Link></li>
            <li><Link to="/products" className="hover:text-mango-600">Products</Link></li>
            <li><Link to="/order" className="hover:text-mango-600">Order Now</Link></li>
            <li><Link to="/blog" className="hover:text-mango-600">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-mango-600">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-4">Contact</div>
          <ul className="space-y-2.5 text-ink/70 text-sm">
            <li className="flex items-start gap-2"><Phone size={14} className="mt-0.5 shrink-0" /> {BRAND.phone}</li>
            <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5 shrink-0" /> {BRAND.email}</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> {BRAND.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-mango-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row justify-between gap-1 text-xs text-ink/55">
          <div>© {new Date().getFullYear()} Mangobliz. All rights reserved.</div>
          <div>mangobliz.com</div>
        </div>
      </div>
    </footer>
  );
}
