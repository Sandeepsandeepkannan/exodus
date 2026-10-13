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
  images?: string[];
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
    id: "Wefts & Extensions",
    name: "Wefts & Extensions",
    badge: "Custom Handcrafted",
    shortDesc: "Hand-Tied Wefts, Micro Wefts, Pre-Bonded Keratin Tips & Clip-Ins",
    image: "/images/Extensionsandwefts/Handtiedwefts/HANDTIED-1.JPG",
  },
  {
    id: "Wigs & Hairpieces",
    name: "Wigs & Hairpieces",
    badge: "Master Craftsmanship",
    shortDesc: "Closure Wigs, Fishnet Wigs, Frontal Wigs & Topper Wigs",
    image: "/images/wigsandhairpieces/Frontal-wigs/FRONTAL-1C.png",
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

  // --- WEFTS & EXTENSIONS ---
  {
    id: "ext-machineweft",
    name: "Machine Wefts",
    category: "Wefts & Extensions",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Machine Wefts",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/Extensionsandwefts/machinewefts/MACHINE WEFT-1.JPG",
    images: [
      "/images/Extensionsandwefts/machinewefts/MACHINE WEFT-1.JPG",
      "/images/Extensionsandwefts/machinewefts/MACHINE WEFT-2.JPG",
      "/images/Extensionsandwefts/machinewefts/MACHINE WEFT-3.jpg",
      "/images/Extensionsandwefts/machinewefts/MACHINE WEFT-4.jpg",
      "/images/Extensionsandwefts/machinewefts/MACHINE WEFT-5.JPG",
      "/images/Extensionsandwefts/machinewefts/MACHINE WEFT-6.JPG",
      "/images/Extensionsandwefts/machinewefts/MACHINE WEFT-7.JPG",
      "/images/Extensionsandwefts/machinewefts/MACHINE WEFT-8.JPG",
    ],
  },
  {
    id: "ext-handtied",
    name: "Hand-Tied Wefts",
    category: "Wefts & Extensions",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Hand-Tied Wefts",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/Extensionsandwefts/Handtiedwefts/HANDTIED-1.JPG",
    images: [
      "/images/Extensionsandwefts/Handtiedwefts/HANDTIED-1.JPG",
      "/images/Extensionsandwefts/Handtiedwefts/HANDTIED-2.JPG",
      "/images/Extensionsandwefts/Handtiedwefts/HANDTIED-3.JPG",
    ],
  },
  {
    id: "ext-micro",
    name: "Micro Wefts",
    category: "Wefts & Extensions",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Micro Wefts",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/Extensionsandwefts/Microwefts/Micro Weft -1.jpg",
    images: [
      "/images/Extensionsandwefts/Microwefts/Micro Weft -1.jpg",
      "/images/Extensionsandwefts/Microwefts/MICRO WEFT - 3.JPG",
      "/images/Extensionsandwefts/Microwefts/MICRO WEFT - 4.JPG",
    ],
  },
  {
    id: "ext-keratin",
    name: "Pre-Bonded Keratin Tips",
    category: "Wefts & Extensions",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Pre-Bonded Keratin Tips",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/Extensionsandwefts/Keratin/KERATIN-1.JPG",
    images: [
      "/images/Extensionsandwefts/Keratin/KERATIN-1.JPG",
      "/images/Extensionsandwefts/Keratin/KERATIN-2.JPG",
      "/images/Extensionsandwefts/Keratin/KERATIN-3.JPG",
      "/images/Extensionsandwefts/Keratin/KERATIN-4.JPG",
      "/images/Extensionsandwefts/Keratin/KERATIN-5.JPG",
      "/images/Extensionsandwefts/Keratin/KERATIN-6.JPG",
    ],
  },
  {
    id: "ext-clips",
    name: "Clip-In Extensions",
    category: "Wefts & Extensions",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Clip-In Extensions",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/Extensionsandwefts/Clips/CLIP-IN-1.JPG",
    images: [
      "/images/Extensionsandwefts/Clips/CLIP-IN-1.JPG",
      "/images/Extensionsandwefts/Clips/CLIP-IN-2.JPG",
      "/images/Extensionsandwefts/Clips/CLIP-IN-3.JPG",
      "/images/Extensionsandwefts/Clips/CLIP-IN-4.JPG",
      "/images/Extensionsandwefts/Clips/CLIP-IN-5.JPG",
    ],
  },

  // --- WIGS & HAIRPIECES ---
  {
    id: "wig-closure",
    name: "Closure Wigs",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Closure Wigs",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/wigsandhairpieces/Closure-wigs/CLOSURE-1.jpg",
    images: [
      "/images/wigsandhairpieces/Closure-wigs/CLOSURE-1.jpg",
      "/images/wigsandhairpieces/Closure-wigs/CLOSURE-2.jpg",
      "/images/wigsandhairpieces/Closure-wigs/CLOSURE-3.JPG",
      "/images/wigsandhairpieces/Closure-wigs/CLOSURE-4.jpg",
      "/images/wigsandhairpieces/Closure-wigs/CLOSURE-5.JPG",
    ],
  },
  {
    id: "wig-fishnet",
    name: "Fishnet Wigs",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Fishnet Wigs",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/wigsandhairpieces/Fishnet-wigs/mainFishnet-5.jpg",
    images: [
      "/images/wigsandhairpieces/Fishnet-wigs/mainFishnet-5.jpg",
      "/images/wigsandhairpieces/Fishnet-wigs/FISHNET_1.JPG",
      "/images/wigsandhairpieces/Fishnet-wigs/Fishnet -1.jpg",
      "/images/wigsandhairpieces/Fishnet-wigs/Fishnet-3.jpg",
      "/images/wigsandhairpieces/Fishnet-wigs/Fishnet-4.jpg",
      "/images/wigsandhairpieces/Fishnet-wigs/Fishnet-7.jpg",
      "/images/wigsandhairpieces/Fishnet-wigs/Fishnet-8.jpg",
    ],
  },
  {
    id: "wig-frontal",
    name: "Frontal Wigs",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Frontal Wigs",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/wigsandhairpieces/Frontal-wigs/FRONTAL-1C.png",
    images: [
      "/images/wigsandhairpieces/Frontal-wigs/FRONTAL-1C.png",
      "/images/wigsandhairpieces/Frontal-wigs/FRONTAL-2.JPG",
      "/images/wigsandhairpieces/Frontal-wigs/FRONTAL-3.JPG",
      "/images/wigsandhairpieces/Frontal-wigs/FRONTAL-4.jpg",
    ],
  },
  {
    id: "wig-topper",
    name: "Topper Wigs",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Topper Wigs",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/wigsandhairpieces/Topper-wigs/TOPPER-1.jpeg",
    images: [
      "/images/wigsandhairpieces/Topper-wigs/TOPPER-1.jpeg",
      "/images/wigsandhairpieces/Topper-wigs/TOPPER-2.jpeg",
      "/images/wigsandhairpieces/Topper-wigs/TOPPER-2C.png",
      "/images/wigsandhairpieces/Topper-wigs/TOPPER-3.jpeg",
    ],
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
    image: "/images/products/cprod.jpg",
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

export interface ColorShadeItem {
  name: string;
  filename: string;
}

export const colorShades: ColorShadeItem[] = [
  { name: "AUBURN", filename: "AUBURN.JPG" },
  { name: "BEIGE BLONDE", filename: "BEIGE BLONDE.JPG" },
  { name: "CHESTNUT BROWN", filename: "CHESTNUT BROWN.JPG" },
  { name: "CHOCOLATE BROWN", filename: "CHOCOLATE BROWN.JPG" },
  { name: "DARK GREY", filename: "DARK GREY.JPG" },
  { name: "GARNET", filename: "GARNET.JPG" },
  { name: "GOLDEN BLONDE", filename: "GOLDEN BLONDE.JPG" },
  { name: "GOLDEN BROWN", filename: "GOLDEN BROWN.JPG" },
  { name: "HONEY BLONDE", filename: "HONEY BLONDE.JPG" },
  { name: "JET BLACK 1", filename: "JET BLACK 1.png" },
  { name: "LIGHT BLONDE", filename: "LIGHT BLONDE.JPG" },
  { name: "LIGHT BROWN", filename: "LIGHT BROWN.png" },
  { name: "LIGHT GOLDEN BLONDE", filename: "LIGHT GOLDEN BLONDE.png" },
  { name: "MEDIUM GREY", filename: "MEDIUM GREY.JPG" },
  { name: "MILD GREY", filename: "MILD GREY.JPG" },
  { name: "NATURAL 1B", filename: "NATURAL 1B .png" },
  { name: "OMBRE", filename: "OMBRE.JPG" },
  { name: "PINK AUBURN", filename: "PINK AUBURN.JPG" },
  { name: "RUBY RED", filename: "RUBY RED.JPG" },
  { name: "WHITE BLONDE", filename: "WHITE BLONDE.png" },
];

