"use client";

import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle, Package, Award, MapPin, ArrowRight } from "lucide-react";
import { ProductItem } from "./ProductCard";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden z-10 border border-slate-100 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Product Image */}
        <div className="relative md:w-1/2 h-64 md:h-auto bg-slate-100 shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wider">
            {product.category}
          </div>
        </div>

        {/* Product Information */}
        <div className="p-6 sm:p-8 md:w-1/2 overflow-y-auto space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-brand-navy tracking-widest uppercase font-display">
                Exodus Exports Specification Sheet
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-display mt-1">
                {product.name}
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Technical Specs List */}
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/70 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                <span className="flex items-center gap-2 text-slate-500">
                  <Award className="h-4 w-4 text-brand-navy" /> Grade Standard:
                </span>
                <span className="font-semibold text-slate-900">{product.specs.grade}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                <span className="flex items-center gap-2 text-slate-500">
                  <Package className="h-4 w-4 text-brand-navy" /> Export Packaging:
                </span>
                <span className="font-semibold text-slate-900">{product.specs.packaging}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                <span className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-brand-navy" /> Minimum Quantity (MOQ):
                </span>
                <span className="font-semibold text-slate-900">{product.specs.moq}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-500">
                  <MapPin className="h-4 w-4 text-brand-navy" /> Primary Origin:
                </span>
                <span className="font-semibold text-slate-900">{product.specs.origin}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navyHover rounded-md shadow-sm transition-all text-center"
            >
              Request Quotation / FOB Rates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
