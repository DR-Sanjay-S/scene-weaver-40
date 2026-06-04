import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MangoBliz" },
      { name: "description", content: "How MangoBliz collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — MangoBliz" },
      { property: "og:description", content: "MangoBliz Privacy Policy." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 md:px-8 py-14 prose prose-lg">
      <h1>Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly — name, email, phone, shipping address — to fulfill your order. We also collect basic analytics (page views, device type) to improve our site.</p>

      <h2>2. How We Use Your Information</h2>
      <p>To process and ship orders, send order updates, respond to support requests, and occasionally send promotional emails (you can unsubscribe at any time).</p>

      <h2>3. Sharing</h2>
      <p>We share your shipping details with courier partners only. We never sell your data to third parties.</p>

      <h2>4. Cookies</h2>
      <p>We use cookies for cart persistence and analytics. You can disable them in your browser settings.</p>

      <h2>5. Your Rights</h2>
      <p>You can request a copy of your data or ask us to delete it by emailing privacy@mangobliz.com.</p>

      <h2>6. Contact</h2>
      <p>Questions? Reach us at privacy@mangobliz.com.</p>
    </article>
  );
}
