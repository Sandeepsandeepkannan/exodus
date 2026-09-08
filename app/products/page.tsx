"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProductCard, { ProductItem } from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { sampleProducts, hairTextures, hairColours } from "@/data/products";
import { Search, Sparkles, HeartPulse, Palette, CheckCircle2, ArrowRight } from "lucide-react";

const categories = ["All Products", "Hair Extensions", "Wigs & Closures", "Cranial Prostheses"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "All Products" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. PRODUCTS HERO */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> EXODUS EXPORTS PRODUCT CATALOGUE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            Authentic Indian <span className="text-brand-navy">Human Hair</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Crafted in-house in Chennai, India. We manufacture 100% raw virgin Indian hair extensions, hand-tied wefts, full lace wigs, HD closures, toppers, and medical cranial prostheses for international B2B partners.
          </p>
        </div>
      </section>

      {/* 2. CATALOGUE FILTER & MAIN GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-6">
            
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-brand-navy text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search hair extensions, wigs, closures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
              />
            </div>

          </div>

          {/* Filtered Product Cards */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <ScrollReveal key={product.id} delay={idx * 0.06}>
                  <ProductCard
                    product={product}
                    onSelect={(prod) => setSelectedProduct(prod)}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-600 font-medium">
                No hair products found matching your search term.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All Products");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-brand-navy bg-brand-navy/10 rounded-md hover:bg-brand-navy/20 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. CRANIAL PROSTHESES HIGHLIGHT */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy font-display">
                <HeartPulse className="h-4 w-4 text-brand-navy" /> MEDICAL HAIR CARE SOLUTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                Cranial Hair Prostheses
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our cranial hair prostheses are specialized medical wigs custom-engineered for individuals experiencing severe hair loss due to chemotherapy, alopecia, or medical treatments.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <span><strong>Ultra-Soft Base:</strong> Constructed using certified non-allergic, skin-safe medical cap bases.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <span><strong>Authentic Human Hair:</strong> Hand-ventilated using 100% pure raw Indian hair for natural movement.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <span><strong>Custom Vacuum & Molded Fit:</strong> Tailored specifically to scalp dimensions for maximum comfort and security.</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact?product=Cranial%20Prostheses"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navyHover hover:-translate-y-0.5 rounded-md shadow-sm transition-all group"
                >
                  Enquire About Medical Prostheses
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-elevated border border-slate-200 bg-white group">
                <Image
                  src="/images/products/cranial_prostheses.jpg"
                  alt="Medical Cranial Hair Prostheses"
                  width={800}
                  height={600}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. INDIAN HUMAN HAIR TEXTURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-16">
            <SectionHeading
              eyebrow="AUTHENTIC TEXTURES"
              title="Indian Human Hair Textures"
              subtitle="Exodus Exports offers the complete spectrum of natural raw Indian hair textures, uncompromised by harsh chemical processing."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairTextures.map((tex, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.06}>
                <div className="p-6 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-brand-navy/40 hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-5 w-5 text-brand-navy" />
                    <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-brand-navy transition-colors">
                      {tex.name}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {tex.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. COLOUR SHADES & CUSTOMIZATION */}
      <section className="py-24 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-16">
            <SectionHeading
              eyebrow="SHADE PALETTE"
              title="Hair Colour Categories"
              subtitle="Our in-house master colorists produce precise international shade categories using gentle lift techniques that preserve hair integrity."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairColours.map((group, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle hover:border-brand-navy/30 transition-all duration-300 space-y-4 h-full">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-lg font-display border-b border-slate-100 pb-3">
                    <Palette className="h-5 w-5 text-brand-navy" />
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.shades.map((shade, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
                      >
                        {shade}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FINAL ENQUIRY CTA */}
      <CTASection
        title="Require Custom Hair Specifications or Samples?"
        subtitle="We partner with salons, wigmakers, and wholesale distributors worldwide. Contact our Chennai export desk for custom bundle ratios, private labeling, and FOB rates."
        buttonText="Enquire Now"
      />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}
