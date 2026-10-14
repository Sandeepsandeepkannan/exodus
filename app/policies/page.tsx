import Link from "next/link";
import { ShieldCheck, RotateCcw, FileText, Mail, Globe, MapPin, Building2, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Policies | Exodus Exports Pvt. Ltd. - Indian Human Hair Exports",
  description:
    "Privacy Policy, Return & Exchange Policy, and General Terms and Conditions of Exodus Exports Pvt. Ltd., Chennai, India.",
};

export default function PoliciesPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* PAGE HERO */}
      <section className="py-16 sm:py-20 bg-[#F1F3F6] border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> Legal & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Company Policies
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Review our Privacy Policy, Return &amp; Exchange Policy, and General Terms and Conditions.
          </p>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              href="#privacy-policy"
              className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#A9153B] hover:border-[#A9153B]/40 text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="h-4 w-4 text-[#A9153B]" />
              <span>Privacy Policy</span>
            </Link>
            <Link
              href="#return-policy"
              className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#A9153B] hover:border-[#A9153B]/40 text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4 text-[#A9153B]" />
              <span>Return &amp; Exchange Policy</span>
            </Link>
            <Link
              href="#terms-and-conditions"
              className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#A9153B] hover:border-[#A9153B]/40 text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center gap-2"
            >
              <FileText className="h-4 w-4 text-[#A9153B]" />
              <span>General Terms &amp; Conditions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 1. PRIVACY POLICY */}
      <section id="privacy-policy" className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <ScrollReveal className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A9153B]/10 text-[#A9153B] text-xs font-bold uppercase tracking-wider font-display">
              <ShieldCheck className="h-4 w-4 text-[#A9153B]" />
              <span>Policy 01</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              PRIVACY POLICY
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              Exodus Exports Pvt. Ltd. respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard information when you visit our website or communicate with us.
            </p>
          </ScrollReveal>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                1. Information We Collect
              </h3>
              <p className="text-slate-600">
                We may collect information such as your name, email address, telephone number, company details, business address, and enquiry or order information when you contact us or use our services. Limited technical information, including IP address, browser details, and website usage data, may also be collected to improve website performance and security.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                2. Use of Information
              </h3>
              <p className="text-slate-600">
                We use your information to respond to enquiries, process orders, provide customer support, communicate product and business information, improve our services, prevent fraud, and comply with applicable legal requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                3. Sharing of Information
              </h3>
              <p className="text-slate-600">
                We do not sell your personal information. Information may be shared with authorised service providers, business partners where necessary, or government and regulatory authorities when required by law or for legitimate business purposes, subject to applicable legal requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                4. Cookies
              </h3>
              <p className="text-slate-600">
                Our website may use cookies and similar technologies to improve functionality, understand visitor preferences, and analyse website traffic. You may manage cookies through your browser settings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                5. Data Security and Retention
              </h3>
              <p className="text-slate-600">
                We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, or disclosure. Information is retained only as necessary for business, contractual, and legal purposes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                6. Your Rights
              </h3>
              <p className="text-slate-600">
                Subject to applicable Indian law, you may request access to or correction or erasure of your personal information, withdraw consent where applicable, and raise concerns about its handling. You may contact us using the details below to exercise your rights.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                7. Policy Updates
              </h3>
              <p className="text-slate-600">
                We may revise this Privacy Policy from time to time. Updated versions will be published on this page. Any consent required by applicable law will be obtained as necessary.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-subtle space-y-4">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                8. Contact Us
              </h3>
              <p className="text-slate-600">
                For questions, requests, or complaints concerning this Privacy Policy, please contact:
              </p>
              <div className="text-xs sm:text-sm text-slate-700 space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900">Regd. Office.</p>
                <p>Exodus Exports Pvt. Ltd.No. 56 A, Thanduma Nagar</p>
                <p>100 Feet Road</p>
                <p>St. Thomas Mount</p>
                <p>Chennai – 600 016</p>
                <p>Tamil Nadu,</p>
                <p>India</p>
                <p className="pt-2">
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  <a href="mailto:dir.exodus@gmail.com" className="text-[#A9153B] hover:underline font-medium">
                    dir.exodus@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Website:</span>{" "}
                  <a href="https://www.exodusexports.com" target="_blank" rel="noopener noreferrer" className="text-[#A9153B] hover:underline font-medium">
                    www.exodusexports.com
                  </a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. RETURN POLICY */}
      <section id="return-policy" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <ScrollReveal className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A9153B]/10 text-[#A9153B] text-xs font-bold uppercase tracking-wider font-display">
              <RotateCcw className="h-4 w-4 text-[#A9153B]" />
              <span>Policy 02</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              RETURN &amp; EXCHANGE POLICY
            </h2>
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              <p>
                At Exodus Exports Pvt. Ltd., we take utmost care in processing and supplying our products to ensure customer satisfaction. If you have any concerns regarding a product received, please contact our customer service team for assistance.
              </p>
              <p>
                Due to the specialised nature of our human hair products, returns are accepted only subject to the conditions below. Exchanges or replacement products may be offered after inspection and approval. Refunds are not offered under our standard policy.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                Terms and Conditions
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Return Notification:</span> Any return or exchange request must be notified to Exodus Exports Pvt. Ltd. by email within 10 days of delivery, stating the order details and reason for the request.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Product Condition:</span> Products must be unused, unworn, unwashed, uncut, and returned in their original packaging with all labels and tags intact.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Ineligible Returns:</span> Products damaged through customer mishandling, altered, used, or returned without original labels or packaging may not be accepted, subject to applicable law.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Inspection and Approval:</span> All returned products are subject to inspection. An exchange or replacement will be arranged only after the return has been verified and approved.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Replacement:</span> Approved claims may be resolved through a replacement product or exchange, subject to availability and mutual agreement.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Return Shipping:</span> Return shipping arrangements and associated costs will be communicated to the customer when the return request is approved.
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                Contact Us
              </h3>
              <p className="text-slate-600">
                For return or exchange requests, please contact:
              </p>
              <div className="text-xs sm:text-sm text-slate-700 space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900">Regd. Office.</p>
                <p>Exodus Exports Pvt. Ltd.No. 56 A, Thanduma Nagar</p>
                <p>100 Feet Road</p>
                <p>St. Thomas Mount</p>
                <p>Chennai – 600 016</p>
                <p>Tamil Nadu,</p>
                <p>India</p>
                <p className="pt-2">
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  <a href="mailto:dir.exodus@gmail.com" className="text-[#A9153B] hover:underline font-medium">
                    dir.exodus@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Website:</span>{" "}
                  <a href="https://www.exodusexports.com" target="_blank" rel="noopener noreferrer" className="text-[#A9153B] hover:underline font-medium">
                    www.exodusexports.com
                  </a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. TERMS & CONDITIONS */}
      <section id="terms-and-conditions" className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <ScrollReveal className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#A9153B]/10 text-[#A9153B] text-xs font-bold uppercase tracking-wider font-display">
              <FileText className="h-4 w-4 text-[#A9153B]" />
              <span>Policy 03</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              GENERAL TERMS AND CONDITIONS
            </h2>
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
              <p>
                These Terms and Conditions govern the use of the website operated by Exodus Exports Pvt. Ltd., Chennai, Tamil Nadu, India (“Company”, “we”, “us” or “our”).
              </p>
              <p>
                By accessing our website, submitting an enquiry, or placing an order, you agree to these Terms and Conditions and any applicable policies published on our website. If you do not agree, please discontinue use of the website.
              </p>
              <p>
                We reserve the right to amend these Terms and Conditions from time to time by publishing updates on this page. Any changes will take effect as applicable under law.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                1. Website Information
              </h3>
              <p className="text-slate-600">
                The information, product descriptions, images, and other content on this website are provided for general informational purposes. While we endeavour to ensure accuracy, errors or omissions may occur, and product appearance or specifications may vary. Customers are encouraged to confirm relevant product details before placing an order.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                2. Products, Prices and Availability
              </h3>
              <p className="text-slate-600">
                Product prices, specifications, and availability are subject to change without prior notice, except where otherwise required by law or agreed in writing. We reserve the right to modify or discontinue products or services, subject to applicable contractual and legal obligations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                3. Orders and Information Accuracy
              </h3>
              <p className="text-slate-600">
                Customers are responsible for providing accurate contact, billing, shipping, and order information. If any product description, price, or other information contains an error, we reserve the right to correct it and notify affected customers. Any order cancellation or modification will be handled in accordance with applicable law and the terms agreed with the customer.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                4. Website Use
              </h3>
              <p className="text-slate-600">
                Users must not misuse this website, interfere with its operation, attempt unauthorised access, or use its content for unlawful purposes. All website content, including text, images, logos, and product material, may not be reproduced or commercially used without prior written permission, except as permitted by law.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                5. Limitation of Liability
              </h3>
              <p className="text-slate-600">
                We take reasonable care to maintain the accuracy and availability of our website. However, to the extent permitted by applicable law, we shall not be liable for interruptions, technical errors, or losses arising from reliance on website information. Nothing in these Terms excludes liability that cannot legally be excluded.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                6. Changes to Services
              </h3>
              <p className="text-slate-600">
                We may update, suspend, or discontinue website features or services where necessary, subject to applicable law and existing contractual commitments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                7. Governing Law and Jurisdiction
              </h3>
              <p className="text-slate-600">
                These Terms and Conditions shall be governed by the laws of India. Subject to applicable law, the competent courts in Chennai, Tamil Nadu, shall have jurisdiction over disputes arising from the use of this website.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-subtle space-y-4">
              <h3 className="font-bold text-slate-900 font-display text-base sm:text-lg text-[#A9153B]">
                8. Contact Us
              </h3>
              <p className="text-slate-600">
                For questions regarding these Terms and Conditions, please contact:
              </p>
              <div className="text-xs sm:text-sm text-slate-700 space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900">Regd. Office.</p>
                <p>Exodus Exports Pvt. Ltd.No. 56 A, Thanduma Nagar</p>
                <p>100 Feet Road</p>
                <p>St. Thomas Mount</p>
                <p>Chennai – 600 016</p>
                <p>Tamil Nadu,</p>
                <p>India</p>
                <p className="pt-2">
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  <a href="mailto:dir.exodus@gmail.com" className="text-[#A9153B] hover:underline font-medium">
                    dir.exodus@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Website:</span>{" "}
                  <a href="https://www.exodusexports.com" target="_blank" rel="noopener noreferrer" className="text-[#A9153B] hover:underline font-medium">
                    www.exodusexports.com
                  </a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
