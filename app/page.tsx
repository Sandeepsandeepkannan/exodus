"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductCard, { ProductItem } from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import { sampleProducts, productCategories, hairTextures } from "@/data/products";
import { 
  ArrowRight, 
  HeartHandshake, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeHomeCategory, setActiveHomeCategory] = useState<string>("All");

  const homeFilteredProducts = activeHomeCategory === "All"
    ? sampleProducts.slice(0, 6)
    : sampleProducts.filter((p) => p.category === activeHomeCategory).slice(0, 6);

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. PRODUCT CATEGORY SHOWCASE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
              CORE PRODUCT PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              Explore Our Product Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Manufactured in-house in Chennai from ethically procured South Indian temple hair.
            </p>
          </ScrollReveal>

          {/* 4 Core Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat, idx) => (
              <ScrollReveal key={cat.id} delay={idx * 0.08}>
                <Link
                  href={`/products#${cat.id.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group bg-white rounded-xl border border-slate-200 shadow-subtle hover:border-brand-navy/50 hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full overflow-hidden"
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden shrink-0">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-brand-navy uppercase tracking-wider border border-slate-200">
                      {cat.badge}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-brand-navy transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                        {cat.shortDesc}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-bold text-brand-navy group-hover:text-brand-navyHover border-t border-slate-100">
                      <span>Explore Category</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 3. COMPANY INTRODUCTION & FOUNDER VISION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="EXODUS EXPORTS PVT. LTD."
                title="100% Authentic Indian Hair. Global Export Integrity."
                subtitle="Established in 2002 in Chennai, South India, Exodus Exports is a premier exporter of 100% virgin Indian Remy human hair, exporting to over 65 countries across 5 continents."
              />
              <div className="space-y-4 text-slate-600 text-base leading-relaxed pt-2">
                <p>
                  Under the leadership of Managing Director <strong>Mrs. Sheeba Paul</strong> (with 28+ years of global industry experience), Exodus Exports specializes in processing raw South Indian temple hair into high-grade hand-tied wefts, machine wefts, HD lace frontals, full lace wigs, and medical cranial prostheses.
                </p>
                <p>
                  We focus on quality over quantity and build long-term relationships backed by strict quality control, ethical sourcing, and complete transparency.
                </p>
              </div>

              {/* Social Impact Highlight */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm font-display text-brand-navy">
                  <HeartHandshake className="h-5 w-5 text-brand-navy" /> Social Impact: 160+ Women Rehabilitated
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Teaming up with the <strong>Cancer Institute (WIA), Chennai</strong> (Dr. Shanta, NABARD, Skill India), we rehabilitate women previously engaged in hazardous beedi rolling into safe hair manufacturing jobs under WHO FCTC Article 17.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-bold text-brand-navy hover:text-brand-navyHover group"
                >
                  Read Our Full Corporate Story & Founder Profile
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-100 group">
                <Image
                  src="/images/products/hair_wigs.jpg"
                  alt="Full Lace Wigs & Frontals Craftsmanship"
                  width={800}
                  height={600}
                  className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-slate-200/80 shadow-subtle flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900 font-display">100% Ethical Sourcing</div>
                    <div className="text-slate-500 mt-0.5">Procured from South Indian Temple Auctions</div>
                  </div>
                  <span className="px-2.5 py-1 bg-brand-navy/10 text-brand-navy font-bold rounded-md">Chennai, India</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE EXODUS EXPORTS */}
      <WhyChooseUs />

      {/* 5. FROM TEMPLE TO CRAFT (5-STAGE MANUFACTURING PROCESS) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-400 font-display flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-sky-400" /> MANUFACTURING PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Processing Hair: From Temple to Finished Product
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Every product at Exodus Exports is manufactured in-house, ensuring complete quality control. Approximately 25–35% weight loss occurs during processing due to removal of impurities and short hair.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {[
              { step: "1", title: "Temple Procurement", desc: "Temple-sourced virgin Indian hair procurement from South Indian temple auctions." },
              { step: "2", title: "Sorting & Hackling", desc: "Sorted, hackled, and meticulously arranged by size to remove impurities." },
              { step: "3", title: "Washing & Sun Drying", desc: "Washed with conditioners and cleansers; sun-dried naturally for softness." },
              { step: "4", title: "Crafting & Processing", desc: "Processed into wefts, coloured hair, wigs, and custom specifications." },
              { step: "5", title: "Quality Control", desc: "Manual inspection of each bundle; optional SGS / INTERTEK inspections." },
            ].map((st, sIdx) => (
              <ScrollReveal key={sIdx} delay={sIdx * 0.1}>
                <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/60 hover:border-brand-navy/60 transition-all duration-300 hover:-translate-y-1 space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="h-10 w-10 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center mx-auto text-sm">
                      {st.step}
                    </div>
                    <h3 className="font-bold text-white text-base font-display">{st.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FEATURED PRODUCTS SHOWCASE WITH CATEGORY SWITCHER */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="PRODUCT RANGE"
              title="Featured Indian Human Hair Range"
              subtitle="Explore our range of raw Indian hair, wefts, wigs, hairpieces, and cranial prostheses."
            />
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 text-sm font-bold text-brand-navy bg-brand-navy/5 hover:bg-brand-navy/10 rounded-lg transition-colors shrink-0 group"
            >
              View Full Product Catalogue ({sampleProducts.length})
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          {/* Quick Category Filter Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-100">
            {["All", "Hair Types", "Extensions & Wefts", "Wigs & Hairpieces", "Cranial Prosthesis"].map((catName) => (
              <button
                key={catName}
                onClick={() => setActiveHomeCategory(catName)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap ${
                  activeHomeCategory === catName
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {catName === "All" ? "Featured All" : catName}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeFilteredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 0.06}>
                <ProductCard
                  product={product}
                  onSelect={(prod) => setSelectedProduct(prod)}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3.5 text-sm font-bold text-white bg-brand-navy hover:bg-brand-navyHover rounded-lg shadow-sm transition-all duration-200 group"
            >
              Browse All 20 Verified Product Lines
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. INDIAN HUMAN HAIR CHARACTERISTICS */}
      <section className="py-24 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto space-y-3">
            <SectionHeading
              eyebrow="AUTHENTIC TEMPLE HAIR"
              title="The Truth About Indian Human Hair"
              subtitle="70–80% of human hair sold globally originates from India. We deal exclusively in 100% pure Indian hair with zero mislabeling."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="right" className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-subtle bg-slate-100 group">
                <Image
                  src="/images/products/hair_textures.jpg"
                  alt="Raw Indian Hair Textures Spectrum"
                  width={800}
                  height={600}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6 space-y-6">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                South Indian temple hair is naturally strong, resilient, and versatile. Retaining its cuticles intact, it can be bleached to blonde, heat-styled, washed, and reused for long-term wear with proper care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {hairTextures.map((tex, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-white border border-slate-200/80 hover:border-brand-navy/30 transition-colors shadow-2xs">
                    <div className="font-bold text-slate-900 text-xs sm:text-sm font-display flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
                        {tex.name}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">{tex.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/about-human-hair"
                  className="inline-flex items-center text-sm font-bold text-brand-navy hover:underline group"
                >
                  Read All Facts & Educational Hair Guide
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 8. FINAL TRADE CTA */}
      <CTASection
        title="Looking for Genuine Indian Human Hair Supply?"
        subtitle="Connect with our Chennai export desk for custom bundle orders, hair samples, FOB pricing, and international shipping."
        buttonText="Contact Trade Desk"
      />

      {/* Product Specs Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}
