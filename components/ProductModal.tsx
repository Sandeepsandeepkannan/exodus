"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Award, Package, CheckCircle2, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { ProductItem } from "./ProductCard";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-200 max-h-[92vh] flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Product Image Column */}
        <div className="relative md:w-5/12 h-64 md:h-auto bg-slate-100 shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent md:hidden" />
          
          <div className="absolute top-4 left-4">
            <span className="bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Details Column */}
        <div className="p-6 sm:p-8 md:w-7/12 overflow-y-auto space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy tracking-widest uppercase font-display">
                <ShieldCheck className="h-4 w-4 text-brand-navy" />
                EXODUS EXPORTS PRODUCT SPECIFICATION
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-1.5">
                {product.name}
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Verified Specifications */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-3 text-xs text-slate-700">
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                <span className="flex items-center gap-2 text-slate-500 font-medium">
                  <Award className="h-4 w-4 text-brand-navy shrink-0" /> Product Type:
                </span>
                <span className="font-bold text-slate-900 text-right">{product.specs.type}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                <span className="flex items-center gap-2 text-slate-500 font-medium">
                  <MapPin className="h-4 w-4 text-brand-navy shrink-0" /> Ethical Sourcing:
                </span>
                <span className="font-bold text-slate-900 text-right">{product.specs.sourcing}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                <span className="flex items-center gap-2 text-slate-500 font-medium">
                  <Package className="h-4 w-4 text-brand-navy shrink-0" /> Manufacturing:
                </span>
                <span className="font-bold text-slate-900 text-right">{product.specs.processing}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-500 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-brand-navy shrink-0" /> Supply Availability:
                </span>
                <span className="font-bold text-brand-navy text-right">{product.specs.availability}</span>
              </div>
            </div>

            {/* Sourcing Guarantee Footer */}
            <div className="p-3 bg-brand-navy/5 border border-brand-navy/10 rounded-lg text-xs text-slate-600 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
              <span>
                <strong>100% Indian Human Hair:</strong> Sourced ethically from South Indian temples. In-house manufactured with zero synthetic blends.
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-brand-navy hover:bg-brand-navyHover rounded-lg shadow-sm transition-all duration-200 group text-center"
            >
              Request Product Quotation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
