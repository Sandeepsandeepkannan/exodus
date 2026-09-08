import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, Globe, Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact Us | Exodus Exports - Indian Human Hair Desk",
  description:
    "Contact Exodus Exports in Chennai, India for wholesale human hair inquiries, custom hand-tied weft ratios, full lace wig orders, and international export pricing.",
};

export default function ContactPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* PAGE HERO */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-navy font-display">
            EXODUS CHENNAI TRADE DESK
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Let's Work Together
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Connect with our hair manufacturing representatives for custom length specifications, wholesale bundle pricing, sample orders, and international air shipping.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-subtle min-h-[400px] flex items-center justify-center text-slate-400">
                  Loading inquiry form...
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right Column: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200/80 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Factory & Export Headquarters
                </h3>

                <ul className="space-y-5 text-sm text-slate-700">
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-md bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Manufacturing Unit Address</div>
                      <div className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                        No. 56, Thanduma Nagar, Near 100 Ft Road,<br />
                        St. Thomas Mount, Chennai – 600016,<br />
                        Tamil Nadu, India.
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-md bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Direct Email Inquiry</div>
                      <a href="mailto:exodus.exports@gmail.com" className="text-brand-navy font-semibold text-xs hover:underline mt-0.5 block">
                        exodus.exports@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-md bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Phone & WhatsApp Export Desk</div>
                      <a href="tel:+917550001106" className="text-slate-700 font-medium text-xs hover:underline mt-0.5 block">
                        +91 7550001106
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-md bg-brand-navy/10 text-brand-navy flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Business Hours</div>
                      <div className="text-slate-600 text-xs mt-0.5">
                        9 AM – 5 PM IST
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* B2B Export Box */}
              <div className="bg-brand-navy text-white p-8 rounded-xl border border-brand-navyHover shadow-elevated space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 uppercase tracking-widest font-display">
                  <Globe className="h-4 w-4" /> Worldwide Export Express
                </div>
                <h4 className="text-xl font-bold font-display">International Air Courier Delivery</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Fast 3–5 business day door-to-door express delivery across USA, UK, Europe, Canada, Australia, and Africa via DHL Express, FedEx, and UPS.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-white">
                  <Sparkles className="h-4 w-4 text-emerald-400" /> Custom Private Labeling & Barcoding Available
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* LOCATION MAP SECTION */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="HEADQUARTERS LOCATION"
            title="Chennai Manufacturing Unit"
            subtitle="Located in St. Thomas Mount, Chennai, minutes away from Chennai International Airport."
          />
          <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 shadow-subtle bg-slate-200 h-96 relative">
            <iframe
              title="Exodus Exports Chennai Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2185568164344!2d80.19777!3d13.00392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526715f1122221%3A0x1122334455667788!2sSt.%20Thomas%20Mount%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.5) contrast(1.1)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
