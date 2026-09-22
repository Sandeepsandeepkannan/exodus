"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-slate-50/80 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (55% on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Eyebrow badge */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#A9153B] text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                Exodus Exports Pvt. Ltd. - Indian human hair exports
              </div>
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display"
            >
              Premium indian human hair extensions & wigs – <span className="text-[#A9153B]">ethically sourced from India</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl"
            >
              <p>
                Indian human hair has become the most sought-after raw material in the global hair industry, valued for its strength, durability, versatility, and natural texture. With changing fashion trends and increasing demand for hair extensions and wigs, Indian human hair continues to dominate the global market. India is the largest source of human hair in the world, with consistent availability of premium-grade virgin hair sourced ethically from South Indian temples
              </p>
              <p className="font-semibold text-slate-800">
                At Exodus Exports Pvt. Ltd., we specialize in supplying 100% authentic Indian Remy human hair to clients worldwide.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-[#A9153B] hover:bg-[#A9153B]/90 hover:-translate-y-0.5 rounded-md shadow-sm transition-all duration-300 group text-center"
              >
                Explore our products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-0.5 rounded-md transition-all duration-300 text-center"
              >
                Contact us
              </Link>
            </motion.div>

            {/* Key Trust Stats with StatCounter animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 border-t border-slate-100 grid grid-cols-3 gap-6 text-slate-700"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#A9153B] font-bold text-lg sm:text-xl font-display">
                  <StatCounter value={100} suffix="%" />
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Virgin Indian Remy</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#A9153B] font-bold text-lg sm:text-xl font-display">
                  Hand-Made
                </div>
                <div className="text-[11px] text-slate-500 font-medium">In-House Wefts & Wigs</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#A9153B] font-bold text-lg sm:text-xl font-display">
                  Global B2B
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Direct Export Facility</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column (45% on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              <div className="absolute -inset-2 bg-[#A9153B]/5 rounded-2xl blur-xl transition-all duration-500 group-hover:bg-[#A9153B]/10"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-elevated border border-slate-100 bg-white">
                <Image
                  src="/images/products/model.jpg"
                  alt="Authentic Virgin Indian Human Hair Extensions"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Badge */}
                
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
