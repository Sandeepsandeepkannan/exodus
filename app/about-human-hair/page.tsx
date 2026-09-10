import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ShieldCheck, 
  Scissors,
  Layers,
  Flame,
  Award,
  Info
} from "lucide-react";

export const metadata = {
  title: "FACTS ABOUT INDIAN HUMAN HAIR | Exodus Exports",
  description:
    "Indian human hair is widely valued throughout the global hair-extension and wig industry for its natural characteristics, versatility, and availability. Learn the essential facts about origin, processing, and authenticity.",
};

export default function AboutHumanHairPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> EXODUS EXPORTS EDUCATIONAL GUIDE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            FACTS ABOUT INDIAN HUMAN HAIR
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Indian human hair is widely valued throughout the global hair-extension and wig industry for its natural characteristics, versatility, and availability. However, there are many misconceptions about its origin, quality, processing, and authenticity.
          </p>
        </div>
      </section>

      {/* 2. THE 15 FACTS (PRIMARY CONTENT FROM FACTS ABOUT INDIAN HUMAN HAIR.DOCX) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <SectionHeading
              eyebrow="AUTHENTICITY & TRACEABILITY"
              title="15 Essential Facts About Indian Human Hair"
              subtitle="Understanding origin, quality, cuticle alignment, processing, and market realities."
              centered
            />
          </ScrollReveal>

          {/* Grid of 15 Facts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Fact 1 */}
            <ScrollReveal delay={0.02}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 01</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    1. TEMPLE HAIR IS AN IMPORTANT SOURCE OF INDIAN VIRGIN HAIR
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A significant amount of high-quality Indian virgin hair comes from temples, particularly in South India. Devotees voluntarily offer their hair as part of religious rituals and traditions. The hair is collected by temples and, in many cases, subsequently sold through auctions or other organized channels.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 2 */}
            <ScrollReveal delay={0.04}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 02</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    2. TEMPLE HAIR IS NOT SIMPLY “HAIR SOLD OUT OF POVERTY”
                  </h3>
                  <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
                    <p>
                      A common misconception is that Indian women primarily sell their hair because of poverty.
                    </p>
                    <p>
                      Much of the hair offered at temples is donated voluntarily as part of religious and cultural practices. Hair may also enter the commercial market through other collection channels, so the origin of Indian hair can vary.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 3 */}
            <ScrollReveal delay={0.06}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 03</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    3. WHAT MAKES HAIR “VIRGIN”?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Virgin hair generally refers to human hair that has not been chemically processed, bleached, permanently coloured, or otherwise significantly altered. Authentic raw virgin hair retains much of its natural structure and characteristics. However, the term “virgin” is not always used consistently throughout the international hair market, so buyers should verify the source and processing history.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 4 */}
            <ScrollReveal delay={0.08}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 04</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    4. NATURAL INDIAN HAIR COMES IN DIFFERENT TEXTURES
                  </h3>
                  <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
                    <p>Indian hair naturally occurs in a range of textures, including:</p>
                    <ul className="space-y-1 pl-2 text-slate-700 font-medium">
                      <li>• Natural straight</li>
                      <li>• Natural wavy</li>
                      <li>• Natural curly</li>
                    </ul>
                    <p className="pt-1">
                      Because human hair is a natural product, every bundle can have its own individual characteristics. Texture, thickness, colour, density, and wave pattern may vary from person to person.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 5 */}
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 05</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    5. RAW HAIR DOES NOT NECESSARILY LOOK LIKE FINISHED EXTENSIONS
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Raw virgin hair can look very different from the smooth, glossy and uniform extensions commonly displayed in the market. The exceptionally silky, shiny and soft appearance of many commercial hair extensions is often achieved through sorting, washing, conditioning, steam processing, colouring, coating, or other forms of treatment. Natural raw hair should therefore not be judged solely by its appearance.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 6 */}
            <ScrollReveal delay={0.12}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 06</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    6. REMY HAIR AND NON-REMY HAIR ARE DIFFERENT
                  </h3>
                  <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
                    <p>
                      <strong>Remy hair</strong> generally refers to hair collected and prepared with the cuticles aligned in the same direction, from root to tip. Proper cuticle alignment can help reduce tangling and maintain a more natural feel.
                    </p>
                    <p>
                      <strong>Non-Remy hair</strong> is collected through various methods and may contain hairs running in different directions. It can be processed to reduce tangling and improve its appearance.
                    </p>
                    <p>
                      Non-Remy hair may also be marketed under descriptions such as “cuticle-free” or “tangle-free,” depending on how it has been processed.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 7 */}
            <ScrollReveal delay={0.14}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 07</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    7. “FALLEN HAIR” IS ANOTHER FORM OF COLLECTION
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Hair collected from combs, floors, brushes, or other sources is sometimes referred to as “fallen hair.” Because the hairs are naturally shed and collected separately, they are generally more difficult to keep aligned root-to-tip. Such hair can therefore require additional sorting and processing. These are now termed as “Conversion Remy”
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 8 */}
            <ScrollReveal delay={0.16}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 08</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    8. PROCESSING CAN RESULT IN SIGNIFICANT WASTAGE
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Raw hair requires considerable sorting, cleaning, grading, alignment and preparation before it can become finished extensions or wigs. Depending on the starting material and the final product required, a substantial percentage of the original raw material may be lost during processing. This is one of the reasons why genuine high-grade hair can be considerably more expensive than heavily processed hair.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 9 */}
            <ScrollReveal delay={0.18}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 09</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    9. BE CAREFUL WITH GEOGRAPHICAL LABELS
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Terms such as <strong>“Brazilian,” “Peruvian,” and “Malaysian hair”</strong> are frequently used in the international hair-extension industry. These labels do not necessarily mean that the hair was actually collected from women in those countries. In many cases, they are commercial descriptions referring to a particular look, texture, colour, or market category. The true origin and processing history of hair should therefore be verified rather than assumed from the label alone.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 10 */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 10</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    10. OTHER ORIGINS HAVE DIFFERENT LEVELS OF AVAILABILITY
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Hair from East Asia, China, Eastern Europe and other regions can also enter the international market. Availability depends on collection practices, local customs, population, hair characteristics and demand. Some origins are considerably less abundant than Indian hair, which can affect their price.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 11 */}
            <ScrollReveal delay={0.22}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 11</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    11. ALL HUMAN HAIR CAN TANGLE
                  </h3>
                  <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
                    <p>Even genuine Remy or virgin hair can tangle.</p>
                    <p className="font-semibold text-slate-700">Tangling can be influenced by:</p>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-slate-700 pl-2">
                      <li>• Hair texture</li>
                      <li>• Length</li>
                      <li>• Moisture</li>
                      <li>• Friction</li>
                      <li>• Sleeping habits</li>
                      <li>• Incorrect brushing</li>
                      <li>• Product buildup</li>
                      <li>• Heat and chemical exposure</li>
                      <li>• Poor maintenance</li>
                    </ul>
                    <p className="pt-2 font-bold text-brand-navy">
                      “Virgin” does not mean “tangle-proof.”
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 12 */}
            <ScrollReveal delay={0.24}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 12</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    12. NATURAL HAIR IS NOT PERFECTLY UNIFORM
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Human hair is a natural product. Natural waves and curls do not necessarily have a perfectly symmetrical or identical pattern from root to tip. Slight variations between strands and bundles are normal. An excessively uniform texture can sometimes indicate that the hair has been processed or mechanically altered.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 13 */}
            <ScrollReveal delay={0.26}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 13</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    13. AUTHENTIC RAW INDIAN HAIR CAN BE EXPENSIVE
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    High-quality raw Indian hair requires careful sourcing, sorting, grading and processing. Therefore, unusually cheap hair marketed as <strong>100% authentic raw Indian virgin hair</strong> should be examined carefully. Low-priced products may contain different grades of hair, mixed origins, non-Remy hair, synthetic fibres, or hair that has undergone significant processing. Price alone does not prove authenticity, but genuine high-quality raw hair generally carries a higher cost because of its limited supply and processing requirements.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 14 */}
            <ScrollReveal delay={0.28}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 14</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    14. PROCESSING CAN CHANGE THE APPEARANCE OF HAIR
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Hair that looks extremely shiny, silky, soft and uniform may have been treated to achieve that appearance. Treatment is not necessarily a bad thing—it can produce attractive and easy-to-use finished extensions. However, customers should know whether they are purchasing <strong>raw hair, virgin hair, Remy hair, or chemically/thermally processed hair</strong>. Transparency about processing is essential.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fact 15 */}
            <ScrollReveal delay={0.3}>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between space-y-4 hover:border-brand-navy/40 transition-all duration-300">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">FACT 15</div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    15. AUTHENTICITY HAS A PRICE
                  </h3>
                  <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
                    <p>
                      The quality of human hair depends on its source, collection method, alignment, condition, processing and traceability. When purchasing premium Indian human hair, buyers should look beyond appearance and ask:
                    </p>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700 pl-2 font-medium">
                      <li>• Where did the hair come from?</li>
                      <li>• How was it collected?</li>
                      <li>• Is it Remy or non-Remy?</li>
                      <li>• Has it been chemically treated?</li>
                      <li>• Has it been mixed with hair of another origin?</li>
                      <li>• What processing has been performed?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* THE BOTTOM LINE (FROM FACTS ABOUT INDIAN HUMAN HAIR.DOCX) */}
          <ScrollReveal className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold uppercase tracking-wider">
              SUMMARY
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              THE BOTTOM LINE
            </h3>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
              <p className="font-semibold text-white">
                Authentic Indian human hair is a natural product with unique characteristics.
              </p>
              <p>
                Premium raw and virgin Indian hair is valuable because of its natural qualities, limited availability at the highest grades, careful sourcing and the work required to transform raw hair into finished extensions. Beautiful hair does not necessarily mean authentic hair.
              </p>
              <p className="text-white font-medium">
                There is always a price for authenticity, quality and traceability.
              </p>
              <div className="pt-4 border-t border-slate-800 text-sm sm:text-base font-extrabold tracking-wider text-brand-navy uppercase">
                BUY WITH KNOWLEDGE. ASK QUESTIONS. VERIFY THE SOURCE. QUALITY HAS A PRICE.
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 3. SUPPLEMENTARY SECTION: APPLYING & MAINTAINING YOUR HAIR EXTENSIONS (FROM EXODUS WEBSITE CONTENTS FEB 09.26.DOCX) */}
      <section className="py-24 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <SectionHeading
              eyebrow="CARE GUIDELINES"
              title="APPLYING & MAINTAINING YOUR HAIR EXTENSIONS"
              subtitle="Proper care ensures maximum lifespan and performance of your extensions."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Professional Application */}
            <ScrollReveal delay={0.05}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle h-full space-y-4">
                <h4 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Scissors className="h-5 w-5 text-brand-navy" /> Professional Application
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Always use certified hair professionals for installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Improper fixing may cause shedding, matting, or tangling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Application technique varies by hair texture and extension type</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Maintenance Guidelines */}
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle h-full space-y-4">
                <h4 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-navy" /> Maintenance Guidelines
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Detangle from ends to roots before washing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Wash with lukewarm water 2–3 times per week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Always condition after shampooing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Avoid rubbing hair in reverse direction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Blow-dry and style gently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Braid or loosely cover hair while sleeping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Avoid oil application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Visit your stylist regularly</span>
                  </li>
                </ul>
                <p className="pt-2 text-xs font-semibold text-slate-800">
                  Proper care ensures maximum lifespan and performance of your extensions.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 4. FINAL CTA: DISTRIBUTOR & WHOLESALE ENQUIRIES */}
      <CTASection
        title="Distributor & Wholesale Enquiries"
        subtitle="We welcome distributors, partners, and JV enquiries worldwide. Grow your business with a trusted Indian human hair manufacturer."
        buttonText="Contact Us"
      />

    </div>
  );
}
