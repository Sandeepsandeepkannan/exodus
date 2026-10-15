export interface ProductNarration {
  headline?: string;
  subtitle?: string;
  story: string[];
  keyFeatures?: string[];
  availableStyles?: string[];
  lengths?: string;
  colours?: string;
  textures?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  narration?: ProductNarration;
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
    narration: {
      headline: "Exodus Machine Weft",
      subtitle: "Professional Machine Weft Hair Extensions",
      story: [
        "Exodus Human Hair Machine Wefts are professionally constructed using specialized hair-wefting equipment and reinforced with single-needle or double-needle stitching for a strong and durable finish.",
        "An adhesive reinforcement is incorporated into the weft during production to help secure the hair and strengthen the construction. This reinforced design helps reduce shedding and supports longer product life when properly applied and maintained.",
        "Available in a wide selection of shades and lengths, Exodus Machine Wefts are suitable for professional hair-extension applications where durability and reliable construction are important.",
      ],
      keyFeatures: [
        "Professional machine-constructed wefts",
        "Available in single and double machine weft construction",
        "Reinforced with single-needle or double-needle stitching",
        "Adhesive reinforcement incorporated during production",
        "Designed to help reduce shedding",
        "Suitable for professional hair-extension applications",
        "Available in multiple colours and lengths",
      ],
      lengths: '08" – 40"',
      colours: "Natural colour, Browns, Blondes, 613, Gray, Jet Black, Auburn",
      textures: "Natural body Wave, Natural Curly, Natural Straight, Deep Curls, Kinky",
    },
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
    narration: {
      headline: "Exodus Hand-Tied Weft",
      subtitle: "Handcrafted Human Hair Weft Extensions",
      story: [
        "Exodus Hand-Tied Wefts are carefully handcrafted using eight threads woven into a specific pattern, creating a compact and secure weft construction.",
        "The weft is further reinforced with machine stitching to enhance strength and durability. Applying adhesive to the cut ends helps seal the weft, reduce shedding and support the longevity of the extension.",
        "Hand-Tied Wefts are an excellent choice for professionals looking for a carefully constructed weft with a compact profile and natural appearance.",
      ],
      keyFeatures: [
        "Handcrafted construction",
        "Eight-thread woven design",
        "Compact and secure weft",
        "Reinforced with machine stitching",
        "Adhesive can be applied to cut ends",
        "Designed to help minimize shedding",
        "Suitable for professional applications",
      ],
    },
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
    narration: {
      headline: "Exodus Micro Weft",
      subtitle: "Lightweight & Discreet Micro Weft Hair Extensions",
      story: [
        "Exodus Micro Wefts are finely handcrafted using three threads woven into a carefully developed pattern. Their smaller and lighter construction makes them an excellent option for applications where comfort, flexibility and a discreet appearance are desired.",
        "Each Micro Weft is produced through a detailed, labour-intensive handcrafted process requiring precision and skilled workmanship.",
        "For additional reinforcement, adhesive can be applied to the cut ends to help seal the weft and minimize shedding.",
      ],
      keyFeatures: [
        "Handcrafted micro weft construction",
        "Made using three woven threads",
        "Lightweight and compact design",
        "Comfortable and discreet",
        "Natural-looking finish",
        "Suitable for lightweight hair-extension applications",
        "Cut-end adhesive reinforcement recommended",
      ],
    },
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
    narration: {
      headline: "Exodus Pre-Tipped Keratin Extensions",
      subtitle: "U-Tip, Flat-Tip & C-Tip Keratin Hair Extensions",
      story: [
        "Exodus Pre-Tipped Bonded Hair Extensions are designed for professional hair-fusion applications and are available in I-Tip, Flat-Tip and C-Tip styles.",
        "Made from 100% high-quality Remy human hair, these extensions feature keratin-based tips manufactured using Italian keratin to provide a strong and reliable bond.",
        "The pre-tipped construction helps make the fusion application process more convenient and efficient, while providing secure attachment and long-lasting wear when professionally applied and properly maintained.",
      ],
      availableStyles: [
        "I-Tip Extensions",
        "Flat-Tip Extensions",
        "C-Tip Extensions",
      ],
      keyFeatures: [
        "100% high-quality Remy human hair",
        "Pre-tipped keratin construction",
        "Italian keratin tips",
        "Designed for professional fusion applications",
        "Convenient and efficient application",
        "Secure attachment",
        "Available in multiple shades and lengths",
      ],
      lengths: '18" – 26"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
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
    narration: {
      headline: "Exodus Clip-In Extensions",
      subtitle: "Instant Length & Volume with Clip-In Hair Extensions",
      story: [
        "Exodus Clip-In Extensions provide a convenient way to add instant length, volume and styling versatility without committing to a permanent hair-extension application.",
        "The hair is securely stitched into wefts fitted with clips, allowing the extensions to be easily installed, removed and reused as desired.",
        "Ideal for customers looking for a flexible hair transformation, Exodus Clip-In Extensions can be applied when needed and removed after use.",
      ],
      keyFeatures: [
        "Securely stitched hair wefts",
        "Integrated clips for easy application",
        "Easy to install and remove",
        "Reusable",
        "Adds instant length and volume",
        "No permanent application required",
        "Available in a variety of colours",
      ],
      lengths: '18" – 26"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
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
    name: "Closure",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    narration: {
      headline: "Exodus Frontals & Closures",
      subtitle: "Natural-Looking Hair Frontals & Closures",
      story: [
        "Exodus Frontals and Closures are crafted using Indian Remy Hair, selected for its naturally rich texture, softness and authentic appearance.",
        "Designed to complement natural hair and extension installations, these hair additions help create a seamless and natural-looking finish.",
        "With quality Remy human hair and carefully selected textures, Exodus Frontals and Closures are suitable for customers and professionals seeking a premium hair-extension solution.",
      ],
      lengths: '12" – 20"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
    specs: {
      type: "Closure",
      processing: "In-house processed",
      customization: "Custom-made and tailored to client specifications",
    },
    image: "/images/wigsandhairpieces/Closure/CLOSURE-1.jpg",
    images: [
      "/images/wigsandhairpieces/Closure/CLOSURE-1.jpg",
      "/images/wigsandhairpieces/Closure/CLOSURE-2.jpg",
      "/images/wigsandhairpieces/Closure/CLOSURE-3.JPG",
      "/images/wigsandhairpieces/Closure/CLOSURE-4.jpg",
      "/images/wigsandhairpieces/Closure/CLOSURE-5.JPG",
    ],
  },
  {
    id: "wig-fishnet",
    name: "Fishnet Wigs",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    narration: {
      headline: "Exodus Fishnet Wig",
      story: [
        "Exodus Fishnet Wig is a lightweight wig constructed on a flexible, breathable net base. The hair is carefully attached to the net to provide a natural appearance while allowing good air circulation and comfort.",
        "Fishnet wigs are versatile, easy to wear, and suitable for everyday use. They are available in different hair lengths, textures, colours, and styles to meet individual requirements.",
      ],
      keyFeatures: [
        "Lightweight and breathable construction",
        "Comfortable for extended wear",
        "Natural-looking hair appearance",
        "Available in different lengths, colours, and textures",
        "Suitable for everyday and fashion use",
      ],
      lengths: '14" – 26"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
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
    name: "Frontal ",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    narration: {
      headline: "Exodus Frontals & Closures",
      subtitle: "Natural-Looking Hair Frontals & Closures",
      story: [
        "Exodus Frontals and Closures are crafted using Indian Remy Hair, selected for its naturally rich texture, softness and authentic appearance.",
        "Designed to complement natural hair and extension installations, these hair additions help create a seamless and natural-looking finish.",
        "With quality Remy human hair and carefully selected textures, Exodus Frontals and Closures are suitable for customers and professionals seeking a premium hair-extension solution.",
      ],
      lengths: '12" – 20"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
    specs: {
      type: "Frontal ",
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
    name: "Toppers",
    category: "Wigs & Hairpieces",
    description: "Custom-made, processed in-house, and tailored to client specifications.",
    narration: {
      headline: "Exodus Toppers & Hair Patches",
      subtitle: "Natural-Looking Hair Toppers & Hair Patches",
      story: [
        "Exodus Toppers and Hair Patches are made using quality Indian Remy Hair, offering a soft texture and natural appearance.",
        "Designed to blend with existing hair, these products provide a versatile option for adding coverage, volume and a fuller-looking appearance.",
        "Their natural-looking finish makes them suitable for customers seeking discreet hair-enhancement solutions.",
      ],
      lengths: '14" – 24"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
    specs: {
      type: "Toppers",
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
  {
    id: "wig-closure-piece",
    name: "Closure wig",
    category: "Wigs & Hairpieces",
    description: "",
    narration: {
      headline: "Exodus Closure Wig",
      story: [
        "Exodus Closure Wig is designed with a lace or closure piece positioned at the crown or front of the wig, creating the appearance of a natural scalp and hairline. The closure helps protect the natural hair while providing a neat and realistic finish.",
        "Closure wigs are available in different closure sizes and styles and can be customized according to the desired hairstyle and application.",
      ],
      keyFeatures: [
        "Natural-looking scalp and hairline",
        "Protective and convenient styling option",
        "Neat and secure construction",
        "Available in different textures, lengths, and colours",
        "Suitable for both everyday wear and special occasions",
      ],
      lengths: '14" – 26"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
    image: "/images/wigsandhairpieces/closure-wig/CLOSURE WIG-1.jpeg",
    images: [
      "/images/wigsandhairpieces/closure-wig/CLOSURE WIG-1.jpeg",
      "/images/wigsandhairpieces/closure-wig/CLOSURE WIG - 2.JPG",
      "/images/wigsandhairpieces/closure-wig/CLOSURE WIG -3.JPG",
      "/images/wigsandhairpieces/closure-wig/CLOSURE WIG -4.JPG",
      "/images/wigsandhairpieces/closure-wig/CLOSURE WIG - 5.jpg",
    ],
  },
  {
    id: "wig-frontal-piece",
    name: "Lace front wig",
    category: "Wigs & Hairpieces",
    description: "",
    narration: {
      headline: "Exodus Lace Front Wigs",
      subtitle: "Natural-Looking Lace Front Human Hair Wigs",
      story: [
        "Exodus Lace Front Wigs combine quality Indian Remy Hair with a lace-front construction designed to create a natural-looking hairline.",
        "The soft texture and authentic appearance of Remy human hair make these wigs an excellent choice for customers seeking a versatile and premium hair solution.",
      ],
      lengths: '14" – 24"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
    image: "/images/wigsandhairpieces/lace-front-wig/LACE FRONT WIG-1.jpg",
    images: [
      "/images/wigsandhairpieces/lace-front-wig/LACE FRONT WIG-1.jpg",
      "/images/wigsandhairpieces/lace-front-wig/LACE FRONT WIG-2.jpg",
      "/images/wigsandhairpieces/lace-front-wig/LACE FRONT WIG-2C.png",
      "/images/wigsandhairpieces/lace-front-wig/LACE FRONT WIG -3.JPG",
      "/images/wigsandhairpieces/lace-front-wig/LACE FRONT WIG - 3C.png",
      "/images/wigsandhairpieces/lace-front-wig/LACE FRONT WIG-4.JPG",
      "/images/wigsandhairpieces/lace-front-wig/LACE FRONT WIG -5.JPG",
    ],
  },
  {
    id: "wig-fringes-ponytail",
    name: "Fringes & Ponytail",
    category: "Wigs & Hairpieces",
    description: "",
    narration: {
      headline: "Exodus Fringes & Ponytails",
      subtitle: "Human Hair Fringes & Ponytail Extensions",
      story: [
        "Exodus Fringes and Ponytails are crafted using quality Indian Remy Hair to provide a natural-looking texture and seamless appearance.",
        "They offer a convenient way to change or enhance a hairstyle while adding versatility, volume and styling options.",
        "Whether creating a new fringe look or adding length and fullness to a ponytail, Exodus virgin human hair additions provide a practical solution for professional and personal styling.",
      ],
      lengths: '14" – 26"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
    image: "/images/products/placeholder.svg",
  },
  {
    id: "wig-full-lace",
    name: "Full Lace Wig",
    category: "Wigs & Hairpieces",
    description: "",
    narration: {
      headline: "Exodus Full Lace Wigs",
      subtitle: "Premium Full Lace Human Hair Wigs",
      story: [
        "Exodus Full Lace Wigs are made with quality Indian Remy Human Hair, offering a soft, natural-looking texture and authentic appearance.",
        "The lace construction provides styling versatility and helps create a natural-looking hairline when professionally fitted and styled.",
        "Available in multiple lengths and colours, Exodus Full Lace Wigs are designed for customers looking for a premium human-hair wig solution.",
      ],
      lengths: '14" – 26"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
    image: "/images/wigsandhairpieces/full lace wigs/FULL LACE WIG -4C.png",
    images: [
      "/images/wigsandhairpieces/full lace wigs/FULL LACE WIG -4C.png",
      "/images/wigsandhairpieces/full lace wigs/FULL LACE WIG -2.JPG",
      "/images/wigsandhairpieces/full lace wigs/FULL LACE WIG -3.JPG",
      "/images/wigsandhairpieces/full lace wigs/FULL LACE WIG -4.jpg",
    ],
  },
  {
    id: "wig-workout",
    name: "Workout Wig",
    category: "Wigs & Hairpieces",
    description: "",
    narration: {
      headline: "Exodus Workout/ Headband Wig",
      story: [
        "Exodus Workout Wig is specially designed for an active lifestyle, offering a secure, lightweight, and comfortable fit during physical activity. Its construction helps keep the wig firmly in place while allowing freedom of movement.",
        "Ideal for workouts, walking, running, yoga, sports, and other active pursuits, workout wigs combine functionality with a natural appearance.",
      ],
      keyFeatures: [
        "Lightweight and secure with a Headband",
        "Designed for active lifestyles",
        "Comfortable and breathable",
        "Easy to wear and maintain",
        "Suitable for workouts, sports, travel, and outdoor activities",
      ],
      lengths: '14" – 26"',
      colours: "Natural, Browns, Blondes, 613, Gray, Jet Black, Auburn",
    },
    image: "/images/wigsandhairpieces/workout wigs/WORKOUT WIG - 5.jpg",
    images: [
      "/images/wigsandhairpieces/workout wigs/WORKOUT WIG - 5.jpg",
      "/images/wigsandhairpieces/workout wigs/WORKOUT WIG-2.jpg",
      "/images/wigsandhairpieces/workout wigs/WORKOUT WIG - 3.JPG",
      "/images/wigsandhairpieces/workout wigs/WORKOUT WIG - 4.JPG",
      "/images/wigsandhairpieces/workout wigs/WORKOUTN WIG-1.JPG",
      "/images/wigsandhairpieces/workout wigs/WORKOUT WIG - 6.jpg",
    ],
  },
  {
    id: "wig-cranial-prosthesis",
    name: "Cranial Prosthesis",
    category: "Wigs & Hairpieces",
    description: "",
    image: "/images/wigsandhairpieces/cranialprosthesis/WhatsApp Image 2026-10-13 at 12.47.33 PM.jpeg",
    images: [
      "/images/wigsandhairpieces/cranialprosthesis/WhatsApp Image 2026-10-13 at 12.47.33 PM.jpeg",
      "/images/wigsandhairpieces/cranialprosthesis/WhatsApp Image 2026-10-13 at 12.47.34 PM.jpeg",
      "/images/wigsandhairpieces/cranialprosthesis/CANCER WIG - 9.JPG",
      "/images/wigsandhairpieces/cranialprosthesis/CANCER WIG - 10.JPG",
    ],
  },

  // --- CRANIAL PROSTHESIS ---
  
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

