import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-mango-100 bg-gradient-to-b from-cream to-mango-50/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-2xl font-bold mb-3">
            <span className="text-3xl">🥭</span>
            <span className="text-gradient-mango">MangoBliz</span>
          </div>
          <p className="text-ink/65 max-w-sm leading-relaxed">
            Farm-fresh premium Indian mangoes, hand-picked from family orchards and cold-chained to
            your doorstep.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white text-ink/70 hover:text-mango-600 transition"
                aria-label="social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-semibold mb-4">Explore</div>
          <ul className="space-y-2 text-ink/65 text-sm">
            <li><a href="#about" className="hover:text-mango-600">About</a></li>
            <li><a href="#products" className="hover:text-mango-600">Products</a></li>
            <li><a href="#why" className="hover:text-mango-600">Why us</a></li>
            <li><a href="#testimonials" className="hover:text-mango-600">Reviews</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-4">Contact</div>
          <ul className="space-y-2 text-ink/65 text-sm">
            <li>hello@mangobliz.com</li>
            <li>+91 98765 43210</li>
            <li>Ratnagiri, MH</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-mango-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-ink/55">
          <div>© {new Date().getFullYear()} MangoBliz. Crafted with 🥭 in India.</div>
          <div>mangobliz.com</div>
        </div>
      </div>
    </footer>
  );
}
