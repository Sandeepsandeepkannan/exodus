"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: {
    grade: string;
    packaging: string;
    moq: string;
    origin: string;
  };
  image: string;
}

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-subtle hover:shadow-card hover:border-brand-navy/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md border border-slate-200 text-xs font-semibold text-brand-navy uppercase tracking-wider shadow-sm flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-navy transition-colors duration-200 font-display mb-2">
            {product.name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Specs Table Snippet */}
        <div className="pt-3 border-t border-slate-100 text-xs space-y-1.5 text-slate-500">
          <div className="flex justify-between">
            <span className="font-medium text-slate-400">Quality Grade:</span>
            <span className="font-semibold text-slate-800">{product.specs.grade}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-slate-400">Min Order (MOQ):</span>
            <span className="font-semibold text-slate-800">{product.specs.moq}</span>
          </div>
        </div>

        {/* Explore CTA link */}
        <div className="pt-2 flex items-center justify-between text-xs font-bold text-brand-navy group-hover:text-brand-navyHover">
          <span>Explore Product Details</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
}
