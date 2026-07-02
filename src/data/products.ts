import alphonso from "../assets/alphonso.jpg";
import kesar from "../assets/kesar.jpg";
import banganapalli from "../assets/banganapalli.jpg";
import dasheri from "../assets/dasheri.jpg";
import himsagar from "../assets/himsagar.jpg";
import sampler from "../assets/sampler.jpg";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  pricePerKg: number;
  available: boolean;
  tag?: string;
};

export const products: Product[] = [
  {
    id: "alphonso",
    name: "Alphonso (Ratnagiri)",
    description: "The king of mangoes. Rich, saffron-yellow flesh with an unmistakable aroma.",
    image: alphonso,
    pricePerKg: 650,
    available: true,
    tag: "Bestseller",
  },
  {
    id: "kesar",
    name: "Kesar (Gir)",
    description: "Bright, tangy-sweet and pulpy — Gujarat's pride, perfect for shakes & mithai.",
    image: kesar,
    pricePerKg: 550,
    available: true,
  },
  {
    id: "banganapalli",
    name: "Banganapalli",
    description: "Large, honey-sweet Andhra classic. Smooth flesh, hardly any fibre.",
    image: banganapalli,
    pricePerKg: 450,
    available: true,
  },
  {
    id: "dasheri",
    name: "Dasheri (Malihabad)",
    description: "Aromatic North Indian favourite. Juicy, fibre-free and best eaten chilled.",
    image: dasheri,
    pricePerKg: 400,
    available: true,
  },
  {
    id: "himsagar",
    name: "Himsagar (Bengal)",
    description: "Bengal's beloved. Buttery texture, honey-like sweetness. Limited season.",
    image: himsagar,
    pricePerKg: 500,
    available: true,
    tag: "Limited",
  },
  {
    id: "sampler",
    name: "Tasting Sampler Box",
    description: "A curated mix of our best varieties — great for gifting or first-timers.",
    image: sampler,
    pricePerKg: 700,
    available: true,
    tag: "Gift",
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
