import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { ShieldCheck, Globe, Handshake, FileCheck2 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Raw Indian Temple Hair",
    description:
      "Ethically sourced raw virgin hair cuticles intact, guaranteeing 100% tangle-free longevity, natural luster, and seamless color bleaching up to #613.",
  },
  {
    icon: Globe,
    title: "In-House Chennai Manufacturing",
    description:
      "Hand-tied wefts, micro wefts, 13x4 frontals, and full lace wigs crafted by master artisans under strict single-donor quality control.",
  },
  {
    icon: Handshake,
    title: "Global B2B Supply Partner",
    description:
      "Long-term wholesale supply agreements with international salons, wig makers, and beauty distributors across USA, Europe, Australia, and Africa.",
  },
  {
    icon: FileCheck2,
    title: "Custom Order Specifications",
    description:
      "Tailored bundle length ratios, customized cap sizes, private labeling, and express 3–5 day international air courier shipping.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <SectionHeading
            eyebrow="WHY EXODUS EXPORTS"
            title="The Exodus Distinction"
            subtitle="Built upon authentic South Indian temple sourcing, in-house master craftsmanship, and transparent B2B governance."
          />
        </ScrollReveal>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-lg border border-slate-200/80 shadow-subtle hover:border-brand-navy/40 hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-md bg-brand-navy/5 text-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-brand-navy transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-brand-navy">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> Guaranteed Standard
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
