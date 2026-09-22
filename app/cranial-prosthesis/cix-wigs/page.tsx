import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  HeartHandshake, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Users, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  ArrowLeft 
} from "lucide-react";

export const metadata = {
  title: "CIX Wigs | Cranial Prosthesis | Exodus Exports Pvt. Ltd.",
  description: "From Beedi Rolling to Dignified Healing — One Wig at a Time. A collaboration between Cancer Institute (WIA), Adyar and Exodus Exports Pvt. Ltd.",
};

export default function CixWigsPage() {
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> CIX WIGS
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            CIX WIGS
          </h1>

          <p className="text-base sm:text-lg font-bold text-[#A9153B] font-display max-w-2xl mx-auto">
            “From Beedi Rolling to Dignified Healing — One Wig at a Time”
          </p>
        </div>
      </section>

      {/* 2. THE CONCEPT: A JOURNEY OF TRANSFORMATION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200 bg-slate-100">
                <Image
                  src="/images/products/cranial_prostheses.jpg"
                  alt="CIX Wigs"
                  width={800}
                  height={900}
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <div className="font-bold text-lg font-display">CIX WIGS</div>
                  <div className="text-white/90 text-xs font-medium mt-1">Cancer Institute (WIA) & Exodus Exports</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <p className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                  100% women-run enterprise — All artisans are former beedi rollers
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
                  The Concept
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  The Concept: A Journey of Transformation
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  CIX WIGS is a unique and impactful initiative born from compassion and vision — a collaboration between the Cancer Institute (WIA), Adyar, Chennai and Exodus Exports Pvt. Ltd.
                </p>
                <div className="p-5 rounded-xl bg-[#A9153B]/5 border-l-4 border-[#A9153B]">
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <strong className="text-slate-900">The core mission:</strong> To transition rural women employed in the hazardous beedi (tobacco) rolling industry into a sustainable and dignified livelihood — wig making for cancer patients suffering from hair loss due to chemotherapy or alopecia.
                  </p>
                </div>
                <p>
                  Conceived in 2021 by the late Dr. V. Shanta (Cancer Institute), this project operates in southern Tamil Nadu, especially in the Tirunelveli district, a known beedi-rolling hub.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. THE PRODUCTION: HEALING HANDS, NEW HOPE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              The Production
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              The Production: Healing Hands, New Hope
            </h2>
          </ScrollReveal>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-3">
            <p className="text-xs sm:text-sm text-slate-800">
              <strong className="text-slate-900">Who makes the wigs?</strong> Former beedi-rolling women, now trained artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* How it works */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-100 pb-3">
                How it works:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Awareness campaigns encourage women to leave the tobacco industry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Selected women undergo 3 months of tailoring training (certified).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Followed by 6 months of paid training in wig making at Exodus Exports Pvt. Ltd.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Supported by Skill India, Government of Tamil Nadu, and NABARD.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Women are then employed full-time, with continuous upskilling, counselling, and community support.</span>
                </li>
              </ul>
            </div>

            {/* Impact */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-100 pb-3">
                Impact:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Safe, stable, and dignified employment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Empowerment of marginalized women.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Creation of affordable, high-quality wigs for cancer patients.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>A rare example of ground-root prevention of tobacco-related cancer (in alignment with WHO-FCTC Article 17).</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE WIG-MAKING PROCESS: CRAFT WITH COMPASSION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              The Process
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              The Wig-Making Process: Craft with Compassion
            </h2>
          </ScrollReveal>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-6">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
              Training and Production:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700">Takes 3–6 months to train.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700">Each wig takes around 1 week to craft.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700">Uses imported wig caps in three sizes with adjustable elastic bands.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700">Hair quality and cost are the most significant price factors.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700">Wigs are typically neck-length, with custom options available.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700">100% women-run enterprise — All artisans are former beedi rollers.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. HAIR DONATION: GIVE THE GIFT OF CONFIDENCE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Hair Donation
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Hair Donation: Give the Gift of Confidence
            </h2>
          </ScrollReveal>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-3">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Why it matters:</strong> Hair loss is one of the most traumatic side effects of chemotherapy. Donated hair allows us to provide natural wigs that restore self-esteem and dignity to patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Guidelines to donate hair */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display border-b border-slate-100 pb-3 text-[#A9153B]">
                Guidelines to donate hair:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Minimum length: 10” (14” preferred)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Natural, clean, dry hair; no dye/henna preferred</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Tie hair into a ponytail or braid</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Secure with bands on both ends and middle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Place in zip lock or thick paper envelope</span>
                </li>
              </ul>
            </div>

            {/* Courier Address */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display border-b border-slate-100 pb-3 text-[#A9153B]">
                Courier to:
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <p className="font-bold text-slate-900">Dr. V. Surendran Veeriah</p>
                <p className="text-slate-600">Professor & Head – Psycho-Oncology</p>
                <p className="font-semibold text-slate-900">Cancer Institute (WIA)</p>
                <p>No. 38, Sardar Patel Road, Adyar</p>
                <p>Chennai – 600036</p>
                <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
                  <p><strong className="text-slate-900">Tel.</strong> 044 - 2235 1615</p>
                  <p><strong className="text-slate-900">Email:</strong> v.surendran@cancerinstitutewia.org</p>
                  <p><strong className="text-slate-900">Web:</strong> www.cancerinstitutewia.in</p>
                </div>
              </div>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              All donors receive a recognition certificate from the Cancer Institute (WIA)
            </p>
          </div>

        </div>
      </section>

      {/* 6. THE OFFER: HELPING PATIENTS, EMPOWERING SOCIETY */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <ScrollReveal className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              The Offer
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              The Offer: Helping Patients, Empowering Society
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* For Cancer/Alopecia Patients */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                For Cancer/Alopecia Patients:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Natural cancer wigs at ₹5000 (INR) (exclusive of taxes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Custom wigs (texture, colour, size)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Hair patches & volumizers</span>
                </li>
              </ul>
            </div>

            {/* For Corporates/Hospitals/NGOs/Colleges */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                For Corporates/Hospitals/NGOs/Colleges:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Host hair donation drives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Sponsor or distribute wigs to patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Become a distributor or partner in outreach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Collaborate on broader societal services</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-4xl mx-auto space-y-1">
            <p className="text-xs sm:text-sm text-slate-800 font-medium">
              We maintain wig stock for hospitals and patients. Walk-in support is available.
            </p>
          </div>

          {/* Why Support CIX WIGS? & Join Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-4">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                Why Support CIX WIGS?
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Uplift women from exploitative, health-damaging work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Serve cancer patients with dignity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Encourage ethical, community-led healthcare initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Align with global tobacco harm reduction goals (WHO FCTC)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                Join Us
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Donate your hair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Partner with us</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Buy a wig for someone in need</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Spread the word</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="p-6 rounded-2xl bg-[#A9153B]/5 border border-[#A9153B]/20 text-center max-w-4xl mx-auto space-y-3">
            <p className="font-bold text-[#A9153B] text-sm sm:text-base font-display">
              “The fingers that once rolled beedis now craft hope for those in pain.”
            </p>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Let’s build a society where healing is dignified and livelihoods are empowering.
            </p>
            <p className="text-[11px] text-slate-500 pt-2 border-t border-[#A9153B]/10">
              Copyright: Exodus Exports (P) Ltd
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />

    </div>
  );
}
