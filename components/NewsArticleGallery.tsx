"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Newspaper, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

interface NewsArticleItem {
  heading: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const newsArticles: NewsArticleItem[] = [
  {
    heading: "The Hindu — Cancer Institute Wig Article (January 2023)",
    src: "/newsarticles/B - CI WIG ARTICLE IN HINDU JAN 23.jpg",
    alt: "The Hindu — Cancer Institute Wig Article (January 2023)",
    width: 2020,
    height: 3121,
  },
  {
    heading: "The Times Article (2023)",
    src: "/newsarticles/C - THE TIMES ARTICLE 2023.jpg",
    alt: "The Times Article (2023)",
    width: 1054,
    height: 517,
  },
  {
    heading: "Tirunelveli District Collector Office Hair Donation Article",
    src: "/newsarticles/D - TIRUNELVELI DISTRICT COLLECTOR OFFICE HAIR DONATION ARTICLE.jpg",
    alt: "Tirunelveli District Collector Office Hair Donation Article",
    width: 1600,
    height: 1309,
  },
  {
    heading: "District collector's visit to factory",
    src: "/newsarticles/F - HAIR DONATION ARTICLE - JESUS SCHOOL.JPG",
    alt: "Hair Donation Article – Jesus School",
    width: 761,
    height: 632,
  },
  {
    heading: "Süddeutsche Zeitung — Der goldene Schnitt",
    src: "/images/article/suddeutsche_newspaper_page_1.jpg",
    alt: "Süddeutsche Zeitung — Der goldene Schnitt Article Scan",
    width: 1530,
    height: 3390,
  },
  {
    heading: "Jesus school hair donation",
    src: "/newsarticles/G-jesus.png",
    alt: "Jesus school hair donation",
    width: 2448,
    height: 3264,
  },
];

export default function NewsArticleGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + newsArticles.length) % newsArticles.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % newsArticles.length
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
    <div className="space-y-6">
      {/* 4 Articles Rendered as a Responsive 3-Column Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-lg hover:border-[#A9153B]/40 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            {/* Compact Thumbnail Container with object-contain */}
            <div className="relative w-full aspect-[4/3] bg-slate-50 flex items-center justify-center p-2.5 overflow-hidden border-b border-slate-100">
              <Image
                src={article.src}
                alt={article.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                <div className="px-3 py-1.5 rounded-full bg-white/95 text-[#A9153B] text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="h-3.5 w-3.5" />
                  <span>View Article</span>
                </div>
              </div>
            </div>

            {/* Article Heading & Card Footer (Compact) */}
            <div className="p-3.5 sm:p-4 bg-white space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#A9153B] uppercase tracking-wider font-display">
                  <Newspaper className="h-3.5 w-3.5 text-[#A9153B] shrink-0" />
                  <span>Press Article</span>
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug font-display">
                  {article.heading}
                </h3>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium text-[11px]">Newspaper Scan</span>
                <span className="text-[#A9153B] text-[11px] font-bold group-hover:underline flex items-center gap-1 shrink-0">
                  Click to view &rarr;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
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
                  Article {selectedIndex + 1} of {newsArticles.length}
                </div>
                <div className="text-xs text-white/80 hidden sm:block truncate max-w-md font-medium">
                  {newsArticles[selectedIndex].heading}
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

            {/* Full Newspaper Scan Display Area with object-contain */}
            <div className="relative w-full h-[65vh] sm:h-[78vh] bg-slate-900/60 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-2 sm:p-4 shadow-2xl">
              <Image
                src={newsArticles[selectedIndex].src}
                alt={newsArticles[selectedIndex].alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
              />

              {/* Prev Button */}
              {newsArticles.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/60 hover:bg-[#A9153B] text-white transition-colors backdrop-blur-md border border-white/10 shadow-lg"
                  aria-label="Previous article"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {/* Next Button */}
              {newsArticles.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/60 hover:bg-[#A9153B] text-white transition-colors backdrop-blur-md border border-white/10 shadow-lg"
                  aria-label="Next article"
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
