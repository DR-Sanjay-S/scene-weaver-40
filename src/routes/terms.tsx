import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — MangoBliz" },
      { name: "description", content: "Terms and conditions for using MangoBliz and ordering mangoes." },
      { property: "og:title", content: "Terms & Conditions — MangoBliz" },
      { property: "og:description", content: "MangoBliz Terms & Conditions." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 md:px-8 py-14 prose prose-lg">
      <h1>Terms & Conditions</h1>
      <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

      <h2>1. Orders</h2>
      <p>All orders are subject to availability. We reserve the right to cancel any order at our discretion with a full refund.</p>

      <h2>2. Pricing</h2>
      <p>Prices are listed in Indian Rupees (₹) and may change without notice. The price at checkout is the price charged.</p>

      <h2>3. Shipping</h2>
      <p>We ship within 24 hours of order confirmation. Delivery times are estimates and may vary by location.</p>

      <h2>4. Quality Guarantee</h2>
      <p>If your mangoes arrive damaged or fail to ripen, contact us within 24 hours of delivery with photos and we'll replace or refund.</p>

      <h2>5. Returns</h2>
      <p>Due to the perishable nature of fresh fruit, we do not accept returns. Quality issues are covered under our guarantee above.</p>

      <h2>6. Limitation of Liability</h2>
      <p>Our liability is limited to the value of the products purchased. We are not liable for indirect or consequential damages.</p>

      <h2>7. Governing Law</h2>
      <p>These terms are governed by the laws of India. Disputes are subject to the jurisdiction of Mumbai courts.</p>

      <h2>8. Contact</h2>
      <p>Questions about these terms? Email legal@mangobliz.com.</p>
    </article>
  );
}
