import { ProductItem } from "@/components/ProductCard";

export const sampleProducts: ProductItem[] = [
  // --- 1. HAIR TYPES ---
  {
    id: "type-virgin-remy",
    name: "100% Virgin Indian Remy Hair",
    category: "Hair Types",
    description:
      "The highest natural grade of human hair. Cuticles are aligned in one direction (root to tip), reducing tangling and increasing durability.",
    specs: {
      type: "100% Virgin Indian Remy",
      sourcing: "Ethically sourced from South Indian temple auctions",
      processing: "In-house processed in Chennai, India",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "type-rsd-single-drawn",
    name: "RSD – Remy Single Drawn",
    category: "Hair Types",
    description:
      "Authentic raw Indian hair bundle with natural length variation, giving a realistic ponytail-like appearance. Cost-effective and authentic.",
    specs: {
      type: "Remy Single Drawn (RSD)",
      sourcing: "South Indian Temple Hair",
      processing: "In-house sorted and washed",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "type-remy-double-drawn",
    name: "Remy Double Drawn Hair",
    category: "Hair Types",
    description:
      "Uniform length bundles with minimal tapering, providing premium quality, density, and appearance.",
    specs: {
      type: "Remy Double Drawn",
      sourcing: "South Indian Temple Hair",
      processing: "Meticulously hackled and sorted by size",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "type-bulk-hair",
    name: "Bulk Hair",
    category: "Hair Types",
    description:
      "Loose tied raw Indian temple hair bundles, ideal for custom wig making, ventilation, and custom styling.",
    specs: {
      type: "Raw Indian Bulk Hair",
      sourcing: "South Indian Temple Hair",
      processing: "Washed, conditioned, and sun-dried",
      availability: "Available from 8\" to 32\"",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "type-non-remy-double",
    name: "Non-Remy Double Drawn",
    category: "Hair Types",
    description:
      "Collected fallen hair with mixed cuticle directions, sorted to a uniform length. Affordable commercial option.",
    specs: {
      type: "Non-Remy Double Drawn",
      sourcing: "South India",
      processing: "Sorted and prepared in-house",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "type-cuticle-free-bulk",
    name: "Cuticle Free Bulk Hair",
    category: "Hair Types",
    description:
      "Chemically treated non-Remy hair processed to reduce tangling. (Note: effect is temporary and diminishes after multiple washes).",
    specs: {
      type: "Cuticle Free / Tangle Free Non-Remy",
      sourcing: "South India",
      processing: "Treated non-Remy bulk hair",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },

  // --- 2. EXTENSIONS & WEFTS ---
  {
    id: "ext-hand-tied",
    name: "Hand-Tied Wefts",
    category: "Extensions & Wefts",
    description:
      "Delicate hand-tied hair wefts crafted manually for a thin, flat, and comfortable seam that blends naturally.",
    specs: {
      type: "Hand-Tied Hair Wefts",
      sourcing: "100% Indian Remy Human Hair",
      processing: "In-house handcrafted in Chennai",
      availability: "Available from 8\" to 32\"",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-micro-weft",
    name: "Micro Wefts",
    category: "Extensions & Wefts",
    description:
      "Ultra-fine lightweight micro weft tracks engineered for seamless integration and comfortable wear.",
    specs: {
      type: "Micro Wefts",
      sourcing: "100% Indian Remy Human Hair",
      processing: "In-house crafted in Chennai",
      availability: "Available from 8\" to 32\"",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-machine-weft",
    name: "Single & Double Machine Wefts",
    category: "Extensions & Wefts",
    description:
      "Reinforced machine-stitched wefts designed for durability, minimal shedding, and long-term reusability.",
    specs: {
      type: "Single & Double Machine Wefts",
      sourcing: "100% Indian Remy Human Hair",
      processing: "Machinery wefted in-house in Chennai",
      availability: "Available from 8\" to 32\"",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-keratin-tips",
    name: "Pre-Bonded Keratin Tips",
    category: "Extensions & Wefts",
    description:
      "Individual strand extensions pre-bonded with high-grade keratin tips for professional strand-by-strand application.",
    specs: {
      type: "Pre-Bonded Keratin Tips",
      sourcing: "100% Indian Remy Human Hair",
      processing: "Pre-tipped in-house in Chennai",
      availability: "Custom strand counts and specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-clip-ins",
    name: "Clip-In Extensions",
    category: "Extensions & Wefts",
    description:
      "Convenient clip-in extension sets made with 100% Indian human hair for quick length and volume enhancement.",
    specs: {
      type: "Clip-In Human Hair Extensions",
      sourcing: "100% Indian Human Hair",
      processing: "In-house stitched and assembled",
      availability: "Custom pieces and specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },

  // --- 3. WIGS & HAIRPIECES ---
  {
    id: "wig-lace-front",
    name: "Lace Front Wigs",
    category: "Wigs & Hairpieces",
    description:
      "Natural-looking wigs featuring a sheer lace front hand-ventilated with 100% Indian human hair for a realistic hairline.",
    specs: {
      type: "Lace Front Wigs",
      sourcing: "100% Indian Remy Human Hair",
      processing: "In-house hand ventilation in Chennai",
      availability: "Custom cap sizes and textures",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-full-lace",
    name: "Full Lace Wigs",
    category: "Wigs & Hairpieces",
    description:
      "Full lace wigs hand-ventilated throughout the entire cap with unprocessed Indian human hair for complete styling freedom.",
    specs: {
      type: "Full Lace Wigs",
      sourcing: "100% Indian Remy Human Hair",
      processing: "In-house hand ventilation in Chennai",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-workout",
    name: "Workout Wigs",
    category: "Wigs & Hairpieces",
    description:
      "Breathable, lightweight wigs designed specifically for high activity and everyday comfort.",
    specs: {
      type: "Workout Wigs",
      sourcing: "100% Indian Human Hair",
      processing: "In-house manufactured in Chennai",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-closure-wigs",
    name: "Closure Wigs",
    category: "Wigs & Hairpieces",
    description:
      "Full wigs constructed with a lace closure piece, providing a natural parting appearance and easy wear.",
    specs: {
      type: "Closure Wigs",
      sourcing: "100% Indian Remy Human Hair",
      processing: "In-house assembled in Chennai",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-fishnet",
    name: "Fishnet Hairpieces",
    category: "Wigs & Hairpieces",
    description:
      "Lightweight fishnet hairpieces engineered for maximum ventilation, comfort, and integration.",
    specs: {
      type: "Fishnet Hairpieces",
      sourcing: "100% Indian Human Hair",
      processing: "In-house crafted in Chennai",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-frontals-closures",
    name: "Lace Closures & Frontals",
    category: "Wigs & Hairpieces",
    description:
      "Hand-ventilated lace closures and frontals providing a realistic scalp appearance and versatile parting space.",
    specs: {
      type: "Lace Closures & Frontals",
      sourcing: "100% Indian Remy Human Hair",
      processing: "In-house hand-knotted in Chennai",
      availability: "Custom sizes and specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-toppers-ponytails-patches",
    name: "Toppers & Ponytails & Patches",
    category: "Wigs & Hairpieces",
    description:
      "Crown toppers, wrap-around ponytails, and targeted hair patches for localized hair enhancement and density.",
    specs: {
      type: "Toppers, Ponytails & Patches",
      sourcing: "100% Indian Human Hair",
      processing: "In-house manufactured in Chennai",
      availability: "Custom sizes and specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-toupee",
    name: "Toupee",
    category: "Wigs & Hairpieces",
    description:
      "Custom hairpieces designed for discreet crown and top scalp coverage using authentic Indian human hair.",
    specs: {
      type: "Toupee",
      sourcing: "100% Indian Human Hair",
      processing: "In-house crafted in Chennai",
      availability: "Custom base and size specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },

  // --- 4. CRANIAL PROSTHESIS ---
  {
    id: "prosthesis-cranial",
    name: "Cranial Prosthesis",
    category: "Cranial Prosthesis",
    description:
      "Medical-grade wigs designed for comfort and confidence during hair loss from chemotherapy or alopecia.",
    specs: {
      type: "Medical-Grade Cranial Prosthesis",
      sourcing: "100% Authentic Indian Human Hair",
      processing: "In-house custom crafted in Chennai",
      availability: "Custom-made to client specifications",
    },
    image: "/images/products/cranial_prostheses.jpg",
  },
];

// Product Category Definitions
export interface ProductCategoryInfo {
  id: string;
  name: string;
  shortDesc: string;
  badge: string;
  image: string;
}

export const productCategories: ProductCategoryInfo[] = [
  {
    id: "Hair Types",
    name: "Hair Types & Bulk",
    shortDesc: "100% Virgin Indian Remy, Remy Single Drawn, Remy Double Drawn, Bulk Hair, Non-Remy Double Drawn, and Cuticle Free Bulk.",
    badge: "6 Products",
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "Extensions & Wefts",
    name: "Extensions & Wefts",
    shortDesc: "Hand-Tied Wefts, Micro Wefts, Single & Double Machine Wefts, Pre-Bonded Keratin Tips, and Clip-In Extensions.",
    badge: "5 Products",
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "Wigs & Hairpieces",
    name: "Wigs & Hairpieces",
    shortDesc: "Lace Front Wigs, Full Lace Wigs, Workout Wigs, Closure Wigs, Fishnet, Lace Closures & Frontals, Toppers & Ponytails & Patches, and Toupee.",
    badge: "8 Products",
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "Cranial Prosthesis",
    name: "Cranial Prosthesis",
    shortDesc: "Medical-grade wigs designed for comfort and confidence during hair loss from chemotherapy or alopecia.",
    badge: "Medical Division",
    image: "/images/products/cranial_prostheses.jpg",
  },
];

// Authentic Hair Textures from Client Documents
export const hairTextures = [
  {
    name: "Natural Straight",
    desc: "Naturally rare in India. Sourced mainly from North-East India. Exodus focuses on premium South Indian hair.",
  },
  {
    name: "Natural Wavy",
    desc: "The most common and versatile texture. Blends easily, can be straightened or curled. Available from 8” to 32”.",
  },
  {
    name: "Natural Curly",
    desc: "Rare and naturally occurring. Retains curls after washing. High density and natural appearance; each curl pattern is unique.",
  },
  {
    name: "Body Wave",
    desc: "Elegant body wave pattern crafted to client specifications.",
  },
  {
    name: "Deep Wave",
    desc: "Steam-processed curls created from natural Indian Remy hair without hazardous chemicals. Deep, defined waves with excellent elasticity and volume.",
  },
  {
    name: "Kinky Wave",
    desc: "Deep textured wave pattern tailored to client specifications.",
  },
];

// Authentic Hair Colour Shades from Client Documents
export const hairColours = [
  {
    category: "Natural Black & Brown",
    description: "Natural uncoloured tones from South Indian temple donors.",
    shades: [
      { name: "Natural Black", hex: "#1C1B1A" },
      { name: "Natural Brown", hex: "#38271F" },
    ],
  },
  {
    category: "Bleached in Browns & Blondes",
    description: "Carefully lifted shades crafted in-house to client specifications.",
    shades: [
      { name: "Bleached in Browns", hex: "#6B4931" },
      { name: "Bleached in Blondes", hex: "#CDB27E" },
      { name: "White Blonde", hex: "#EFE6D5" },
    ],
  },
  {
    category: "Coloured Hair & Ombre",
    description: "Custom colour finishes and gradient transitions.",
    shades: [
      { name: "Coloured Hair", hex: "#7E2A3C" },
      { name: "Ombre", hex: "#52372E", gradient: "linear-gradient(135deg, #2D1E18 0%, #C89F6B 100%)" },
    ],
  },
  {
    category: "Natural Grey Hair – Salt & Pepper",
    description: "Naturally occurring grey and salt & pepper temple hair.",
    shades: [
      { name: "Natural Grey Hair", hex: "#8E9196" },
      { name: "Salt & Pepper", hex: "#4A4D52", gradient: "linear-gradient(135deg, #2B2D30 0%, #A2A6AD 100%)" },
    ],
  },
];
