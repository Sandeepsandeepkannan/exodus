import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Sparkles, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Logo Card & Overview */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Logo Badge Card for pristine contrast */}
            <Link href="/" className="inline-block bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:opacity-95 transition-opacity">
              <Image
                src="/EXODUS-Logo.png"
                alt="Exodus Exports"
                width={146}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Exodus Exports is a premier Indian human hair manufacturer and exporter based in Chennai, India. Specializing in 100% virgin Indian temple hair, hand-tied wefts, full lace wigs, HD closures, toppers, and medical cranial prostheses for international B2B partners.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> 100% Raw Virgin Hair
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Cuticle Intact Guarantee
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors duration-200">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/about-human-hair" className="hover:text-white transition-colors duration-200">
                  About Human Hair
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Hair Collections */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> Hair Collections
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Hand-Tied & Micro Wefts
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Machine Wefts & Clip-Ins
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Full Lace Wigs & Frontals
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Medical Cranial Prostheses
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Toppers & Ponytails
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Chennai Head Office */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span> Chennai Office
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-1" />
                <span>No. 56, Thanduma Nagar, Near 100 Ft Road, St. Thomas Mount, Chennai – 600016, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="mailto:exodus.exports@gmail.com" className="hover:text-white transition-colors">
                  exodus.exports@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="tel:+917550001106" className="hover:text-white transition-colors">
                  +91 7550001106
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Exodus Exports. All rights reserved. Premium Indian Human Hair Manufacturer & Exporter.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Export Terms</span>
            <span className="hover:text-slate-400 cursor-pointer">Quality Guarantee</span>
            <span className="hover:text-slate-400 cursor-pointer">B2B Trade Inquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
