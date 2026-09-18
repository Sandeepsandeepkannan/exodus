import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Scissors, 
  Layers, 
  Droplets,
  Heart,
  Globe,
  HelpCircle
} from "lucide-react";

export const metadata = {
  title: "About Hair | Exodus Exports Pvt. Ltd. - Indian Human Hair",
  description:
    "Indian hair is naturally strong, resilient, and adaptable. Learn all about human hair, real vs synthetic extensions, and maintenance guidelines.",
};

export default function AboutHumanHairPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO / WHY INDIAN HUMAN HAIR? */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span> About hair
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            Why indian human hair?
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
            Indian hair is naturally strong, resilient, and adaptable. It can be:
          </p>
        </div>
      </section>

      {/* 2. WHY INDIAN HUMAN HAIR DETAILS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-800">Coloured and bleached</span>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-800">Heat styled and curled</span>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-800">Washed, blow-dried, and reused</span>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-slate-800">Worn continuously for long periods with proper care</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed text-center">
            <p className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-medium">
              Unlike synthetic or chemically processed hair, Indian virgin hair retains its cuticle integrity, ensuring minimal tangling and maximum longevity.
            </p>
            <p>
              Over 10 million devotees in India tonsure their hair every year as a religious offering. This hair is collected by temples and auctioned through a regulated grading system, making it one of the most ethical and traceable sources of human hair in the world.
            </p>
          </div>

        </div>
      </section>

      {/* 3. THE TRUTH ABOUT “BRAZILIAN”, “MALAYSIAN” & “PERUVIAN” HAIR */}
      <section className="py-24 bg-[#B91941] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
            <Globe className="h-4 w-4" /> Global industry insight
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
            The truth about “brazilian”, “malaysian” & “peruvian” hair
          </h2>
          <div className="space-y-6 text-white/95 text-base sm:text-xl leading-relaxed">
            <p>
              Despite popular marketing claims, over 70 to 80% of human hair sold globally originates from India. Many products labelled as Brazilian, Malaysian, Peruvian, or Moroccan hair are actually Indian hair that has been processed, styled, or rebranded elsewhere.
            </p>
            <p className="font-bold text-white bg-white/10 p-6 rounded-2xl border border-white/20">
              Most hair marketed under regional names is Indian hair. India remains the primary source of commercial human hair worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ALL ABOUT HUMAN HAIR */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span> Buyer’s guide
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
              All about human hair
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-display">
              Know your hair
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Choosing the right type of hair is essential for achieving a natural look, long-lasting performance, and ease of maintenance. Human hair extensions differ significantly from synthetic fibres in appearance, feel, and durability.
            </p>
          </ScrollReveal>

          {/* Real Human Hair vs Synthetic Hair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Real Human Hair Extensions */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-bold text-[#B91941] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" /> 100% Authentic
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Real human hair extensions
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Real human hair offers unmatched versatility and realism. When applied correctly by a professional, these extensions can be:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0" />
                    <span>Washed, brushed, and styled like natural hair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0" />
                    <span>Straightened or curled using heat tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0" />
                    <span>Coloured or bleached as required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0" />
                    <span>Worn continuously for months with proper care</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-4 border-t border-slate-200">
                Real human hair blends seamlessly with your own hair and dries naturally with a soft body wave, requiring minimal styling. This makes it the preferred choice for professionals, celebrities, and discerning customers worldwide.
              </p>
            </div>

            {/* Synthetic (Artificial) Hair */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="h-4 w-4" /> Alternative
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Synthetic (artificial) hair
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Synthetic hair is a budget-friendly alternative, mainly chosen for short-term use.
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"></span>
                    <span>Cheaper alternative with limited lifespan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"></span>
                    <span>However, it doesn’t look original. Makes you feel uneasy and looks less natural</span>
                  </li>
                </ul>

                {/* Advantages */}
                <div className="pt-2 space-y-1.5">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Advantages:</div>
                  <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                      <span>Holds curls and styles for a long time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-slate-500 shrink-0" />
                      <span>Offers higher volume per strand</span>
                    </li>
                  </ul>
                </div>

                {/* Disadvantages */}
                <div className="pt-2 space-y-1.5">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Disadvantages:</div>
                  <ul className="space-y-1 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B91941] shrink-0"></span>
                      <span>Cannot be washed or reused</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B91941] shrink-0"></span>
                      <span>Tangles easily</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B91941] shrink-0"></span>
                      <span>Cannot withstand heat styling</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-slate-800 pt-4 border-t border-slate-200">
                For long-term wear, natural appearance, and reusability, human hair remains the superior choice.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. APPLYING & MAINTAINING YOUR HAIR EXTENSIONS */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span> Care & application
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
              Applying & maintaining hair extensions
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
            
            {/* Professional Application */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                <Scissors className="h-5 w-5 text-[#B91941]" /> Professional application
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Always use certified hair professionals for installation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Improper fixing may cause shedding, matting, or tangling</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Application technique varies by hair texture and extension type</span>
                </li>
              </ul>
            </div>

            {/* Maintenance Guidelines */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                <Droplets className="h-5 w-5 text-[#B91941]" /> Maintenance guidelines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Detangle from ends to roots before washing</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Wash with lukewarm water 2–3 times per week</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Always condition after shampooing</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Avoid rubbing hair in reverse direction</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Blow-dry and style gently</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Braid or loosely cover hair while sleeping</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Avoid oil application</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                  <span>Visit your stylist regularly</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 pt-2">
                Proper care ensures maximum lifespan and performance of your extensions.
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
