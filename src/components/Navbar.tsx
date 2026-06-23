import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="text-2xl">🥭</span>
          <span className="text-gradient-mango">MangoBliz</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-mango-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#products"
            className="gradient-mango text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-mango hover:scale-105 transition-transform"
          >
            Shop Now
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-mango-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/40">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="gradient-mango text-white text-center font-semibold px-5 py-3 rounded-full"
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
