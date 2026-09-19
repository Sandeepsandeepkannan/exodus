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
  ExternalLink,
  Award,
  Users,
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowLeft
} from "lucide-react";

export default function CixWigsPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO HEADER */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          
          <div className="flex justify-center">
            <Link 
              href="/cranial-prosthesis" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#A9153B] transition-colors bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm"
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

      {/* 2. THE CONCEPT OF CIX WIGS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200 bg-slate-100">
                <Image
                  src="/images/products/cranial_prostheses.jpg"
                  alt="CIX Wigs"
                  width={800}
                  height={900}
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <div className="font-bold text-lg font-display">CIX WIGS</div>
                  <div className="text-white/90 text-xs font-medium mt-1">Cancer Institute (WIA) & Exodus Exports</div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <p className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                  100% women employed organization employing only ex-beedi rollers
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
                  The Concept
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  TRANSITION OF BEEDI (Local Cigarette) ROLLING WOMEN TO SUSTAINABLE ALTERNATIVE LIVELIHOOD
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  The concept of CIX WIGS evolved to address the needs of hair loss patients who lose their hair post chemotherapy or alopecia. These wigs are being produced through a special project namely “Alternative livelihood programme for rural women who are employed in the beedi rolling (tobacco) industry in India”. This is a joint venture between Cancer Institute (WIA) Adyar and Exodus Exports (P) Limited, conceived by Dr. Shanta ex-chairman of Cancer Institute (WIA), Adyar, Chennai in 2021. This is a noble project to shift the women working in Beedi rolling Tobacco industry to making wigs.
                </p>
                <p>
                  The Cancer Institute (WIA), Chennai and Exodus Exports (P) Limited are jointly implementing this project along with other government agencies in the southern part of Tamil Nadu where the Beedi hub is located.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">The core mission:</strong> To transition rural women employed in the hazardous beedi (tobacco) rolling industry into a sustainable and dignified livelihood — wig making for cancer patients suffering from hair loss due to chemotherapy or alopecia.
                </p>
                <p className="text-xs text-slate-600">
                  Conceived in 2021 by the late Dr. V. Shanta (Cancer Institute), this project operates in southern Tamil Nadu, especially in the Tirunelveli district, a known beedi-rolling hub.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE PRODUCTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              The Production
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Who makes the Cancer Wig?
            </h2>
            <p className="text-sm font-bold text-[#A9153B] font-display">
              PROJECT TO PREVENT TOBACCO CANCER – A GROUND ROOT PREVENTION
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              This is a first of its kind project with its inception in 2021 in Tirunelveli district of Tamil Nadu.
            </p>
            <p>
              Cancer Institute (WIA), Chennai which conducts awareness programs to help the beedi rolling women to come out of the industry to an alternative job has taken this initiative.
            </p>
            <p>
              Interested women enroll for skill development training. These women are given three months tailoring training with a course completion certificate. Once trained, they are offered further paid training for 6 months in Wig making.
            </p>
            <p>
              Wig making training is provided exclusively by Exodus Exports Pvt. Ltd., where stipend is paid to these women trainees. Skill India associated with Government of Tamil Nadu and NABARD (National Bank for Agricultural and Rural Development) – sponsor these training programme.
            </p>
            <p>
              The women are then permanently employed in Exodus Exports (P) Ltd and trained further to make Cancer Wigs to Cancer Patients.
            </p>
            <p>
              This gives a dignified and safer job in a secured environment where there is immense job security and their self-esteem is restored.
            </p>
            <p>
              Besides regular counselling, workshop and entertainments are conducted to boost their morale and to transform them.
            </p>
            <p>
              This is a project on alternative livelihood for tobacco workers, in line with the Article 17 of the FCTC (WHO).
            </p>
          </div>

          {/* 3-Pronged Noble Cause Box */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6 max-w-4xl mx-auto">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-center">
              We are glad that at both ends we are able to serve for a 3 - pronged noble cause:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="h-8 w-8 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                  1
                </div>
                <p className="text-xs text-slate-700">
                  firstly, being able to evacuate them from those health danger zones,
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="h-8 w-8 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                  2
                </div>
                <p className="text-xs text-slate-700">
                  secondly providing jobs for these marginalized beedi rolling women,
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="h-8 w-8 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                  3
                </div>
                <p className="text-xs text-slate-700">
                  finally, the finished product is offered to cancer patients who otherwise lose their hair after chemotherapy. It gives them a sense of renewed confidence and hope.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#A9153B]/5 border border-[#A9153B]/20 text-center space-y-1">
              <p className="font-bold text-[#A9153B] text-xs sm:text-sm font-display">
                “The fingers that once made beedi are now producing wigs to cancer patients.”
              </p>
              <p className="text-[11px] text-slate-600">
                A unique effort to salvage the society guided by a strong team of advisors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE PROCESS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              The Process
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              How are the wigs produced?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">
                The tailoring trained ex-beedi rolling women are first selected according to their skill set and provided meticulous training.
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">
                This training takes anything between 3 to 6 months
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">
                Once trained, the artisans start making wigs for cancer patients
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">
                We use only imported wig caps. There are 3 different sizes of wig cap. There is an elastic band at the base to adjust the head size
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">
                The hair cost is the major factor affecting the price of the cancer wigs
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">
                It takes roughly a week to produce a wig
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">
                The usual size of the wig is about neck length
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">
                There are also options available for customized wigs based on the specification
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. HAIR DONATION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Hair Donation
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Care for Hair Donation?
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#A9153B] font-display uppercase tracking-wider">
              DO YOU WISH TO DONATE YOUR HAIR TO CANCER PATIENTS?
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              Your hair is precious and is valuable. It matters a lot to people who loose their hair. Yes, hair is adorable and is always an important part of our appearance and looks. It is the way we project ourselves to the world. The side effect of chemotherapy and radiation treatment for cancer results in hair fall usually. Hair fall is indeed a distressing and stressful experience for women patients and badly affects their self-esteem and confidence when they suddenly loose it due to medical reasons. This is on top of physical and emotional suffering caused by cancer affliction. Hair loss is irreplaceable.
            </p>
            <p>
              Wigs for cancer patients can help to overcome the psychological effects of hair loss condition. However, natural hair wigs are usually expensive since the cost of hair forms the major part of a wig’s cost, receiving donated hair is crucial for wig donations. The making cost is however less than 20% of the cost of the hair. Donating any part of your body is considered a holy act to express our love for others. And donating hair is an invaluable sacrifice one could extend.
            </p>
            <p className="font-semibold text-slate-900">
              Sure, kindly read the instruction below carefully:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* IDEAL HAIR FOR MAKING WIGS */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display border-b border-slate-100 pb-3 text-[#A9153B]">
                IDEAL HAIR FOR MAKING WIGS
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Donated hair must be in healthy & in good condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Only clean and dry hair is suitable for use</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Size 14&quot; (35cm) or longer hair is preferred although above 10” are accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Preferably natural hair is ideal that is hair without dye, henna or being chemically treated</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Natural Grey hair is also acceptable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Fallen hair is unusable for making high quality wigs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>A minimum of 6 to 8 women’s hair is required to make one basic wig.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>We can accept hair from within and outside India</span>
                </li>
              </ul>
            </div>

            {/* HOW TO DONATE YOUR HAIR? */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display border-b border-slate-100 pb-3 text-[#A9153B]">
                HOW TO DONATE YOUR HAIR?
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Haircut could be done at any salon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Hair has to be washed, dried and tied into a plait/ponytail</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Secure at both ends with a hair band, and one halfway down</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Prefer not to use conditioner or styling products</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Insert the ponytail into a zip lock bag or in a thick paper envelope.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Remember to send the name, email address & mobile number of the hair donor.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Courier Address */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-4">
            <h3 className="text-sm font-bold text-slate-900 font-display">
              Please courier the hair to:
            </h3>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-slate-900">HAIR DONATION FOR CIX WIGS TO BE ADDRESSED TO:</p>
              <p className="font-semibold text-slate-900">Dr. V. Surendran Veeriah</p>
              <p>Professor & Head - Department of Psycho-Oncology</p>
              <p className="font-semibold text-slate-900">CANCER INSTITUTE (WIA)</p>
              <p>No 38, Sardar Patel Road, Adyar</p>
              <p>Chennai - 600036</p>
              <p>E-mail: v.surendran@cancerinstitutewia.org</p>
              <p>Tel. 044-2235 1615</p>
              <p>www.cancerinstitutewia.in</p>
            </div>
          </div>

          {/* N.B. */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-3">
            <h4 className="text-xs font-bold text-[#A9153B] uppercase tracking-wider">N.B.</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>• Cancer Institute (WIA) Adyar will issue a recognition certificate to all hair donors</li>
              <li>• We cannot provide photographs of the PATIENT receiving a wig</li>
              <li>• We cannot provide pictures of a WIG made from your hair</li>
              <li>• If you’re below 18 years, you must obtain permission from your parent/guardian before hair donation</li>
              <li>• All decision as to whether or not your hair will be used is made by our team</li>
              <li>• Beware of bogus hair donation schemes and agencies who could misuse your valuable hair.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 6. THE OFFER */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              The Offer
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              What we can offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* For Cancer/Alopecia Patients */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                What we can offer to the Cancer/Alopecia Patients:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Regular cancer wigs at cost price Rs 5900 (INR) inclusive of 18% GST</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Natural cancer wigs at ₹5000 (INR) (exclusive of taxes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Receive donated hair to transform them into cancer wigs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Customized wigs to perfectly suite your profile where we match the texture, colour and shape of your head perfectly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Patches & volumizer to increase the thickness of hair instantly.</span>
                </li>
              </ul>
            </div>

            {/* For Corporate/Hospitals/NGO's/Colleges */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                What we offer to the Corporate/Hospitals/NGO’s/Colleges:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>We can help Institutions to organise hair donation camps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>The opportunity to buy and donate cancer wigs to hair loss patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Receive donated hair from your organisation to transform them into wigs for cancer patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Opportunity to business by taking up distributorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>A prospect to hospitals and corporates to co-participate in other areas of societal services</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-4xl mx-auto space-y-1">
            <p className="text-xs sm:text-sm text-slate-800 font-medium">
              We maintain stock of cancer wigs. Patients and cancer hospitals can approach us for our services
            </p>
            <p className="text-xs sm:text-sm font-bold text-[#A9153B] uppercase tracking-wider font-display pt-1">
              ENCOURAGE THIS PROJECT TO BUY CIX WIGS
            </p>
          </div>

        </div>
      </section>

      {/* 7. WHY SUPPORT CIX WIGS & JOIN US */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-100 pb-3">
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

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-100 pb-3">
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
              <p className="text-xs text-slate-600 pt-2 font-medium">
                Let’s build a society where healing is dignified and livelihoods are empowering.
              </p>
            </div>

          </div>

          {/* International Recognition */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              International Recognition
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              OUR PROJECT RECOGNITION IN INTERNATIONAL ARENA:
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              E-cancer interview links in World Cancer Congress (WCC) held in Geneva in Sep 2024.
            </p>
            <div className="space-y-2 text-xs">
              <p>
                <a 
                  href="https://ecancer.org/en/video/12107-alternative-livelihood-training-programme-for-rural-women-who-are-employed-in-the-tobacco-industry-in-india" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#A9153B] hover:underline inline-flex items-center gap-1 font-medium break-all"
                >
                  <span>https://ecancer.org/en/video/12107-alternative-livelihood-training-programme-for-rural-women-who-are-employed-in-the-tobacco-industry-in-india</span>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </p>
              <p>
                <a 
                  href="https://vimeo.com/ecancer/download/1018634498/56d70a2b61" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#A9153B] hover:underline inline-flex items-center gap-1 font-medium break-all"
                >
                  <span>https://vimeo.com/ecancer/download/1018634498/56d70a2b61</span>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <p className="text-xs font-semibold text-slate-900">Union for International Cancer Control - Geneva</p>
              <p className="text-xs text-slate-700">World Cancer Congress Day Link:</p>
              <p>
                <a 
                  href="https://www.worldcancerday.org/activities/prevention-tobacco-cancer-providing-alternative" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#A9153B] hover:underline inline-flex items-center gap-1 font-medium text-xs break-all"
                >
                  <span>https://www.worldcancerday.org/activities/prevention-tobacco-cancer-providing-alternative</span>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </p>
            </div>
          </div>

          {/* A Right Choice Can Change a Life Card */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display text-[#A9153B]">
              A Right Choice Can Change a Life
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Thank you for choosing our handcrafted wigs made from 100% authentic Indian human hair. Your choice isn’t just about elegance and confidence—it’s about compassion and change.
              </p>
              <p>
                Each wig is meticulously crafted using individually selected strands of natural Indian hair, designed to complement your unique style and enhance your natural beauty. But beyond aesthetics, your purchase carries a powerful purpose.
              </p>
              <p>
                By choosing our product, you are empowering rural women who were once employed in hazardous and exploitative roles within the tobacco (beedi) industry. These women faced low wages, unsafe working conditions, and limited access to healthcare or social security. Your support helps provide them with dignified, sustainable alternative livelihoods.
              </p>
              <p>
                This initiative is proudly carried out in collaboration with The Cancer Institute (WIA), Adyar, Chennai, India (www.cancerinstitutewia.in), in alignment with Article 17 of the WHO Framework Convention on Tobacco Control (FCTC)—promoting alternative livelihoods to those involved in tobacco-related work.
              </p>
              <p>
                Your purchase makes you part of a meaningful movement—one that brings dignity, safety, and hope to women in need.
              </p>
              <p className="font-semibold text-slate-900">
                Thank you for being a part of this cause.
              </p>
            </div>
          </div>

          {/* 7. CONTACT US */}
          <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-elevated max-w-4xl mx-auto space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold font-display text-white">
                Contact Us
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300">
              <div className="space-y-2">
                <p className="font-bold text-white uppercase tracking-wider text-xs">Registered Office:</p>
                <p className="font-semibold text-white">EXODUS EXPORTS (P) LIMITED</p>
                <p>Chennai – 600016</p>
                <p>Tamil Nadu - INDIA</p>
                <div className="pt-2">
                  <p className="font-bold text-white uppercase tracking-wider text-xs">Factories:</p>
                  <p>Tirunelveli Dt, TN</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-white">For sales enquiries contact:</p>
                  <p className="text-slate-300">Mob: +91-7550001106 (WhatsApp)</p>
                </div>
                <div>
                  <p className="font-semibold text-white">For corporate enquiries contact:</p>
                  <p className="text-slate-300">Mob: +91-7550001107 (WhatsApp)</p>
                </div>
                <div>
                  <p className="text-slate-300">Email: exodus.exports@gmail.com</p>
                  <p className="text-slate-300">www.exodusexports.com</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <p>
                To know more about THE WIG BANK please follow the link:{" "}
                <Link href="/cranial-prosthesis/the-wig-bank" className="text-[#A9153B] hover:underline font-semibold text-white">
                  www.thewigbank.com
                </Link>
              </p>
              <p>
                INDIVIDUAL CLIENTS interested in hair extensions, wigs & hair volumizer please visit{" "}
                <Link href="/products" className="text-white hover:underline font-semibold">
                  www.exodusexports.com
                </Link>
              </p>
              <p className="pt-2 text-[11px] text-slate-500">
                Copyright: Exodus Exports (P) Ltd
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />

    </div>
  );
}
