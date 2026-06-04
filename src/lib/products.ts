export type MangoCategory =
  | "alphonso"
  | "kesar"
  | "banganapalli"
  | "dasheri"
  | "himsagar";

export interface Product {
  slug: string;
  name: string;
  category: MangoCategory;
  categoryName: string;
  price: number;
  pricePerKg: string;
  image: string;
  tagline: string;
  description: string;
  origin: string;
  season: string;
  rating: number;
  reviews: number;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const categories: { slug: MangoCategory; name: string; blurb: string; image: string }[] = [
  {
    slug: "alphonso",
    name: "Alphonso Mango",
    blurb: "The King of Mangoes — saffron flesh, rich aroma, buttery sweet.",
    image: img("photo-1553279768-865429fa0078"),
  },
  {
    slug: "kesar",
    name: "Kesar Mango",
    blurb: "Saffron-hued Gujarat classic with honey-floral notes.",
    image: img("photo-1605027990121-cbae9e0642db"),
  },
  {
    slug: "banganapalli",
    name: "Banganapalli Mango",
    blurb: "Andhra's golden giant — fiberless, juicy, and refreshingly tangy.",
    image: img("photo-1591073113125-e46713c829ed"),
  },
  {
    slug: "dasheri",
    name: "Dasheri Mango",
    blurb: "Lucknow's elongated treasure with delicate, sweet flesh.",
    image: img("photo-1546173159-315724a31696"),
  },
  {
    slug: "himsagar",
    name: "Himsagar Mango",
    blurb: "Bengal's pride — small, intensely sweet, and incredibly aromatic.",
    image: img("photo-1559181567-c3190ca9959b"),
  },
];

export const products: Product[] = [
  {
    slug: "alphonso-premium-box",
    name: "Alphonso Premium Box",
    category: "alphonso",
    categoryName: "Alphonso Mango",
    price: 1499,
    pricePerKg: "₹375/kg",
    image: img("photo-1553279768-865429fa0078"),
    tagline: "Ratnagiri grown · 4kg box",
    description:
      "Hand-picked from the Konkan coast, ripened naturally over hay, and shipped within 24 hours of harvest. Each box contains 12-14 medium fruits.",
    origin: "Ratnagiri, Maharashtra",
    season: "April – June",
    rating: 4.9,
    reviews: 482,
  },
  {
    slug: "alphonso-jumbo",
    name: "Alphonso Jumbo Pack",
    category: "alphonso",
    categoryName: "Alphonso Mango",
    price: 2199,
    pricePerKg: "₹366/kg",
    image: img("photo-1591073113125-e46713c829ed"),
    tagline: "Devgad GI-tagged · 6kg box",
    description: "Larger Devgad Alphonso fruits with deeper saffron flesh and a longer shelf life.",
    origin: "Devgad, Maharashtra",
    season: "April – June",
    rating: 4.8,
    reviews: 318,
  },
  {
    slug: "kesar-classic-box",
    name: "Kesar Classic Box",
    category: "kesar",
    categoryName: "Kesar Mango",
    price: 999,
    pricePerKg: "₹250/kg",
    image: img("photo-1605027990121-cbae9e0642db"),
    tagline: "Junagadh · 4kg box",
    description: "Sun-ripened Kesar from the Gir region. Bright saffron color, balanced sweetness.",
    origin: "Junagadh, Gujarat",
    season: "May – July",
    rating: 4.7,
    reviews: 256,
  },
  {
    slug: "kesar-family-pack",
    name: "Kesar Family Pack",
    category: "kesar",
    categoryName: "Kesar Mango",
    price: 1799,
    pricePerKg: "₹225/kg",
    image: img("photo-1546173159-315724a31696"),
    tagline: "8kg value box",
    description: "Perfect for sharing — bulk Kesar mangoes at our best per-kg price.",
    origin: "Junagadh, Gujarat",
    season: "May – July",
    rating: 4.6,
    reviews: 194,
  },
  {
    slug: "banganapalli-select",
    name: "Banganapalli Select",
    category: "banganapalli",
    categoryName: "Banganapalli Mango",
    price: 849,
    pricePerKg: "₹212/kg",
    image: img("photo-1591073113125-e46713c829ed"),
    tagline: "Andhra · 4kg box",
    description: "Large, golden-yellow Banganapalli with fiberless juicy flesh.",
    origin: "Kurnool, Andhra Pradesh",
    season: "April – June",
    rating: 4.6,
    reviews: 142,
  },
  {
    slug: "dasheri-deluxe",
    name: "Dasheri Deluxe",
    category: "dasheri",
    categoryName: "Dasheri Mango",
    price: 749,
    pricePerKg: "₹187/kg",
    image: img("photo-1546173159-315724a31696"),
    tagline: "Malihabad · 4kg box",
    description: "Elongated Dasheri mangoes from the orchards of Malihabad — sweet, mild, aromatic.",
    origin: "Malihabad, Uttar Pradesh",
    season: "June – July",
    rating: 4.7,
    reviews: 178,
  },
  {
    slug: "himsagar-bengal-box",
    name: "Himsagar Bengal Box",
    category: "himsagar",
    categoryName: "Himsagar Mango",
    price: 1099,
    pricePerKg: "₹275/kg",
    image: img("photo-1559181567-c3190ca9959b"),
    tagline: "Murshidabad · 4kg box",
    description: "Intense aroma and silky flesh — Bengal's most prized summer mango.",
    origin: "Murshidabad, West Bengal",
    season: "May – June",
    rating: 4.8,
    reviews: 211,
  },
  {
    slug: "mango-tasting-sampler",
    name: "Mango Tasting Sampler",
    category: "alphonso",
    categoryName: "Mixed Varieties",
    price: 1899,
    pricePerKg: "Curated 5kg",
    image: img("photo-1553279768-865429fa0078"),
    tagline: "All 5 varieties · 5kg",
    description: "Try every variety we offer — a hand-picked tasting box across all five cultivars.",
    origin: "India",
    season: "April – July",
    rating: 4.9,
    reviews: 526,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getByCategory = (cat: MangoCategory) =>
  products.filter((p) => p.category === cat);
