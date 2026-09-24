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
  Heart,
  HeartHandshake,
  Users,
  AlertCircle
} from "lucide-react";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <div className="space-y-0">

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT EXODUS EXPORTS PVT. LTD. & OUR PHILOSOPHY */}
      <section className="pt-10 pb-24 md:pt-14 md:pb-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="About us"
                title="About Exodus Exports Pvt. Ltd."
                subtitle="Established in 2002, Exodus Exports Pvt. Ltd. is an Export-Oriented Private Limited Company, headquartered in Chennai, South India."
              />
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                <p>
                  With over two decades of industry experience, we have earned a reputation as one of India’s most trusted suppliers of premium Indian human hair. Our products are exported to over 65 countries across 5 continents, serving wholesalers, distributors, salons, and wig makers.
                </p>
              </div>

              {/* Our Philosophy */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display text-[#A9153B] flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#A9153B]" /> Our philosophy
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 italic">
                  At Exodus Exports, we believe in transparency and honesty.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>We focus on quality over quantity</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>We don’t just sell hair — we build long-term relationships</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Every product is backed by strict quality control and ethical sourcing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">We deal exclusively in 100% Indian Human Hair. No mislabelling. No synthetic blends.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span className="font-semibold text-[#A9153B]">And we employ 100% Beedi rolling women</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-[#A9153B] hover:underline group"
                >
                  Learn more about our company & leadership
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6 space-y-6">
              <div className="relative w-[500px] rounded-2xl overflow-hidden shadow-elevated border border-slate-100">
                <Image
                  src="/images/products/WIG-7.png"
                  alt="Exodus Exports Pvt. Ltd. - Indian Human Hair"
                  width={700}
                  height={700}
                  className="w-[500px] h-[530px] "
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <div className="font-bold text-lg sm:text-xl font-display">Exodus Exports Pvt. Ltd.</div>
                  <div className="text-white/90 text-[11px] font-medium mt-0.5">Chennai, South India</div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ETHICAL SOURCING & WOMEN EMPOWERMENT */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Ethical sourcing & women empowerment
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800">Our hair is sourced directly from South Indian temple auctions</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800">100% ethical and traceable procurement</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800">No middlemen or unverified sources</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800">Fair compensation for our entire workforce</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800">Safe, clean, and dignified working environments</span>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800">Empowering women artisans across our supply chain</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
              We empower women not only through beauty, but also through stable employment and skill development.
            </p>
          </div>

        </div>
      </section>

      {/* SOCIAL IMPACT & SUSTAINABLE LIVELIHOOD BUSINESS INITIATIVE */}
      <section className="py-24 bg-[#A9153B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              Social impact & sustainable livelihood business initiative
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6 text-white/95 text-sm sm:text-base leading-relaxed">
            <p className="p-6 rounded-2xl bg-white/10 border border-white/20">
              Since 2021, teaming up with the Cancer Institute (WIA), Chennai, Exodus Exports has been actively involved in providing alternative, sustainable livelihood opportunities to women previously engaged in beedi rolling.
            </p>
            <p>
              This initiative was launched under the leadership of Dr. Shanta, Chairperson of the Cancer Institute WIA, Adyar – Chennai. Now with additional support from the District Administration, Skill India, and NABARD, through this collaborative effort, nearly 160 women have been successfully rehabilitated, enabling them to transition away from tobacco-related occupations into safer and more dignified employment.
            </p>
            <p>
              The project is aligned with Article 17 of the World Health Organization (WHO) Framework Convention on Tobacco Control (FCTC), which promotes the development of economically viable alternatives for workers involved in the tobacco industry.
            </p>
            <p>
              This program reflects our commitment to public health, women’s empowerment, and responsible business practices, ensuring that economic progress goes hand in hand with social well-being. Hence, to undertake this mission, we moved from Chennai to a remote village in the Tirunelveli district of Tamil Nadu, approximately 650 kilometres away, which lies at the heart of the state’s beedi industry. We have been operating our factory here for the past five years.
            </p>
            <div className="p-6 rounded-2xl bg-white text-slate-900 shadow-elevated space-y-2">
              <div className="text-[11px] font-bold text-[#A9153B] uppercase tracking-wider">Next expansion project</div>
              <p className="font-semibold text-slate-900 text-xs sm:text-sm leading-relaxed">
                Our current project, undertaken in collaboration with NABARD and the Cancer Institute (WIA), Chennai, aims to recruit and train 300 beedi rollers in Tenkasi district. This initiative is expected to commence shortly and represents an important step towards creating sustainable livelihood opportunities while promoting awareness and healthier alternatives within the beedi-rolling community.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHO ARE THESE BEEDI WORKERS? */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Who are these beedi workers?
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-left">
              Beedi is a locally made cheaper substitute for cigarette. Across remote villages in South India, many women earn their livelihood by rolling beedis from their homes. Women beedi workers faced numerous challenges including
            </p>
          </ScrollReveal>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
              low wages,
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
              hazardous working conditions,
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
              systemic exploitation,
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
              limited social security,
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
              restricted access to welfare schemes
            </div>
          </div>

          {/* Barriers Sub-heading & Grid */}
          <div className="max-w-5xl mx-auto space-y-6 pt-6">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Despite aspiring to move into safer and more sustainable livelihoods, they encountered significant barriers such as
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                low levels of education,
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                limited transferable skills,
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                inadequate access to credit,
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                lack of proper vocational training opportunities.
              </div>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-6">
              <p>
                Due to their limited skills, lack of basic education, and the remoteness of their location, these women were largely neglected and marginalized, remaining invisible to mainstream development efforts. The geographical disadvantages of the area further hindered the establishment and functioning of viable businesses, compounding their economic isolation.
              </p>
              <p className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-medium text-sm sm:text-base">
                Recognizing these challenges, and being in a position to make a meaningful difference, we are committed to expanding our operations in this region to support and empower these communities. In this endeavour, we are grateful to receive the support and partnership of the Cancer Institute (WIA), Chennai, which strengthens our efforts to create sustainable and positive change.
              </p>
            </div>
          </div>

        </div>
      </section>

    
      

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
