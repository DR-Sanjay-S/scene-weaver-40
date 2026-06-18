// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { products } from "./src/lib/products";

const staticPages = [
  "/",
  "/about",
  "/cart",
  "/categories",
  "/checkout",
  "/contact",
  "/faq",
  "/order-success",
  "/privacy",
  "/shop",
  "/terms",
  ...products.map((product) => `/products/${product.slug}`),
];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    client: { base: "/_build" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
    pages: staticPages.map((path) => ({ path })),
    spa: {
      enabled: true,
      maskPath: "/404",
      prerender: {
        outputPath: "/404",
        crawlLinks: false,
      },
    },
  },
  vite: {
    base: "/",
  },
});
