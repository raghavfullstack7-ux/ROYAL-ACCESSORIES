export interface Product {
  id: string;
  name: string;
  category: "Watches" | "Bags" | "Jewelry" | "Glasses" | "Purses";
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
  sustainability?: string;
}

export const products: Product[] = [
  {
    id: "w1",
    name: "Classic Chronograph",
    category: "Watches",
    price: 245.00,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
    description: "A timeless chronograph with a genuine leather strap and stainless steel dial.",
    isNew: true,
    sustainability: "Eco-friendly materials"
  },
  {
    id: "b1",
    name: "Leather Tote",
    category: "Bags",
    price: 350.00,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    description: "Spacious and elegant, perfect for everyday carry or a weekend getaway.",
    sustainability: "Vegan Leather"
  },
  {
    id: "j1",
    name: "Gold Pendant Necklace",
    category: "Jewelry",
    price: 125.00,
    image: "https://images.unsplash.com/photo-1599643478524-fb66f70d00f8?q=80&w=1000&auto=format&fit=crop",
    description: "A minimalist gold pendant that adds a touch of sophistication to any outfit."
  },
  {
    id: "g1",
    name: "Tortoise Shell Shades",
    category: "Glasses",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop",
    description: "Vintage-inspired sunglasses with UV400 protection.",
    isNew: true
  },
  {
    id: "p1",
    name: "Quilted Evening Purse",
    category: "Purses",
    price: 195.00,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop",
    description: "Compact and chic, featuring a gold chain strap and quilted detailing."
  },
  {
    id: "w2",
    name: "Minimalist Silver Watch",
    category: "Watches",
    price: 180.00,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop",
    description: "Sleek silver design with a mesh band for a modern look."
  }
];

export const featuredCollections = [
  {
    id: "fc1",
    title: "The Regal Watch Collection",
    image: "https://images.unsplash.com/photo-1587836374828-bc3df9a44482?q=80&w=1000&auto=format&fit=crop",
    description: "Timeless elegance for the modern aristocrat."
  },
  {
    id: "fc2",
    title: "Artisan Leather Bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    description: "Handcrafted perfection in every stitch."
  }
];
