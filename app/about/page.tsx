import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import CertificateGallery from "@/components/CertificateGallery";
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
  GraduationCap,
  Trophy,
  Tv,
  Newspaper,
  ExternalLink,
  Video,
  Play
} from "lucide-react";

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        d="M15.12 12.75L15.6 9.6H12.58V7.55C12.58 6.69 13 5.85 14.34 5.85H15.72V3.17C15.72 3.17 14.47 2.96 13.27 2.96C10.78 2.96 9.15 4.47 9.15 7.21V9.6H6.38V12.75H9.15V20.38C9.71 20.47 10.28 20.51 10.86 20.51C11.44 20.51 12.02 20.47 12.58 20.38V12.75H15.12Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="about-instagram-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bc1888" />
          <stop offset="30%" stopColor="#cc2366" />
          <stop offset="60%" stopColor="#dc2743" />
          <stop offset="85%" stopColor="#e6683c" />
          <stop offset="100%" stopColor="#f09433" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#about-instagram-gradient)" />
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" stroke="#ffffff" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="3.6" stroke="#ffffff" strokeWidth="1.6" fill="none" />
      <circle cx="16.5" cy="7.5" r="0.9" fill="#ffffff" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#0A66C2" />
      <path
        d="M7.44 9.17H4.72V17.84H7.44V9.17ZM6.08 4.96C5.21 4.96 4.5 5.67 4.5 6.54C4.5 7.41 5.21 8.12 6.08 8.12C6.95 8.12 7.66 7.41 7.66 6.54C7.66 5.67 6.95 4.96 6.08 4.96ZM19.28 12.39C19.28 9.72 17.85 8.48 15.95 8.48C14.42 8.48 13.73 9.32 13.35 9.91V9.17H10.63C10.67 9.94 10.63 17.84 10.63 17.84H13.35V13H13.35C13.35 12.75 13.37 12.49 13.44 12.31C13.65 11.8 14.12 11.26 14.92 11.26C15.96 11.26 16.38 12.05 16.38 13.22V17.84H19.1V12.87C19.1 12.71 19.28 12.55 19.28 12.39Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export const metadata = {
  title: "About Us | Exodus Exports Pvt. Ltd. - Indian Human Hair Exports",
  description:
    "We are entrepreneurs who have built this company over more than two decades—guided by strong values, resilience, and an unwavering commitment to integrity.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0 pt-28">

      {/* WHO WE ARE HERO */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Who we are
          </h1>
          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
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
                  <div className="font-bold text-lg sm:text-xl font-display">Exodus Exports (P). Ltd.</div>
                  <div className="text-white/90 text-[11px] font-medium mt-0.5">Chennai, South India</div>
                </div>
              </div>

              {/* Core Philosophy Callout */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs font-display uppercase tracking-wider text-[#A9153B]">
                  Our philosophy
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  Our philosophy is rooted in the belief that business must grow alongside humanity.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Commercial success, for us, is meaningful only when it is accompanied by social responsibility, ethical practices, and respect for people at every level of the value chain.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Our identity & values"
                title="Who we are"
              />

              <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  We are entrepreneurs who have built this company over more than two decades—guided by strong values, resilience, and an unwavering commitment to integrity, even the toughest business challenges.
                </p>
                <p>
                  What we value most is the trust our clients place in us. We believe in the courage to take responsible risks, the discipline to deliver consistent quality, the honesty to acknowledge our mistakes, and the determination to improve every day. We are simple people offering exceptional products, backed by principles that never change.
                </p>
                <div className="p-5 rounded-xl bg-[#A9153B]/5 border-l-4 border-[#A9153B]">
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">
                    Our philosophy is rooted in the belief that business must grow alongside humanity.
                  </p>
                </div>
                <p>
                  Commercial success, for us, is meaningful only when it is accompanied by social responsibility, ethical practices, and respect for people at every level of the value chain.
                </p>
                <p>
                  Many of our initiatives are designed to reach beyond urban centres—extending opportunities to tribal regions and remote villages, where talent and potential often go unnoticed. We choose to grow with those who are most in need of opportunity, not merely those who already have access to it.
                </p>
                <p className="font-semibold text-[#A9153B] text-base pt-2">
                  This is why we enjoy what we do. Our growth is not just measured in numbers, but in the lives, we touch, the trust we earn, and the long-term relationships we build.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Leadership
            </h2>
            <div className="space-y-1">
              <p className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Mrs. Sheeba Paul,
              </p>
              <p className="text-sm sm:text-base font-bold text-[#A9153B]">
                Managing Director – Exodus Exports (P). Ltd.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Dedicated Founder Photo Area */}
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-slate-200/80 bg-white p-2">

                {/* Founder Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl bg-slate-100 overflow-hidden group">
                  <Image
                    src="/images/founder.jpg"
                    alt="Mrs. Sheeba Paul - Managing Director, Exodus Exports"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-[#A9153B] border border-slate-200 uppercase tracking-wider shadow-sm">
                    28+ years experience
                  </div>
                </div>

                <div className="p-4 text-center space-y-1">
                  <h3 className="font-bold text-base text-slate-900 font-display">
                    Mrs. Sheeba Paul,
                  </h3>
                  <p className="text-[11px] font-semibold text-[#A9153B]">
                    Managing Director – Exodus Exports (P). Ltd.
                  </p>
                </div>

              </div>

              {/* Leadership Philosophy Box */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
                <h4 className="font-bold text-slate-900 text-xs font-display uppercase tracking-wider text-[#A9153B] flex items-center gap-2">
                  <Award className="h-4 w-4 text-[#A9153B]" /> Leadership philosophy
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
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle">
                <p>
                  Mrs. Sheeba Paul is a pioneering entrepreneur and industry leader with over 28 years of experience in the global human hair industry. Her career reflects a rare combination of technical mastery, international exposure, and ethical leadership, which has shaped Exodus Exports into one of India’s most respected human hair exporters.
                </p>
                <p>
                  Her hands-on approach and continuous pursuit of excellence have taken her across multiple countries, where she has received specialized training in wig manufacturing, hair replacement technology, colouring, curling, and advanced production processes. This global learning experience enables Exodus Exports to consistently meet and exceed international quality standards.
                </p>
              </div>

              {/* Professional Credentials & International Training */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#A9153B]" /> Professional credentials & international training
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Over 28 years of hands-on experience in the human hair industry</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Specialized technical training in wig manufacturing – Hong Kong & China (1999, 2001)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Professional training in Hair Replacement Technology by US representatives, with practical exposure in Canada (2000)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Advanced technical training in sewing machinery processes – South Korea (2001)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Certified training in bleaching and dyeing technology by Brazilian experts (2005)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Technical training on curling machinery – South Korea (2013)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Advanced training in hair mixing and colouring – Rome, Italy (2013)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Professional hair styling training from Studio Profile, Associate of L’Oréal, Chennai, India (2013)</span>
                  </li>
                </ul>
              </div>

              {/* Key Achievements & Milestones */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-[#A9153B]" /> Key achievements & milestones
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Honoured as “Best Woman Entrepreneur” by Indian Overseas Bank, Mount Road Branch, presented by the CMD of IOB on International Women’s Day (2013)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Successfully established three production units across different locations in South India</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Company credit-rated by Dun & Bradstreet (D&B) and assigned a D-U-N-S® Number</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Scaled company turnover from INR 10 million to INR 85 million (USD 1.4 million) by 2011–12</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Built a global client base of 100+ customers across 65+ countries</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Featured in an international documentary produced by SWR TV (Germany) in 2009 and telecast on DW TV, followed by coverage from multiple international media houses</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Interview published in Süddeutsche Zeitung (Germany) in 2008</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Featured interviewee on the human hair industry for the California Institute of Integral Studies (USA)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Featured in another international documentary produced by TF-1 TV (France) in 2025 and telecast in 2026 in France.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Travelled on business across 25+ countries worldwide</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Trusted supplier to leading international hair brands</span>
                  </li>
                </ul>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* AWARDS & ACCOLADES */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Awards & accolades
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal delay={0.05}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#A9153B]/10 text-[#A9153B] shrink-0">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display">
                    Best woman entrepreneur award
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Honoured as “Best Woman Entrepreneur” by Indian Overseas Bank, Mount Road Branch, presented by the CMD of IOB on International Women’s Day (2013).
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#A9153B]/10 text-[#A9153B] shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-display">
                    Dun & Bradstreet (D&B) credit rated
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Company credit-rated by Dun & Bradstreet (D&B) and assigned a D-U-N-S® Number.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Certificate Gallery */}
          <ScrollReveal delay={0.15}>
            <CertificateGallery />
          </ScrollReveal>
        </div>
      </section>

      {/* PRESS & TV INTERVIEWS */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <ScrollReveal className="text-center max-w-4xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
              Press & TV interviews
            </h2>
          </ScrollReveal>

          <div className="space-y-10 max-w-5xl mx-auto">

            {/* NEWS ARTICLES */}
            {/* 1. The Hindu */}
            <ScrollReveal delay={0.05}>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#A9153B] uppercase tracking-wider font-display">
                  <Newspaper className="h-4 w-4 text-[#A9153B]" /> The Hindu — Cancer Institute Wig Article (January 2023)
                </div>
                <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-200 p-2 sm:p-4 flex justify-center shadow-sm">
                  <Image
                    src="/newsarticles/B - CI WIG ARTICLE IN HINDU JAN 23.jpg"
                    alt="The Hindu — Cancer Institute Wig Article (January 2023)"
                    width={2020}
                    height={3121}
                    className="w-full h-auto rounded-lg object-contain max-h-[90vh]"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* 2. The Times */}
            <ScrollReveal delay={0.08}>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#A9153B] uppercase tracking-wider font-display">
                  <Newspaper className="h-4 w-4 text-[#A9153B]" /> The Times Article (2023)
                </div>
                <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-200 p-2 sm:p-4 flex justify-center shadow-sm">
                  <Image
                    src="/newsarticles/C - THE TIMES ARTICLE 2023.jpg"
                    alt="The Times Article (2023)"
                    width={1054}
                    height={517}
                    className="w-full h-auto rounded-lg object-contain max-h-[90vh]"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* 3. Tirunelveli District Collector Office */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#A9153B] uppercase tracking-wider font-display">
                  <Newspaper className="h-4 w-4 text-[#A9153B]" /> Tirunelveli District Collector Office Hair Donation Article
                </div>
                <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-200 p-2 sm:p-4 flex justify-center shadow-sm">
                  <Image
                    src="/newsarticles/D - TIRUNELVELI DISTRICT COLLECTOR OFFICE HAIR DONATION ARTICLE.jpg"
                    alt="Tirunelveli District Collector Office Hair Donation Article"
                    width={1600}
                    height={1309}
                    className="w-full h-auto rounded-lg object-contain max-h-[90vh]"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* 4. Jesus School */}
            <ScrollReveal delay={0.12}>
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#A9153B] uppercase tracking-wider font-display">
                  <Newspaper className="h-4 w-4 text-[#A9153B]" /> Hair Donation Article – Jesus School
                </div>
                <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-200 p-2 sm:p-4 flex justify-center shadow-sm">
                  <Image
                    src="/newsarticles/F - HAIR DONATION ARTICLE - JESUS SCHOOL.JPG"
                    alt="Hair Donation Article – Jesus School"
                    width={761}
                    height={632}
                    className="w-full h-auto rounded-lg object-contain max-h-[90vh]"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* 1. SWR TV (Germany) */}
            <ScrollReveal delay={0.15}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm font-bold text-[#A9153B] flex items-center gap-2 uppercase tracking-wider font-display">
                      <Tv className="h-4 w-4 text-[#A9153B]" />
                      <a
                        href="https://drive.google.com/file/d/1XugbTp0oCTAQ0bjPrA1d7XxZyCjxiiK5/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1.5"
                      >
                        SWR TV (Germany)
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                      International documentary telecast on DW TV
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      International documentary (2009) telecast on DW TV &amp; global media coverage.
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1XugbTp0oCTAQ0bjPrA1d7XxZyCjxiiK5/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A9153B] text-white text-xs font-bold shrink-0 hover:bg-[#A9153B]/90 transition-all self-start sm:self-center shadow-sm"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Watch video</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Süddeutsche Zeitung — Der goldene Schnitt */}
            <ScrollReveal delay={0.18}>
              <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-2xl border border-slate-200 shadow-subtle space-y-8">
                <div className="space-y-2 border-b border-slate-100 pb-6">
                  <div className="text-xs sm:text-sm font-bold text-[#A9153B] flex items-center gap-2 uppercase tracking-wider font-display">
                    <Newspaper className="h-4 w-4 text-[#A9153B]" /> Süddeutsche Zeitung
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                    Süddeutsche Zeitung — Samstag/Sonntag, 12./13. Juli 2008 Nr. 161 / Seite 3 — DIE SEITE DREI
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                    Der goldene Schnitt
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    „Im Tempel von Tirupati lassen sich täglich 50 000 Menschen kahlscheren – mit diesem göttlichen Opfer schmückt sich der Rest der Welt für gutes Geld“
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
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
                      <h4 className="font-bold text-slate-900 text-xs font-display uppercase tracking-wider text-[#A9153B]">
                        Feature on Mrs. Sheeba Paul & Exodus Exports
                      </h4>
                      <blockquote className="border-l-4 border-[#A9153B] pl-4 italic text-slate-800 text-xs sm:text-sm leading-relaxed">
                        „Sheeba Paul ist seit 2002 im Geschäft. Eine Frau, das ist in Indien einmalig. Nicht weit weg von ‚A.L. Kishore’s Hair Co‘ hat sie ihre Firma ‚Exodus Exports‘, 35 Mitarbeiter. Oben am Dach trocknet das neu gelieferte, frisch gewaschene Haar, Hunderte Zöpfe, an Wäscheständern aufgehängt.“
                      </blockquote>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        „Sheeba Paul ist klein und energisch, das ist auch nötig in diesem Geschäft, in dem es nur Barzahlung gibt und kein Rückgaberecht. Haar gegen Geld, alles auf Vertrauen. Wer die Ware schickt, bevor das Geld da ist, hat verloren. Und ein Ende ist nicht in Sicht.“
                      </p>
                      <blockquote className="border-l-4 border-[#A9153B] pl-4 italic text-slate-800 text-xs sm:text-sm leading-relaxed">
                        „Sie sagt: ‚Das Haar im Süden ist besser, weil sie es im Norden mit Henna verderben.‘ Dieses Haar sei zwar verlaust, aber jungfräulich. ‚Virgin hair‘, nie gefärbt, nie gebleicht, aus Armut unbehandelt, Haar, das nur mit Öl in Berührung kam. ‚Daraus kannst du jede Farbe machen‘, sagt sie, ein paar kastanienbraune Echthaartressen in der Hand. Sie fährt über das seidige Haar. Lächelt.“
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 3. TF-1 TV (France) */}
            <ScrollReveal delay={0.21}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-2">
                <div className="text-xs sm:text-sm font-bold text-[#A9153B] flex items-center gap-2 uppercase tracking-wider font-display">
                  <Tv className="h-4 w-4 text-[#A9153B]" /> TF-1 TV (France)
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                  International Documentary
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  International documentary produced in 2025 and telecast in 2026 in France.
                </p>
              </div>
            </ScrollReveal>

            {/* 4. eCancer */}
            <ScrollReveal delay={0.24}>
              <a
                href="https://ecancer.org/en/video/12107-alternative-livelihood-training-programme-for-rural-women-who-are-employed-in-the-tobacco-industry-in-india"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-md hover:border-[#A9153B]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm font-bold text-[#A9153B] flex items-center gap-2 uppercase tracking-wider font-display">
                      <Video className="h-4 w-4 text-[#A9153B]" /> eCancer
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display group-hover:text-[#A9153B] transition-colors">
                      Alternative livelihood training programme for rural women
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      Alternative livelihood training programme for rural women who are employed in the tobacco industry in India.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A9153B]/5 text-[#A9153B] text-xs font-bold shrink-0 group-hover:bg-[#A9153B] group-hover:text-white transition-all self-start sm:self-center">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Watch video</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* 5. NABARD Cancer Institute */}
            <ScrollReveal delay={0.27}>
              <a
                href="https://www.instagram.com/reel/DVsx3bEAaFR/?igsh=bHgxYnV6djhhYTZv"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-md hover:border-[#A9153B]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold text-[#A9153B] flex items-center gap-2 uppercase tracking-wider font-display">
                      <Video className="h-4 w-4 text-[#A9153B]" /> NABARD Cancer Institute
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-[#A9153B] transition-colors">
                      NABARD Cancer Institute
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A9153B]/5 text-[#A9153B] text-xs font-bold shrink-0 group-hover:bg-[#A9153B] group-hover:text-white transition-all self-start sm:self-center">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Watch video</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* 6. Polimer Video */}
            <ScrollReveal delay={0.30}>
              <a
                href="https://youtu.be/_Q4MisG56bc?si=m2dXahIzza67LA-h"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-md hover:border-[#A9153B]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold text-[#A9153B] flex items-center gap-2 uppercase tracking-wider font-display">
                      <Video className="h-4 w-4 text-[#A9153B]" /> Polimer Video
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-[#A9153B] transition-colors">
                      Polimer Video
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A9153B]/5 text-[#A9153B] text-xs font-bold shrink-0 group-hover:bg-[#A9153B] group-hover:text-white transition-all self-start sm:self-center">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Watch video</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                  </div>
                </div>
              </a>
            </ScrollReveal>

            {/* 7. France SOCAP */}
            <ScrollReveal delay={0.33}>
              <a
                href="https://www.instagram.com/reel/DWwa_3_DFI2/?igsh=MXFxaXJheG1tbXV5dw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-md hover:border-[#A9153B]/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold text-[#A9153B] flex items-center gap-2 uppercase tracking-wider font-display">
                      <Video className="h-4 w-4 text-[#A9153B]" /> France SOCAP
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-[#A9153B] transition-colors">
                      France SOCAP
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A9153B]/5 text-[#A9153B] text-xs font-bold shrink-0 group-hover:bg-[#A9153B] group-hover:text-white transition-all self-start sm:self-center">
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Watch video</span>
                    <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                  </div>
                </div>
              </a>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* DIGITAL MEDIA SECTION */}
      

      {/* CTA SECTION */}
      <CTASection />

    </div>
  );
}
