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
  AlertCircle,
  HelpCircle,
  Scissors,
  Award,
  User,
  GraduationCap,
  Trophy
} from "lucide-react";

export const metadata = {
  title: "About Us | Exodus Exports Pvt. Ltd. - Indian Human Hair Exports",
  description:
    "Established in 2002, Exodus Exports Pvt. Ltd. is an Export-Oriented Private Limited Company headquartered in Chennai, South India. Supplying 100% authentic Indian Remy human hair to clients worldwide.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. ABOUT HERO / ABOUT EXODUS EXPORTS PVT. LTD. */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> EXODUS EXPORTS PVT. LTD.
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            About Exodus Exports Pvt. Ltd.
          </h1>
          <div className="space-y-4 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            <p>
              Established in 2002, Exodus Exports Pvt. Ltd. is an Export-Oriented Private Limited Company, headquartered in Chennai, South India.
            </p>
            <p className="text-base sm:text-lg text-slate-700">
              With over two decades of industry experience, we have earned a reputation as one of India’s most trusted suppliers of premium Indian human hair. Our products are exported to over 65 countries across 5 continents, serving wholesalers, distributors, salons, and wig manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
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
                  className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <div className="font-bold text-xl font-display">Exodus Exports Pvt. Ltd.</div>
                  <div className="text-white/90 text-xs font-medium mt-0.5">Chennai, South India</div>
                </div>
              </div>

              {/* Our Philosophy Callout */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm font-display uppercase tracking-wider text-brand-navy">
                  Our Philosophy
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                    <span>We focus on quality over quantity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                    <span>We don’t just sell hair — we build long-term relationships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                    <span>Every product is backed by strict quality control and ethical sourcing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                    <span>And we employ 100% Beedi rolling women</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="OUR IDENTITY & VALUES"
                title="Who We Are"
              />

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  We are entrepreneurs who have built this company over more than two decades—guided by strong values, resilience, and an unwavering commitment to integrity, even though the toughest business challenges.
                </p>
                <p>
                  What we value most is the trust our clients place in us. We believe in the courage to take responsible risks, the discipline to deliver consistent quality, the honesty to acknowledge our mistakes, and the determination to improve every day. We are simple people offering exceptional products, backed by principles that never change.
                </p>
                <p className="font-semibold text-slate-800">
                  Our philosophy is rooted in the belief that business must grow alongside humanity.
                </p>
                <p>
                  Commercial success, for us, is meaningful only when it is accompanied by social responsibility, ethical practices, and respect for people at every level of the value chain.
                </p>
                <p>
                  Many of our initiatives are designed to reach beyond urban centres—extending opportunities to tribal regions and remote villages, where talent and potential often go unnoticed. We choose to grow with those who are most in need of opportunity, not merely those who already have access to it.
                </p>
                <p className="font-semibold text-brand-navy">
                  This is why we enjoy what we do. Our growth is not just measured in numbers, but in the lives, we touch, the trust we earn, and the long-term relationships we build.
                </p>
              </div>

              {/* Ethical Sourcing & Women Empowerment */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Ethical Sourcing & Women Empowerment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Our hair is sourced directly from South Indian temple auctions</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>100% ethical and traceable procurement</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>No child labours</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>All-women workforce in our production units</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Commitment to employee welfare, safety, and sustainability</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>We employ only 100% beedi rolling women of rural India</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-800 pt-1">
                  We empower women not only through beauty, but also through stable employment and skill development.
                </p>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. DEDICATED FOUNDER / MANAGING DIRECTOR SECTION (FROM RESUME OF SHEEBA PAUL.DOCX) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> FOUNDER & MANAGING DIRECTOR
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
              Mrs. Sheeba Paul,
            </h2>
            <p className="text-base sm:text-lg font-bold text-brand-navy">
              Managing Director – Exodus Exports (P). Ltd.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Dedicated Founder Photo Area */}
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-slate-200/80 bg-white p-2">
                
                {/* Founder Photo Placeholder Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl bg-slate-100 border border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-8 overflow-hidden group">
                  
                  {/* Visual Placeholder Graphic & Indicator */}
                  <div className="h-20 w-20 rounded-full bg-brand-navy/5 border border-brand-navy/20 flex items-center justify-center text-brand-navy mb-4 group-hover:scale-105 transition-transform duration-300">
                    <User className="h-10 w-10 text-brand-navy/70" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-slate-800 font-display">
                      Mrs. Sheeba Paul
                    </div>
                    <div className="text-xs text-brand-navy font-semibold">
                      Managing Director – Exodus Exports (P). Ltd.
                    </div>
                    <div className="text-[11px] text-slate-400 mt-2">
                      [Founder Photograph Area]
                    </div>
                  </div>

                  {/* Corner Accent Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-brand-navy border border-slate-200 uppercase tracking-wider">
                    28+ Years Experience
                  </div>

                </div>

                {/* Founder Name & Title Card */}
                <div className="p-4 text-center space-y-1">
                  <h3 className="font-bold text-lg text-slate-900 font-display">
                    Mrs. Sheeba Paul,
                  </h3>
                  <p className="text-xs font-semibold text-brand-navy">
                    Managing Director – Exodus Exports (P). Ltd.
                  </p>
                </div>

              </div>

              {/* Leadership Philosophy Box from Resume */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
                <h4 className="font-bold text-slate-900 text-sm font-display uppercase tracking-wider text-brand-navy flex items-center gap-2">
                  <Award className="h-4 w-4 text-brand-navy" /> Leadership Philosophy
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "Mrs. Sheeba Paul believes that true business success is built on integrity, knowledge, and human values. Under her leadership, Exodus Exports has grown not only in scale, but in reputation—earning long-term trust through ethical sourcing, consistent quality, and responsible employment practices."
                </p>
              </div>

            </ScrollReveal>

            {/* Right Column: Founder Profile & Exact Resume Content */}
            <ScrollReveal direction="left" className="lg:col-span-7 space-y-8">
              
              {/* Biography Paragraphs from Resume */}
              <div className="space-y-4 text-slate-600 text-base leading-relaxed bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle">
                <p>
                  Mrs. Sheeba Paul is a pioneering entrepreneur and industry leader with over 28 years of experience in the global human hair industry. Her career reflects a rare combination of technical mastery, international exposure, and ethical leadership, which has shaped Exodus Exports into one of India’s most respected human hair exporters.
                </p>
                <p>
                  Her hands-on approach and continuous pursuit of excellence have taken her across multiple countries, where she has received specialized training in wig manufacturing, hair replacement technology, colouring, curling, and advanced production processes. This global learning experience enables Exodus Exports to consistently meet and exceed international quality standards.
                </p>
              </div>

              {/* Professional Credentials & International Training from Resume */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-brand-navy" /> Professional Credentials & International Training
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Over 28 years of hands-on experience in the human hair industry</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Specialized technical training in wig manufacturing – Hong Kong & China (1999, 2001)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Professional training in Hair Replacement Technology by US representatives, with practical exposure in Canada (2000)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Advanced technical training in sewing machinery processes – South Korea (2001)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Certified training in bleaching and dyeing technology by Brazilian experts (2005)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Technical training on curling machinery – South Korea (2013)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Advanced training in hair mixing and colouring – Rome, Italy (2013)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Professional hair styling training from Studio Profile, Associate of L’Oréal, Chennai, India (2013)</span>
                  </li>
                </ul>
              </div>

              {/* Key Achievements & Milestones from Resume */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-brand-navy" /> Key Achievements & Milestones
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Honoured as “Best Woman Entrepreneur” by Indian Overseas Bank, Mount Road Branch, presented by the CMD of IOB on International Women’s Day (2013)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Successfully established three production units across different locations in South India</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Company credit-rated by Dun & Bradstreet (D&B) and assigned a D-U-N-S® Number</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Scaled company turnover from INR 10 million to INR 85 million (USD 1.4 million) by 2011–12</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Built a global client base of 100+ customers across 65+ countries</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Featured in an international documentary produced by SWR TV (Germany) in 2009 and telecast on DW TV, followed by coverage from multiple international media houses</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Interview published in Süddeutsche Zeitung (Germany) in 2008</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Featured interviewee on the human hair industry for the California Institute of Integral Studies (USA)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Featured in another international documentary produced by TF-1 TV (France) in 2025 and telecast in 2026 in France.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Travelled on business across 25+ countries worldwide</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0 mt-0.5" />
                    <span>Trusted supplier to leading international hair brands</span>
                  </li>
                </ul>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. SÜDDEUTSCHE ZEITUNG ARTICLE BANNER SECTION (FROM SUDDEUTSCHE HAIR ARTICLE.PDF) */}
      <section className="py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> INTERNATIONAL PRESS FEATURE
            </div>
            
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Süddeutsche Zeitung — Samstag/Sonntag, 12./13. Juli 2008 Nr. 161 / Seite 3 — DIE SEITE DREI
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
              Der goldene Schnitt
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed italic max-w-3xl mx-auto">
              „Im Tempel von Tirupati lassen sich täglich 50 000 Menschen kahlscheren – mit diesem göttlichen Opfer schmückt sich der Rest der Welt für gutes Geld“
            </p>

            <div className="text-xs font-semibold text-slate-400">
              Von Karin Steinberger | Fotos: Adrian Fisk, ste
            </div>
          </ScrollReveal>

          {/* Full-Width Article Visual Showcase & Editorial Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Original Newspaper Page Scan / Article Imagery */}
            <ScrollReveal direction="right" className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-slate-200/80 bg-slate-900 group">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                  <Image
                    src="/images/article/suddeutsche_newspaper_page_1.jpg"
                    alt="Süddeutsche Zeitung - Der goldene Schnitt Article Scan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 flex items-center justify-between text-xs text-white">
                  <div>
                    <div className="font-bold font-display text-white">Süddeutsche Zeitung (Germany)</div>
                    <div className="text-slate-400 text-[11px]">Original Article Feature Scan — July 12/13, 2008</div>
                  </div>
                  <span className="px-2.5 py-1 bg-brand-navy text-white text-[10px] font-bold rounded">
                    DIE SEITE DREI
                  </span>
                </div>
              </div>

              {/* Original Photography Grid from PDF */}
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group">
                  <Image
                    src="/images/article/suddeutsche_article_p1_1_Im1.jpg"
                    alt="Tirupati Temple Hair Tonsuring - Photo by Adrian Fisk"
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group">
                  <Image
                    src="/images/article/suddeutsche_article_p1_2_Im2.jpg"
                    alt="Hair Sorting and Craftsmanship - Photo by Adrian Fisk"
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-100 group">
                  <Image
                    src="/images/article/suddeutsche_article_p1_3_Im3.jpg"
                    alt="Indian Human Hair Bundles - Photo by Adrian Fisk"
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Original German Article Excerpts on Exodus Exports & Mrs. Sheeba Paul */}
            <ScrollReveal direction="left" className="lg:col-span-6 space-y-6">
              
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle space-y-4">
                <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Indien und das Geschäft mit den Haaren: „Haben sie bei euch keine eigenen am Kopf?“
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Feature on Mrs. Sheeba Paul & Exodus Exports
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <blockquote className="border-l-4 border-brand-navy pl-4 italic text-slate-800 font-medium">
                    „Sheeba Paul ist seit 2002 im Geschäft. Eine Frau, das ist in Indien einmalig. Nicht weit weg von ‚A.L. Kishore’s Hair Co‘ hat sie ihre Firma ‚Exodus Exports‘, 35 Mitarbeiter. Oben am Dach trocknet das neu gelieferte, frisch gewaschene Haar, Hunderte Zöpfe, an Wäscheständern aufgehängt.“
                  </blockquote>

                  <p className="text-slate-600 text-sm">
                    „Sheeba Paul ist klein und energisch, das ist auch nötig in diesem Geschäft, in dem es nur Barzahlung gibt und kein Rückgaberecht. Haar gegen Geld, alles auf Vertrauen. Wer die Ware schickt, bevor das Geld da ist, hat verloren. Und ein Ende ist nicht in Sicht.“
                  </p>

                  <blockquote className="border-l-4 border-brand-navy pl-4 italic text-slate-800 font-medium">
                    „Sie sagt: ‚Das Haar im Süden ist besser, weil sie es im Norden mit Henna verderben.‘ Dieses Haar sei zwar verlaust, aber jungfräulich. ‚Virgin hair‘, nie gefärbt, nie gebleicht, aus Armut unbehandelt, Haar, das nur mit Öl in Berührung kam. ‚Daraus kannst du jede Farbe machen‘, sagt sie, ein paar kastanienbraune Echthaartressen in der Hand. Sie fährt über das seidige Haar. Lächelt.“
                  </blockquote>
                </div>
              </div>

              {/* Temple Sourcing & Global Craftsmanship Excerpt from PDF */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
                <h4 className="font-bold text-slate-900 text-sm font-display uppercase tracking-wider text-brand-navy">
                  Der Schatz der Jungfrauen
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  „50 000 Pilger, 600 Friseure, hoch oben auf den Tirumalahügeln in Tirupati, im Tempel von Lord Venkateswara, gibt es nur einen Schnitt: Vollrasur, 20 000 Mal am Tag, den Göttern zum Dank, dem Tempel zum Wohle. Ganze Familien lassen hier ihr Haar, für die Gesundheit, gute Noten oder einen reichen Schwiegersohn. Mehr als eine Tonne jeden Tag. Der Tempel ist der wichtigste Echthaarlieferant der Welt.“
                </p>
              </div>

            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 5. SOCIAL IMPACT & SUSTAINABLE LIVELIHOOD BUSINESS INITIATIVE */}
      <section className="py-24 bg-[#B91941] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <ScrollReveal className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-white font-display flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-white" /> SUSTAINABLE LIVELIHOOD
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Social Impact & Sustainable Livelihood Business Initiative
            </h2>
            <p className="text-white/95 text-base sm:text-lg leading-relaxed">
              Since 2021, teaming up with the Cancer Institute (WIA), Chennai, Exodus Exports has been actively involved in providing alternative, sustainable livelihood opportunities to women previously engaged in beedi rolling.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <ScrollReveal direction="right" className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed">
                <p>
                  This initiative was launched under the leadership of Dr. Shanta, Chairperson of the Cancer Institute WIA, Adyar -Chennai with additional support from the District Administration, Skill India, and NABARD. Through this collaborative effort, nearly 160 women have been successfully rehabilitated, enabling them to transition away from tobacco-related occupations into safer and more dignified employment.
                </p>
                <p>
                  The project is aligned with Article 17 of the World Health Organization (WHO) Framework Convention on Tobacco Control (FCTC), which promotes the development of economically viable alternatives for workers involved in the tobacco industry.
                </p>
                <p>
                  This program reflects our commitment to public health, women’s empowerment, and responsible business practices, ensuring that economic progress goes hand in hand with social well-being.
                </p>
              </div>
            </ScrollReveal>

            {/* EMPLOYEE WELFARE */}
            <ScrollReveal direction="left" className="lg:col-span-5 bg-white/10 p-8 rounded-xl border border-white/20 space-y-6">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Users className="h-5 w-5 text-white" /> EMPLOYEE WELFARE
              </h3>
              <p className="text-xs text-white/90 leading-relaxed">
                We are committed to ethical labour practices with a strong all-women workforce.Our welfare programs include:
              </p>
              <ul className="space-y-2 text-xs text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Implementing 5S Standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Safe working conditions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Retirement benefits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Annual bonus & incentives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Loans & emergency support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Maternity leave</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Counselling & workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Educational support for employees’ children</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Recreational outings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white shrink-0" />
                  <span>Strictly No Child Labour</span>
                </li>
              </ul>
            </ScrollReveal>

          </div>

          {/* WHO ARE THESE BEEDI WORKERS? */}
          <ScrollReveal className="bg-white/10 p-8 sm:p-10 rounded-2xl border border-white/20 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Who are these Beedi Workers?
            </h3>
            
            <div className="space-y-6 text-white/90 text-sm sm:text-base leading-relaxed">
              <p>
                Beedi is a locally made cheaper substitute for cigarette. Across remote villages in South India, many women earn their livelihood by rolling beedis from their homes. Women beedi workers faced numerous challenges including
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">low wages,</div>
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">hazardous working conditions,</div>
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">systemic exploitation,</div>
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">limited social security,</div>
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">restricted access to welfare schemes</div>
              </div>

              <p>
                Despite aspiring to move into safer and more sustainable livelihoods, they encountered significant barriers such as
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">low levels of education,</div>
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">limited transferable skills,</div>
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">inadequate access to credit,</div>
                <div className="p-3 rounded-lg bg-white/10 border border-white/20">lack of proper vocational training opportunities.</div>
              </div>

              <p>
                Due to their limited skills, lack of basic education, and the remoteness of their location, these women were largely neglected and marginalized, remaining invisible to mainstream development efforts. The geographical disadvantages of the area further hindered the establishment and functioning of viable businesses, compounding their economic isolation.
              </p>
              <p>
                Recognizing these challenges, and being in a position to make a meaningful difference, we are committed to expanding our operations in this region to support and empower these communities. In this endeavour, we are grateful to receive the support and partnership of the Cancer Institute (WIA), Chennai, which strengthens our efforts to create sustainable and positive change.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 5. MANUFACTURING & QUALITY CONTROL */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="FACTORY STANDARDS"
              title="Manufacturing & Quality Control"
              subtitle="All hair processing is carried out in our own factories in India, ensuring complete control over quality at every stage."
              centered
            />
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Our Quality Standards Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <span>Cuticle-intact Remy hair</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <span>Multiple wash & conditioning cycles</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <span>Manual inspection of each bundle</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <span>Optional third-party inspections (SGS / INTERTEK)</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <span>Phyto-sanitary & fumigation certificates on request</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                  <span>Certificate of Origin when necessary</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. ALL ABOUT HUMAN HAIR & KNOW YOUR HAIR */}
      <section className="py-24 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="EDUCATIONAL GUIDE"
              title="ALL ABOUT HUMAN HAIR"
              subtitle="Know Your Hair"
              centered
            />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Choosing the right type of hair is essential for achieving a natural look, long-lasting performance, and ease of maintenance. Human hair extensions differ significantly from synthetic fibres in appearance, feel, and durability.
            </p>
          </ScrollReveal>

          {/* Real Human Hair vs Synthetic Hair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Real Human Hair Extensions */}
            <ScrollReveal delay={0.05}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle h-full space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-brand-navy" /> Real Human Hair Extensions
                </h3>
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Real human hair offers unmatched versatility and realism. When applied correctly by a professional, these extensions can be:
                  </p>
                  <ul className="space-y-2 text-slate-700 pl-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                      <span>Washed, brushed, and styled like natural hair</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                      <span>Straightened or curled using heat tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                      <span>Coloured or bleached as required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                      <span>Worn continuously for months with proper care</span>
                    </li>
                  </ul>
                  <p>
                    Real human hair blends seamlessly with your own hair and dries naturally with a soft body wave, requiring minimal styling. This makes it the preferred choice for professionals, celebrities, and discerning customers worldwide.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Synthetic (Artificial) Hair */}
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle h-full space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-slate-500" /> Synthetic (Artificial) Hair
                </h3>
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Synthetic hair is a budget-friendly alternative, mainly chosen for short-term use.
                  </p>
                  <ul className="space-y-1.5 text-slate-700 pl-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"></span>
                      Cheaper alternative with limited lifespan
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0"></span>
                      However, it doesn’t look original. Makes you feel uneasy and looks less natural
                    </li>
                  </ul>

                  <div className="space-y-2 pt-2">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Advantages:</h4>
                    <ul className="space-y-1 text-slate-700 pl-2">
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

                  <div className="space-y-2 pt-2">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Disadvantages:</h4>
                    <ul className="space-y-1 text-slate-700 pl-2">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                        Cannot be washed or reused
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                        Tangles easily
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0"></span>
                        Cannot withstand heat styling
                      </li>
                    </ul>
                  </div>

                  <p className="pt-2 font-semibold text-slate-800">
                    For long-term wear, natural appearance, and reusability, human hair remains the superior choice.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* INDIAN HUMAN HAIR TYPES */}
          <div className="space-y-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                INDIAN HUMAN HAIR TYPES
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Remy Single Drawn */}
              <ScrollReveal delay={0.05}>
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle h-full space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">Remy Hair</div>
                  <h4 className="text-lg font-bold text-slate-900 font-display">Remy Single Drawn</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>• Natural length variation</li>
                    <li>• Ponytail-like appearance</li>
                    <li>• Cost-effective and authentic</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Remy Double Drawn */}
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle h-full space-y-3">
                  <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">Remy Hair</div>
                  <h4 className="text-lg font-bold text-slate-900 font-display">Remy Double Drawn</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>• Uniform length bundles</li>
                    <li>• Minimal tapering</li>
                    <li>• Premium quality and appearance</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Non-Remy Hair */}
              <ScrollReveal delay={0.15}>
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle h-full space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Commercial</div>
                  <h4 className="text-lg font-bold text-slate-900 font-display">Non-Remy Hair</h4>
                  <p className="text-xs text-slate-600">Collected fallen hair with mixed cuticle directions.</p>
                  <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                    <li>• Affordable</li>
                    <li>• More prone to tangling</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Cuticle-Free / Tangle-Free Hair */}
              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle h-full space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Treated</div>
                  <h4 className="text-lg font-bold text-slate-900 font-display">Cuticle-Free / Tangle-Free Hair</h4>
                  <p className="text-xs text-slate-600">
                    Chemically treated non-Remy hair to reduce tangling. This effect is temporary and diminishes after multiple washes.
                  </p>
                </div>
              </ScrollReveal>

            </div>

            <ScrollReveal className="text-center">
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
                <strong>Remy Hair:</strong> Indian Remy Hair is the highest natural grade of human hair. Cuticles are aligned in one direction, reducing tangling and increasing durability.
              </p>
            </ScrollReveal>
          </div>

          {/* APPLYING & MAINTAINING YOUR HAIR EXTENSIONS */}
          <div className="space-y-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                APPLYING & MAINTAINING YOUR HAIR EXTENSIONS
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
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

        </div>
      </section>

      {/* 7. TERMS & CONDITIONS OF SALE */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="COMMERCIAL POLICY"
              title="TERMS & CONDITIONS OF SALE"
              centered
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-4">
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                <span>100% Indian Human Hair only</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                <span>No synthetic blends</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                <span>100% advance payment via bank transfer</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                <span>Ex-Factory Chennai, India</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                <span>Exchange within 7 business days (conditions apply)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                <span>No refund policy</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" />
                <span>Human hair is a natural product, and slight variations are inherent.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 8. CONTACT US / REGD OFFICE / DISTRIBUTOR & WHOLESALE ENQUIRIES */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title="Contact Us"
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Regd Office */}
            <ScrollReveal delay={0.05}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle h-full space-y-4">
                <h3 className="text-lg font-bold text-slate-900 font-display">Regd Office:</h3>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-5 w-5 text-brand-navy shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">EXODUS EXPORTS PVT. LTD.</strong>
                      No. 56, Thanduma Nagar,<br />
                      Near 100 Ft Road,<br />
                      St. Thomas Mount,<br />
                      Chennai – 600016, India
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-slate-800">
                      <Phone className="h-4 w-4 text-brand-navy shrink-0" />
                      <span>+91 75500 01106 (9 AM – 5 PM IST)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-800">
                      <Mail className="h-4 w-4 text-brand-navy shrink-0" />
                      <span>exodus.exports@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Distributor & Wholesale Enquiries */}
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle h-full space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 font-display">Distributor & Wholesale Enquiries</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We welcome distributors, partners, and JV enquiries worldwide. Grow your business with a trusted Indian human hair manufacturer.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center text-xs font-bold text-brand-navy">
                    Exporting to 65+ Countries Across 5 Continents
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 9. FINAL CTA */}
      <CTASection
        title="Distributor & Wholesale Enquiries"
        subtitle="We welcome distributors, partners, and JV enquiries worldwide. Grow your business with a trusted Indian human hair manufacturer."
        buttonText="Contact Us"
      />

    </div>
  );
}
