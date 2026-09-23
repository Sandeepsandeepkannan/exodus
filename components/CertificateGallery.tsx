"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface CertificateItem {
  src: string;
  alt: string;
}

const certificates: CertificateItem[] = [
  {
    src: "/certificate/A - CI_EVC_REF_LTR_JAN_25.jpg",
    alt: "Certificate - A - CI_EVC_REF_LTR_JAN_25",
  },
  {
    src: "/certificate/EXODUS_CVC_Cert.jpg",
    alt: "Certificate - EXODUS_CVC_Cert",
  },
  {
    src: "/certificate/Screenshot 2026-09-23 123044.png",
    alt: "Accreditation Certificate Screenshot 1",
  },
  {
    src: "/certificate/Screenshot 2026-09-23 123111.png",
    alt: "Accreditation Certificate Screenshot 2",
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
    <div className="pt-4 space-y-6">
      {/* Certificates Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-xl hover:border-[#A9153B]/40 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
          >
            {/* Thumbnail Image Container */}
            <div className="relative w-full aspect-[4/3] bg-slate-50 flex items-center justify-center p-3 overflow-hidden border-b border-slate-100">
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#A9153B] text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="h-3.5 w-3.5" />
                  <span>View Certificate</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-4 bg-white flex items-center justify-between text-xs text-slate-600 font-medium">
              <span className="truncate pr-2 font-display text-slate-800 font-semibold">
                Official Certificate
              </span>
              <span className="text-[#A9153B] text-[11px] font-bold group-hover:underline flex items-center gap-1 shrink-0">
                Click to view &rarr;
              </span>
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
              <div className="text-xs sm:text-sm font-medium text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                Certificate {selectedIndex + 1} of {certificates.length}
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm shadow-sm"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Certificate Display Area */}
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
