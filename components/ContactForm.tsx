"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    productInterest: initialProduct,
    message: "",
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, productInterest: initialProduct }));
    }
  }, [initialProduct]);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        productInterest: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-subtle">
      <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
        Send a B2B Hair Export Inquiry
      </h3>
      <p className="text-sm text-slate-600 mb-8">
        Fill in your requirements below. Our Chennai international export specialists respond within 24 business hours.
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-sm">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Inquiry Received Successfully</p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Thank you for contacting Exodus Exports. Our hair trade specialist will review your request and send custom pricing and sample options.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Full Name <span className="text-brand-red">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Company / Salon / Business <span className="text-brand-red">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Velvet Hair Studio & Boutique"
              className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
            />
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Corporate / Business Email <span className="text-brand-red">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="sarah@velvethair.com"
              className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 019-2834"
              className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
            />
          </div>

        </div>

        {/* Product Interest */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Hair Product Interest
          </label>
          <input
            type="text"
            value={formData.productInterest}
            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
            placeholder="e.g. Hand-Tied Wefts, HD 13x4 Frontals, Full Lace Wigs, Medical Prostheses"
            className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Inquiry & Specifications <span className="text-brand-red">*</span>
          </label>
          <textarea
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Specify required lengths (e.g. 18-24 inch), bundle quantities (Kg/Pieces), desired textures, and shipping destination..."
            className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-navy hover:bg-brand-navyHover rounded-md shadow-sm transition-all duration-200 disabled:opacity-70"
        >
          {status === "submitting" ? (
            "Processing Inquiry..."
          ) : (
            <>
              Submit B2B Hair Inquiry
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
