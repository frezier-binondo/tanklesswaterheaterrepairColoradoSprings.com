import React from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  FileText,
  ExternalLink,
  ArrowRight,
  Flame,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";

export const metadata = {
  title: "Contact Us | Tankless Water Heater Repair in Colorado Springs (Phone-Only)",
  description:
    "Direct phone contact for tankless water heater repair in Colorado Springs. No slow web forms. 24/7 priority technician dispatch. Call (456) 789-0123.",
};

export default function ContactPage() {
  const breadcrumbs = [{ name: "Contact Us", url: "/contact" }];

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <Phone className="w-3.5 h-3.5" />
            <span>100% Phone-Only Direct Technical Line</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Contact Tankless Water Heater Repair in Colorado Springs
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
            When you lose hot water, you need immediate human assistance—not a slow web form that sits in an unmonitored inbox. Call our priority phone line to speak directly with an on-call technical coordinator.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Call Hub & Checklist */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Giant Click-to-Call Box */}
              <div className="drainhaus-card p-8 bg-gradient-to-br from-slate-50 to-white border-2 border-navy-800 shadow-xl">
                <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4" />
                  <span>24 Hours a Day • 7 Days a Week • 365 Days a Year</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950 mb-3">
                  Direct Phone Hotline:
                </h2>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-navy-950 hover:text-brand-orange transition-colors block mb-4"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Click the button below on your mobile device to immediately connect with our Colorado Springs technician matching service.
                </p>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-4 px-6 rounded-xl font-heading font-extrabold text-lg flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/30 transform hover:-translate-y-0.5 transition-all text-center"
                >
                  <Phone className="w-6 h-6 fill-white" />
                  <span>Call {SITE_CONFIG.phoneDisplay} Now</span>
                </a>
              </div>

              {/* What Callers Should Have Ready */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-navy-950 font-heading font-bold text-lg mb-4">
                  <FileText className="w-5 h-5 text-brand-orange" />
                  <span>What to Have Ready When You Call</span>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  To ensure our dispatch coordinator routes the technician with the correct replacement parts and tools on the first trip, please have the following information handy:
                </p>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-950 block">1. Unit Brand & Exact Model Number</strong>
                      <span className="text-xs text-slate-600">Printed on the front metal rating plate (e.g., Navien NPE-240A, Rinnai RU199i, Noritz EZ98).</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-950 block">2. Flashing Error Code (If Displayed)</strong>
                      <span className="text-xs text-slate-600">Note any numbers or letters flashing on the digital screen (e.g., E003, E012, Code 11, Code 12).</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-950 block">3. Fuel Configuration</strong>
                      <span className="text-xs text-slate-600">Natural gas (Colorado Springs Utilities), bottled LP propane, or 240V electric.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-950 block">4. Physical Address & Community</strong>
                      <span className="text-xs text-slate-600">Whether you are in central Colorado Springs, Monument, Fountain, Manitou Springs, Woodland Park, or Falcon.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Safety Protocol Callout */}
              <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-xl text-xs sm:text-sm text-red-900 space-y-2">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-red-700">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Important Safety Warning: Gas Odors & Flooding</span>
                </div>
                <p>
                  If you smell rotten eggs or natural gas near your water heater cabinet, do not use electrical switches or phones inside the house. Evacuate immediately and call Colorado Springs Utilities at (719) 448-4800 or dial 911. For active pressurized water leaks, turn the cold water isolation handle under the unit 90 degrees to shut off flow, then call our dispatch line.
                </p>
              </div>

            </div>

            {/* Right Column: Embedded Map & Coverage Hub */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Visible Google Map Embed */}
              <div className="drainhaus-card overflow-hidden bg-white border border-slate-200 shadow-md">
                <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-navy-950 text-base">
                      Service Area Location
                    </h3>
                    <p className="text-xs text-slate-500">
                      Colorado Springs & Surrounding 20-Mile Radius
                    </p>
                  </div>
                  <a
                    href={SITE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="relative w-full h-80">
                  <iframe
                    src={SITE_CONFIG.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Colorado Springs Google Map"
                  ></iframe>
                </div>

                <div className="p-4 bg-slate-50 text-xs text-slate-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Serving El Paso County & Teller County, Colorado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Hours: Open 24 Hours, 7 Days a Week</span>
                  </div>
                </div>
              </div>

              {/* Internal Links Block (At least 5) */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-heading font-bold text-navy-950 uppercase tracking-wider mb-3">
                  Quick Links to Services:
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/tankless-water-heater-repair" className="in-content-link flex items-center justify-between">
                      <span>Tankless Water Heater Repair Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/tankless-water-heater-repair/emergency" className="in-content-link flex items-center justify-between text-red-600">
                      <span>Emergency 24/7 Water Heater Dispatch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/tankless-water-heater-installation" className="in-content-link flex items-center justify-between">
                      <span>Tankless Installation & Replacement</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/tankless-water-heater-maintenance" className="in-content-link flex items-center justify-between">
                      <span>Annual Descaling & Heat Exchanger Flush</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations" className="in-content-link flex items-center justify-between">
                      <span>Regional Service Areas Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* External Link */}
              <div className="text-xs text-slate-500 text-center">
                <span>Local Utility Provider: </span>
                <a
                  href="https://www.csu.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="in-content-link inline-flex items-center gap-1"
                >
                  <span>Colorado Springs Utilities (CSU) Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
