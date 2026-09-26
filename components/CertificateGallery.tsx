"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface CertificateItem {
  src: string;
  alt: string;
  title: string;
  issuer: string;
}

const certificates: CertificateItem[] = [
  // FIRST ROW — EXACT ORDER:
  // 1. Cancer Institute certificate
  {
    src: "/certificate/A - CI_EVC_REF_LTR_JAN_25.jpg",
    alt: "Cancer Institute (WIA) – Reference & Appreciation Letter",
    title: "Appreciation & Collaboration Letter",
    issuer: "Cancer Institute (WIA)",
  },
  // 2. Certificate of Completion
  {
    src: "/certificate/Screenshot 2026-09-23 123044.png",
    alt: "Certificate of Completion – The Art & Science of Hair Replacement",
    title: "Certificate of Completion – Hair Replacement",
    issuer: "New Image, USA & First Lady, Canada",
  },
  // 3. Evento certificate
  {
    src: "/certificate/EVENTO CERTIFICATE.jpg",
    alt: "Certificate of Award – Evento Hair Products Ltd.",
    title: "Certificate of Award",
    issuer: "Evento Hair Products Ltd.",
  },
  // SECOND ROW: Remaining existing certificates continuing in order
  {
    src: "/certificate/EXODUS_CVC_Cert.jpg",
    alt: "Central Vigilance Commission – Certificate of Commitment",
    title: "Certificate of Commitment",
    issuer: "Central Vigilance Commission",
  },
  {
    src: "/certificate/Screenshot 2026-09-23 123111.png",
    alt: "World Cancer Congress 2024 – Certificate of Attendance",
    title: "World Cancer Congress 2024 Attendance",
    issuer: "Union for International Cancer Control (UICC)",
  },
  {
    src: "/certificate/msme.png",
    alt: "Ministry of MSME – Udyam Registration Certificate",
    title: "Udyam Registration Certificate",
    issuer: "Ministry of MSME, Govt. of India",
  },
];

export default function CertificateGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + certificates.length) % certificates.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % certificates.length
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <div className="pt-2 space-y-6">
      {/* Certificates Responsive Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col (Compact & balanced) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-lg hover:border-[#A9153B]/40 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            {/* Slightly more compact Thumbnail Image Container with object-contain */}
            <div className="relative w-full aspect-[4/3] bg-slate-50 flex items-center justify-center p-2.5 overflow-hidden border-b border-slate-100">
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                <div className="px-3 py-1.5 rounded-full bg-white/95 text-[#A9153B] text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="h-3.5 w-3.5" />
                  <span>View Certificate</span>
                </div>
              </div>
            </div>

            {/* Certificate Title & Issuer Footer (Compact) */}
            <div className="p-3.5 sm:p-4 bg-white space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-0.5">
                <div className="text-[10px] sm:text-[11px] font-bold text-[#A9153B] uppercase tracking-wider font-display">
                  {cert.issuer}
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug font-display">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium text-[11px]">Official Certificate</span>
                <span className="text-[#A9153B] text-[11px] font-bold group-hover:underline flex items-center gap-1 shrink-0">
                  Click to view &rarr;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Backdrop Click */}
          <div
            className="absolute inset-0"
            onClick={handleClose}
            aria-label="Close backdrop"
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col items-center justify-center">
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between pb-3 text-white px-2">
              <div className="flex items-center gap-2">
                <div className="text-xs sm:text-sm font-medium text-white/90 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  Certificate {selectedIndex + 1} of {certificates.length}
                </div>
                <div className="text-xs text-white/80 hidden sm:block truncate max-w-md font-medium">
                  {certificates[selectedIndex].issuer} — {certificates[selectedIndex].title}
                </div>
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm shadow-sm"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Certificate Display Area with object-contain */}
            <div className="relative w-full h-[65vh] sm:h-[78vh] bg-slate-900/60 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-2 sm:p-4 shadow-2xl">
              <Image
                src={certificates[selectedIndex].src}
                alt={certificates[selectedIndex].alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
              />

              {/* Navigation: Prev Button */}
              {certificates.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/60 hover:bg-[#A9153B] text-white transition-colors backdrop-blur-md border border-white/10 shadow-lg"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {/* Navigation: Next Button */}
              {certificates.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/60 hover:bg-[#A9153B] text-white transition-colors backdrop-blur-md border border-white/10 shadow-lg"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Bottom Keyboard Hint */}
            <div className="pt-2 text-[11px] text-white/60 text-center hidden sm:block">
              Use <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white font-mono">←</kbd> / <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white font-mono">→</kbd> arrows to navigate &bull; Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white font-mono">ESC</kbd> to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
