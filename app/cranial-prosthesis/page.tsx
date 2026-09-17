import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Phone, 
  Mail,
  HeartHandshake,
  UserCheck,
  Award,
  Layers,
  Clock,
  Globe,
  Users
} from "lucide-react";

export const metadata = {
  title: "Cranial Prosthesis – The Wig Bank | Exodus Exports Pvt. Ltd.",
  description:
    "Medical-grade wigs designed for comfort and confidence during hair loss from chemotherapy or alopecia. Regain your confidence with medical wigs.",
};

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

const termsAndConditions = [
  "100% Indian Human Hair only",
  "No synthetic blends",
  "100% advance payment via bank transfer",
  "Ex-Factory Chennai, India",
  "Exchange within 7 business days (conditions apply)",
  "No refund policy",
  "Human hair is a natural product, and slight variations are inherent.",
];

export default function CranialProsthesisPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO HEADER */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span> Page – 5 Cranial Prosthesis – The Wig Bank
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Regain Your Confidence with Medical Wigs
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            Hair loss can be an emotionally challenging experience, particularly for people undergoing cancer treatment or living with alopecia. However, hair loss should never diminish your self-confidence or sense of identity. If you have lost your hair due to a medical condition or treatment, a medical wig or cranial hair prosthesis can help you regain your natural appearance while providing comfort and confidence.
          </p>
        </div>
      </section>

      {/* 2. DETAILED CRANIAL PROSTHESIS CONTENT (EXACT PARAGRAPHS 2 TO 8 FROM MASTER DOC) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Visual Column */}
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200 bg-slate-100 group">
                <Image
                  src="/images/products/hair_wigs.jpg"
                  alt="Cranial Prosthesis Medical Wigs"
                  width={800}
                  height={900}
                  className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <div className="font-bold text-xl font-display">Medical-Grade Cranial Prosthesis</div>
                  <div className="text-white/90 text-xs font-medium mt-0.5">Custom-Made 100% Natural Human Hair</div>
                </div>
              </div>

              {/* Quality Standards Callout */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm font-display uppercase tracking-wider text-[#B91941]">
                  Custom Craftsmanship
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Scalp-friendly, non-allergenic base materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Techniques designed to minimise contact between knots and the scalp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>100% natural human hair for authentic look and movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Adjustable elastic band for convenient and secure fit</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Editorial Content Column (All paragraphs verbatim) */}
            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
              
              <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed">
                
                <p>
                  A cranial hair prosthesis, commonly known as a medical wig, is specially designed for individuals who experience hair loss due to chemotherapy, alopecia, breast cancer, or other medical conditions. Unlike conventional wigs, medical wigs are custom-made to suit the individual’s scalp, hair requirements, and personal preferences.
                </p>

                <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#B91941] space-y-3">
                  <p className="text-slate-800 font-medium text-base">
                    These wigs are meticulously crafted by trained experts with particular attention to the sensitivity of the scalp. This is especially important during and after chemotherapy, when the scalp can become extremely sensitive and more susceptible to irritation or allergic reactions. The base of the prosthesis is made using scalp-friendly, non-allergenic materials, while the hair is carefully attached using techniques designed to minimise contact between knots and the scalp.
                  </p>
                </div>

                <p>
                  Our medical wigs are made from 100% natural human hair, allowing them to closely replicate the look, texture, and movement of natural hair. The objective is not merely to conceal hair loss, but to provide patients with a natural appearance, comfort, security, and the freedom to carry on with their daily lives with confidence.
                </p>

                <p>
                  The wigs are designed for convenient and secure use. An adjustable elastic band helps hold the prosthesis comfortably in place, allowing the wearer to use it with ease and confidence.
                </p>

                <p>
                  Whether you are experiencing hair loss as a result of breast cancer, chemotherapy, alopecia, or another medical condition—or are preparing to undergo chemotherapy—a medical wig can be a practical and reassuring solution. Cranial hair prostheses are available in a variety of hair colours, lengths, textures, and styles, allowing you to select an option that closely matches your natural appearance and provides a comfortable, personalised fit.
                </p>

                <div className="p-6 rounded-2xl bg-[#B91941]/5 border border-[#B91941]/20 space-y-2">
                  <p className="font-bold text-[#B91941] text-lg">
                    Hair loss may be a part of your medical journey, but it does not have to define you. With the right medical hair prosthesis, you can look like yourself, feel comfortable, and continue your journey with confidence.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    If this is intended for a cancer institute, hospital, or medical-wig organisation, I can also make it more compassionate and patient-focused, with a stronger emphasis on dignity, confidence, and emotional well-being.
                  </p>
                </div>

              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. CIX WIGS & THE WIG BANK */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            {/* CIX WIGS */}
            <div className="p-8 rounded-2xl bg-[#B91941] text-white shadow-elevated flex flex-col items-center justify-center space-y-3">
              <HeartHandshake className="h-10 w-10 text-white" />
              <h3 className="text-2xl font-extrabold tracking-wider uppercase font-display">
                CIX WIGS
              </h3>
            </div>

            {/* THE WIG BANK */}
            <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-elevated flex flex-col items-center justify-center space-y-3">
              <Building2 className="h-10 w-10 text-white" />
              <h3 className="text-2xl font-extrabold tracking-wider uppercase font-display">
                THE WIG BANK
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE EXODUS EXPORTS? */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="EXODUS ADVANTAGE"
              title="Why Choose Exodus Exports?"
              centered
            />
          </ScrollReveal>

          {/* 9 Feature Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((title, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.04}>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-subtle hover:border-[#B91941]/40 hover:-translate-y-1 transition-all duration-300 group h-full flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#B91941]/10 text-[#B91941] flex items-center justify-center shrink-0 group-hover:bg-[#B91941] group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display group-hover:text-[#B91941] transition-colors">
                      {title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Relationship Callout Box */}
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle text-center space-y-2">
              <p className="text-base sm:text-lg font-bold text-slate-900">
                At Exodus, we don’t sell products—we build relationships.We guide clients, educate them, and ensure they receive the right product for their exact needs.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 5. EMPLOYEE WELFARE */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              EMPLOYEE WELFARE
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We are committed to ethical labour practices with a strong all-women workforce.Our welfare programs include:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {welfarePrograms.map((prog, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.03}>
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle text-center h-full flex flex-col items-center justify-center space-y-2">
                  <CheckCircle2 className="h-5 w-5 text-[#B91941]" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{prog}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TERMS & CONDITIONS OF SALE */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              TERMS & CONDITIONS OF SALE
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {termsAndConditions.slice(0, 6).map((term, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.04}>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-subtle flex items-start gap-3 h-full">
                  <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{term}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="max-w-2xl mx-auto">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-subtle">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Human hair is a natural product, and slight variations are inherent.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />

    </div>
  );
}
