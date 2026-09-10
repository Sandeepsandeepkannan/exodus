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
import { sampleProducts, productCategories } from "@/data/products";
import { 
  ArrowRight, 
  Sparkles, 
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Layers,
  Heart
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

      {/* 2. ABOUT EXODUS EXPORTS PVT. LTD. & OUR PHILOSOPHY */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="ABOUT US"
                title="About Exodus Exports Pvt. Ltd."
                subtitle="Established in 2002, Exodus Exports Pvt. Ltd. is an Export-Oriented Private Limited Company, headquartered in Chennai, South India."
              />
              <div className="space-y-4 text-slate-600 text-base leading-relaxed pt-2">
                <p>
                  With over two decades of industry experience, we have earned a reputation as one of India’s most trusted suppliers of premium Indian human hair. Our products are exported to over 65 countries across 5 continents, serving wholesalers, distributors, salons, and wig manufacturers.
                </p>
              </div>

              {/* Our Philosophy */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-display text-brand-navy flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-navy" /> Our Philosophy
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>We focus on quality over quantity</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>We don’t just sell hair — we build long-term relationships</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Every product is backed by strict quality control and ethical sourcing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>And we employ 100% Beedi rolling women</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-bold text-brand-navy hover:text-brand-navyHover group"
                >
                  Learn More About Our Company & Social Initiatives
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-100 group">
                <Image
                  src="/images/products/hair_wigs.jpg"
                  alt="Exodus Exports Pvt. Ltd. - Indian Human Hair"
                  width={800}
                  height={600}
                  className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-slate-200/80 shadow-subtle flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900 font-display">Exodus Exports Pvt. Ltd.</div>
                    <div className="text-slate-500 mt-0.5">Headquartered in Chennai, South India</div>
                  </div>
                  <span className="px-2.5 py-1 bg-brand-navy/10 text-brand-navy font-bold rounded-md">Est. 2002</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORY SHOWCASE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
              CORE PRODUCT PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              Our Product Categories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We manufacture and supply a complete range of Indian Remy Human Hair products. All products are custom-made, processed in-house, and tailored to client specifications.
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

      {/* 4. OUR PRODUCT RANGE (COMPLETE SPECIFICATION FROM CLIENT DOC) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-3">
            <SectionHeading
              eyebrow="MANUFACTURE & SUPPLY"
              title="Our Product Range"
              subtitle="We manufacture and supply a complete range of Indian Remy Human Hair products, including:"
              centered
            />
          </ScrollReveal>

          {/* Detailed Product Classification from Document */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Hair Types */}
            <ScrollReveal delay={0.05}>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-brand-navy" />
                    <h3 className="text-lg font-bold text-slate-900 font-display">Hair Types</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      100% Virgin Indian Remy Hair
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      RSD – Remy Single Drawn
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Remy Double Drawn Hair
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Bulk Hair
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Non-Remy Double Drawn
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Cuticle Free Bulk Hair
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Extensions & Wefts */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand-navy" />
                    <h3 className="text-lg font-bold text-slate-900 font-display">Extensions & Wefts</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Hand-Tied Wefts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Micro Wefts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Single & Double Machine Wefts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Pre-Bonded Keratin Tips
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Clip-In Extensions
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Wigs & Hairpieces */}
            <ScrollReveal delay={0.15}>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-brand-navy" />
                    <h3 className="text-lg font-bold text-slate-900 font-display">Wigs & Hairpieces</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Lace Front Wigs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Full Lace Wigs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Workout Wigs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Closure Wigs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Fishnet
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Lace Closures & Frontals
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Toppers & Ponytails & Patches
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Toupee
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Cranial Prosthesis */}
            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-brand-navy" />
                    <h3 className="text-lg font-bold text-slate-900 font-display">Cranial Prosthesis:</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Medical-grade wigs designed for comfort and confidence during hair loss from chemotherapy or alopecia.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Textures */}
            <ScrollReveal delay={0.25}>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand-navy" />
                    <h3 className="text-lg font-bold text-slate-900 font-display">Textures</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Natural Straight
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Natural Wavy
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Natural Curly
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Body Wave
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Deep Wave
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Kinky Wave
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Shades */}
            <ScrollReveal delay={0.3}>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand-navy" />
                    <h3 className="text-lg font-bold text-slate-900 font-display">Shades</h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Natural Black & Brown
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Bleached in Browns & Blondes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Coloured Hair
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Ombre
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      Natural Grey Hair – Salt & Pepper
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                      White Blonde
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

          </div>

          <ScrollReveal className="mt-10 text-center">
            <p className="text-sm font-semibold text-slate-700">
              All products are custom-made, processed in-house, and tailored to client specifications.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* 5. WHY CHOOSE EXODUS EXPORTS */}
      <WhyChooseUs />

      {/* 6. PROCESSING HAIR (FROM TEMPLE TO FINISHED PRODUCT) */}
      <section className="py-24 bg-[#B91941] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-white font-display flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-white" /> MANUFACTURING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              PROCESSING HAIR
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Every product at Exodus Exports is manufactured in-house, ensuring complete quality control.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            <div className="text-center font-bold text-white uppercase tracking-wider text-sm font-display">
              Processing Steps:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
              {[
                { step: "1", text: "Temple-sourced virgin Indian hair procurement" },
                { step: "2", text: "Sorted, hackled and meticulously arranged by size" },
                { step: "3", text: "Washed with conditioners and cleansers" },
                { step: "4", text: "Sun-dried naturally for softness" },
                { step: "5", text: "Processed into wefts, coloured hair, wigs, and more" },
              ].map((st, sIdx) => (
                <ScrollReveal key={sIdx} delay={sIdx * 0.1}>
                  <div className="p-6 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 space-y-3 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="h-10 w-10 rounded-full bg-white text-[#B91941] font-bold flex items-center justify-center mx-auto text-sm shadow-sm">
                        {st.step}
                      </div>
                      <p className="text-sm font-medium text-white leading-relaxed">{st.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="text-center pt-4">
              <div className="inline-block p-4 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm text-white/95 max-w-2xl">
                Approximately 25–35% weight loss occurs during processing due to removal of impurities and short hair.
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 7. FEATURED PRODUCTS SHOWCASE WITH CATEGORY SWITCHER */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="PRODUCT RANGE"
              title="Featured Indian Human Hair Range"
              subtitle="All products are custom-made, processed in-house, and tailored to client specifications."
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
              Browse Full Catalog
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* 8. WHY INDIAN HUMAN HAIR? & THE TRUTH ABOUT "BRAZILIAN", "MALAYSIAN" & "PERUVIAN" HAIR */}
      <section className="py-24 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="AUTHENTICITY & VALUE"
                title="Why Indian Human Hair?"
                subtitle="Indian hair is naturally strong, resilient, and adaptable."
              />
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-slate-800">It can be:</p>
                <ul className="space-y-2 text-sm text-slate-700 pl-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Coloured and bleached
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Heat styled and curled
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Washed, blow-dried, and reused
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Worn continuously for long periods with proper care
                  </li>
                </ul>

                <p>
                  Unlike synthetic or chemically processed hair, Indian virgin hair retains its cuticle integrity, ensuring minimal tangling and maximum longevity.
                </p>
                <p>
                  Over 10 million devotees in India tonsure their hair every year as a religious offering. This hair is collected by temples and auctioned through a regulated grading system, making it one of the most ethical and traceable sources of human hair in the world.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-subtle bg-slate-100 group">
                <Image
                  src="/images/products/hair_textures.jpg"
                  alt="Raw Indian Hair Textures Spectrum"
                  width={800}
                  height={600}
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* The Truth About "Brazilian", "Malaysian" & "Peruvian" Hair */}
          <ScrollReveal className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              The Truth About “Brazilian”, “Malaysian” & “Peruvian” Hair
            </h3>
            
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Despite popular marketing claims, over 70 to 80% of human hair sold globally originates from India. Many products labelled as Brazilian, Malaysian, Peruvian, or Moroccan hair are actually Indian hair that has been processed, styled, or rebranded elsewhere.
              </p>
              <p>
                Most hair marketed under regional names is Indian hair that has been processed or styled elsewhere. India remains the primary source of commercial human hair worldwide.
              </p>
              <div className="pt-2 border-t border-slate-100">
                <p className="font-bold text-slate-900">
                  At Exodus Exports, we believe in transparency and honesty.
                </p>
                <p className="text-brand-navy font-bold mt-1">
                  We deal exclusively in 100% Indian Human Hair. No mislabelling. No synthetic blends.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 9. INDIAN HUMAN HAIR TEXTURES */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-3">
            <SectionHeading
              eyebrow="TEXTURE SPECTRUM"
              title="INDIAN HUMAN HAIR TEXTURES"
              subtitle="Exodus focuses exclusively on South Indian temple hair, known for superior quality."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Indian Straight Hair */}
            <ScrollReveal delay={0.05}>
              <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 h-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 font-display">Indian Straight Hair</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Naturally rare in India. Most straight textures are sourced from North-East India. Exodus focuses exclusively on South Indian temple hair, known for superior quality.
                </p>
              </div>
            </ScrollReveal>

            {/* Indian Wavy Hair */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 h-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 font-display">Indian Wavy Hair</h3>
                <p className="text-sm text-slate-700 font-semibold">The most common and versatile texture.</p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Blends easily
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Can be straightened or curled
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Available from 8” to 32”
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Indian Curly Hair */}
            <ScrollReveal delay={0.15}>
              <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 h-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 font-display">Indian Curly Hair</h3>
                <p className="text-sm text-slate-700 font-semibold">Rare and naturally occurring.</p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Retains curls after washing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    High density and natural appearance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Each curl pattern is unique
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Indian Deep Wavy Hair */}
            <ScrollReveal delay={0.2}>
              <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 h-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 font-display">Indian Deep Wavy Hair</h3>
                <p className="text-sm text-slate-700 font-semibold">Steam-processed curls created from natural Indian Remy hair.</p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    No hazardous chemicals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Deep, defined waves
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                    Excellent elasticity and volume
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 10. DISTRIBUTOR & WHOLESALE ENQUIRIES CTA */}
      <CTASection
        title="Distributor & Wholesale Enquiries"
        subtitle="We welcome distributors, partners, and JV enquiries worldwide. Grow your business with a trusted Indian human hair manufacturer."
        buttonText="Contact Us"
      />

      {/* Product Specs Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
}
