import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { ShieldCheck, Scissors, HeartPulse, MapPin } from "lucide-react";

export const metadata = {
  title: "About Us | Exodus Exports - Indian Human Hair Manufacturer",
  description:
    "Learn about Exodus Exports, a premier Indian human hair manufacturer based in Chennai, India, producing 100% virgin hair extensions, wigs, closures, and cranial prostheses.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> EXODUS EXPORTS CORPORATE PROFILE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            Pioneering Excellence in <span className="text-brand-navy">Indian Human Hair</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Based in Chennai, India, Exodus Exports is a dedicated manufacturer and exporter of 100% authentic raw virgin Indian human hair products for the global beauty and medical hair industry.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & CHENNAI MANUFACTURING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-elevated border border-slate-100 group">
                <Image
                  src="/images/products/hair_wigs.jpg"
                  alt="Exodus Exports Wig Manufacturing Atelier"
                  width={800}
                  height={600}
                  className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="OUR STORY & ORIGINS"
                title="Master Craftsmanship from South India"
              />
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Exodus Exports was established in Chennai, Tamil Nadu, with a commitment to preserving the natural purity of South Indian temple hair while engineering world-class hair extensions, wefts, and wig systems.
                </p>
                <p>
                  Indian human hair is globally prized for its unique structural integrity, high tensile strength, and natural luster. At our state-of-the-art facility, we process raw temple hair into refined hand-tied wefts, micro wefts, machine wefts, 13x4 HD frontals, and full lace wigs.
                </p>
                <p>
                  We operate with complete transparency and quality control—ensuring that every bundle delivered to our international partners is 100% cuticle-intact, chemical-free, and single-donor aligned.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <MapPin className="h-4 w-4 text-brand-navy" />
                <span>56A Thanduma Nagar, 100 ft Road, St. Thomas Mount, Chennai – 600016, Tamil Nadu, India</span>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES & QUALITY STANDARDS */}
      <section className="py-24 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="OUR COMMITMENT"
              title="Uncompromising Quality Pillars"
              subtitle="Setting the global standard for raw Indian human hair processing and export compliance."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              { icon: Scissors, title: "100% Cuticle Intact", desc: "Hair cuticles remain unidirectional from root to tip, preventing matting, tangling, or shedding during long-term wear." },
              { icon: ShieldCheck, title: "Zero Chemical Processing", desc: "Raw hair is cleansed using natural herbal baths with zero acid treatments or silicone coatings, preserving authentic hair health." },
              { icon: HeartPulse, title: "Custom Medical Solutions", desc: "Specialized in manufacturing non-allergic medical cranial prostheses for patients undergoing medical treatments." },
            ].map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pIdx} delay={pIdx * 0.1}>
                  <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle hover:border-brand-navy/30 hover:-translate-y-1 transition-all duration-300 space-y-4 h-full">
                    <Icon className="h-8 w-8 text-brand-navy" />
                    <h3 className="text-xl font-bold text-slate-900 font-display">{pillar.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}

          </div>

        </div>
      </section>

      {/* 4. FINAL CTA */}
      <CTASection
        title="Partner With Exodus Exports"
        subtitle="Contact our Chennai team to discuss wholesale hair supply, private labeling, and custom order specifications."
        buttonText="Contact Us Today"
      />

    </div>
  );
}
