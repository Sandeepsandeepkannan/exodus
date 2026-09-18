"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ProductCard, { ProductItem } from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { sampleProducts, productCategories, hairTextures, hairColours } from "@/data/products";
import { 
  Search, 
  Sparkles, 
  HeartPulse, 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Filter,
  Layers,
  Scissors,
  Sun,
  Droplets,
  PackageCheck
} from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" || product.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Categories to render
  const categoriesToDisplay = useMemo(() => {
    if (activeCategory !== "All Products") {
      return productCategories.filter((c) => c.id === activeCategory);
    }
    return productCategories;
  }, [activeCategory]);

  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO HEADER */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> Products
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Product range
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We manufacture and supply a complete range of Indian Remy Human Hair products, including:
          </p>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              All products are custom-made, processed in-house, and tailored to client specifications.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATALOGUE WITH CATEGORY TABS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Controls: Search & Category Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveCategory("All Products")}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === "All Products"
                    ? "bg-[#A9153B] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Products ({sampleProducts.length})
              </button>
              {productCategories.map((cat) => {
                const count = sampleProducts.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeCategory === cat.id
                        ? "bg-[#A9153B] text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#A9153B] focus:border-transparent"
              />
            </div>
          </div>

          {/* Categorized Product Display */}
          <div className="space-y-16">
            {categoriesToDisplay.map((cat) => {
              const catProducts = filteredProducts.filter((p) => p.category === cat.id);
              if (catProducts.length === 0) return null;

              return (
                <div key={cat.id} className="space-y-8">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      {cat.name === "Hair Types" ? "Hair Products" : cat.name}
                    </h2>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                      {catProducts.length} items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onQuickView={(p) => setSelectedProduct(p)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredProducts.length === 0 && (
              <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-500 text-xs sm:text-sm">No products found matching your search.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. INDIAN HUMAN HAIR TYPES */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> Hair types
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Indian human hair types
            </h2>
          </ScrollReveal>

          {/* Remy Hair Hero Callout */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto text-center space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display text-[#A9153B]">
              Remy hair
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Indian Remy Hair is the highest natural grade of human hair. Cuticles are aligned in one direction, reducing tangling and increasing durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Remy Single Drawn */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
              <div className="text-[11px] font-bold text-[#A9153B] uppercase tracking-wider">Remy hair</div>
              <h3 className="text-base font-bold text-slate-900 font-display">Remy single drawn</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Natural length variation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Ponytail-like appearance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Cost-effective and authentic</span>
                </li>
              </ul>
            </div>

            {/* Remy Double Drawn */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
              <div className="text-[11px] font-bold text-[#A9153B] uppercase tracking-wider">Remy hair</div>
              <h3 className="text-base font-bold text-slate-900 font-display">Remy double drawn</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Uniform length bundles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Minimal tapering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Premium quality and appearance</span>
                </li>
              </ul>
            </div>

            {/* Non-Remy Hair */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Commercial</div>
              <h3 className="text-base font-bold text-slate-900 font-display">Non-Remy hair</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Collected fallen hair with mixed cuticle directions.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pt-1">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"></span>
                  <span>Affordable</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"></span>
                  <span>More prone to tangling</span>
                </li>
              </ul>
            </div>

            {/* Cuticle-Free / Tangle-Free Hair */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Treated</div>
              <h3 className="text-base font-bold text-slate-900 font-display">Cuticle-free / tangle-free hair</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chemically treated non-Remy hair to reduce tangling. This effect is temporary and diminishes after multiple washes.
              </p>
            </div>

            {/* Converted Remy Hair */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3 md:col-span-2 lg:col-span-2">
              <div className="text-[11px] font-bold text-[#A9153B] uppercase tracking-wider">Machine processed</div>
              <h3 className="text-base font-bold text-slate-900 font-display">Converted Remy hair</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The inverted cuticles are converted to the same direction using a machine.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INDIAN HUMAN HAIR TEXTURES */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> Textures
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Indian human hair textures
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Indian Straight Hair */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                Indian straight hair
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Naturally rare in India. Most straight textures are sourced from North-East India. Exodus focuses exclusively on South Indian temple hair, known for superior quality.
              </p>
            </div>

            {/* Indian Wavy Hair */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                Indian wavy hair
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The most common and versatile texture.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Blends easily</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Can be straightened or curled</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Available from 8” to 32”</span>
                </li>
              </ul>
            </div>

            {/* Indian Curly Hair */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                Indian curly hair
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Extremely Rare and naturally occurring.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Retains curls after washing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>High density and natural appearance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Each curl pattern is unique</span>
                </li>
              </ul>
            </div>

            {/* Indian Deep Wavy Hair */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                Indian deep wavy hair
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Steam-processed curls created from natural Indian Remy hair.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>No hazardous chemicals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Deep, defined waves</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" />
                  <span>Excellent elasticity and volume</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. MANUFACTURING & QUALITY CONTROL */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> Standards
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Manufacturing & quality control
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              All hair processing is carried out in our own factories in India, ensuring complete control over quality at every stage.
            </p>
          </ScrollReveal>

          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              Our Quality Standards Include:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Cuticle-intact Remy hair</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Multiple wash & conditioning cycles</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Manual inspection of each bundle</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Optional third-party inspections (SGS / INTERTEK)</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Phyto-sanitary & fumigation certificates on request</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Certificate of Origin when necessary</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PROCESSING HAIR (FROM MASTER DOCUMENT) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> In-house processing
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Processing hair
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every product at Exodus Exports is manufactured in-house, ensuring complete quality control.
            </p>
          </ScrollReveal>

          {/* 5 Processing Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="h-9 w-9 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-display">Procurement</h3>
              <p className="text-xs text-slate-600">Temple-sourced virgin Indian hair procurement</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="h-9 w-9 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-display">Sorting & hackling</h3>
              <p className="text-xs text-slate-600">Sorted, hackled and meticulously arranged by size</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="h-9 w-9 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-display">Washing</h3>
              <p className="text-xs text-slate-600">Washed with conditioners and cleansers</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="h-9 w-9 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-display">Natural sun drying</h3>
              <p className="text-xs text-slate-600">Sun-dried naturally for softness</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
              <div className="h-9 w-9 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                5
              </div>
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm font-display">Final crafting</h3>
              <p className="text-xs text-slate-600">Processed into wefts, coloured hair, wigs, and more</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Approximately 25–35% weight loss occurs during processing due to removal of impurities and short hair.
            </p>
          </div>

        </div>
      </section>

      {/* 7. COLOUR SHADES (FROM MASTER DOCUMENT) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> Palette
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Colour shades
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {hairColours.map((shade, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-center gap-3">
                <Palette className="h-5 w-5 text-[#A9153B] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900 font-display">{shade}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />

      {/* QUICK VIEW MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}
