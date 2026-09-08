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
import { sampleProducts, hairTextures } from "@/data/products";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="EXODUS EXPORTS"
                title="Indian Hair. Global Standards."
                subtitle="Headquartered in Chennai, India, Exodus Exports specializes in processing pure raw Indian human hair into high-grade extensions, wefts, and custom wig systems."
              />
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
                <p>
                  Recognized worldwide for its natural strength, texture versatility, and rich luster, authentic South Indian temple hair remains the gold standard in human hair products.
                </p>
                <p>
                  At our Chennai manufacturing unit, master hair artisans oversee every step of sorting, hackling, manual wefting, and lace ventilation to deliver uncompromising quality to international salons, wig makers, and distributors.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-display">In-House Manufacturing</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Strict quality control from raw hair bundle to finished wig.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                  <ShieldCheck className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-display">Cuticle Alignment</h4>
                    <p className="text-xs text-slate-500 mt-0.5">100% tangle-free Remy hair that colors and styles easily.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-bold text-brand-navy hover:text-brand-navyHover group"
                >
                  Read More About Exodus Exports
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-elevated border border-slate-100 group">
                <Image
                  src="/images/products/hair_wigs.jpg"
                  alt="Full Lace Wigs & Frontals Production"
                  width={800}
                  height={600}
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. WHY EXODUS EXPORTS */}
      <WhyChooseUs />

      {/* 4. PRODUCT SHOWCASE */}
      <section className="py-24 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="OUR HAIR PRODUCTS"
              title="Exodus Product Lines"
              subtitle="Explore our handcrafted range of hair extensions, wefts, wigs, closures, and cranial prostheses."
            />
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-brand-navy bg-brand-navy/5 hover:bg-brand-navy/10 rounded-md transition-colors shrink-0 group"
            >
              View Complete Product Catalogue
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.slice(0, 6).map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 0.08}>
                <ProductCard
                  product={product}
                  onSelect={(prod) => setSelectedProduct(prod)}
                />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INDIAN HUMAN HAIR CHARACTERISTICS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-16">
            <SectionHeading
              eyebrow="AUTHENTIC TEMPLE HAIR"
              title="The Character of Indian Human Hair"
              subtitle="Raw Indian human hair is globally cherished for its natural cuticle alignment, strength, and seamless blending capability."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="right" className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-subtle bg-slate-100 group">
                <Image
                  src="/images/products/hair_textures.jpg"
                  alt="Raw Indian Hair Textures"
                  width={800}
                  height={600}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6 space-y-6">
              <p className="text-slate-600 text-base leading-relaxed">
                Unlike synthetic or chemically processed hair, authentic virgin Indian human hair retains its natural cuticle layer intact from root to tip. This ensures zero matting or tangling and allows hair artists to bleach, dye (up to #613 blonde), and heat-style with complete confidence.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {hairTextures.slice(0, 6).map((tex, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-brand-navy/30 transition-colors">
                    <div className="font-bold text-slate-900 text-sm font-display flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> {tex.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{tex.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/about-human-hair"
                  className="inline-flex items-center text-sm font-bold text-brand-navy hover:underline group"
                >
                  Learn More About Indian Hair Characteristics
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 6. IN-HOUSE CRAFTSMANSHIP PROCESS */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-sky-400 font-display flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> IN-HOUSE MANUFACTURING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Crafted In-House. Quality at Every Stage.
            </h2>
            <p className="text-slate-300 text-base">
              Every bundle and hairpiece passes through our rigorous 5-stage craftsmanship protocol at our Chennai facility.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            
            {[
              { step: "1", title: "Sourcing", desc: "Direct ethically sourced raw temple hair bundles." },
              { step: "2", title: "Washing", desc: "Organic herbal cleansing & natural sun drying." },
              { step: "3", title: "Hackling", desc: "Manual hackle grading for single-donor ratio consistency." },
              { step: "4", title: "Wefting & Ventilation", desc: "Precision 8-thread hand-tying and lace ventilation." },
              { step: "5", title: "Inspection", desc: "Tangle, shed, and texture audit before export sealing." },
            ].map((st, sIdx) => (
              <ScrollReveal key={sIdx} delay={sIdx * 0.1}>
                <div className="p-6 rounded-lg bg-slate-800/80 border border-slate-700/60 hover:border-brand-navy/60 transition-all duration-300 hover:-translate-y-1 space-y-3 h-full">
                  <div className="h-10 w-10 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center mx-auto text-sm">
                    {st.step}
                  </div>
                  <h3 className="font-bold text-white text-base font-display">{st.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>

      {/* 7. FINAL CTA */}
      <CTASection
        title="Looking for Premium Indian Human Hair?"
        subtitle="Connect with our Chennai trade desk to request product catalogs, hair samples, custom length ratios, and wholesale pricing."
        buttonText="Contact Us Today"
      />

      {/* Product Specs Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}
