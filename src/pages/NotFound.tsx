import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-5 text-center">
      <div>
        <div className="font-display text-6xl sm:text-7xl font-bold text-gradient-mango">404</div>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold mt-3">Page not found</h1>
        <p className="text-ink/65 mt-2">The page you're looking for has ripened elsewhere.</p>
        <Link to="/" className="mt-6 inline-block gradient-mango text-white font-semibold px-6 py-3 rounded-full shadow-mango">
          Back to home
        </Link>
      </div>
    </section>
  );
}
