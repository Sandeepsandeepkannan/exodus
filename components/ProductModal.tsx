"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Award, Package, CheckCircle2, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { ProductItem } from "@/data/products";

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) return null;

  const currentImage = activeImage || product.image;
  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

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
        <div className="relative md:w-5/12 bg-slate-100 shrink-0 flex flex-col">
          <div className="relative h-64 md:h-80 w-full bg-slate-100 overflow-hidden">
            <Image
              src={currentImage}
              alt={product.name}
              fill
              priority
              className="object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent md:hidden" />
            
            <div className="absolute top-4 left-4">
              <span className="bg-[#A9153B] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                {product.category}
              </span>
            </div>
          </div>

          {/* Thumbnail Gallery if multiple images exist */}
          {galleryImages.length > 1 && (
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center gap-2 overflow-x-auto">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-12 w-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    currentImage === img
                      ? "border-[#A9153B] shadow-sm scale-105"
                      : "border-slate-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="p-6 sm:p-8 md:w-7/12 overflow-y-auto space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#A9153B] tracking-widest uppercase font-display">
                <ShieldCheck className="h-4 w-4 text-[#A9153B]" />
                Exodus Exports product range
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display mt-1.5">
                {product.name}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specs && (
              <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80 space-y-3 text-xs text-slate-700">
                {product.specs.type && (
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                    <span className="flex items-center gap-2 text-slate-500 font-medium">
                      <Award className="h-4 w-4 text-[#A9153B] shrink-0" /> Product Type:
                    </span>
                    <span className="font-bold text-slate-900 text-right">{product.specs.type}</span>
                  </div>
                )}

                {product.specs.processing && (
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
                    <span className="flex items-center gap-2 text-slate-500 font-medium">
                      <Package className="h-4 w-4 text-[#A9153B] shrink-0" /> Manufacturing:
                    </span>
                    <span className="font-bold text-slate-900 text-right">{product.specs.processing}</span>
                  </div>
                )}

                {product.specs.customization && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-500 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0" /> Customization:
                    </span>
                    <span className="font-bold text-[#A9153B] text-right">{product.specs.customization}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-white bg-[#A9153B] hover:bg-[#A9153B]/90 rounded-lg shadow-sm transition-all"
            >
              Enquire about this product
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
