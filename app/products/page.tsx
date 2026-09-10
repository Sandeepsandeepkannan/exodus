"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
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
  FileText, 
  ShieldCheck, 
  Filter
} from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [viewMode, setViewMode] = useState<"categorized" | "grid">("categorized");

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Products": sampleProducts.length };
    productCategories.forEach((cat) => {
      counts[cat.id] = sampleProducts.filter((p) => p.category === cat.id).length;
    });
    return counts;
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" || product.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Categories to render for categorized view
  const categoriesToDisplay = useMemo(() => {
    if (activeCategory !== "All Products") {
      return productCategories.filter((c) => c.id === activeCategory);
    }
    return productCategories;
  }, [activeCategory]);

  return (
    <div className="space-y-0 pt-24 sm:pt-28">
      
      {/* 1. HERO HEADER */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
              EXODUS EXPORTS PRODUCT CATALOGUE
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
              Authentic Indian <span className="text-brand-navy">Human Hair Range</span>
            </h1>
            
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              100% authentic Indian human hair, sourced ethically from South Indian temples and manufactured in-house in our Chennai factories. We supply wholesalers, distributors, salons, and wig manufacturers across 65+ countries.
            </p>

            {/* Quick Stats Pillar Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
              <div className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-subtle">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sourcing</div>
                <div className="text-sm font-bold text-slate-900 font-display mt-0.5">South Indian Temples</div>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-subtle">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Authenticity</div>
                <div className="text-sm font-bold text-slate-900 font-display mt-0.5">100% Indian Hair</div>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-subtle">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global Reach</div>
                <div className="text-sm font-bold text-slate-900 font-display mt-0.5">65+ Countries</div>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-subtle">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Manufacturing</div>
                <div className="text-sm font-bold text-slate-900 font-display mt-0.5">In-House Chennai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY NAVIGATION & FILTER BAR */}
      <section className="sticky top-[72px] sm:top-[76px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Category Navigation Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveCategory("All Products")}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeCategory === "All Products"
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>All Products</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === "All Products" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                }`}>
                  {categoryCounts["All Products"]}
                </span>
              </button>

              {productCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-2 ${
                      isActive
                        ? "bg-brand-navy text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                      {categoryCounts[cat.id]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search & Layout View Mode Switcher */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products, wefts, wigs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                />
              </div>

              {/* View Toggle */}
              <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
                <button
                  onClick={() => setViewMode("categorized")}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    viewMode === "categorized"
                      ? "bg-white text-brand-navy shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Category View"
                >
                  By Category
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-brand-navy shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="All Grid View"
                >
                  All Grid ({filteredProducts.length})
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOGUE PRESENTATION */}
      <section className="py-16 sm:py-20 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200 max-w-xl mx-auto">
              <Filter className="h-10 w-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 font-display">No Products Found</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                No hair products match your search query &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All Products");
                  setSearchQuery("");
                }}
                className="mt-5 px-5 py-2.5 text-xs font-bold text-white bg-brand-navy rounded-lg hover:bg-brand-navyHover transition-colors shadow-sm"
              >
                Reset Filter & View All
              </button>
            </div>
          ) : viewMode === "grid" || searchQuery.trim() !== "" ? (
            /* UNIFIED GRID VIEW */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="text-sm font-bold text-slate-800 font-display">
                  Showing {filteredProducts.length} Product{filteredProducts.length > 1 ? "s" : ""}
                </div>
                {activeCategory !== "All Products" && (
                  <span className="text-xs font-medium text-brand-navy bg-brand-navy/5 px-2.5 py-1 rounded-md">
                    Category: {activeCategory}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <ScrollReveal key={product.id} delay={idx * 0.04}>
                    <ProductCard
                      product={product}
                      onSelect={(prod) => setSelectedProduct(prod)}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ) : (
            /* STRUCTURED CATEGORY-BY-CATEGORY VIEW */
            <div className="space-y-24">
              {categoriesToDisplay.map((cat, catIdx) => {
                const catProducts = sampleProducts.filter((p) => p.category === cat.id);
                if (catProducts.length === 0) return null;

                return (
                  <div key={cat.id} id={cat.id.toLowerCase().replace(/\s+/g, "-")} className="space-y-8 scroll-mt-36">
                    {/* Category Header Banner */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b-2 border-slate-100">
                      <div className="space-y-2 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy font-display">
                          <span className="h-2 w-2 rounded-full bg-brand-red"></span>
                          EXODUS CATEGORY {catIdx + 1}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                          {cat.name}
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {cat.shortDesc}
                        </p>
                      </div>

                      <div className="text-xs font-bold text-slate-400 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200 shrink-0 self-start md:self-end">
                        {catProducts.length} Products
                      </div>
                    </div>

                    {/* Category Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {catProducts.map((product, pIdx) => (
                        <ScrollReveal key={product.id} delay={pIdx * 0.05}>
                          <ProductCard
                            product={product}
                            onSelect={(prod) => setSelectedProduct(prod)}
                          />
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* 4. AUTHENTIC INDIAN HAIR TEXTURES */}
      <section className="py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-14 text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-navy font-display">
              <Sparkles className="h-4 w-4 text-brand-navy" />
              AUTHENTIC TEXTURE SPECTRUM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              Indian Human Hair Textures
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Natural textures and custom steam-crafted patterns produced in our Chennai factory.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairTextures.map((tex, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.06}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-subtle hover:border-brand-navy/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-2 w-2 rounded-full bg-brand-red"></span>
                      <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-brand-navy transition-colors">
                        {tex.name}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {tex.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. VERIFIED SHADE PALETTE */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-14 text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-navy font-display">
              <Palette className="h-4 w-4 text-brand-navy" />
              AUTHENTIC CLIENT SHADE PALETTE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              Hair Colour Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              All products are custom-made, processed in-house, and tailored to client specifications.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hairColours.map((group, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-slate-50/70 p-6 rounded-xl border border-slate-200/90 shadow-subtle flex flex-col justify-between h-full space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-brand-navy font-bold text-base font-display border-b border-slate-200/60 pb-3">
                      <span className="h-2 w-2 rounded-full bg-brand-red"></span>
                      {group.category}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Swatches List */}
                  <div className="space-y-2.5 pt-2">
                    {group.shades.map((shade, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-brand-navy/30 transition-colors"
                      >
                        <span className="text-xs font-bold text-slate-800">
                          {shade.name}
                        </span>
                        
                        {/* Visual Swatch */}
                        <div
                          className="h-5 w-8 rounded-md border border-slate-300 shadow-2xs shrink-0"
                          style={{
                            background: shade.gradient ? shade.gradient : shade.hex,
                          }}
                          title={shade.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CRANIAL PROSTHESIS MEDICAL HIGHLIGHT */}
      <section className="py-20 bg-[#B91941] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white font-display">
                <HeartPulse className="h-4 w-4 text-white" /> SPECIALIZED MEDICAL DIVISION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                Cranial Prosthesis
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Medical-grade wigs designed for comfort and confidence during hair loss from chemotherapy or alopecia. Custom-made in-house with 100% authentic Indian human hair.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-white/90">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span><strong>100% Authentic Indian Human Hair:</strong> Hand-crafted using pure virgin Indian human hair.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span><strong>Comfort & Confidence:</strong> Designed specifically for sensitive scalps during medical hair loss.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span><strong>Custom In-House Tailoring:</strong> Custom-made and tailored to client specifications.</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact?product=Cranial%20Prosthesis"
                  className="inline-flex items-center px-6 py-3.5 text-sm font-bold text-[#B91941] bg-white hover:bg-white/90 hover:-translate-y-0.5 rounded-lg shadow-sm transition-all group"
                >
                  Enquire About Cranial Prosthesis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 group">
                <Image
                  src="/images/products/cranial_prostheses.jpg"
                  alt="Medical Cranial Hair Prostheses"
                  width={800}
                  height={600}
                  className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 7. OFFICIAL COMMERCIAL TERMS & EXPORT CONDITIONS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-subtle space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="h-10 w-10 rounded-lg bg-brand-navy/10 flex items-center justify-center text-brand-navy shrink-0">
                <FileText className="h-5 w-5 text-brand-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Terms & Conditions of Sale</h3>
                <p className="text-xs text-slate-500">Official commercial terms for wholesale and international B2B export orders</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                <div className="font-bold text-slate-900 font-display flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-navy" /> 100% Indian Human Hair Only
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  No synthetic blends. Pure authentic Indian human hair.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                <div className="font-bold text-slate-900 font-display flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-navy" /> Payment Terms
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  100% advance payment via bank transfer.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                <div className="font-bold text-slate-900 font-display flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-navy" /> Delivery Term
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Ex-Factory Chennai, India.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                <div className="font-bold text-slate-900 font-display flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-navy" /> Exchange Policy
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Exchange within 7 business days (conditions apply). No refund policy.
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-500 italic pt-3 border-t border-slate-100 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
              <span>Human hair is a natural product, and slight variations are inherent.</span>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 8. FINAL WHOLESALE CTA */}
      <CTASection
        title="Looking for Genuine Indian Human Hair Supply?"
        subtitle="We welcome distributors, partners, and wholesale enquiries worldwide. Grow your business with a trusted Indian human hair manufacturer."
        buttonText="Contact Trade Desk"
      />

      {/* Product Spec Sheet Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}
