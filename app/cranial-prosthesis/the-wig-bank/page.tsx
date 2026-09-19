import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  Building2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Award,
  Users,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ArrowLeft
} from "lucide-react";

export default function TheWigBankPage() {
  return (
    <div className="space-y-0 pt-28">
      
      {/* 1. HERO HEADER */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          
          <div className="flex justify-center">
            <Link 
              href="/cranial-prosthesis" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#A9153B] transition-colors bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Cranial Prosthesis</span>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B]"></span> THE WIG BANK PROJECT
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            THE WIG BANK PROJECT
          </h1>

          <p className="text-sm sm:text-base font-bold text-slate-700 font-display max-w-2xl mx-auto">
            A Socio-Economic Model by Exodus Exports (P) Ltd & Cancer Institute (WIA), Adyar
          </p>
        </div>
      </section>

      {/* 2. WIG BANK - THE EVOLUTION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-slate-200 bg-slate-100">
                <Image
                  src="/images/products/hair_wigs.jpg"
                  alt="The Wig Bank"
                  width={800}
                  height={900}
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-6 text-white">
                  <div className="font-bold text-lg font-display">THE WIG BANK</div>
                  <div className="text-white/90 text-xs font-medium mt-1">Exodus Exports & Cancer Institute (WIA)</div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <p className="text-xs sm:text-sm font-bold text-[#A9153B] font-display uppercase tracking-wider">
                  “The fingers that once rolled beedis now weave confidence and hope for cancer patients.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
                  Evolution
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  WIG BANK - THE EVOLUTION
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  While we celebrate our association with the Cancer Institute (WIA), Adyar, Chennai, crossing several significant milestones since 2021 in developing a socio-economic concept of “BUSINESS impacting SOCIETY” a sustainable model unique to the industry, where the impact is directly on transformation of the women of rural India who work in the beedi rolling industry, and now it’s all set to launch and execute for the first time the concept of “The Wig Bank”.
                </p>
                <p>
                  In pursuance of our commitment, we have developed a concept of “The Wig Bank” which is exclusive to our industry. This idea was conjointly conceived which is indeed a unique vision that could benefit and provide access to all hair loss patients who are looking for a simple wig when they lose their hair post chemotherapy treatment. This restores their dignity and gives a huge ray of hope and acceptance in society.
                </p>
                <p>
                  While the cancer and alopecia patients are constantly looking for a solution and approached us for wigs, they also informed that they could not get reliable supplies in the market. To solve their quest, we created a brand “CIX WIGS” which should evolve over the years as a concept and offer service under the banner of our joint project, “rehabilitation of rural women working in the beedi rolling (tobacco) industry”.
                </p>
                <p>
                  From our interactions with several cancer patients asking for wigs in different hospitals across India these cancer patients are either not able to connect to the right vendor or manufacturer of cancer wigs; the other scenario being that these wigs are commercially so expensive or the quality so inferior that provided an opportunity to create the wig bank and serve the hair loss patients pan India.
                </p>
                <p>
                  Predominantly these wigs are manufactured in China, Vietnam, Thailand and also in India but these are 100% commercial ventures unlike our socio – economic project.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE WIG PROJECT - CANCER INSTITUTE (WIA) ADYAR */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Collaboration
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              THE WIG PROJECT - CANCER INSTITUTE (WIA) ADYAR
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              In the beginning of 2021, under the chairmanship of Dr. Shanta, the Cancer Institute WIA, Adyar – Chennai (www.cancerinstitutewia.in), and Exodus Exports (P) Ltd. jointly initiated a project to provide job opportunities to rural women who are currently involved in Beedi rolling Tobacco industry. Beedi is a cheaper substitute to cigarettes which is predominantly used in Rural India.
            </p>
            <p>
              The Government wanted to eradicate this unorganized industry completely since the people working are indirectly affected in many ways which includes cancer causing issues. Till date no agency could provide alternative source of income for their livelihood.
            </p>
            <p>
              Although several short-term training programs have been conducted, it could not generate permanent employment opportunities.
            </p>
            <p>
              At present as per the statistics available, there are nearly 7 million women involved in this trade in India.
            </p>
            <p>
              Wig making Industry is labour-intensive and largely involves women at work, as they are more suitable for it. We have accepted this offer and started a wig making unit in a remote rural part of Tamil Nadu state.
            </p>
            <p>
              The women beedi workers in south India, like any other region, were marginalized, vulnerable to low wage, susceptible to hazardous work environment, prone to systemic exploitation, they lack social security and have limited access to various welfare schemes.
            </p>
            <p>
              However, their aspiration to shift to safer and more rewarding alternative livelihoods was met with many obstacles such as: low education level, inadequate skill adaptability, credit availability and lack of proper vocational training.
            </p>
            <p>
              Cancer Institute (WIA), Adyar have done an extensive study on the conditions of these women along with several Governmental agencies and this prompted them to look for alternate employment opportunity for these women.
            </p>
            <p>
              Jointly we provide job opportunity for their livelihood where there is stable income every month and their dignity are restored. This being a full-time job, they will make wigs for hair loss patient as an employee of Exodus Exports (P) Limited.
            </p>
            <p>
              This is a project on alternative livelihood for tobacco workers, in line with the Article 17 of the FCTC (WHO).
            </p>
          </div>

          {/* 3-Pronged Noble Cause Box */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6 max-w-4xl mx-auto">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-center">
              We are glad that at both ends we are able to serve for a 3 - pronged noble cause:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="h-8 w-8 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                  1
                </div>
                <p className="text-xs text-slate-700">
                  firstly, being able to evacuate them from those health danger zones,
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="h-8 w-8 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                  2
                </div>
                <p className="text-xs text-slate-700">
                  secondly providing jobs for these marginalized beedi rolling women,
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="h-8 w-8 rounded-full bg-[#A9153B] text-white font-bold flex items-center justify-center mx-auto text-xs">
                  3
                </div>
                <p className="text-xs text-slate-700">
                  finally, the finished product is offered to cancer patients who otherwise lose their hair after chemotherapy. It gives them a sense of renewed confidence and hope.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#A9153B]/5 border border-[#A9153B]/20 text-center">
              <p className="font-bold text-[#A9153B] text-xs sm:text-sm font-display">
                The fingers that once made beedi are now producing wigs to cancer patients
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE OBSTACLES: */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Overcoming Challenges
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              THE OBSTACLES:
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              In the beginning of this project in 2021 it was an immense challenge when Dr. Shanta one of the founders of Cancer Institute (WIA), Adyar, Chennai asked us to take it up in Tirunelveli District of Tamil Nadu which is the hub of beedi industry.
            </p>
            <p>
              To train women who had no prior experience working in a factory or office was a defying task.
            </p>
            <p>
              Most of these women have had very less formal education and have never even visited the nearest town in their whole life.
            </p>
            <p>
              Their exposure to the outside world was extremely limited. Initially even walking a kilometer to reach the factory premises made them think twice.
            </p>
            <p>
              Besides they had the taboo of handling human hair. Their family pressure was constantly preventing from taking any other job outside their house.
            </p>
            <p>
              We slowly took them out of these barriers by educating them and constantly making them understand.
            </p>
            <p>
              The next herculean challenge was to discipline them in various areas right from making them to report on time, sitting in a place quietly to learn their job, limiting their gossiping with their colleagues, making them concentrate on their work, restricting their frequent malingering from work, giving excuses for everything, making them work with passion and creativity, helping them understand their responsibilities, the purpose of this project and so forth.
            </p>
            <p>
              Another major drawback is that these women are unwilling to travel outside their village for further training which is really hampering their productivity.
            </p>
            <p>
              In a nutshell it took more than a year and half to reach a convincing stage of progress on the project.
            </p>
            <p>
              Currently our team of women folks are quite well settled in our company and they are totally content to learn their progress and the benefits we provide them, moreover we offer the best work culture with all facilities comparable with any other professionally managed organization.
            </p>
            <p>
              Today they have seen a massive transformation in the lifestyle and in their standard of living.
            </p>
            <p>
              Besides their dignity and security has improved.
            </p>
            <p className="font-semibold text-slate-900">
              We are extremely happy to see this happening and we are constantly supporting them in this endeavour.
            </p>
          </div>

        </div>
      </section>

      {/* 5. THE PRODUCTION PROCESS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Production & Ethics
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              THE PRODUCTION PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">We have given them the free hand to work</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">The approach is very humane</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">We give them time to express their problems and we regularly offer advice and guidance</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">We provide holidays as per factory act, the work timings are strictly 8 hours</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">Saturdays are half day work</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">We sanction leave as per their needs</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">We maintain a small refectory for making coffee and snacks</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">We conduct entertainment programs during festivals and we close with lunch.</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">We are also careful to employ girls above the age of 18 years only.</span>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-subtle">
              <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-700">All mandatory benefits are attached along with monthly salary based on the experience and we also provide incentive attached to productivity.</span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl mx-auto pt-2">
            <p className="font-semibold text-slate-900">
              We are happy to see that today some of the women are earning more than their spouses.
            </p>
            <p>
              We receive overwhelming support from the District Collector’s Office, SKILL INDIA, NABARD, MSME who offer their unconditional assistance to help this project expand. And with the guidance of Cancer Institute (WIA) Adyar, we have a great task ahead.
            </p>
          </div>

        </div>
      </section>

      {/* 6. THE OFFER */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              The Offer
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              THE OFFER
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* For Cancer/Alopecia Patients */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                What we can offer to the Cancer/Alopecia Patients:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Regular cancer wigs at cost price Rs 5900 (INR) inclusive of 18% GST</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Receive donated hair to transform them into cancer wigs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Customized wigs to perfectly suite your profile where we match the texture, colour and shape of your head perfectly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Patches & volumizer to increase the thickness of hair instantly.</span>
                </li>
              </ul>
            </div>

            {/* For Corporate/Hospitals/NGO's/Colleges */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display text-[#A9153B] border-b border-slate-200 pb-3">
                What we offer to the Corporate/Hospitals/NGO’s/Colleges:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>We can help Institutions to organise hair donation camps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>The opportunity to buy and donate cancer wigs to hair loss patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Receive donated hair from your organisation to transform them into wigs for cancer patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Opportunity to business by taking up distributorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>A prospect to hospitals and corporates to co-participate in other areas of societal services</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl mx-auto pt-4">
            <p>
              In order to provide more job opportunities to beedi rolling women and to bring them out of tobacco industry we need to run awareness campaigns about this concept and create a market for this product in India & abroad.
            </p>
            <p>
              Most of the cancer wigs are produced in Asia. In China there are more than 5000 to 10000 women working in each wig factory under one roof. That is the kind of demand even now, provided these women are able to deliver competitive quality products.
            </p>
            <p>
              This will pave way for targeting several untapped villages across our geography and expand the intake of more women.
            </p>
            <p className="font-semibold text-slate-900">
              We are 100% women employed organization employing ex-beedi rollers only
            </p>
            <p className="font-bold text-[#A9153B] text-sm font-display">
              Our dream is to offer employment to a minimum 1000 beedi rolling women in the next 5 years.
            </p>
          </div>

        </div>
      </section>

      {/* 7. HAIR DONATION – CANCER INSTITUTE (WIA) ADYAR */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Hair Donation
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              HAIR DONATION – CANCER INSTITUTE (WIA) ADYAR
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#A9153B] font-display uppercase tracking-wider">
              DO YOU WISH TO DONATE YOUR HAIR TO CANCER PATIENTS?
            </p>
            <p className="text-xs text-slate-600">
              Kindly read the instruction below carefully:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* IDEAL HAIR FOR MAKING WIGS */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display border-b border-slate-100 pb-3 text-[#A9153B]">
                IDEAL HAIR FOR MAKING WIGS
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Donated hair must be in healthy & in good condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Only clean and dry hair is suitable for use</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Size 14&quot; (35cm) or longer hair is preferred although above 10” are accepted</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Preferably natural hair is ideal that is hair without dye, henna or being chemically treated</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Natural Grey hair is also acceptable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Fallen hair is unusable for making high quality wigs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>A minimum of 6 to 8 women’s hair is required to make one basic wig.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>We can accept hair from within and outside India</span>
                </li>
              </ul>
            </div>

            {/* HOW TO DONATE YOUR HAIR? */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display border-b border-slate-100 pb-3 text-[#A9153B]">
                HOW TO DONATE YOUR HAIR?
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Haircut could be done at any salon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Hair has to be washed, dried and tied into a plait/ponytail</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Secure at both ends with a hair band, and one halfway down</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Prefer not to use conditioner or styling products</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Insert the ponytail into a zip lock bag or in a thick paper envelope.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Remember to send the name, email address & mobile number of the hair donor.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Courier Address */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-4">
            <h3 className="text-sm font-bold text-slate-900 font-display">
              Please courier the hair to:
            </h3>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-slate-900">HAIR DONATION FOR CIX WIGS TO BE ADDRESSED TO:</p>
              <p className="font-semibold text-slate-900">Dr. V. Surendran Veeriah</p>
              <p>Professor & Head - Department of Psycho-Oncology</p>
              <p className="font-semibold text-slate-900">CANCER INSTITUTE (WIA)</p>
              <p>No 38, Sardar Patel Road, Adyar</p>
              <p>Chennai – 600036</p>
              <p>Tel. 044-2235 1615</p>
              <p>E-mail: v.surendran@cancerinstitutewia.org</p>
              <p>www.cancerinstitutewia.in</p>
            </div>
          </div>

          {/* N.B. */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-3">
            <h4 className="text-xs font-bold text-[#A9153B] uppercase tracking-wider">N.B.</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>• Cancer Institute (WIA) Adyar will issue a recognition certificate to all hair donors</li>
              <li>• We cannot provide photographs of the PATIENT receiving a wig</li>
              <li>• We cannot provide pictures of a WIG made from your hair</li>
              <li>• If you’re below 18 years, you must obtain permission from your parent/guardian before hair donation</li>
              <li>• All decision as to whether or not your hair will be used is made by our team</li>
              <li>• Beware of bogus hair donation schemes and agencies who could misuse your valuable hair.</li>
              <li>• We maintain stock of cancer wigs. Patients and cancer hospitals can approach us for our services</li>
            </ul>
            <p className="font-bold text-[#A9153B] text-xs pt-1 uppercase tracking-wider font-display">
              ENCOURAGE THIS PROJECT TO BUY CIX WIGS
            </p>
          </div>

        </div>
      </section>

      {/* 8. INTERNATIONAL RECOGNITION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 max-w-5xl">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Recognition
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              INTERNATIONAL RECOGNITION
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              OUR PROJECT RECOGNITION IN INTERNATIONAL ARENA:
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              E-cancer interview links in World Cancer Congress (WCC) held in Geneva in Sep 2024.
            </p>
            <div className="space-y-2 text-xs">
              <p>
                <a 
                  href="https://ecancer.org/en/video/12107-alternative-livelihood-training-programme-for-rural-women-who-are-employed-in-the-tobacco-industry-in-india" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#A9153B] hover:underline inline-flex items-center gap-1 font-medium break-all"
                >
                  <span>https://ecancer.org/en/video/12107-alternative-livelihood-training-programme-for-rural-women-who-are-employed-in-the-tobacco-industry-in-india</span>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </p>
              <p>
                <a 
                  href="https://vimeo.com/ecancer/download/1018634498/56d70a2b61" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#A9153B] hover:underline inline-flex items-center gap-1 font-medium break-all"
                >
                  <span>https://vimeo.com/ecancer/download/1018634498/56d70a2b61</span>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200 space-y-1">
              <p className="text-xs font-semibold text-slate-900">Union for International Cancer Control - Geneva</p>
              <p className="text-xs text-slate-700">World Cancer Congress Day Link:</p>
              <p>
                <a 
                  href="https://www.worldcancerday.org/activities/prevention-tobacco-cancer-providing-alternative" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#A9153B] hover:underline inline-flex items-center gap-1 font-medium text-xs break-all"
                >
                  <span>https://www.worldcancerday.org/activities/prevention-tobacco-cancer-providing-alternative</span>
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 9. THE WIG BANK PROJECT: OVERVIEW & EXTENDED PROGRAM DETAILS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 max-w-5xl">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9153B]/5 border border-[#A9153B]/10 text-[#A9153B] text-[11px] font-bold uppercase tracking-wider">
              Project Overview
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Project Overview: Business Impacting Society
            </h2>
          </div>

          {/* Project Overview Card */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Since 2021, Exodus Exports (P) Ltd, in collaboration with the Cancer Institute (WIA), Adyar, Chennai, has been working on a sustainable socio-economic model that addresses two critical issues:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Rehabilitation of women beedi (tobacco) workers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Providing affordable, dignified wigs to cancer and alopecia patients</span>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
              This initiative embodies the unique concept of “Business impacting Society”, where the economic empowerment of rural women directly contributes to restoring dignity for cancer patients experiencing hair loss due to chemotherapy.
            </p>
          </div>

          {/* The Wig Bank: Restoring Confidence */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              The Wig Bank: Restoring Confidence, One Wig at a Time
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Cancer and alopecia patients across India have long faced difficulty in accessing reliable, affordable, and good-quality wigs. Most wigs available are either prohibitively expensive or of substandard quality, often imported from China, Vietnam or Indonesia.
            </p>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <p className="text-xs sm:text-sm font-bold text-[#A9153B]">In response, we launched:</p>
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base font-display">CIX WIGS</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                  <span>A non-commercial, humanitarian brand of wigs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                  <span>Produced by women from rural Tamil Nadu, formerly engaged in the hazardous beedi rolling industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                  <span>A project under the banner of “Alternative Livelihood for Beedi Workers”, aligned with Article 17 of WHO-FCTC</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Collaboration with Cancer Institute (WIA) */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              Collaboration with Cancer Institute (WIA)
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              In 2021, under the leadership of the late Dr. V. Shanta, the Cancer Institute (WIA) initiated a mission to create employment opportunities for women in the Tirunelveli district, a beedi industry hub.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key facts:</p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Over 7 million women in India are still engaged in beedi rolling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>No prior alternative employment schemes have offered sustainable results</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Wig making is a labour-intensive industry, highly suitable for women workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>With extensive training and support, these women now craft high-quality wigs for cancer patients</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Overcoming Challenges */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              Overcoming Challenges
            </h3>
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-slate-700">
                Transforming the lives of rural beedi workers was not without its hurdles:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Lack of formal education and exposure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Cultural taboos around human hair handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Initial resistance to factory work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                  <span>Discipline and work ethic development</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <p className="text-xs sm:text-sm font-semibold text-slate-900">
                After more than a year of focused training, mentoring, and cultural sensitization, the women now:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                  <span>Earn a stable monthly income</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                  <span>Work in a professional, safe, and supportive environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                  <span>Experience a visible transformation in lifestyle and self-worth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A9153B] shrink-0 mt-1.5"></span>
                  <span>In some cases, earn more than their spouses</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Production & Workplace Ethics */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              Production & Workplace Ethics
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>8-hour workday, half-day on Saturdays</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Leave provisions as per Factory Act</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>No minors employed; all workers are above 18 years</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Incentive-based pay + performance bonus</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Access to a refectory, festival events, and mental wellness support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>100% female workforce — ex-beedi rollers only</span>
              </li>
            </ul>
          </div>

          {/* The Offer: What We Provide */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              The Offer: What We Provide
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-[#A9153B] font-display">
                  To Cancer / Alopecia Patients:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Regular wigs at cost price: ₹5,000 (excl. taxes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Customized wigs matching head shape, texture, and colour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Hair patches & volumizers for partial hair loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Wigs from donated hair, made with dignity and care</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-[#A9153B] font-display">
                  To Corporates, Hospitals, NGOs, Colleges:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Host hair donation drives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Sponsor wigs for cancer patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Send collected hair to be made into wigs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Join as a distributor or corporate partner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Co-organize social impact programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision for the Future */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              Vision for the Future
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Expand to employ 1,000 women from beedi industry within 5 years</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Launch awareness campaigns in India and abroad</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Continue collaborating with Skill India, NABARD, MSME, and district administration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Tap into the global wig demand while maintaining our ethical, women-centric production model</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-[#A9153B]/5 border border-[#A9153B]/20 text-center mt-4">
              <p className="font-bold text-[#A9153B] text-xs sm:text-sm font-display">
                “The fingers that once rolled beedis now weave confidence and hope for cancer patients.”
              </p>
            </div>
          </div>

          {/* Hair Donation: Guidelines (Numbered Steps 1 to 5) */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
              Hair Donation: Guidelines
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-[#A9153B] font-display">
                  Ideal Hair:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Minimum length: 10&quot; (14” preferred)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Natural, undyed, unbleached hair is best</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>Clean, dry, tied in a plait/ponytail (secured at 3 points)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                    <span>No fallen hair accepted</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-[#A9153B] font-display">
                  How to Donate:
                </h4>
                <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#A9153B] shrink-0">1.</span>
                    <span>Wash and dry your hair (avoid conditioner)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#A9153B] shrink-0">2.</span>
                    <span>Cut and tie securely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#A9153B] shrink-0">3.</span>
                    <span>Place in zip-lock bag or envelope</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#A9153B] shrink-0">4.</span>
                    <span>Include name, email, and phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#A9153B] shrink-0">5.</span>
                    <div>
                      <p className="font-semibold text-slate-900">Send to:</p>
                      <div className="mt-1 space-y-0.5 text-slate-600">
                        <p className="font-semibold text-slate-900">Dr. V. Surendran Veeriah</p>
                        <p>Professor & Head, Department of Psycho-Oncology</p>
                        <p className="font-semibold text-slate-900">Cancer Institute (WIA)</p>
                        <p>No. 38, Sardar Patel Road, Adyar</p>
                        <p>Chennai - 600036</p>
                        <p>Email: v.surendran@cancerinstitutewia.org</p>
                        <p>www.cancerinstitutewia.in</p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs text-slate-600">
              <p>• Donors receive a recognition certificate from Cancer Institute (WIA)</p>
              <p>• No individual wig tracking or patient photos due to privacy and operational limitations</p>
            </div>
          </div>

          {/* Join Us – Be a Part of the Change */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display text-[#A9153B]">
              Join Us – Be a Part of the Change
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Buy a wig, donate hair, or support us through CSR partnerships</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#A9153B] shrink-0 mt-0.5" />
                <span>Help us scale this model to empower more women and restore hope in the lives of cancer patients across India and beyond</span>
              </li>
            </ul>
            <p className="text-xs sm:text-sm font-bold text-slate-900 pt-2 font-display">
              Together, let’s transform lives — from tobacco to transformation.
            </p>
          </div>

          {/* Client Purchase Appreciation Message */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display text-[#A9153B]">
              A choice rightly made can make all the difference to someone you care about.
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900">
                Your choice has the power to transform a life.
              </p>
              <p>
                We appreciate your thoughtful decision to purchase our handcrafted wigs made from carefully selected, 100% authentic Indian human hair. Each wig is meticulously created using individually chosen strands to blend seamlessly with your style—offering an elegant look and renewed confidence.
              </p>
              <p className="font-semibold text-slate-900">
                Here are just a few reasons to feel proud of your purchase:
              </p>
              <p>
                By choosing this product, you are supporting an alternative livelihood for rural women who were formerly employed in tobacco rolling (beedi) industries. These women are often vulnerable to low wages, hazardous working conditions, systemic exploitation, lack of social security, and serious health risks. Your support helps them move toward safer, dignified, and sustainable employment.
              </p>
              <p>
                This initiative is carried out in collaboration with The Cancer Institute (WIA), Adyar, Chennai, India (www.cancerinstitutewia.in), as part of an alternative livelihood mission for tobacco workers, aligned with Article 17 of the WHO Framework Convention on Tobacco Control (FCTC).
              </p>
              <p className="font-semibold text-slate-900">
                Thank you for being part of this meaningful cause and for making a difference with your choice.
              </p>
            </div>
          </div>

          {/* THE CONTACTS */}
          <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-elevated space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold font-display text-white">
                THE CONTACTS
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300">
              <div className="space-y-2">
                <p className="font-bold text-white uppercase tracking-wider text-xs">Registered Office:</p>
                <p className="font-semibold text-white">EXODUS EXPORTS (P) LIMITED</p>
                <p>Chennai – 600016 TN</p>
                <div className="pt-2">
                  <p className="font-bold text-white uppercase tracking-wider text-xs">Factories:</p>
                  <p>Tirunelveli Dt, TN</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-white">For sales enquiries contact:</p>
                  <p className="text-slate-300">Mob: +91-7550001106 (WhatsApp)</p>
                </div>
                <div>
                  <p className="font-semibold text-white">For corporate enquiries contact:</p>
                  <p className="text-slate-300">Mob: +91-7550001107 (WhatsApp)</p>
                </div>
                <div>
                  <p className="text-slate-300">Email: exodus.exports@gmail.com</p>
                  <p className="text-slate-300">www.exodusexports.com</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <p>
                To know more about THE WIG BANK please follow the link:{" "}
                <Link href="/cranial-prosthesis/the-wig-bank" className="text-[#A9153B] hover:underline font-semibold text-white">
                  www.thewigbank.com
                </Link>
              </p>
              <p>
                INDIVIDUAL CLIENTS interested in hair extensions, wigs & hair volumizer please visit{" "}
                <Link href="/products" className="text-white hover:underline font-semibold">
                  www.exodusexports.com
                </Link>
              </p>
              <p className="pt-2 text-[11px] text-slate-500">
                Copyright: Exodus Exports (P) Ltd
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />

    </div>
  );
}
