import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { hairTextures } from "@/data/products";
import { Sparkles, Flame, Palette } from "lucide-react";

export const metadata = {
  title: "About Human Hair | Exodus Exports Guide",
  description:
    "Explore the unique characteristics, natural textures, and superior quality of authentic Indian human hair, sourced ethically and processed in Chennai, India.",
};

export default function AboutHumanHairPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> THE EXODUS HAIR GUIDE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            Understanding <span className="text-brand-navy">Indian Human Hair</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover why raw virgin Indian human hair is globally recognized as the finest material for hair extensions, high-end wigs, and medical prostheses.
          </p>
        </div>
      </section>

      {/* 2. WHY INDIAN HAIR IS UNIQUE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="UNSURPASSED QUALITY"
                title="Natural Cuticle Alignment & Strength"
              />
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Indian human hair naturally possesses a rich protein structure, high elasticity, and natural movement that perfectly mirrors diverse global hair types.
                </p>
                <p>
                  Because raw Indian temple hair is ethically donated in single-donor ponytails, the cuticles naturally run in the exact same direction from root to tip. This inherent "Remy" alignment prevents tangling, matting, and friction.
                </p>
                <p>
                  Unlike synthetic fibers or chemically stripped hair, authentic raw Indian hair can be bleached up to #613 platinum blonde, custom colored, and heat-styled repeatedly without losing its softness or luster.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-200 transition-colors">
                  <Palette className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm font-display">Color Versatility</div>
                    <div className="text-xs text-slate-500 mt-0.5">Lifts smoothly to blonde, ombre, or custom pastel shades.</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-slate-200 transition-colors">
                  <Flame className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm font-display">Heat Resilience</div>
                    <div className="text-xs text-slate-500 mt-0.5">Flat iron and curl safely up to 230°C (450°F).</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-elevated border border-slate-100 group">
                <Image
                  src="/images/products/hair_textures.jpg"
                  alt="Raw Virgin Indian Hair Textures"
                  width={800}
                  height={600}
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. NATURAL TEXTURES SPECTRUM */}
      <section className="py-24 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-16">
            <SectionHeading
              eyebrow="TEXTURE MATRIX"
              title="Natural Indian Hair Textures"
              subtitle="Exodus Exports supplies authentic, non-chemically altered textures as well as steam-crafted textures."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairTextures.map((tex, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-subtle space-y-2 hover:border-brand-navy/40 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-lg font-display">
                    <Sparkles className="h-4 w-4 text-brand-navy" />
                    {tex.name}
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

      {/* 4. CARE & LONGEVITY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <SectionHeading
              eyebrow="PROFESSIONAL CARE"
              title="Maximizing Longevity & Luster"
              subtitle="Follow these professional maintenance practices to ensure virgin Indian hair extensions remain pristine for up to 2–3 years."
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Sulfate-Free Cleansing", desc: "Use gentle sulfate-free shampoos and hydrating conditioners to preserve natural hair oils." },
              { num: "2", title: "Deep Conditioning", desc: "Apply moisture masks every 2 weeks to maintain elasticity and prevent dry ends." },
              { num: "3", title: "Heat Protection", desc: "Always apply a thermal protectant spray before blow drying or heat styling." },
            ].map((c, cIdx) => (
              <ScrollReveal key={cIdx} delay={cIdx * 0.1}>
                <div className="p-8 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-brand-navy/30 hover:-translate-y-1 transition-all duration-300 space-y-3 h-full">
                  <div className="h-8 w-8 rounded-full bg-brand-navy/10 text-brand-navy font-bold flex items-center justify-center text-sm">
                    {c.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">{c.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FINAL CTA */}
      <CTASection
        title="Explore Our Indian Hair Products"
        subtitle="View our complete catalogue of hand-tied wefts, HD lace frontals, wigs, and toppers."
        buttonText="View Products"
      />

    </div>
  );
}
