import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, Globe, Sparkles, Building2, CheckCircle2, FileText } from "lucide-react";

export const metadata = {
  title: "Contact Us | Exodus Exports Pvt. Ltd. - Indian Human Hair Exports",
  description:
    "Contact Exodus Exports Pvt. Ltd. Regd Office: EXODUS EXPORTS PVT. LTD. No. 56 A, Thanduma Nagar, Near 100 Ft Road, St. Thomas Mount, Chennai – 600016, India. Factory: Tirunelveli district. For Factory visit kindly contact us.",
};

export default function ContactPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* PAGE HERO */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span> GET IN TOUCH
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Contact Us
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
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
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Contact Us
                </h3>

                <ul className="space-y-6 text-sm text-slate-700">
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#B91941]/10 text-[#B91941] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#B91941]">Regd Office:</div>
                      <div className="text-slate-800 text-sm leading-relaxed font-medium">
                        EXODUS EXPORTS PVT. LTD.No. 56 A, Thanduma Nagar,Near 100 Ft Road,St. Thomas Mount,Chennai – 600016, India
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#B91941]/10 text-[#B91941] flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#B91941]">Factory:</div>
                      <div className="text-slate-800 font-semibold text-sm">Tirunelveli district.</div>
                      <div className="text-slate-600 text-xs italic">
                        For Factory visit kindly contact us
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#B91941]/10 text-[#B91941] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#B91941]">Phone & Email:</div>
                      <div className="text-slate-800 font-bold text-sm">
                        📞 +91 75500 01106 (9 AM – 5 PM IST)📧 exodus.exports@gmail.com
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Distributor & Wholesale Enquiries Box */}
              <div className="bg-[#B91941] text-white p-8 rounded-2xl shadow-subtle space-y-3">
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Globe className="h-4 w-4" /> B2B PARTNERSHIPS
                </div>
                <h4 className="text-xl font-bold font-display">Distributor & Wholesale Enquiries</h4>
                <p className="text-white/95 text-xs sm:text-sm leading-relaxed">
                  We welcome distributors, partners, and JV enquiries worldwide.Grow your business with a trusted Indian human hair manufacturer.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TERMS & CONDITIONS OF SALE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              TERMS & CONDITIONS OF SALE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">100% Indian Human Hair only</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">No synthetic blends</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">100% advance payment via bank transfer</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">Ex-Factory Chennai, India</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">Exchange within 7 business days (conditions apply)</span>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#B91941] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">No refund policy</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-subtle">
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              Human hair is a natural product, and slight variations are inherent.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
