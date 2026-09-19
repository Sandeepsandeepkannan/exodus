"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const productSections = [
  { name: "Hair products", href: "/products#hair-products" },
  { name: "Extensions & wefts", href: "/products#extensions-wefts" },
  { name: "Wigs & hairpieces", href: "/products#wigs-hairpieces" },
  { name: "Cranial prosthesis", href: "/products#cranial-prosthesis" },
  { name: "Indian human hair textures", href: "/products#indian-human-hair-textures" },
  { name: "Manufacturing & processing", href: "/products#manufacturing-processing" },
  { name: "Colour shades", href: "/products#colour-shades" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "About hair", href: "/about-human-hair" },
  { name: "Cranial prosthesis", href: "/cranial-prosthesis" },
  { name: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-100 py-3.5"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100/80 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Official Exodus Exports Logo */}
          <Link href="/" className="flex items-center group transition-transform duration-200 hover:opacity-95 shrink-0 py-1">
            <Image
              src="/EXODUS-Logo.png"
              alt="Exodus Exports"
              width={146}
              height={60}
              priority
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Center/Right: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              if (link.name === "Products") {
                const isProductsActive = pathname === "/products" || pathname.startsWith("/products");
                return (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className={`text-sm font-medium transition-colors duration-200 relative py-1 flex items-center gap-1.5 focus:outline-none ${
                        isProductsActive
                          ? "text-[#A9153B] font-bold"
                          : "text-slate-700 hover:text-[#A9153B]"
                      }`}
                      aria-expanded={productsDropdownOpen}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          productsDropdownOpen ? "rotate-180 text-[#A9153B]" : isProductsActive ? "text-[#A9153B]" : "text-slate-400"
                        }`}
                      />
                      {isProductsActive && (
                        <>
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A9153B] rounded-full" />
                          <span className="h-1 w-1 rounded-full bg-[#A9153B] inline-block ml-0.5"></span>
                        </>
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-slate-200/80 py-2 z-50 animate-fadeIn">
                        {productSections.map((section) => (
                          <Link
                            key={section.name}
                            href={section.href}
                            onClick={() => setProductsDropdownOpen(false)}
                            className="block px-4 py-2.5 text-xs font-medium text-slate-700 hover:text-[#A9153B] hover:bg-slate-50 transition-colors"
                          >
                            {section.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#A9153B] font-bold"
                      : "text-slate-700 hover:text-[#A9153B]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <>
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A9153B] rounded-full" />
                      <span className="h-1 w-1 rounded-full bg-[#A9153B] inline-block ml-0.5"></span>
                    </>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Primary CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#A9153B] hover:bg-[#A9153B]/90 rounded-lg shadow-sm transition-all duration-200 group"
            >
              Enquire now
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#A9153B] rounded-md focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-900" />
              ) : (
                <Menu className="h-6 w-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              if (link.name === "Products") {
                const isProductsActive = pathname === "/products" || pathname.startsWith("/products");
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isProductsActive
                          ? "bg-[#A9153B]/10 text-[#A9153B] font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileProductsOpen ? "rotate-180 text-[#A9153B]" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {mobileProductsOpen && (
                      <div className="pl-3 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-lg border border-slate-100">
                        {productSections.map((section) => (
                          <Link
                            key={section.name}
                            href={section.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                            }}
                            className="block px-3 py-2 rounded-md text-xs font-medium text-slate-600 hover:text-[#A9153B] hover:bg-white transition-colors"
                          >
                            {section.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#A9153B]/10 text-[#A9153B] font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-[#A9153B] rounded-lg shadow-sm"
              >
                Enquire now
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
