"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import StatCounter from "./StatCounter";

const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const titleLineVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Hero() {
  return (
    <>
      {/* ========================================================
          1. FIRST HERO FRAME — COMPACT BLACK BAND WITH WHITE SPACE ABOVE & BELOW
          ======================================================== */}
      <section className="relative pt-24 pb-3 sm:pt-28 sm:pb-4 md:pt-32 md:pb-5 bg-white overflow-hidden">
        {/* Compact horizontal black band with matching 1px solid white line on the FAR LEFT EDGE */}
        <div className="w-full bg-black py-0 relative border-l border-white">
          {/* Exact 1px solid white vertical line along the far left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white pointer-events-none z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Heading in White (Vertically Centered Relative to Image) */}
              <div className="lg:col-span-7 flex flex-col justify-center py-6 sm:py-8 lg:py-10">
                <motion.h1
                  variants={titleContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-medium text-white tracking-normal leading-[1.28] font-display max-w-xl space-y-1.5 sm:space-y-2"
                >
                  <motion.span variants={titleLineVariants} className="block font-bold tracking-tight">
                    Premium Indian human hair
                  </motion.span>
                  <motion.span variants={titleLineVariants} className="block italic text-white/95 font-serif sm:text-[1.04em]">
                    extensions &amp; wigs –
                  </motion.span>
                  <motion.span variants={titleLineVariants} className="block font-bold tracking-tight text-white">
                    Ethically sourced from
                  </motion.span>
                  <motion.span variants={titleLineVariants} className="block font-bold tracking-tight text-white">
                    India
                  </motion.span>
                </motion.h1>
              </div>

              {/* Right Column: Existing Woman/Hair Image (Clean vertical alignment) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-0"
              >
                <div className="relative w-full max-w-md lg:max-w-none overflow-hidden rounded-2xl bg-black">
                  <Image
                    src="/images/products/model.jpg"
                    alt="Authentic Virgin Indian Human Hair Extensions"
                    width={800}
                    height={600}
                    priority
                    className="w-full h-[370px] sm:h-[400px] md:h-[480px] lg:h-[530px] object-cover rounded-2xl"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECOND FRAME — CLEAN LIGHT BACKGROUND
          ======================================================== */}
      <section className="pt-8 pb-14 sm:pt-10 sm:pb-16 md:pt-12 md:pb-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Centered + Bold + Strictly Two-Line Heading on Desktop with Background */}
          <div className="text-center w-full">
            <div className="inline-block px-5 py-4 sm:px-8 sm:py-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle">
              <h2 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[32px] xl:text-[34px] font-black text-slate-950 font-display tracking-tight leading-[1.25] text-center max-w-5xl mx-auto space-y-1">
                <span className="block md:whitespace-nowrap">
                  At Exodus Exports Pvt. Ltd., We specialize in supplying
                </span>
                <span className="block md:whitespace-nowrap">
                  100% Authentic Indian Remy human hair
                </span>
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-8">
            {/* Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              <p>
                Indian human hair has become the most sought-after raw material in the global hair industry, valued for its strength, durability, versatility, and natural texture. With changing fashion trends and increasing demand for hair extensions and wigs, Indian human hair continues to dominate the global market. India is the largest source of human hair in the world, with consistent availability of premium-grade virgin hair sourced ethically from South Indian temples
              </p>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
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
            </div>
          </div>

          {/* Key Trust Stats */}
          <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-700">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#A9153B] font-bold text-xl sm:text-2xl font-display">
                <StatCounter value={100} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Virgin Indian Remy</div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#A9153B] font-bold text-xl sm:text-2xl font-display">
                Hand-Made
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">In-House Wefts &amp; Wigs</div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#A9153B] font-bold text-xl sm:text-2xl font-display">
                Global B2B
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">Direct Export Facility</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
