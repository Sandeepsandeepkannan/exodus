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
  Users,
  Heart
} from "lucide-react";

const whyChoosePoints = [
  "100% genuine Indian Human Hair supply source",
  "Temple-auction procured & ethically sourced",
  "In-house processing from raw hair to final finished products",
  "Customized solutions for salons, brands & distributors",
  "Strict adherence to international standards",
  "Global shipping & export expertise",
  "Capacity to handle orders from small batches to bulk export",
  "Consistent delivery schedules",
  "Long-term partnership approach",
];

const welfarePrograms = [
  "Implementing 5S Standards",
  "Safe working conditions",
  "Retirement benefits",
  "Annual bonus & incentives",
  "Loans & emergency support",
  "Maternity leave",
  "Counselling & workshops",
  "Educational support for employees’ children",
  "Recreational outings",
  "Strictly No Child Labour",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50/70 border-y border-slate-100 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Why Choose Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            eyebrow="Exodus advantage"
            title="Why choose Exodus Exports?"
            centered
          />
        </ScrollReveal>

        {/* 9 Feature Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoosePoints.map((title, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.04}>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-subtle hover:border-[#A9153B]/40 hover:-translate-y-1 transition-all duration-300 group h-full flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-[#A9153B]/5 text-[#A9153B] flex items-center justify-center shrink-0 group-hover:bg-[#A9153B] group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display group-hover:text-[#A9153B] transition-colors">
                    {title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Relationship Callout Box */}
        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle text-center space-y-2">
            <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
              At Exodus, we don’t sell products—we build relationships.We guide clients, educate them, and ensure they receive the right product for their exact needs.
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* EMPLOYEE WELFARE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Employee welfare
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are committed to ethical labour practices with a strong all-women workforce.Our welfare programs include:
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {welfarePrograms.map((prog, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.03}>
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle text-center h-full flex flex-col items-center justify-center space-y-2">
                <CheckCircle2 className="h-5 w-5 text-[#A9153B]" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{prog}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
