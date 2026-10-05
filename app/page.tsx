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
  AlertCircle,
} from "lucide-react";

// 3 Content Cards for "Ethical sourcing & women empowerment" (Replace with your actual images & content)
const ethicalSourcingCards = [
  {
    image: "/images/products/1..png",
    label: "Ethically Sourced:",
    description: "Hair procured through South Indian temple auctions, with a commitment to 100% ethical and traceable sourcing and no child labour.",
  },
  {
    image: "/images/products/2.JPG",
    label: "Women Empowerment:",
    description: "Our production units employ 100% rural women formerly engaged in beedi rolling, providing dignified and sustainable livelihoods.",
  },
  {
    image: "/images/products/4.JPG",
    label: "Responsible Workplace:",
    description: "We are committed to employee welfare, safety, and sustainable employment, creating positive social impact alongside quality products.",
  },
];

// 2 Image Cards for "Who are these beedi workers?" (Replace with your actual images & titles)
const beediWorkerImages = [
  {
    image: "/images/products/b1.JPG",
    title: "Woman rolling Beedi - then",
  },
  {
    image: "/images/products/b2.JPG",
    title: "Woman making Wigs - Now",
  },
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <div className="space-y-0">

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT EXODUS EXPORTS PVT. LTD. & OUR PHILOSOPHY */}
      <section className="pt-8 pb-14 md:pt-10 md:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="About us"
                title="Exodus Exports Pvt. Ltd."
              />
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <div className="space-y-2 pb-1">
                  <div className="text-sm sm:text-base md:text-lg font-extrabold text-[#A9153B] uppercase tracking-wider font-display">
                    A COMPANY WITH A DIFFERENCE
                  </div>
                  <ul className="space-y-1.5 text-sm sm:text-base font-semibold text-slate-900">
                    <li className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0"></span>
                      <span>Creating Livelihoods.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0"></span>
                      <span>Creating Dignity.</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0"></span>
                      <span>Creating a Future.</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Established in 2002, Exodus Exports Pvt. Ltd. is an Export-Oriented Private Limited Company, headquartered in Chennai, South India.
                </p>
                <p>
                  With over two decades of industry experience, we have earned a reputation as one of India’s most trusted suppliers of premium Indian human hair. Our products are exported to over 65 countries across 5 continents, serving wholesalers, distributors, salons, and wig makers.
                </p>
              </div>

              {/* Our Philosophy */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-100 border border-slate-200 space-y-4">
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
              <div className="relative w-full rounded-2xl overflow-hidden shadow-elevated border border-slate-100">
                <Image
                  src="/images/products/machine.png"
                  alt="Exodus Exports Pvt. Ltd. - Indian Human Hair"
                  width={600}
                  height={700}
                  className="w-full h-[480px] sm:h-[530px] object-cover"
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
      <section className="py-14 sm:py-16 md:py-18 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Ethical sourcing & women empowerment
            </h2>
          </ScrollReveal>

          {/* 3 Content Cards (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {ethicalSourcingCards.map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} className="h-full">
                <div className="group h-full bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-lg hover:border-[#A9153B]/40 transition-all duration-300 overflow-hidden flex flex-col">
                  
                  {/* Card Image */}
                  <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={`Ethical sourcing ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Heading & Content */}
                  <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col">
                    
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      <strong className="font-bold text-slate-900">{card.label} </strong>
                      {card.description}
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* SOCIAL IMPACT & SUSTAINABLE LIVELIHOOD BUSINESS INITIATIVE */}
      <section className="py-14 sm:py-16 md:py-18 bg-[#A9153B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          <ScrollReveal className="text-center max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              Social impact & sustainable livelihood business initiative
            </h2>
          </ScrollReveal>

          {/* Two-Column Layout (Desktop: 50/50, Mobile: Stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN: Existing Text Content */}
            <div className="space-y-6 text-white/95 text-sm sm:text-base leading-relaxed">
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
            </div>

            {/* RIGHT COLUMN: Image & Dedicated Image Content/Description Area */}
            <div className="space-y-4">
              {/* Image Box */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-elevated group">
                <Image
                  src="/images/products/nabard.JPG"
                  alt="Social impact & sustainable livelihood business initiative"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Dedicated Image Content / Description */}
              <div className="p-6 rounded-2xl bg-white/10 border border-white/20 text-white/90 text-sm sm:text-base leading-relaxed">
                <p>
                  60 rural women engaged in beedi rolling were trained in wig making skills by Exodus Exports (P) Ltd. and the Cancer Institute (WIA), Adyar, Chennai, with training support sponsored by NABARD.  
                </p>
              </div>
            </div>

          </div>

          {/* FULL-WIDTH CARD: Next Expansion Project */}
          <ScrollReveal>
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-white text-slate-900 shadow-elevated space-y-2.5">
              <div className="text-xs sm:text-[13px] font-bold text-[#A9153B] uppercase tracking-wider">
                Next expansion project
              </div>
              <p className="font-semibold text-slate-900 text-sm sm:text-base leading-relaxed">
                Our current project, undertaken in collaboration with NABARD and the Cancer Institute (WIA), Chennai, aims to recruit and train 300 beedi rollers in Tenkasi district. This initiative is expected to commence shortly and represents an important step towards creating sustainable livelihood opportunities while promoting awareness and healthier alternatives within the beedi-rolling community.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* WHO ARE THESE BEEDI WORKERS? */}
      <section className="py-14 sm:py-16 md:py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* LEFT COLUMN: 2 Image Cards (~40%) */}
            <div className="lg:col-span-5 space-y-8">
              {beediWorkerImages.map((card, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="space-y-3">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-subtle group">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                      {card.title}
                    </h4>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* RIGHT COLUMN: Existing Section Content (~60%) */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
                  Who are these beedi workers?
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Beedi is a locally made cheaper substitute for cigarette. Across remote villages in South India, many women earn their livelihood by rolling beedis from their homes. Women beedi workers faced numerous challenges including
                </p>
              </ScrollReveal>

              {/* Challenges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                  low wages,
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                  hazardous working conditions,
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                  systemic exploitation,
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                  limited social security,
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800 sm:col-span-2 lg:col-span-2">
                  restricted access to welfare schemes
                </div>
              </div>

              {/* Barriers Sub-heading & Grid */}
              <div className="space-y-4 pt-2">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Despite aspiring to move into safer and more sustainable livelihoods, they encountered significant barriers such as
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                    low levels of education,
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                    limited transferable skills,
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                    inadequate access to credit,
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-semibold text-xs sm:text-sm text-slate-800">
                    lack of proper vocational training opportunities.
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-4">
                  <p>
                    Due to their limited skills, lack of basic education, and the remoteness of their location, these women were largely neglected and marginalized, remaining invisible to mainstream development efforts. The geographical disadvantages of the area further hindered the establishment and functioning of viable businesses, compounding their economic isolation.
                  </p>
                  <p className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-medium text-sm sm:text-base">
                    Recognizing these challenges, and being in a position to make a meaningful difference, we are committed to expanding our operations in this region to support and empower these communities. In this endeavour, we are grateful to receive the support and partnership of the Cancer Institute (WIA), Chennai, which strengthens our efforts to create sustainable and positive change.
                  </p>
                </div>
              </div>
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
