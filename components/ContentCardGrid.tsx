"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export interface ContentCardItem {
  image: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  badge?: string;
}

interface ContentCardProps {
  card: ContentCardItem;
  index: number;
}

export function ContentCard({ card, index }: ContentCardProps) {
  return (
    <ScrollReveal delay={index * 0.08} className="h-full">
      <div className="group h-full bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-lg hover:border-[#A9153B]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between">
        
        {/* Top Image Container */}
        <div>
          <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] bg-slate-100 overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {card.badge && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#A9153B] text-[11px] font-bold tracking-wider uppercase shadow-xs">
                {card.badge}
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-7 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display group-hover:text-[#A9153B] transition-colors leading-snug">
              {card.title}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              {card.description}
            </p>
          </div>
        </div>

        {/* Optional CTA Link */}
        {card.link && (
          <div className="px-6 pb-6 pt-0">
            <Link
              href={card.link}
              className="inline-flex items-center text-xs sm:text-sm font-bold text-[#A9153B] hover:text-[#88102F] transition-colors group/link"
            >
              <span>{card.linkText || "Learn more"}</span>
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        )}

      </div>
    </ScrollReveal>
  );
}

interface ContentCardGridProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cards?: ContentCardItem[];
  className?: string;
  bgClassName?: string;
}

// Default placeholder items (replace with your custom content)
export const defaultContentCards: ContentCardItem[] = [
  {
    image: "/images/products/weft.jpg",
    badge: "Category 1",
    title: "Premium Hair Extensions & Wefts",
    description:
      "Crafted exclusively from 100% ethically procured single-donor Indian human hair with cuticle alignment intact.",
    link: "/products",
    linkText: "Explore extensions",
  },
  {
    image: "/images/products/wig.jpg",
    badge: "Category 2",
    title: "Hand-Tied Wigs & Cranial Prostheses",
    description:
      "Medical-grade breathable bases customized for hair loss solutions, cancer patients, and luxury couture styling.",
    link: "/cranial-prosthesis",
    linkText: "View wigs collection",
  },
  {
    image: "/images/products/bulk.jpg",
    badge: "Category 3",
    title: "Temple Bulk & Virgin Raw Hair",
    description:
      "Direct temple-auction sourced human hair carefully sorted and washed for international wholesale distributors.",
    link: "/about-human-hair",
    linkText: "Discover raw hair",
  },
];

export default function ContentCardGrid({
  eyebrow = "Our Collection",
  title = "Signature Hair Solutions & Craftsmanship",
  subtitle = "Discover our comprehensive range of ethically sourced Indian human hair products crafted to international standards.",
  cards = defaultContentCards,
  className = "",
  bgClassName = "bg-white",
}: ContentCardGridProps) {
  return (
    <section className={`py-20 md:py-24 border-b border-slate-100 ${bgClassName} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Heading */}
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

        {/* 3-Column Responsive Grid: Desktop (3 cols), Tablet (2 cols), Mobile (1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <ContentCard key={idx} card={card} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
