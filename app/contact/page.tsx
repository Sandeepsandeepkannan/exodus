import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Clock, Globe, Sparkles, Building2, CheckCircle2, FileText } from "lucide-react";

export const metadata = {
  title: "Contact Us | Exodus Exports Pvt. Ltd. - Indian Human Hair Exports",
  description:
    "Contact Exodus Exports Pvt. Ltd. Regd Office: EXODUS EXPORTS PVT. LTD. No. 56 A, Thanduma Nagar, Near 100 Ft Road, St. Thomas Mount, Chennai – 600016, India. Factory: Tirunelveli district. For Factory visit kindly contact us.",
};

const whyChoosePoints = [
  "100% genuine Indian Human Hair supply source",
  "Temple-auction procured & ethically sourced",
  "In-house processing from raw hair to final finished products",
  "Customized solutions for salons, brands & distributors",
  "Strict adherence to international standards",
  "Global shipping & export expertise",
  "Capacity to handle orders from small batches to bulk export",
  "Consistent delivery schedules",
  "Long-term partnership approach",
];

const welfarePrograms = [
  "Implementing 5S Standards",
  "Safe working conditions",
  "Retirement benefits",
  "Annual bonus & incentives",
  "Loans & emergency support",
  "Maternity leave",
  "Counselling & workshops",
  "Educational support for employees’ children",
  "Recreational outings",
  "Strictly No Child Labour",
];

const termsAndConditions = [
  "100% Indian Human Hair only",
  "No synthetic blends",
  "100% advance payment via bank transfer",
  "Ex-Factory Chennai, India",
  "Exchange within 7 business days (conditions apply)",
  "No refund policy",
  "Human hair is a natural product, and slight variations are inherent.",
];

export default function ContactPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* PAGE HERO */}
      <section className="py-20 bg-[#F1F3F6] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> Get in touch
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Contact us
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We welcome distributors, partners, and JV enquiries worldwide.Grow your business with a trusted Indian human hair manufacturer.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle min-h-[400px] flex items-center justify-center text-slate-400">
                  Loading inquiry form...
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right Column: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 space-y-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                  Contact us
                </h3>

                <ul className="space-y-6 text-sm text-slate-700">
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#A9153B]/10 text-[#A9153B] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider text-[#A9153B]">Regd office:</div>
                      <div className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
                        EXODUS EXPORTS PVT. LTD. <br />No.56 A, Thanduma Nagar,Near 100 Ft Road,St. Thomas Mount, <br />Chennai – 600016,<br /> India
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#A9153B]/10 text-[#A9153B] flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider text-[#A9153B]">Factory:</div>
                      <div className="text-slate-800 font-semibold text-xs sm:text-sm">Tirunelveli district.</div>
                      <div className="text-slate-600 text-xs italic">
                        For Factory visit kindly contact us
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#A9153B]/10 text-[#A9153B] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider text-[#A9153B]">Phone & email:</div>
                      <div className="text-slate-800 font-bold text-xs sm:text-sm space-y-1">
                        <div>
                          📞{" "}
                          <a
                            href="https://wa.me/917550001107"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#A9153B] transition-colors"
                          >
                            +91 755 000 1107 (9 AM – 5 PM IST)
                          </a>
                        </div>
                        <div>
                          📧{" "}
                          <a
                            href="mailto:exodus.exports@gmail.com"
                            className="hover:text-[#A9153B] transition-colors"
                          >
                            exodus.exports@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Distributor & Wholesale Enquiries Box */}
              <div className="bg-[#A9153B] text-white p-8 rounded-2xl shadow-subtle space-y-3">
                <div className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Globe className="h-4 w-4" /> B2B partnerships
                </div>
                <h4 className="text-lg sm:text-xl font-bold font-display">Distributor & wholesale enquiries</h4>
                <p className="text-white/95 text-xs sm:text-sm leading-relaxed">
                  We welcome distributors, partners, and JV enquiries worldwide.Grow your business with a trusted Indian human hair manufacturer.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 1. WHY CHOOSE EXODUS EXPORTS? */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="Exodus advantage"
              title="Why choose Exodus Exports?"
              centered
            />
          </ScrollReveal>

          {/* 9 Feature Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((title, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.04}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-subtle hover:border-[#A9153B]/40 hover:-translate-y-1 transition-all duration-300 group h-full flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[#A9153B]/10 text-[#A9153B] flex items-center justify-center shrink-0 group-hover:bg-[#A9153B] group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display group-hover:text-[#A9153B] transition-colors">
                      {title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Relationship Callout Box */}
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle text-center space-y-2">
              <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                At Exodus, we don’t sell products—we build relationships.We guide clients, educate them, and ensure they receive the right product for their exact needs.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 2. EMPLOYEE WELFARE */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Employee welfare
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We are committed to ethical labour practices with a strong all-women workforce.Our welfare programs include:
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {welfarePrograms.map((prog, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.03}>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-subtle text-center h-full flex flex-col items-center justify-center space-y-2">
                  <CheckCircle2 className="h-5 w-5 text-[#A9153B]" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{prog}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 3. TERMS & CONDITIONS OF SALE */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Terms & conditions of sale
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {termsAndConditions.slice(0, 6).map((term, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.04}>
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3 h-full">
                  <CheckCircle2 className="h-5 w-5 text-[#A9153B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{term}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="max-w-2xl mx-auto">
            <div className="p-5 rounded-xl bg-white border border-slate-200 text-center shadow-subtle">
              <p className="text-xs font-semibold text-slate-800">
                Human hair is a natural product, and slight variations are inherent.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
