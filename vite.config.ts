import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { products } from "./src/lib/products";

const staticPages = [
  "/",
  "/shop",
  "/categories",
  "/about",
  "/faq",
  "/contact",
  "/cart",
  "/checkout",
  "/order-success",
  "/privacy",
  "/terms",
  ...products.map((product) => `/products/${product.slug}`),
];

export default defineConfig({
  tanstackStart: {
    pages: staticPages.map((path) => ({
      path,
      prerender: { enabled: true },
    })),
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
    spa: {
      enabled: true,
      maskPath: "/404",
      prerender: {
        outputPath: "/404",
        crawlLinks: false,
      },
    },
    sitemap: {
      enabled: true,
      host: "https://mangobliz.com",
    },
  },
});
