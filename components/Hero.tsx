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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B91941]/5 border border-[#B91941]/10 text-[#B91941] text-xs font-semibold tracking-wider uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse"></span>
              Indian Human Hair Manufacturer & Exporter
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-display"
            >
              Premium Indian Human Hair,{" "}
              <span className="text-[#B91941] block sm:inline">Crafted for the World.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl"
            >
              Exodus Exports manufactures and exports 100% authentic virgin Indian human hair, hand-tied wefts, full lace wigs, HD closures, toppers, and medical cranial prostheses for international B2B partners.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#B91941] hover:bg-[#9E1537] hover:-translate-y-0.5 rounded-md shadow-sm transition-all duration-300 group text-center"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-0.5 rounded-md transition-all duration-300 text-center"
              >
                Contact Us
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
                <div className="flex items-center gap-1.5 text-[#B91941] font-bold text-xl sm:text-2xl font-display">
                  <StatCounter value={100} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 font-medium">Virgin Indian Remy</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#B91941] font-bold text-xl sm:text-2xl font-display">
                  Hand-Made
                </div>
                <div className="text-xs text-slate-500 font-medium">In-House Wefts & Wigs</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#B91941] font-bold text-xl sm:text-2xl font-display">
                  Global B2B
                </div>
                <div className="text-xs text-slate-500 font-medium">Direct Export Facility</div>
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
              <div className="absolute -inset-2 bg-[#B91941]/5 rounded-2xl blur-xl transition-all duration-500 group-hover:bg-[#B91941]/10"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-elevated border border-slate-100 bg-white">
                <Image
                  src="/images/products/hair_extensions.jpg"
                  alt="Authentic Virgin Indian Human Hair Extensions"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg border border-slate-100 shadow-md flex items-center justify-between transition-transform duration-300 group-hover:-translate-y-1">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> Master Craftsmanship
                    </div>
                    <div className="text-sm font-bold text-slate-900">Cuticle Intact Remy Hair</div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#B91941]/10 flex items-center justify-center text-[#B91941] font-bold text-xs">
                    EE
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
