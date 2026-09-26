import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ShieldCheck, HeartHandshake, Building2 } from "lucide-react";

// Social Media Links (Easily edit URLs here)
const socialLinks = {
  facebook: "https://www.facebook.com/ExodusExportsIndia/",
  instagram: "https://www.instagram.com/exodus.exports/",
  linkedin: "https://www.linkedin.com/in/sheeba-paul-93945663/",
  youtube: "https://www.youtube.com/@exodusexportsindianhumanha3487",
  whatsapp: "https://wa.me/917550001107",
};

function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        d="M15.12 12.75L15.6 9.6H12.58V7.55C12.58 6.69 13 5.85 14.34 5.85H15.72V3.17C15.72 3.17 14.47 2.96 13.27 2.96C10.78 2.96 9.15 4.47 9.15 7.21V9.6H6.38V12.75H9.15V20.38C9.71 20.47 10.28 20.51 10.86 20.51C11.44 20.51 12.02 20.47 12.58 20.38V12.75H15.12Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="instagram-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bc1888" />
          <stop offset="30%" stopColor="#cc2366" />
          <stop offset="60%" stopColor="#dc2743" />
          <stop offset="85%" stopColor="#e6683c" />
          <stop offset="100%" stopColor="#f09433" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#instagram-gradient)" />
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" stroke="#ffffff" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="3.6" stroke="#ffffff" strokeWidth="1.6" fill="none" />
      <circle cx="16.5" cy="7.5" r="0.9" fill="#ffffff" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#0A66C2" />
      <path
        d="M7.44 9.17H4.72V17.84H7.44V9.17ZM6.08 4.96C5.21 4.96 4.5 5.67 4.5 6.54C4.5 7.41 5.21 8.12 6.08 8.12C6.95 8.12 7.66 7.41 7.66 6.54C7.66 5.67 6.95 4.96 6.08 4.96ZM19.28 12.39C19.28 9.72 17.85 8.48 15.95 8.48C14.42 8.48 13.73 9.32 13.35 9.91V9.17H10.63C10.67 9.94 10.63 17.84 10.63 17.84H13.35V13H13.35C13.35 12.75 13.37 12.49 13.44 12.31C13.65 11.8 14.12 11.26 14.92 11.26C15.96 11.26 16.38 12.05 16.38 13.22V17.84H19.1V12.87C19.1 12.71 19.28 12.55 19.28 12.39Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function YoutubeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#ffffff" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#25D366" />
      <path
        d="M12.03 5C8.16 5 5 8.16 5 12.03c0 1.24.32 2.45.94 3.52L5 19l3.54-.93a7.01 7.01 0 0 0 3.49.93c3.87 0 7.03-3.16 7.03-7.03S15.9 5 12.03 5zm3.56 9.97c-.15.42-.87.8-1.22.85-.32.05-.73.08-2.1-.49-1.62-.67-2.66-2.31-2.74-2.42-.08-.11-.66-.88-.66-1.67 0-.79.42-1.18.57-1.34.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.24-.04.37.28.14.32.46 1.12.5 1.2.04.08.07.18.01.28-.05.11-.08.18-.16.27-.08.1-.17.21-.24.28-.08.08-.17.17-.07.33.09.16.42.69.89 1.11.62.55 1.13.72 1.3.8.16.08.26.07.35-.04.1-.11.4-.47.51-.63.11-.16.22-.14.36-.08.15.05.94.45 1.1.53.16.08.27.12.31.19.04.07.04.39-.11.81z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#A9153B] text-white pt-16 pb-12 border-t border-[#A9153B]">
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

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 shadow-sm rounded-lg"
              >
                <FacebookIcon className="h-6 w-6 rounded-md shadow-sm" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 shadow-sm rounded-lg"
              >
                <InstagramIcon className="h-6 w-6 rounded-md shadow-sm" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 shadow-sm rounded-lg"
              >
                <LinkedInIcon className="h-6 w-6 rounded-md shadow-sm" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 shadow-sm rounded-lg"
              >
                <YoutubeIcon className="h-6 w-6 rounded-md shadow-sm" />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 shadow-sm rounded-lg"
              >
                <WhatsAppIcon className="h-6 w-6 rounded-md shadow-sm" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-white/10 border border-white/20 text-xs text-white/95 leading-relaxed space-y-1">
              <div className="font-bold uppercase tracking-wider text-white">Distributor & wholesale enquiries</div>
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
                  About us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about-human-hair" className="hover:text-white transition-colors duration-200">
                  About hair
                </Link>
              </li>
              <li>
                <Link href="/cranial-prosthesis" className="hover:text-white transition-colors duration-200">
                  Cranial prosthesis
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Hair Range */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Product range
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
                  Hand-tied & machine wefts
                </Link>
              </li>
              <li>
                <Link href="/cranial-prosthesis" className="hover:text-white transition-colors">
                  Cranial prosthesis (medical wigs)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Registered Office & Factory */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase font-display flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Contact us
            </h3>
            <div className="space-y-3 text-xs text-white/90">
              <div>
                <div className="font-bold text-white uppercase tracking-wider text-[11px]">Regd office:</div>
                <div className="mt-0.5">EXODUS EXPORTS PVT. LTD.</div>
                <div>No. 56 A, Thanduma Nagar, <br />Near 100 Ft Road,<br /> St. Thomas Mount,<br /> Chennai – 600016,<br /> India</div>
              </div>

              <div>
                <div className="font-bold text-white uppercase tracking-wider text-[11px]">Factory:</div>
                <div>Tirunelveli district.</div>
                <div className="text-white/80 italic">For Factory visit kindly contact us</div>
              </div>

              <div className="pt-2 space-y-1.5 border-t border-white/20">
                <a
                  href="https://wa.me/917550001107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  <span>+91 755 000 1106 <br /> (9 AM – 5 PM IST)</span>
                </a>
                <a
                  href="mailto:exodus.exports@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
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
