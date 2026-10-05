"use client";

import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export interface FeatureItem {
  text: string;
  subtext?: string;
}

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <ScrollReveal delay={index * 0.05} className="h-full">
      <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:border-[#A9153B]/40 hover:shadow-md transition-all duration-300 group flex items-start gap-4">
        
        {/* Indicator Icon */}
        <div className="h-10 w-10 rounded-xl bg-[#A9153B]/10 text-[#A9153B] flex items-center justify-center shrink-0 group-hover:bg-[#A9153B] group-hover:text-white transition-colors duration-300 mt-0.5">
          <CheckCircle2 className="h-5 w-5" />
        </div>

        {/* Text Content */}
        <div className="space-y-1">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display group-hover:text-[#A9153B] transition-colors leading-snug">
            {feature.text}
          </h4>
          {feature.subtext && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {feature.subtext}
            </p>
          )}
        </div>

      </div>
    </ScrollReveal>
  );
}

interface FeatureGridProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
  calloutStatement?: string;
  className?: string;
  bgClassName?: string;
}

// Default placeholder items (replace with your custom content)
export const defaultFeatures: FeatureItem[] = [
  { text: "100% ethically sourced Indian Human Hair" },
  { text: "Strict quality control & no synthetic blends" },
  { text: "Direct temple auction procurement" },
  { text: "Customized manufacturing for global salons & brands" },
  { text: "Traceable supply chain & international compliance" },
  { text: "Worldwide export shipping & dedicated B2B support" },
];

export const defaultCalloutStatement =
  "At Exodus, we don’t just sell hair—we build lasting relationships by offering exceptional products backed by principles that never change.";

export default function FeatureGrid({
  eyebrow = "Our Values",
  title = "Built on Quality, Trust & Transparency",
  subtitle = "Our commitment to ethical standards and manufacturing excellence defines everything we do.",
  features = defaultFeatures,
  calloutStatement = defaultCalloutStatement,
  className = "",
  bgClassName = "bg-slate-50",
}: FeatureGridProps) {
  return (
    <section className={`py-20 md:py-24 border-b border-slate-200/80 ${bgClassName} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        
        {/* Centered Section Heading */}
        {(eyebrow || title || subtitle) && (
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
              centered
            />
          </ScrollReveal>
        )}

        {/* 6 Feature Cards Grid: Desktop (3 cols × 2 rows), Tablet (2 cols), Mobile (1 col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>

        {/* Centered Callout / Statement Card */}
        {calloutStatement && (
          <ScrollReveal className="max-w-4xl mx-auto pt-2">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-subtle text-center space-y-3">
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-relaxed font-display">
                {calloutStatement}
              </p>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
