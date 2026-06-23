import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            {eyebrow && (
              <div className="text-xs font-semibold uppercase tracking-widest text-mango-600 mb-3">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 text-lg text-ink/70 leading-relaxed">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
