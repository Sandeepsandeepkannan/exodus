import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Building2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  ArrowLeft 
} from "lucide-react";

export const metadata = {
  title: "The Wig Bank Project | Cranial Prosthesis | Exodus Exports Pvt. Ltd.",
  description: "A Socio-Economic Model by Exodus Exports (P) Ltd & Cancer Institute (WIA), Adyar. Business Impacting Society.",
};

export default function TheWigBankPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO HEADER */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          
          <div className="flex justify-center">
            <Link 
              href="/cranial-prosthesis" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#A9153B] transition-colors bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Cranial Prosthesis</span>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> THE WIG BANK PROJECT
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            THE WIG BANK PROJECT
          </h1>

          <p className="text-sm sm:text-base font-bold text-slate-700 font-display max-w-2xl mx-auto">
            A Socio-Economic Model by Exodus Exports (P) Ltd & Cancer Institute (WIA), Adyar
          </p>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW: BUSINESS IMPACTING SOCIETY */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200 bg-slate-100">
                <Image
                  src="/images/products/hair_wigs.jpg"
                  alt="The Wig Bank"
                  width={800}
                  height={900}
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <div className="font-bold text-lg font-display">THE WIG BANK</div>
                  <div className="text-white/90 text-xs font-medium mt-1">Exodus Exports & Cancer Institute (WIA)</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <p className="text-xs sm:text-sm font-bold text-[#A9153B] font-display uppercase tracking-wider">
                  “The fingers that once rolled beedis now weave confidence and hope for cancer patients.”
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
                  Overview
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Project Overview: Business Impacting Society
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  Since 2021, Exodus Exports (P) Ltd, in collaboration with the Cancer Institute (WIA), Adyar, Chennai, has been working on a sustainable socio-economic model that addresses two critical issues:
                </p>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                      <span>Rehabilitation of women beedi (tobacco) workers</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                      <span>Providing affordable, dignified wigs to cancer and alopecia patients</span>
                    </li>
                  </ul>
                </div>
                <p>
                  This initiative embodies the unique concept of “Business impacting Society”, where the economic empowerment of rural women directly contributes to restoring dignity for cancer patients experiencing hair loss due to chemotherapy.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. THE WIG BANK: RESTORING CONFIDENCE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Restoring Confidence
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              The Wig Bank: Restoring Confidence
            </h2>
          </ScrollReveal>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-6">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Cancer and alopecia patients across India have long faced difficulty in accessing reliable, affordable, and good-quality wigs. Most wigs available are either prohibitively expensive or of substandard quality, often imported from China, Vietnam or Indonesia.
            </p>
            
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <p className="text-xs sm:text-sm font-semibold text-slate-900">In response, we launched:</p>
              <h3 className="font-extrabold text-[#A9153B] text-base sm:text-lg font-display">CIX WIGS</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>A non-commercial, humanitarian brand of wigs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Produced by women from rural Tamil Nadu, formerly engaged in the hazardous beedi rolling industry</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>A project under the banner of “Alternative Livelihood for Beedi Workers”, aligned with Article 17 of WHO-FCTC</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COLLABORATION WITH CANCER INSTITUTE (WIA) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Collaboration
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Collaboration with Cancer Institute (WIA)
            </h2>
          </ScrollReveal>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-6">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              In 2021, under the leadership of the late Dr. V. Shanta, the Cancer Institute (WIA) initiated a mission to create employment opportunities for women in the Tirunelveli district, a beedi industry hub.
            </p>

            <div className="space-y-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
                Key facts:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">Over 7 million women in India are still engaged in beedi rolling</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">No prior alternative employment schemes have offered sustainable results</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">Wig making is a labour-intensive industry, highly suitable for women workers</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">With extensive training and support, these women now craft high-quality wigs for cancer patients</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. OVERCOMING CHALLENGES & PRODUCTION ETHICS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Overcoming Challenges */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
                  Challenges
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Overcoming Challenges
                </h3>
              </div>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-600">
                  Transforming the lives of rural beedi workers was not without its hurdles:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Lack of formal education and exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Cultural taboos around human hair handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Initial resistance to factory work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Discipline and work ethic development</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  After more than a year of focused training, mentoring, and cultural sensitization, the women now:
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                    <span>Earn a stable monthly income</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                    <span>Work in a professional, safe, and supportive environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                    <span>Experience a visible transformation in lifestyle and self-worth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                    <span>In some cases, earn more than their spouses</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Production & Workplace Ethics */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
                  Ethics
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Production & Workplace Ethics
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>8-hour workday, half-day on Saturdays</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Leave provisions as per Factory Act</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>No minors employed; all workers are above 18 years</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Incentive-based pay + performance bonus</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Access to a refectory, festival events, and mental wellness support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>100% female workforce — ex-beedi rollers only</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 6. THE OFFER: WHAT WE PROVIDE */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              The Offer
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              The Offer: What We Provide
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* To Cancer / Alopecia Patients */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                To Cancer / Alopecia Patients:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Regular wigs at cost price: ₹5,000 (excl. taxes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Customized wigs matching head shape, texture, and colour</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Hair patches & volumizers for partial hair loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Wigs from donated hair, made with dignity and care</span>
                </li>
              </ul>
            </div>

            {/* To Corporates, Hospitals, NGOs, Colleges */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                To Corporates, Hospitals, NGOs, Colleges:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Host hair donation drives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Sponsor wigs for cancer patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Send collected hair to be made into wigs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Join as a distributor or corporate partner</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Co-organize social impact programs</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 7. VISION FOR THE FUTURE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 max-w-4xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Future Roadmap
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Vision for the Future
            </h2>
          </ScrollReveal>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6">
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Current project under NABARD is to expand to 300 employees in 2026-27</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Expand to employ 1,000 women from beedi industry within 3 years</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Launch awareness campaigns in India and abroad</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Continue collaborating with Skill India, NABARD, MSME, and district administration</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Tap into the global wig demand while maintaining our ethical, women-centric production model</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-[#A9153B]/5 border border-[#A9153B]/20 text-center">
              <p className="font-bold text-[#A9153B] text-xs sm:text-sm font-display">
                “The fingers that once rolled beedis now weave confidence and hope for cancer patients.”
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. HAIR DONATION: GUIDELINES & HOW TO DONATE */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Hair Donation
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Hair Donation: Guidelines
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Ideal Hair */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                Ideal Hair:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Minimum length: 10&quot; (14” preferred)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Natural, undyed, unbleached hair is best</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Clean, dry, tied in a plait/ponytail (secured at 3 points)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>No fallen hair accepted</span>
                </li>
              </ul>
            </div>

            {/* How to Donate */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                How to Donate:
              </h3>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#A9153B] shrink-0">1.</span>
                  <span>Wash and dry your hair (avoid conditioner)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#A9153B] shrink-0">2.</span>
                  <span>Cut and tie securely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#A9153B] shrink-0">3.</span>
                  <span>Place in zip-lock bag or envelope</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#A9153B] shrink-0">4.</span>
                  <span>Include name, email, and phone number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#A9153B] shrink-0">5.</span>
                  <div>
                    <span className="font-semibold text-slate-900">Send to:</span>
                    <div className="mt-1 space-y-0.5 text-xs text-slate-600">
                      <p className="font-bold text-slate-900">Dr. V. Surendran Veeriah</p>
                      <p>Professor & Head, Department of Psycho-Oncology</p>
                      <p className="font-semibold text-slate-900">Cancer Institute (WIA)</p>
                      <p>No. 38, Sardar Patel Road, Adyar</p>
                      <p>Chennai – 600036</p>
                      <p className="pt-1"><strong className="text-slate-900">Tel.</strong> 044 – 2235 1615</p>
                      <p><strong className="text-slate-900">Email:</strong> v.surendran@cancerinstitutewia.org</p>
                      <p><strong className="text-slate-900">Web:</strong> www.cancerinstitutewia.in</p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-4xl mx-auto space-y-1 text-xs text-slate-600">
            <p>• Donors receive a recognition certificate from Cancer Institute (WIA)</p>
            <p>• No individual wig tracking or patient photos due to privacy and operational limitations</p>
          </div>

        </div>
      </section>

      {/* 9. JOIN US – BE A PART OF THE CHANGE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 max-w-4xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Get Involved
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Join Us – Be a Part of the Change
            </h2>
          </ScrollReveal>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6">
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Buy a wig, donate hair, or support us through CSR partnerships</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Help us scale this model to empower more women and restore hope in the lives of cancer patients across India and beyond</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-[#A9153B]/5 border border-[#A9153B]/20 text-center">
              <p className="font-bold text-[#A9153B] text-xs sm:text-sm font-display">
                Together, let’s transform lives — from tobacco to transformation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 10. SCAN QR CODE */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-xl">
          <ScrollReveal className="space-y-4 flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
              Scan this QR to get the brochure
            </h3>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-md inline-block">
              <Image
                src="/qr.jpg"
                alt="Scan this QR to get the brochure"
                width={220}
                height={220}
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />

    </div>
  );
}
