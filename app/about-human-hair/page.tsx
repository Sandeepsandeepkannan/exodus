import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { hairTextures } from "@/data/products";
import { Sparkles, HelpCircle, CheckCircle2, AlertTriangle, ShieldCheck, Flame, Palette, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Facts About Indian Human Hair | Exodus Exports Hair Guide",
  description:
    "Comprehensive guide to authentic Indian human hair: temple sourcing facts, Remy vs non-Remy, 25-35% processing weight loss, geographical mislabeling truths, and maintenance rules.",
};

const hairFacts = [
  {
    num: "01",
    title: "Temple Hair is Voluntary Religious Sourcing",
    desc: "A major source of raw virgin hair comes from South Indian temples (such as Tirupati). Devotees voluntarily offer their hair as part of centuries-old religious traditions—it is NOT sold out of poverty.",
  },
  {
    num: "02",
    title: "Truth About 'Brazilian' & 'Peruvian' Labels",
    desc: "Over 70% to 80% of human hair sold globally originates from India. Labels like 'Brazilian', 'Peruvian', or 'Malaysian' are often marketing names for Indian hair that has been processed or rebranded elsewhere.",
  },
  {
    num: "03",
    title: "What Makes Hair Truly 'Virgin'",
    desc: "True virgin hair refers to raw human hair that has never been chemically processed, bleached, acid-washed, or permed. It retains its natural cuticle structure and original color intact.",
  },
  {
    num: "04",
    title: "Remy vs Non-Remy vs Conversion Remy",
    desc: "Remy hair is collected with cuticles aligned unidirectional from root to tip to prevent tangling. Non-Remy hair has mixed cuticle directions, while combings shed in villages are sorted as 'Conversion Remy'.",
  },
  {
    num: "05",
    title: "25–35% Weight Loss During Processing",
    desc: "Transforming raw temple hair into clean finished extensions involves meticulous hackling, washing, and removing short hairs. This results in a 25–35% loss of original weight, explaining the higher value of pure raw hair.",
  },
  {
    num: "06",
    title: "Raw Hair Looks Different from Finished Hair",
    desc: "Raw virgin hair does not look artificially shiny or glossy straight out of the bundle. The ultra-silky uniform look of retail extensions is achieved through professional washing, conditioning, and steam styling.",
  },
  {
    num: "07",
    title: "'Virgin' Does Not Mean 'Tangle-Proof'",
    desc: "All real human hair can tangle if exposed to friction, lack of moisture, hard water, or improper brushing. Regular hydration and gentle care are essential for maximum longevity.",
  },
  {
    num: "08",
    title: "Natural Non-Uniformity is a Sign of Authenticity",
    desc: "Human hair is a natural product. Real raw Indian bundles exhibit slight variations in wave pattern, shade, and texture between donors. Excessively identical bundles indicate heavy machine processing.",
  },
];

export default function AboutHumanHairPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> EDUCATIONAL GUIDE & INDUSTRY TRUTHS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            Facts About <span className="text-brand-navy">Indian Human Hair</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Understanding origin, cuticle alignment, processing wastage, and industry misconceptions. Sourced ethically from South India by Exodus Exports.
          </p>
        </div>
      </section>

      {/* 2. THE 8 KEY INDUSTRY FACTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-16">
            <SectionHeading
              eyebrow="AUTHENTICITY & KNOWLEDGE"
              title="Essential Facts Every Hair Buyer Should Know"
              subtitle="The international hair market contains many marketing myths. Here is the factual reality based on two decades of export experience."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hairFacts.map((fact, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.06}>
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-navy/30 hover:-translate-y-1 transition-all duration-300 space-y-3 h-full">
                  <div className="text-xs font-extrabold text-brand-navy tracking-widest font-display">
                    FACT #{fact.num}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display">{fact.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{fact.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 3. REAL HUMAN HAIR VS SYNTHETIC HAIR COMPARISON */}
      <section className="py-24 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="PRODUCT COMPARISON"
              title="Real Human Hair vs. Synthetic Fiber"
              subtitle="Why authentic Indian human hair remains the superior choice for salons, wigmakers, and long-term wearers."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Real Human Hair Card */}
            <ScrollReveal direction="right">
              <div className="bg-white p-8 rounded-xl border-2 border-brand-navy shadow-subtle space-y-6 h-full">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="font-extrabold text-slate-900 text-xl font-display flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-brand-navy" /> 100% Real Human Hair
                  </div>
                  <span className="px-3 py-1 bg-brand-navy/10 text-brand-navy text-xs font-bold rounded-full">Premium Grade</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Versatility:</strong> Can be coloured, bleached, permed, and heat styled like natural hair.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Longevity:</strong> Worn continuously for months with proper care and maintenance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Natural Blend:</strong> Moves, washes, and dries naturally with soft body wave.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Reusable:</strong> Washable and re-styleable repeatedly with proper care.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Synthetic Hair Card */}
            <ScrollReveal direction="left">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle space-y-6 h-full">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="font-extrabold text-slate-900 text-xl font-display flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-amber-500" /> Synthetic Fiber Hair
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full">Budget / Short-Term</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                    <span><strong>Heat Sensitivity:</strong> Melts under thermal flat irons or curling tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                    <span><strong>Limited Lifespan:</strong> Tangles quickly and lasts only weeks. Cannot be dyed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                    <span><strong>Unnatural Shine:</strong> High artificial plastic sheen that feels rough against skin.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                    <span><strong>Non-Reusable:</strong> Discarded after single short-term use.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 4. NATURAL TEXTURE MATRIX */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-16">
            <SectionHeading
              eyebrow="TEXTURE SPECTRUM"
              title="Authentic Indian Hair Textures"
              subtitle="Indian human hair naturally occurs in three primary textures, alongside steam-crafted texture variations."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairTextures.map((tex, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-2 hover:border-brand-navy/40 transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-base font-display">
                    <Sparkles className="h-4 w-4 text-brand-navy" />
                    {tex.name}
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {tex.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. APPLICATION & MAINTENANCE GUIDELINES */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="mb-16">
            <SectionHeading
              eyebrow="CARE INSTRUCTIONS"
              title="Professional Maintenance Guidelines"
              subtitle="To ensure your raw Indian hair extensions remain soft, tangle-free, and lustrous, follow these official care rules."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="font-bold text-slate-900 text-sm font-display flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-brand-navy" /> 1. Washing Protocol
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detangle hair gently from ends to roots before washing. Wash 2–3 times per week with lukewarm water using sulfate-free shampoo. Always follow with deep hydrating conditioner.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="font-bold text-slate-900 text-sm font-display flex items-center gap-2">
                <Flame className="h-4 w-4 text-brand-navy" /> 2. Styling & Heat Protection
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Blow-dry gently on low to medium heat settings. Always apply a thermal protectant spray before using flat irons or curling wands to preserve cuticle integrity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="font-bold text-slate-900 text-sm font-display flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-navy" /> 3. Nighttime & Storage Care
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Braid hair loosely or wrap in a silk bonnet before sleeping to avoid friction knots. Avoid applying heavy oils directly to the weft tracks.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FINAL CTA */}
      <CTASection
        title="Source Authentic Indian Human Hair Today"
        subtitle="Partner with Exodus Exports for 100% genuine temple hair extensions, wefts, and full lace wigs."
        buttonText="Explore Product Range"
      />

    </div>
  );
}
