import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/order", label: "Order Now" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Mangobliz" className="h-9 sm:h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-mango-600" : "text-ink/80 hover:text-mango-600"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/order"
            className="gradient-mango text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-mango hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <ShoppingBag size={16} /> Order Now
          </Link>
        </nav>

        <button
          className="lg:hidden p-2.5 -mr-1 rounded-xl hover:bg-mango-100 active:scale-95 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } glass border-t border-white/40`}
      >
        <div className="px-5 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 px-4 rounded-xl text-base font-medium transition ${
                  isActive
                    ? "bg-white/80 text-mango-700"
                    : "text-ink/85 hover:bg-white/60"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/order"
            onClick={() => setOpen(false)}
            className="mt-2 gradient-mango text-white text-center font-semibold px-5 py-3.5 rounded-full shadow-mango"
          >
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
}
