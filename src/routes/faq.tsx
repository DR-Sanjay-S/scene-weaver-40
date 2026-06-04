import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How are the mangoes packed and shipped?", a: "Each fruit is individually wrapped in soft tissue and packed in hay-lined corrugated boxes. We ship via temperature-controlled couriers within 24 hours of picking." },
  { q: "How long do mangoes take to ripen at home?", a: "Most varieties arrive raw and need 3–6 days to ripen at room temperature. Keep them in a paper bag and away from direct sunlight." },
  { q: "Which areas do you deliver to?", a: "We deliver across India. Metro cities receive orders in 2–3 days; remote areas may take up to 5 days." },
  { q: "What if my mangoes arrive damaged?", a: "We replace or refund any damaged fruit — just send us a photo within 24 hours of delivery." },
  { q: "Can I gift a mango box?", a: "Yes! Add a gift note at checkout and we'll include a hand-written card with the recipient's box." },
  { q: "Do you offer bulk or corporate orders?", a: "Absolutely. Contact us for custom packaging and pricing on orders of 50+ boxes." },
  { q: "Are the mangoes chemically ripened?", a: "Never. We ripen all fruit naturally in hay-lined crates — no calcium carbide, no ethylene chambers." },
  { q: "What's your return policy?", a: "Mangoes are perishable, so we don't accept returns — but our quality guarantee covers any damage or quality issues." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — MangoBliz" },
      { name: "description", content: "Answers to common questions about MangoBliz shipping, ripening, and quality." },
      { property: "og:title", content: "FAQ — MangoBliz" },
      { property: "og:description", content: "Common questions about MangoBliz mangoes." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 md:px-8 py-14">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-mango-700 to-mango-500 bg-clip-text text-transparent">
          Frequently Asked
        </h1>
        <p className="mt-3 text-muted-foreground">Everything you need to know before ordering.</p>
      </header>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border border-mango-100 rounded-2xl px-6 bg-white shadow-sm">
            <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-mango-700 py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/75 leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
