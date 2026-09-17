export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  specs?: {
    type?: string;
    processing?: string;
    customization?: string;
    availability?: string;
    [key: string]: string | undefined;
  };
  image: string;
}

export const productCategories = [
  {
    id: "Hair Types",
    name: "Hair Types",
    badge: "100% Virgin Hair",
    shortDesc: "100% Virgin Indian Remy Hair, RSD, Double Drawn, Bulk Hair & Non-Remy",
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "Extensions & Wefts",
    name: "Extensions & Wefts",
    badge: "Custom Handcrafted",
    shortDesc: "Hand-Tied Wefts, Micro Wefts, Single & Double Machine Wefts, Keratin Tips & Clip-Ins",
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "Wigs & Hairpieces",
    name: "Wigs & Hairpieces",
    badge: "Master Craftsmanship",
    shortDesc: "Lace Front Wigs, Full Lace Wigs, Workout Wigs, Closures, Frontals, Toppers & Toupees",
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "Cranial Prosthesis",
    name: "Cranial Prosthesis",
    badge: "Medical Grade",
    shortDesc: "Medical-grade wigs designed for comfort and confidence during hair loss",
    image: "/images/products/hair_wigs.jpg",
  },
];

export const sampleProducts: ProductItem[] = [
  // --- HAIR TYPES ---
  {
    id: "hair-1",
    name: "100% Virgin Indian Remy Hair",
    category: "Hair Types",
    description: "Indian Remy Hair is the highest natural grade of human hair. Cuticles are aligned in one direction, reducing tangling and increasing durability.",
    specs: {
      type: "100% Virgin Indian Remy Hair",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "hair-2",
    name: "RSD – Remy Single Drawn",
    category: "Hair Types",
    description: "Natural length variation, ponytail-like appearance, cost-effective and authentic.",
    specs: {
      type: "Remy Single Drawn",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "hair-3",
    name: "Remy Double Drawn Hair",
    category: "Hair Types",
    description: "Uniform length bundles with minimal tapering, offering premium quality and appearance.",
    specs: {
      type: "Remy Double Drawn Hair",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "hair-4",
    name: "Bulk Hair",
    category: "Hair Types",
    description: "Temple-sourced virgin Indian hair sorted, hackled, and washed in-house.",
    specs: {
      type: "Bulk Hair",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "hair-5",
    name: "Non-Remy Double Drawn",
    category: "Hair Types",
    description: "Collected fallen hair with mixed cuticle directions. Affordable, more prone to tangling.",
    specs: {
      type: "Non-Remy Double Drawn",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "hair-6",
    name: "Cuticle Free Bulk Hair",
    category: "Hair Types",
    description: "Chemically treated non-Remy hair to reduce tangling. This effect is temporary and diminishes after multiple washes.",
    specs: {
      type: "Cuticle Free Bulk Hair",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },

  // --- EXTENSIONS & WEFTS ---
  {
    id: "ext-1",
    name: "Hand-Tied Wefts",
    category: "Extensions & Wefts",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Hand-Tied Wefts",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-2",
    name: "Micro Wefts",
    category: "Extensions & Wefts",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Micro Wefts",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-3",
    name: "Single & Double Machine Wefts",
    category: "Extensions & Wefts",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Single & Double Machine Wefts",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-4",
    name: "Pre-Bonded Keratin Tips",
    category: "Extensions & Wefts",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Pre-Bonded Keratin Tips",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-5",
    name: "Clip-In Extensions",
    category: "Extensions & Wefts",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Clip-In Extensions",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_extensions.jpg",
  },

  // --- WIGS & HAIRPIECES ---
  {
    id: "wig-1",
    name: "Lace Front Wigs",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Lace Front Wigs",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-2",
    name: "Full Lace Wigs",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Full Lace Wigs",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-3",
    name: "Workout Wigs",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Workout Wigs",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-4",
    name: "Closure Wigs",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Closure Wigs",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-5",
    name: "Fishnet",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Fishnet",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-6",
    name: "Lace Closures & Frontals",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Lace Closures & Frontals",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-7",
    name: "Toppers & Ponytails & Patches",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Toppers & Ponytails & Patches",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-8",
    name: "Fringes & volumizer",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Fringes & volumizer",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-9",
    name: "Toupee",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Toupee",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/products/hair_wigs.jpg",
  },

  // --- CRANIAL PROSTHESIS ---
  {
    id: "cp-1",
    name: "Cranial Prosthesis",
    category: "Cranial Prosthesis",
    description: "Medical-grade wigs designed for comfort and confidence during hair loss from chemotherapy or alopecia.",
    specs: {
      type: "Medical-Grade Cranial Prosthesis",
      processing: "Custom-made and handcrafted in-house",
      customization: "100% natural human hair with scalp-friendly base",
    },
    image: "/images/products/hair_wigs.jpg",
  },
];

export const hairTextures = [
  {
    name: "Natural Straight",
    description: "Naturally rare in India. Most straight textures are sourced from North-East India. Exodus focuses exclusively on South Indian temple hair, known for superior quality.",
  },
  {
    name: "Natural Wavy",
    description: "The most common and versatile texture. Blends easily, can be straightened or curled. Available from 8” to 32”.",
  },
  {
    name: "Natural Curly",
    description: "Extremely Rare and naturally occurring. Retains curls after washing, high density and natural appearance. Each curl pattern is unique.",
  },
  {
    name: "Body Wave",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
  },
  {
    name: "Deep Wave",
    description: "Indian Deep Wavy Hair: Steam-processed curls created from natural Indian Remy hair. No hazardous chemicals, deep, defined waves, excellent elasticity and volume.",
  },
  {
    name: "Kinky Wave",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
  },
];

export const hairColours = [
  "Natural Black & Brown",
  "Bleached in Browns & Blondes",
  "Coloured Hair",
  "Ombre",
  "Natural Grey Hair – Salt & Pepper",
  "White Blonde",
];
