import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  ShieldCheck, 
  HeartHandshake, 
  Globe, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Users, 
  FileCheck,
  Phone,
  Mail,
  Award,
  User,
  GraduationCap,
  Trophy,
  Tv,
  Newspaper
} from "lucide-react";

export const metadata = {
  title: "About Us | Exodus Exports Pvt. Ltd. - Indian Human Hair Exports",
  description:
    "We are entrepreneurs who have built this company over more than two decades—guided by strong values, resilience, and an unwavering commitment to integrity.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. WHO WE ARE HERO */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span> PAGE - 2 ABOUT US
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            1.Who We Are
          </h1>
          <div className="space-y-4 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            <p>
              We are entrepreneurs who have built this company over more than two decades—guided by strong values, resilience, and an unwavering commitment to integrity, even though the toughest business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE DETAILED CONTENT */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200 bg-slate-100 group">
                <Image
                  src="/images/products/hair_wigs.jpg"
                  alt="Exodus Exports Pvt. Ltd."
                  width={800}
                  height={900}
                  className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <div className="font-bold text-xl font-display">Exodus Exports (P). Ltd.</div>
                  <div className="text-white/90 text-xs font-medium mt-0.5">Chennai, South India</div>
                </div>
              </div>

              {/* Core Philosophy Callout */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm font-display uppercase tracking-wider text-[#B91941]">
                  Our Philosophy
                </h4>
                <p className="text-sm font-semibold text-slate-800">
                  Our philosophy is rooted in the belief that business must grow alongside humanity.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Commercial success, for us, is meaningful only when it is accompanied by social responsibility, ethical practices, and respect for people at every level of the value chain.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="OUR IDENTITY & VALUES"
                title="1.Who We Are"
              />

              <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  We are entrepreneurs who have built this company over more than two decades—guided by strong values, resilience, and an unwavering commitment to integrity, even though the toughest business challenges.
                </p>
                <p>
                  What we value most is the trust our clients place in us. We believe in the courage to take responsible risks, the discipline to deliver consistent quality, the honesty to acknowledge our mistakes, and the determination to improve every day. We are simple people offering exceptional products, backed by principles that never change.
                </p>
                <div className="p-5 rounded-xl bg-[#B91941]/5 border-l-4 border-[#B91941]">
                  <p className="font-semibold text-slate-900 text-base">
                    Our philosophy is rooted in the belief that business must grow alongside humanity.
                  </p>
                </div>
                <p>
                  Commercial success, for us, is meaningful only when it is accompanied by social responsibility, ethical practices, and respect for people at every level of the value chain.
                </p>
                <p>
                  Many of our initiatives are designed to reach beyond urban centres—extending opportunities to tribal regions and remote villages, where talent and potential often go unnoticed. We choose to grow with those who are most in need of opportunity, not merely those who already have access to it.
                </p>
                <p className="font-semibold text-[#B91941] text-lg pt-2">
                  This is why we enjoy what we do. Our growth is not just measured in numbers, but in the lives, we touch, the trust we earn, and the long-term relationships we build.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP SECTION */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span> SECTION 2
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
              2.  Leadership
            </h2>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-slate-900 font-display">
                Mrs. Sheeba Paul,
              </p>
              <p className="text-base sm:text-lg font-bold text-[#B91941]">
                Managing Director – Exodus Exports (P). Ltd.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Dedicated Founder Photo Area */}
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-slate-200/80 bg-white p-2">
                
                {/* Founder Photo Placeholder Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl bg-slate-100 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-8 overflow-hidden group">
                  
                  <div className="h-20 w-20 rounded-full bg-[#B91941]/5 border border-[#B91941]/20 flex items-center justify-center text-[#B91941] mb-4 group-hover:scale-105 transition-transform duration-300">
                    <User className="h-10 w-10 text-[#B91941]/70" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-base font-bold text-slate-800 font-display">
                      Mrs. Sheeba Paul
                    </div>
                    <div className="text-xs text-[#B91941] font-semibold">
                      Managing Director – Exodus Exports (P). Ltd.
                    </div>
                    <div className="text-[11px] text-slate-400 mt-2">
                      [Founder Photograph Area]
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-[#B91941] border border-slate-200 uppercase tracking-wider">
                    28+ Years Experience
                  </div>

                </div>

                <div className="p-4 text-center space-y-1">
                  <h3 className="font-bold text-lg text-slate-900 font-display">
                    Mrs. Sheeba Paul,
                  </h3>
                  <p className="text-xs font-semibold text-[#B91941]">
                    Managing Director – Exodus Exports (P). Ltd.
                  </p>
                </div>

              </div>

              {/* Leadership Philosophy Box */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
                <h4 className="font-bold text-slate-900 text-sm font-display uppercase tracking-wider text-[#B91941] flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#B91941]" /> Leadership Philosophy
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "Mrs. Sheeba Paul believes that true business success is built on integrity, knowledge, and human values. Under her leadership, Exodus Exports has grown not only in scale, but in reputation—earning long-term trust through ethical sourcing, consistent quality, and responsible employment practices."
                </p>
              </div>

              {/* Domain Expert Team Box */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-2">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  The leadership is supported by a team of experts across various domains, complemented by a strong network of consultants with diverse specialisations and international experience from different countries.
                </p>
              </div>

            </ScrollReveal>

            {/* Right Column: Founder Profile & Exact Document Content */}
            <ScrollReveal direction="left" className="lg:col-span-7 space-y-8">
              
              {/* Biography Paragraphs */}
              <div className="space-y-4 text-slate-600 text-base leading-relaxed bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle">
                <p>
                  Mrs. Sheeba Paul is a pioneering entrepreneur and industry leader with over 28 years of experience in the global human hair industry. Her career reflects a rare combination of technical mastery, international exposure, and ethical leadership, which has shaped Exodus Exports into one of India’s most respected human hair exporters.
                </p>
                <p>
                  Her hands-on approach and continuous pursuit of excellence have taken her across multiple countries, where she has received specialized training in wig manufacturing, hair replacement technology, colouring, curling, and advanced production processes. This global learning experience enables Exodus Exports to consistently meet and exceed international quality standards.
                </p>
              </div>

              {/* Professional Credentials & International Training */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#B91941]" /> Professional Credentials & International Training
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Over 28 years of hands-on experience in the human hair industry</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Specialized technical training in wig manufacturing – Hong Kong & China (1999, 2001)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Professional training in Hair Replacement Technology by US representatives, with practical exposure in Canada (2000)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Advanced technical training in sewing machinery processes – South Korea (2001)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Certified training in bleaching and dyeing technology by Brazilian experts (2005)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Technical training on curling machinery – South Korea (2013)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Advanced training in hair mixing and colouring – Rome, Italy (2013)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Professional hair styling training from Studio Profile, Associate of L’Oréal, Chennai, India (2013)</span>
                  </li>
                </ul>
              </div>

              {/* Key Achievements & Milestones */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-[#B91941]" /> Key Achievements & Milestones
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Honoured as “Best Woman Entrepreneur” by Indian Overseas Bank, Mount Road Branch, presented by the CMD of IOB on International Women’s Day (2013)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Successfully established three production units across different locations in South India</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Company credit-rated by Dun & Bradstreet (D&B) and assigned a D-U-N-S® Number</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Scaled company turnover from INR 10 million to INR 85 million (USD 1.4 million) by 2011–12</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Built a global client base of 100+ customers across 65+ countries</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Featured in an international documentary produced by SWR TV (Germany) in 2009 and telecast on DW TV, followed by coverage from multiple international media houses</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Interview published in Süddeutsche Zeitung (Germany) in 2008</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Featured interviewee on the human hair industry for the California Institute of Integral Studies (USA)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Featured in another international documentary produced by TF-1 TV (France) in 2025 and telecast in 2026 in France.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Travelled on business across 25+ countries worldwide</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#B91941] shrink-0 mt-0.5" />
                    <span>Trusted supplier to leading international hair brands</span>
                  </li>
                </ul>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. AWARDS & ACCOLADES */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span> SECTION 3
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
              3. Awards & Accolades
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal delay={0.05}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#B91941]/10 text-[#B91941] shrink-0">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base font-display">
                    Best Woman Entrepreneur Award
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Honoured as “Best Woman Entrepreneur” by Indian Overseas Bank, Mount Road Branch, presented by the CMD of IOB on International Women’s Day (2013).
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#B91941]/10 text-[#B91941] shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base font-display">
                    Dun & Bradstreet (D&B) Credit Rated
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Company credit-rated by Dun & Bradstreet (D&B) and assigned a D-U-N-S® Number.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. PRESS & TV INTERVIEWS */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span> SECTION 4
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
              4. Press & TV Interviews
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 text-left">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-1">
                <div className="text-xs font-bold text-[#B91941] flex items-center gap-1.5">
                  <Tv className="h-3.5 w-3.5" /> SWR TV (Germany)
                </div>
                <div className="text-xs text-slate-700 font-medium">
                  International documentary (2009) telecast on DW TV & global media coverage.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-1">
                <div className="text-xs font-bold text-[#B91941] flex items-center gap-1.5">
                  <Newspaper className="h-3.5 w-3.5" /> Süddeutsche Zeitung
                </div>
                <div className="text-xs text-slate-700 font-medium">
                  Interview published in Germany’s leading daily newspaper (2008).
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-1">
                <div className="text-xs font-bold text-[#B91941] flex items-center gap-1.5">
                  <Tv className="h-3.5 w-3.5" /> TF-1 TV (France)
                </div>
                <div className="text-xs text-slate-700 font-medium">
                  International documentary produced in 2025 and telecast in 2026 in France.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-1">
                <div className="text-xs font-bold text-[#B91941] flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5" /> CIIS (USA)
                </div>
                <div className="text-xs text-slate-700 font-medium">
                  Featured interviewee for California Institute of Integral Studies (USA).
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* SÜDDEUTSCHE ZEITUNG ARTICLE FEATURE */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-subtle space-y-10">
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Süddeutsche Zeitung — Samstag/Sonntag, 12./13. Juli 2008 Nr. 161 / Seite 3 — DIE SEITE DREI
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Der goldene Schnitt
              </h3>
              <p className="text-sm sm:text-base text-slate-600 italic">
                „Im Tempel von Tirupati lassen sich täglich 50 000 Menschen kahlscheren – mit diesem göttlichen Opfer schmückt sich der Rest der Welt für gutes Geld“
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-200">
                  <Image
                    src="/images/article/suddeutsche_newspaper_page_1.jpg"
                    alt="Süddeutsche Zeitung - Der goldene Schnitt Article Scan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-slate-200">
                    <Image
                      src="/images/article/suddeutsche_article_p1_1_Im1.jpg"
                      alt="Tirupati Temple Hair Tonsuring"
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-slate-200">
                    <Image
                      src="/images/article/suddeutsche_article_p1_2_Im2.jpg"
                      alt="Hair Sorting and Craftsmanship"
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-slate-200">
                    <Image
                      src="/images/article/suddeutsche_article_p1_3_Im3.jpg"
                      alt="Indian Human Hair Bundles"
                      fill
                      sizes="33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm font-display uppercase tracking-wider text-[#B91941]">
                    Feature on Mrs. Sheeba Paul & Exodus Exports
                  </h4>
                  <blockquote className="border-l-4 border-[#B91941] pl-4 italic text-slate-800 text-sm leading-relaxed">
                    „Sheeba Paul ist seit 2002 im Geschäft. Eine Frau, das ist in Indien einmalig. Nicht weit weg von ‚A.L. Kishore’s Hair Co‘ hat sie ihre Firma ‚Exodus Exports‘, 35 Mitarbeiter. Oben am Dach trocknet das neu gelieferte, frisch gewaschene Haar, Hunderte Zöpfe, an Wäscheständern aufgehängt.“
                  </blockquote>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    „Sheeba Paul ist klein und energisch, das ist auch nötig in diesem Geschäft, in dem es nur Barzahlung gibt und kein Rückgaberecht. Haar gegen Geld, alles auf Vertrauen. Wer die Ware schickt, bevor das Geld da ist, hat verloren. Und ein Ende ist nicht in Sicht.“
                  </p>
                  <blockquote className="border-l-4 border-[#B91941] pl-4 italic text-slate-800 text-sm leading-relaxed">
                    „Sie sagt: ‚Das Haar im Süden ist besser, weil sie es im Norden mit Henna verderben.‘ Dieses Haar sei zwar verlaust, aber jungfräulich. ‚Virgin hair‘, nie gefärbt, nie gebleicht, aus Armut unbehandelt, Haar, das nur mit Öl in Berührung kam. ‚Daraus kannst du jede Farbe machen‘, sagt sie, ein paar kastanienbraune Echthaartressen in der Hand. Sie fährt über das seidige Haar. Lächelt.“
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />

    </div>
  );
}
