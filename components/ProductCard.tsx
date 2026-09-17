"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProductItem } from "@/data/products";

export type { ProductItem };

interface ProductCardProps {
  product: ProductItem;
  onQuickView?: (product: ProductItem) => void;
  onSelect?: (product: ProductItem) => void;
}

export default function ProductCard({ product, onQuickView, onSelect }: ProductCardProps) {
  const handleClick = () => {
    if (onQuickView) onQuickView(product);
    else if (onSelect) onSelect(product);
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-white rounded-xl border border-slate-200/90 hover:border-[#B91941]/50 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer hover:-translate-y-1"
    >
      {/* 1. Product Image Container */}
      <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200/90 text-xs font-bold text-[#B91941] uppercase tracking-wide shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B91941]"></span>
          {product.category}
        </div>
      </div>

      {/* 2. Product Details Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#B91941] transition-colors duration-200 font-display line-clamp-1">
            {product.name}
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </p>
        </div>

        {/* 3. Action Row */}
        <div className="pt-3 flex items-center justify-between text-xs font-bold text-[#B91941] border-t border-slate-100 group-hover:text-[#B91941]">
          <span className="inline-flex items-center gap-1">
            View Product Details
          </span>
          <div className="h-7 w-7 rounded-full bg-slate-100 group-hover:bg-[#B91941] group-hover:text-white flex items-center justify-center transition-all duration-200">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
