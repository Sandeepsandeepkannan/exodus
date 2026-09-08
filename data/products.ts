import { ProductItem } from "@/components/ProductCard";

export const sampleProducts: ProductItem[] = [
  // --- HAIR EXTENSIONS ---
  {
    id: "ext-hand-tied",
    name: "Hand Tied Weft",
    category: "Hair Extensions",
    description:
      "Manually woven using 8 delicate threads for an ultra-thin, flat, and flexible seam that lies completely flat against the scalp with zero bulk.",
    specs: {
      grade: "100% Virgin Indian Temple Hair",
      packaging: "Manual 8-Thread Ultra-Thin Seam",
      moq: "1 Kg / 10 Bundles",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-micro-weft",
    name: "Micro Weft – 3 Thread",
    category: "Hair Extensions",
    description:
      "Handmade micro-thin wefts constructed with 3 threads for light weight, natural movement, and seamless integration for fine to medium hair.",
    specs: {
      grade: "100% Raw Indian Remy",
      packaging: "Handmade 3-Thread Micro Seam",
      moq: "1 Kg",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-mini-micro-weft",
    name: "Mini Micro Weft – 3 Thread",
    category: "Hair Extensions",
    description:
      "Ultra-compact micro weft design utilizing 3 fine threads, engineered for precise crown placement and delicate hair density support.",
    specs: {
      grade: "100% Cuticle Intact Indian Hair",
      packaging: "3-Thread Mini Micro Weft",
      moq: "1 Kg",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-machine-weft",
    name: "Machine Weft",
    category: "Hair Extensions",
    description:
      "Produced using professional hair wefting machinery and reinforced multi-stitching to ensure maximum durability and zero hair shedding.",
    specs: {
      grade: "100% Natural Indian Raw Hair",
      packaging: "Double Track Machine Lock-Stitch",
      moq: "1 Kg / 10 Bundles",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-clip-ins",
    name: "Clip-ons / Clip-in Extensions",
    category: "Hair Extensions",
    description:
      "Custom multi-piece sets featuring double-drawn Indian human hair with stitched anti-slip silicone clips for effortless volume and length.",
    specs: {
      grade: "100% Virgin Human Hair",
      packaging: "7-Piece / 9-Piece Custom Sets",
      moq: "10 Sets",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_extensions.jpg",
  },
  {
    id: "ext-keratin-tips",
    name: "Keratin Pre-Tipped Extensions (Flat / U / V Tip)",
    category: "Hair Extensions",
    description:
      "Individual strand extensions tipped with 100% Italian keratin bonds, available in Flat-Tip, U-Tip, and V-Tip variations for hot fusion installation.",
    specs: {
      grade: "Single Donor Indian Temple Hair",
      packaging: "100% Italian Keratin Bond",
      moq: "500 Strands",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_extensions.jpg",
  },

  // --- WIGS, CLOSURES, TOPPERS & PONYTAILS ---
  {
    id: "wig-13x4-frontal",
    name: "13 x 4\" HD Lace Frontal",
    category: "Wigs & Closures",
    description:
      "Ear-to-ear HD transparent lace frontal crafted with 100% Indian Remy hair, featuring hand-knotted single knots and a pre-plucked natural hairline.",
    specs: {
      grade: "Indian Remy Cuticle Hair",
      packaging: "13x4 HD Transparent Swiss Lace",
      moq: "5 Pieces",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-closures",
    name: "4 x 4\" & 5 x 5\" Lace Closures",
    category: "Wigs & Closures",
    description:
      "Hand-knotted lace closures providing a natural parting area, crafted with raw Indian hair that can be bleached, colored, and heat styled.",
    specs: {
      grade: "100% Raw Indian Hair",
      packaging: "4x4 / 5x5 Swiss or Silk Base",
      moq: "5 Pieces",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-full-lace",
    name: "Full Lace Wigs & Lace Front Wigs",
    category: "Wigs & Closures",
    description:
      "Custom ventilated full lace and 13x4 lace front wigs built with 100% unprocessed virgin Indian hair, offering 360-degree natural styling versatility.",
    specs: {
      grade: "100% Virgin Indian Hair",
      packaging: "Hand-Ventilated Full Lace / Frontal Cap",
      moq: "2 Units",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_wigs.jpg",
  },
  {
    id: "wig-toppers-ponytails",
    name: "Crown Toppers, Ponytails & Fishnet Pieces",
    category: "Wigs & Closures",
    description:
      "Targeted crown volumizers, silk base toppers, clip-in wrap ponytails, and fishnet pieces for localized hair density enhancement and fringe styling.",
    specs: {
      grade: "100% Indian Remy Hair",
      packaging: "Breathable Silk / Mono / Fishnet Base",
      moq: "5 Pieces",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/hair_wigs.jpg",
  },

  // --- CRANIAL PROSTHESES ---
  {
    id: "prostheses-medical",
    name: "Medical Cranial Prostheses",
    category: "Cranial Prostheses",
    description:
      "Custom-engineered medical wigs designed specifically for individuals experiencing hair loss due to chemotherapy, alopecia, or medical conditions. Built with ultra-soft non-allergic base materials and a precise, secure fit.",
    specs: {
      grade: "100% Authentic Indian Human Hair",
      packaging: "Non-Allergic Medical Grade Base",
      moq: "1 Custom Unit",
      origin: "Chennai, Tamil Nadu, India",
    },
    image: "/images/products/cranial_prostheses.jpg",
  },
];

// Authentic Indian Human Hair Textures from source website
export const hairTextures = [
  { name: "Straight", desc: "Silky, naturally smooth texture with natural luster." },
  { name: "Wavy", desc: "Classic soft S-pattern body wave with natural movement." },
  { name: "Natural Curly", desc: "Bouncy, defined natural curls with full volume." },
  { name: "Kinky", desc: "Tight textured pattern mimicking natural coarse textures." },
  { name: "Artificial Curls", desc: "Precision steam-textured uniform ringlets." },
  { name: "Deep Curls", desc: "Rich deep wave and spiral curls with high elasticity." },
  { name: "Platinum Grey", desc: "Rare natural silver-platinum grey raw Indian hair." },
  { name: "Grey – Curly", desc: "Natural grey hair with soft curly texture." },
  { name: "Grey – Wavy", desc: "Natural grey hair with elegant body wave." },
];

// Authentic Hair Colour Shades from source website
export const hairColours = [
  { category: "Blonde Shades", shades: ["Beige Blonde", "Golden Blonde", "Honey Blonde", "Light Blonde", "Light Golden Blonde", "Lightest Blonde", "White Blonde"] },
  { category: "Natural Shades", shades: ["Natural Color 1B", "Natural Color 2", "Ombre"] },
  { category: "Red & Auburn", shades: ["Auburn", "Garnet", "Pink Auburn", "Ruby Red"] },
  { category: "Brown Shades", shades: ["Chestnut Brown", "Chocolate Brown", "Golden Brown", "Medium Brown"] },
  { category: "Grey Shades", shades: ["Dark Grey", "Medium Grey", "Mild Grey"] },
];
