import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, HeartHandshake, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#B91941] text-white pt-16 pb-12 border-t border-[#B91941]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/20">
          
          {/* Col 1 & 2: Brand Logo Card & Overview */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Logo Badge Card */}
            <Link href="/" className="inline-block bg-white p-3 rounded-lg shadow-sm border border-slate-200/80 hover:opacity-95 transition-opacity">
              <Image
                src="/EXODUS-Logo.png"
                alt="Exodus Exports"
                width={146}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-white/95 text-sm leading-relaxed max-w-md">
              Established in 2002, Exodus Exports Pvt. Ltd. is an Export-Oriented Private Limited Company, headquartered in Chennai, South India. Supplying 100% authentic Indian Remy human hair to clients worldwide.
            </p>

            <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-xs text-white/95 leading-relaxed space-y-1">
              <div className="font-bold uppercase tracking-wider text-white">Distributor & Wholesale Enquiries</div>
              <p>We welcome distributors, partners, and JV enquiries worldwide. Grow your business with a trusted Indian human hair manufacturer.</p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-white/90">
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
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about-human-hair" className="hover:text-white transition-colors duration-200">
                  About Hair
                </Link>
              </li>
              <li>
                <Link href="/cranial-prosthesis" className="hover:text-white transition-colors duration-200">
                  Cranial Prosthesis
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Hair Range */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Product Range
            </h3>
            <ul className="space-y-2.5 text-sm text-white/90">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  100% Virgin Indian Remy Hair
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  RSD – Remy Single Drawn
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Remy Double Drawn Hair
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Hand-Tied & Machine Wefts
                </Link>
              </li>
              <li>
                <Link href="/cranial-prosthesis" className="hover:text-white transition-colors">
                  Cranial Prosthesis (Medical Wigs)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Registered Office & Factory */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Contact Us
            </h3>
            <div className="space-y-3 text-xs text-white/90">
              <div>
                <div className="font-bold text-white uppercase tracking-wider text-[11px]">Regd Office:</div>
                <div className="mt-0.5">EXODUS EXPORTS PVT. LTD.</div>
                <div>No. 56 A, Thanduma Nagar, Near 100 Ft Road, St. Thomas Mount, Chennai – 600016, India</div>
              </div>

              <div>
                <div className="font-bold text-white uppercase tracking-wider text-[11px]">Factory:</div>
                <div>Tirunelveli district.</div>
                <div className="text-white/80 italic">For Factory visit kindly contact us</div>
              </div>

              <div className="pt-2 space-y-1.5 border-t border-white/20">
                <a href="tel:+917550001106" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  <span>+91 75500 01106 (9 AM – 5 PM IST)</span>
                </a>
                <a href="mailto:exodus.exports@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span>exodus.exports@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <p>© {new Date().getFullYear()} EXODUS EXPORTS PVT. LTD. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-white/80">
            <span>Chennai, South India</span>
            <span>•</span>
            <span>Ethically Sourced Indian Hair</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
