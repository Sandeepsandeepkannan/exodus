import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { ShieldCheck, Award, HeartHandshake, Globe, MapPin, CheckCircle2, Sparkles, Building2, Users, FileCheck } from "lucide-react";

export const metadata = {
  title: "About Us | Exodus Exports - Indian Human Hair Exporter",
  description:
    "Learn about Exodus Exports Pvt. Ltd., established in 2002 in Chennai by Managing Director Mrs. Sheeba Paul. Premier exporter of 100% virgin Indian Remy human hair to 65+ countries.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. ABOUT HERO */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> EXODUS EXPORTS PVT. LTD. CORPORATE PROFILE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display">
            Over Two Decades of <span className="text-brand-navy">Integrity & Quality</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Established in 2002 in Chennai, South India, Exodus Exports Pvt. Ltd. is a premier export-oriented company supplying 100% authentic Indian Remy human hair to clients across 65+ countries on 5 continents.
          </p>
        </div>
      </section>

      {/* 2. COMPANY SNAPSHOT & STATS */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display">2002</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Established Year</div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display">65+</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Export Countries</div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display">160+</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Women Rehabilitated</div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display">3</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Production Units</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUNDER STORY & LEADERSHIP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <ScrollReveal direction="right" className="lg:col-span-5 space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-elevated border border-slate-200 bg-slate-100 group">
                <Image
                  src="/images/products/hair_wigs.jpg"
                  alt="Mrs. Sheeba Paul - Managing Director"
                  width={800}
                  height={900}
                  className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <div className="font-bold text-xl font-display">Mrs. Sheeba Paul</div>
                  <div className="text-rose-300 text-xs font-medium mt-0.5">Managing Director, Exodus Exports Pvt. Ltd.</div>
                  <div className="text-slate-300 text-xs mt-2 italic">
                    "Commercial success is meaningful only when accompanied by social responsibility and respect for people at every level of the value chain."
                  </div>
                </div>
              </div>

              {/* Dun & Bradstreet / Ratings Badge */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-brand-navy shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-xs font-display">Dun & Bradstreet Rated</div>
                  <div className="text-xs text-slate-600 mt-0.5">Assigned official D-U-N-S® Number & audited credit rating for international trade trust.</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="FOUNDER & LEADERSHIP STORY"
                title="Driven by Technical Mastery & Ethical Vision"
                subtitle="With over 28 years of hands-on technical experience in the global human hair industry, Mrs. Sheeba Paul has built Exodus Exports into one of India's most respected exporters."
              />

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  Mrs. Sheeba Paul's career reflects a rare combination of technical mastery, international exposure, and ethical leadership. Her hands-on approach and continuous pursuit of excellence have taken her across 25+ countries, where she received specialized technical training from international hair experts.
                </p>
                <p>
                  Under her leadership, Exodus Exports scaled its operations to three production units across South India and built a global customer base of over 100+ clients across 65+ countries.
                </p>
              </div>

              {/* International Technical Training Timeline */}
              <div className="pt-4 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm font-display uppercase tracking-wider text-brand-navy flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Global Technical Credentials & Specialized Training
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-md bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 font-semibold">1999 & 2001 (Hong Kong & China):</strong> Wig manufacturing technology.
                  </div>
                  <div className="p-3 rounded-md bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 font-semibold">2000 (US & Canada):</strong> Hair Replacement Technology by US representatives.
                  </div>
                  <div className="p-3 rounded-md bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 font-semibold">2001 (South Korea):</strong> Advanced sewing machinery processes.
                  </div>
                  <div className="p-3 rounded-md bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 font-semibold">2005 (Brazil):</strong> Certified training in bleaching and dyeing technology by Brazilian experts.
                  </div>
                  <div className="p-3 rounded-md bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 font-semibold">2013 (South Korea):</strong> Technical training on specialized curling machinery.
                  </div>
                  <div className="p-3 rounded-md bg-slate-50 border border-slate-100">
                    <strong className="text-slate-900 font-semibold">2013 (Rome, Italy):</strong> Hair mixing and international shade formulation.
                  </div>
                </div>
              </div>

              {/* Recognition & Media */}
              <div className="pt-2 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm font-display uppercase tracking-wider text-brand-navy flex items-center gap-2">
                  <Award className="h-4 w-4" /> Key Milestones & Media Feature Highlights
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Best Woman Entrepreneur Award (2013):</strong> Honoured by Indian Overseas Bank (IOB Mount Road Branch), presented by CMD of IOB on International Women's Day.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Süddeutsche Zeitung Feature (Germany, 2008):</strong> Interviewed in Germany's leading national newspaper in the feature <em>"Der goldene Schnitt"</em> by Karin Steinberger.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>SWR TV & DW TV Documentary (Germany, 2009):</strong> Featured in international German television documentaries on ethical hair sourcing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>TF-1 TV Documentary (France, 2025/2026):</strong> Featured in major national French television broadcast on human hair craftsmanship.</span>
                  </li>
                </ul>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. SOCIAL IMPACT & SUSTAINABLE LIVELIHOOD INITIATIVE */}
      <section className="py-24 bg-[#1E040B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-rose-400 font-display flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-rose-400" /> SOCIAL RESPONSIBILITY INITIATIVE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Empowering Beedi Rolling Women with Dignified Livelihoods
            </h2>
            <p className="text-rose-100/80 text-base sm:text-lg leading-relaxed">
              Since 2021, teaming up with the Cancer Institute (WIA), Chennai, Exodus Exports has actively provided alternative, sustainable livelihood opportunities to women previously engaged in hazardous beedi rolling.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <ScrollReveal direction="right" className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-rose-100/80 text-sm sm:text-base leading-relaxed">
                <p>
                  Launched under the leadership of <strong>Dr. Shanta</strong>, Chairperson of the Cancer Institute WIA, Adyar-Chennai, with additional support from District Administration, Skill India, and NABARD, this collaborative initiative has successfully rehabilitated nearly <strong>160 women</strong>.
                </p>
                <p>
                  Women beedi workers in remote South Indian villages faced low wages, systemic exploitation, and health hazards from tobacco dust. By providing specialized training in hair sorting, hackling, wefting, and ventilation, Exodus Exports enables them to transition into safe, hygienic, and dignified employment.
                </p>
                <p>
                  This program aligns with <strong>Article 17 of the World Health Organization (WHO) Framework Convention on Tobacco Control (FCTC)</strong>, promoting economically viable alternatives for workers in the tobacco sector.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#340713]/90 border border-[#520A1E] text-xs text-rose-200 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-rose-400 shrink-0" />
                <span>We employ a <strong>100% all-women workforce</strong> in our production units, proving that commercial growth must go hand-in-hand with human dignity.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-5 bg-[#340713]/80 p-8 rounded-xl border border-[#520A1E] space-y-6">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Users className="h-5 w-5 text-rose-400" /> Employee Welfare & Workplace Standards
              </h3>
              <ul className="space-y-3 text-xs text-rose-100/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0" />
                  <span><strong>5S Standards:</strong> Clean, organized, safe workplace environment.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0" />
                  <span><strong>Social Security:</strong> Retirement benefits, annual bonus & incentives.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0" />
                  <span><strong>Family Support:</strong> Emergency loans & educational support for children.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0" />
                  <span><strong>Health & Wellness:</strong> Paid maternity leave, counselling & workshops.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-rose-400 shrink-0" />
                  <span><strong>Child Protection:</strong> Strictly 100% No Child Labour policy.</span>
                </li>
              </ul>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 5. MANUFACTURING QUALITY & COMPLIANCE */}
      <section className="py-24 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="INTERNATIONAL COMPLIANCE"
              title="Rigorous Quality & Inspection Standards"
              subtitle="All processing is conducted in our own factories in India, ensuring total control from raw temple hair to export delivery."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle hover:border-brand-navy/30 transition-all duration-300 space-y-4 h-full">
                <FileCheck className="h-8 w-8 text-brand-navy" />
                <h3 className="text-xl font-bold text-slate-900 font-display">Strict Quality Control</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Cuticle-intact Remy hair verification, multiple wash & conditioning cycles, and thorough manual inspection of every individual bundle before packaging.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle hover:border-brand-navy/30 transition-all duration-300 space-y-4 h-full">
                <Building2 className="h-8 w-8 text-brand-navy" />
                <h3 className="text-xl font-bold text-slate-900 font-display">Third-Party Inspections</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Optional third-party quality verification available via SGS or INTERTEK upon buyer request for large bulk shipments.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle hover:border-brand-navy/30 transition-all duration-300 space-y-4 h-full">
                <ShieldCheck className="h-8 w-8 text-brand-navy" />
                <h3 className="text-xl font-bold text-slate-900 font-display">Official Export Certification</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Phyto-sanitary & fumigation certificates provided with international shipments, alongside Certificate of Origin documentation when required.
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 6. FINAL CTA */}
      <CTASection
        title="Connect With Our Global Trade Desk"
        subtitle="Talk to our team in Chennai for wholesale hair samples, factory tours, and private labeling inquiries."
        buttonText="Contact Us Today"
      />

    </div>
  );
}
