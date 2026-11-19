import React from "react";
import Link from "next/link";
import { Phone, MapPin, Wrench, Shield, Clock, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Callout Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 rounded-2xl p-6 sm:p-10 border border-navy-700 shadow-2xl mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 Live Phone Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                Tankless Water Heater Failure in Colorado Springs?
              </h3>
              <p className="text-slate-300 max-w-2xl mt-2 text-sm sm:text-base">
                No hot water, flashing error codes, or leaking cabinet? Speak directly with a local tankless specialist right now. We do not use slow online forms—our phone line connects you directly to on-call technicians across El Paso and Teller County.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-heading font-extrabold text-lg flex items-center gap-3 shadow-lg shadow-brand-orange/30 transition-transform transform hover:scale-105"
              >
                <Phone className="w-6 h-6 fill-white" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Visible Google Map Embed Section on Footer */}
        <div className="mb-14 bg-navy-900 rounded-2xl p-6 border border-navy-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Regional Service Area & Coverage Map</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white mt-1">
                Colorado Springs, CO & Pikes Peak Region Service Footprint
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Serving Colorado Springs, Monument, Fountain, Manitou Springs, Woodland Park, and Falcon.
              </p>
            </div>
            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:text-white bg-navy-800 hover:bg-brand-orange px-4 py-2 rounded-lg border border-navy-700 transition-colors self-start md:self-auto"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive visible iframe map */}
          <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-navy-700 shadow-inner">
            <iframe
              src={SITE_CONFIG.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Colorado Springs Tankless Water Heater Repair Service Area Map"
              className="grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
            ></iframe>
            <div className="absolute bottom-3 left-3 bg-navy-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-navy-700 text-xs text-slate-300 flex items-center gap-2 pointer-events-none">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>Coverage: 20-Mile Radius from Downtown Colorado Springs</span>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">
          
          {/* Column 1: Brand & Philosophy */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-orange text-white flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-extrabold text-white text-base">
                Tankless Water Heater Repair
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Colorado Springs’ dedicated tankless water heater referral and technical dispatch service. We connect residential homeowners with prescreened, licensed, and insured local tankless specialists for fast repairs, code-compliant installations, and preventative descaling.
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-orange" />
                <a href={SITE_CONFIG.phoneHref} className="hover:text-white font-semibold">
                  {SITE_CONFIG.phoneDisplay} (24/7 Phone Only)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>Serving Colorado Springs & Surrounding 20 Miles</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>PPRBD Licensed & Screened Technicians</span>
              </div>
            </div>
          </div>

          {/* Column 2: Tankless Services */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
              Repair & Service Silos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tankless-water-heater-repair" className="text-slate-400 hover:text-white transition-colors">
                  Tankless Water Heater Repair (Core)
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/emergency" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                  Emergency 24/7 Repair
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/same-day" className="text-slate-400 hover:text-white transition-colors">
                  Same-Day Repair Service
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/gas" className="text-slate-400 hover:text-white transition-colors">
                  Gas Tankless Repair (Natural Gas & Propane)
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/electric" className="text-slate-400 hover:text-white transition-colors">
                  Electric Tankless Water Heater Repair
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-installation" className="text-slate-400 hover:text-white transition-colors">
                  Tankless Installation & High-Altitude Sizing
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-installation/replacement" className="text-slate-400 hover:text-white transition-colors">
                  Tankless Replacement & Upgrades
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-maintenance" className="text-slate-400 hover:text-white transition-colors">
                  Annual Maintenance & Safety Audit
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-maintenance/descaling" className="text-slate-400 hover:text-white transition-colors">
                  Chemical Descaling & Scale Removal
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-maintenance/flushing" className="text-slate-400 hover:text-white transition-colors">
                  Tankless Heat Exchanger Flushing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Locations */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
              Service Areas (Nearby Markets)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/locations" className="text-brand-orange hover:text-white font-semibold transition-colors">
                  All Locations & Service Map Hub
                </Link>
              </li>
              <li>
                <Link href="/locations/monument" className="text-slate-400 hover:text-white transition-colors">
                  Monument, CO (Tri-Lakes & Jackson Creek - 6,900 ft)
                </Link>
              </li>
              <li>
                <Link href="/locations/fountain" className="text-slate-400 hover:text-white transition-colors">
                  Fountain, CO (Mesa Ridge & Widefield - 5,500 ft)
                </Link>
              </li>
              <li>
                <Link href="/locations/manitou-springs" className="text-slate-400 hover:text-white transition-colors">
                  Manitou Springs, CO (Historic Foothills - 6,400 ft)
                </Link>
              </li>
              <li>
                <Link href="/locations/woodland-park" className="text-slate-400 hover:text-white transition-colors">
                  Woodland Park, CO (Alpine Elevation - 8,500 ft)
                </Link>
              </li>
              <li>
                <Link href="/locations/falcon" className="text-slate-400 hover:text-white transition-colors">
                  Falcon, CO (Meridian Ranch & Woodmen Hills - 7,200 ft)
                </Link>
              </li>
              <li className="pt-2 text-slate-500">
                Colorado Springs Neighborhoods: Briargate, Broadmoor, Rockrimmon, Powers Corridor, Old Colorado City, Stetson Hills, Downtown, Northgate.
              </li>
            </ul>
          </div>

          {/* Column 4: Troubleshooting, Brands & Legal */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-orange pl-2.5">
              Troubleshooting & Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tankless-water-heater-repair/error-codes" className="text-slate-400 hover:text-white transition-colors">
                  Error Codes Diagnostic Guide
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/not-producing-hot-water" className="text-slate-400 hover:text-white transition-colors">
                  Not Producing Hot Water Fixes
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/ignition-problems" className="text-slate-400 hover:text-white transition-colors">
                  Ignition & Flame Rod Problems
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/leak-repair" className="text-slate-400 hover:text-white transition-colors">
                  Cabinet & Valve Leak Repair
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/flow-sensor" className="text-slate-400 hover:text-white transition-colors">
                  Water Flow Sensor Replacement
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/navien" className="text-slate-400 hover:text-white transition-colors">
                  Navien Tankless Repair
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/rinnai" className="text-slate-400 hover:text-white transition-colors">
                  Rinnai Tankless Repair
                </Link>
              </li>
              <li>
                <Link href="/tankless-water-heater-repair/noritz" className="text-slate-400 hover:text-white transition-colors">
                  Noritz Tankless Repair
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Technical Blog (10 Articles)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us (Caller Checklist)
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Our Referral Network
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-slate-400 hover:text-white transition-colors">
                  How Technician Dispatch Works
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Licensing, and Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Tankless Water Heater Repair in Colorado Springs. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400">
              Sitemap.xml
            </Link>
          </div>
          <p className="max-w-md text-[11px] text-center md:text-right text-slate-500">
            Dispatched plumbing contractors are independent licensed and insured entities. We match callers with vetted local professionals for repair, installation, and maintenance in Colorado Springs and El Paso County.
          </p>
        </div>
      </div>
    </footer>
  );
}
