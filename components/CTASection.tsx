import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  darkVariant?: boolean;
}

export default function CTASection({
  title = "Looking for premium indian human hair?",
  subtitle = "Connect with our Chennai export desk to discuss wholesale hair supply, custom hand-tied weft ratios, sample orders, and private labeling.",
  buttonText = "Contact us today",
  darkVariant = false,
}: CTASectionProps) {
  return (
    <section
      className={`py-24 relative overflow-hidden ${
        darkVariant
          ? "bg-[#A9153B] text-white"
          : "bg-gradient-to-b from-white to-slate-50 border-t border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div
            className={`p-10 sm:p-16 rounded-2xl border ${
              darkVariant
                ? "bg-white/10 border-white/20 shadow-elevated text-white"
                : "bg-white border-slate-200/80 shadow-subtle hover:border-[#A9153B]/30 transition-all duration-300"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Narrative */}
              <div className="lg:col-span-8 space-y-4">
                <span
                  className={`text-[11px] sm:text-xs font-bold tracking-widest uppercase font-display flex items-center gap-2 ${
                    darkVariant ? "text-white" : "text-[#A9153B]"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${darkVariant ? "bg-white" : "bg-brand-red"}`}></span>
                  Wholesale human hair inquiries
                </span>
                <h2
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                    darkVariant ? "text-white" : "text-slate-900"
                  }`}
                >
                  {title}
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                    darkVariant ? "text-white/90" : "text-slate-600"
                  }`}
                >
                  {subtitle}
                </p>
              </div>

              {/* Right Buttons */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 items-stretch lg:items-end justify-center">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-md shadow-sm hover:-translate-y-0.5 transition-all duration-300 group text-center ${
                    darkVariant
                      ? "bg-white text-[#A9153B] hover:bg-white/90"
                      : "bg-[#A9153B] text-white hover:opacity-95"
                  }`}
                >
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
                
                <a
                  href="mailto:exodus.exports@gmail.com"
                  className={`inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium transition-colors ${
                    darkVariant ? "text-white/90 hover:text-white" : "text-slate-600 hover:text-[#A9153B]"
                  }`}
                >
                  <Mail className={`h-4 w-4 ${darkVariant ? "text-white" : "text-brand-red"}`} /> exodus.exports@gmail.com
                </a>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
