import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  HeartHandshake, 
  ShieldCheck, 
  Globe, 
  Layers, 
  Clock, 
  Users 
} from "lucide-react";

const whyChoosePoints = [
  {
    icon: ShieldCheck,
    title: "100% genuine Indian Human Hair supply source",
  },
  {
    icon: Sparkles,
    title: "Temple-auction procured & ethically sourced",
  },
  {
    icon: Building2,
    title: "In-house processing from raw hair to final finished products",
  },
  {
    icon: Layers,
    title: "Customized solutions for salons, brands & distributors",
  },
  {
    icon: CheckCircle2,
    title: "Strict adherence to international standards",
  },
  {
    icon: Globe,
    title: "Global shipping & export expertise",
  },
  {
    icon: Users,
    title: "Capacity to handle orders from small batches to bulk export",
  },
  {
    icon: Clock,
    title: "Consistent delivery schedules",
  },
  {
    icon: HeartHandshake,
    title: "Long-term partnership approach",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="mb-14 text-center max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="EXODUS ADVANTAGE"
            title="Why Choose Exodus Exports?"
            subtitle="At Exodus, we don’t sell products—we build relationships. We guide clients, educate them, and ensure they receive the right product for their exact needs."
            centered
          />
        </ScrollReveal>

        {/* 9 Feature Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoosePoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-subtle hover:border-brand-navy/40 hover:-translate-y-1 transition-all duration-300 group h-full flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-brand-navy transition-colors">
                      {point.title}
                    </h3>
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

