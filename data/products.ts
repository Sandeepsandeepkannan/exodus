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
    id: "Extensions & Wefts",
    name: "Extensions & Wefts",
    badge: "Custom Handcrafted",
    shortDesc: "Hand-Tied Wefts, Micro Wefts, Pre-Bonded Keratin Tips & Clip-Ins",
    image: "/images/extensionsandwefts/Handtiedwefts/mainDSC01649.JPG",
  },
  {
    id: "Wigs & Hairpieces",
    name: "Wigs & Hairpieces",
    badge: "Master Craftsmanship",
    shortDesc: "Closure Wigs, Fishnet Wigs, Frontal Wigs & Topper Wigs",
    image: "/images/wigsandhairpieces/Frontal-wigs/mainIMG_6856.JPG",
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
    id: "ext-handtied",
    name: "Hand-Tied Wefts",
    category: "Extensions & Wefts",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Hand-Tied Wefts",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/extensionsandwefts/Handtiedwefts/mainDSC01649.JPG",
    images: [
      "/images/extensionsandwefts/Handtiedwefts/mainDSC01649.JPG",
      "/images/extensionsandwefts/Handtiedwefts/DSC00428.JPG",
      "/images/extensionsandwefts/Handtiedwefts/HANDTIED-6.JPG",
      "/images/extensionsandwefts/Handtiedwefts/IMG_0830.JPG",
      "/images/extensionsandwefts/Handtiedwefts/IMG_1143.JPG",
    ],
  },
  {
    id: "ext-micro",
    name: "Micro Wefts",
    category: "Extensions & Wefts",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Micro Wefts",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/extensionsandwefts/Microwefts/mainN-3 (1).JPG",
    images: [
      "/images/extensionsandwefts/Microwefts/mainN-3 (1).JPG",
      "/images/extensionsandwefts/Microwefts/DSC00429.JPG",
      "/images/extensionsandwefts/Microwefts/IMG_0770.JPG",
      "/images/extensionsandwefts/Microwefts/IMG_1298.JPG",
      "/images/extensionsandwefts/Microwefts/MICRO WEFT.jpg",
    ],
  },
  {
    id: "ext-keratin",
    name: "Pre-Bonded Keratin Tips",
    category: "Extensions & Wefts",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Pre-Bonded Keratin Tips",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/extensionsandwefts/Keratin/mainDSC_0527.JPG",
    images: [
      "/images/extensionsandwefts/Keratin/mainDSC_0527.JPG",
      "/images/extensionsandwefts/Keratin/DSC_0524.JPG",
      "/images/extensionsandwefts/Keratin/DSC_0526.JPG",
      "/images/extensionsandwefts/Keratin/DSC_0537.JPG",
      "/images/extensionsandwefts/Keratin/IMG_0787.JPG",
      "/images/extensionsandwefts/Keratin/IMG_6136.JPG",
      "/images/extensionsandwefts/Keratin/IMG_6187.JPG",
    ],
  },
  {
    id: "ext-clips",
    name: "Clip-In Extensions",
    category: "Extensions & Wefts",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    specs: {
      type: "Clip-In Extensions",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/extensionsandwefts/Clips/mainCLIPS-14.JPG",
    images: [
      "/images/extensionsandwefts/Clips/mainCLIPS-14.JPG",
      "/images/extensionsandwefts/Clips/CLIPS-21.JPG",
      "/images/extensionsandwefts/Clips/IMG_7688.JPG",
      "/images/extensionsandwefts/Clips/IMG_9424.JPG",
      "/images/extensionsandwefts/Clips/IMG_9425.JPG",
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
    image: "/images/wigsandhairpieces/Closure-wigs/main20211230_104834.jpg",
    images: [
      "/images/wigsandhairpieces/Closure-wigs/main20211230_104834.jpg",
      "/images/wigsandhairpieces/Closure-wigs/20211230_120302.jpg",
      "/images/wigsandhairpieces/Closure-wigs/20220104_131403.jpg",
      "/images/wigsandhairpieces/Closure-wigs/20220104_131403 (1).jpg",
      "/images/wigsandhairpieces/Closure-wigs/IMG_5019.JPG",
      "/images/wigsandhairpieces/Closure-wigs/IMG_5200.JPG",
      "/images/wigsandhairpieces/Closure-wigs/IMG_5204.JPG",
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
    image: "/images/wigsandhairpieces/Frontal-wigs/mainIMG_6856.JPG",
    images: [
      "/images/wigsandhairpieces/Frontal-wigs/mainIMG_6856.JPG",
      "/images/wigsandhairpieces/Frontal-wigs/IMG_6684.JPG",
      "/images/wigsandhairpieces/Frontal-wigs/IMG_6854.JPG",
      "/images/wigsandhairpieces/Frontal-wigs/IMG_7100.JPG",
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
    image: "/images/wigsandhairpieces/Topper-wigs/mainTopper-6.jpg",
    images: [
      "/images/wigsandhairpieces/Topper-wigs/mainTopper-6.jpg",
      "/images/wigsandhairpieces/Topper-wigs/20211012_162705.jpg",
      "/images/wigsandhairpieces/Topper-wigs/20211230_103242.jpg",
      "/images/wigsandhairpieces/Topper-wigs/20211230_120924.jpg",
      "/images/wigsandhairpieces/Topper-wigs/Topper close-up-3.jpg",
      "/images/wigsandhairpieces/Topper-wigs/Topper-1.jpg",
      "/images/wigsandhairpieces/Topper-wigs/Topper-20.JPG",
      "/images/wigsandhairpieces/Topper-wigs/Topper-5.JPG",
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

