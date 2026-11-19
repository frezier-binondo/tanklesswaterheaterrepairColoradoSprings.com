import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  ThermometerSnowflake,
  Mountain,
  Wrench,
  CheckCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Flame,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";
import { LOCATIONS_DATA } from "@/data/locationsData";

export async function generateStaticParams() {
  return Object.keys(LOCATIONS_DATA).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }) {
  const location = LOCATIONS_DATA[params.city];
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
  };
}

export default function LocationDetailPage({ params }: { params: { city: string } }) {
  const location = LOCATIONS_DATA[params.city];
  if (!location) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Locations", url: "/locations" },
    { name: location.name, url: `/locations/${location.slug}` },
  ];

  // Other nearby cities for internal linking (excluding current city)
  const otherLocations = Object.values(LOCATIONS_DATA)
    .filter((loc) => loc.slug !== location.slug)
    .slice(0, 4);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-orange/30">
                <MapPin className="w-3.5 h-3.5" />
                <span>{location.county} • Elevation: {location.elevation}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Tankless Water Heater Repair & Service in {location.name}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {location.description}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-heading font-extrabold text-base flex items-center justify-center gap-2 shadow-xl shadow-brand-orange/30 transform hover:-translate-y-0.5 transition-all text-center"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>Call {SITE_CONFIG.phoneDisplay} For {location.name} Dispatch</span>
                </a>
                <span className="text-xs text-slate-400">
                  {location.distanceFromSprings} • 24/7 Response
                </span>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-navy-700">
                <Image
                  src={location.heroImage}
                  alt={`${location.name} residential area`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-navy-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-navy-700 text-xs text-slate-200">
                  <span>Elevation: <strong>{location.elevation}</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Body */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Unique Local Plumbing Challenges */}
              <div>
                <h2 className="text-2xl font-heading font-extrabold text-navy-950 mb-4 border-l-4 border-brand-orange pl-4">
                  Unique Tankless Water Heater Challenges in {location.name}
                </h2>
                <div className="space-y-3 mt-4">
                  {location.uniqueChallenges.map((challenge, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium leading-relaxed">
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Water Chemistry & Maintenance Recommendation */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-heading font-extrabold text-navy-950 mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-brand-orange" />
                  <span>Local Water Chemistry & Descaling Recommendations</span>
                </h2>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  {location.waterCharacteristics}
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
                  <strong className="text-navy-950 block mb-1">Recommended Flushing Schedule:</strong>
                  <span>{location.recommendedMaintenance}</span>
                </div>
              </div>

              {/* Common Error Codes Encountered Locally */}
              <div>
                <h2 className="text-xl font-heading font-extrabold text-navy-950 mb-4 border-l-4 border-navy-800 pl-4">
                  Frequent Error Codes Seen in {location.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {location.commonErrorCodes.map((code, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
                      <span className="text-brand-orange font-bold block mb-1">Local Failure Pattern:</span>
                      {code}
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Link href="/tankless-water-heater-repair/error-codes" className="in-content-link text-xs">
                    View full error code directory & diagnostics →
                  </Link>
                </div>
              </div>

              {/* High-Altitude Combustion & Gas Line Standards in {location.name} */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h2 className="text-2xl font-heading font-extrabold text-navy-950 border-l-4 border-navy-800 pl-4">
                  High-Altitude Combustion & Gas Line Standards in {location.name}
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-3">
                  <p>
                    Because {location.name} sits at an elevation of {location.elevation}, natural gas and liquid propane burners operate under significantly reduced atmospheric pressure compared to sea level. With approximately 20% to 26% fewer oxygen molecules per cubic foot of air, out-of-the-box factory settings inevitably produce incomplete combustion, soot accumulation on the primary heat exchanger, and high carbon monoxide levels.
                  </p>
                  <p>
                    Technicians dispatched to {location.name} homes perform precision electronic combustion recalibration. This includes configuring high-altitude DIP switches on motherboards, adjusting DC blower fan speeds to force adequate oxygen into the sealed combustion chamber, and measuring dynamic working gas pressure with dual-port digital manometers. Whether your home is fueled by municipal natural gas (Colorado Springs Utilities or Black Hills Energy) or private propane (LPG) storage tanks common on semi-rural acreage lots, maintaining proper gas pressure (7 to 10.5 in. W.C. for natural gas; 11 to 14 in. W.C. for LP) is critical to prevent sudden flame failure lockouts during high-demand winter mornings.
                  </p>
                </div>
              </div>

              {/* Winter Freeze Defense & Sub-Zero Operating Guidelines */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-heading font-extrabold text-navy-950 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-brand-orange" />
                  <span>Winter Freeze Defense & Cold Ground-Water Demands in {location.name}</span>
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-3">
                  <p>
                    During Front Range cold snaps and Arctic blizzard fronts, incoming municipal and private well water temperatures across {location.name} drop to between 34°F and 38°F. Delivering comfortable 120°F showers requires a demanding 82°F to 86°F temperature rise (Delta-T). Under this heavy load, an undersized or scale-choked unit will severely restrict shower flow or shut off unexpectedly due to thermal safety over-temp cutoffs.
                  </p>
                  <p>
                    Furthermore, freezing winds can cause exterior horizontal concentric exhaust and intake terminations to frost over, triggering vent blockage error codes (such as Navien E110 or Noritz Code 90). Uninsulated exterior condensate drain lines are also prone to freezing, causing acidic water to back up directly into the secondary heat exchanger. Our technicians inspect internal ceramic heating elements, insulate condensate drains, and verify electrical freeze-protection circuits to keep your system operational throughout the most severe Colorado winter conditions.
                  </p>
                </div>
              </div>

              {/* Local Building Code & Permitting Compliance */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm">
                <h3 className="text-xl font-heading font-extrabold text-navy-950 border-l-4 border-brand-orange pl-4">
                  PPRBD Permitting & Code Standards for {location.name}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  All tankless water heater installations, retrofits, and major gas valve replacements in {location.name} fall under the jurisdiction of the Pikes Peak Regional Building Department (PPRBD) or local municipal building codes. Local code requires certified Category IV polypropylene or CPVC venting, mandatory sediment traps (drip legs) on the gas train to catch pipeline debris, seismic gas line strapping, properly sized thermal expansion tanks, and minimum clearances from operable windows, doors, and electrical meters. Network contractors pull all required permits and schedule final municipal safety inspections to ensure complete legal compliance and protect your property insurance coverage.
                </p>
              </div>

              {/* Homeowner Pre-Call Checklist */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
                <h3 className="text-xl font-heading font-extrabold text-navy-950">
                  Information to Have Ready for Fast {location.name} Dispatch
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Because our service is 100% phone-based, we connect you immediately with a technical dispatcher without forcing you to fill out online forms. To ensure the fastest response and parts matching, please have the following details ready when calling:
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 mt-2">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span>Unit Brand & Model Number (on data plate)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span>Exact Error Code (flashing on digital controller)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span>Fuel Type (Natural Gas, Propane, or Electric)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span>Specific Subdivision or Neighborhood in {location.name}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Neighborhoods and Subdivisions We Cover */}
              <div>
                <h2 className="text-xl font-heading font-extrabold text-navy-950 mb-3">
                  Neighborhoods & Communities Covered in {location.name}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {location.neighborhoods.map((n, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  ZIP Codes Covered: {location.zipCodes.join(", ")}
                </p>
              </div>

              {/* Phone Caller Card */}
              <PhoneCallerCard
                title={`Need a Tankless Technician in ${location.name}?`}
                subtitle="Call our local dispatch line right now. Describe your brand and error code, and we will confirm arrival timing directly."
              />

              {/* External Link */}
              <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
                <span>Building Department Code Reference: </span>
                <a
                  href="https://www.pprbd.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="in-content-link inline-flex items-center gap-1"
                >
                  <span>Pikes Peak Regional Building Department (PPRBD)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Right Sidebar: Services & Other Locations */}
            <div className="lg:col-span-4 space-y-8">
              
              <div className="bg-navy-950 text-white p-6 rounded-2xl border border-navy-800 shadow-xl sticky top-28">
                <span className="text-brand-orange text-xs font-bold uppercase tracking-wider block mb-1">
                  Local Priority Service
                </span>
                <h3 className="text-xl font-heading font-extrabold text-white mb-2">
                  {location.name} Dispatch
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Direct phone dispatch for emergency repairs, annual descaling, and high-altitude tankless installations.
                </p>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3.5 px-4 rounded-xl font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/40 transition-all text-center mb-3"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call {SITE_CONFIG.phoneDisplay}</span>
                </a>
                <div className="text-[11px] text-slate-400 text-center">
                  Available 24 Hours • 7 Days a Week
                </div>

                {/* Internal Links to Services (5 Internal Links) */}
                <div className="mt-8 pt-6 border-t border-navy-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Available Services in {location.name}
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <Link href="/tankless-water-heater-repair" className="text-slate-300 hover:text-brand-orange flex items-center justify-between py-1">
                        <span>Tankless Water Heater Repair</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/tankless-water-heater-repair/emergency" className="text-slate-300 hover:text-brand-orange flex items-center justify-between py-1">
                        <span>Emergency 24/7 Repair</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/tankless-water-heater-repair/gas" className="text-slate-300 hover:text-brand-orange flex items-center justify-between py-1">
                        <span>High-Altitude Gas Tuning</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/tankless-water-heater-installation" className="text-slate-300 hover:text-brand-orange flex items-center justify-between py-1">
                        <span>New Tankless Installation</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/tankless-water-heater-maintenance/descaling" className="text-slate-300 hover:text-brand-orange flex items-center justify-between py-1">
                        <span>Chemical Descaling Flush</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Other Nearby Markets */}
                <div className="mt-6 pt-6 border-t border-navy-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Nearby Service Markets
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {otherLocations.map((loc) => (
                      <li key={loc.slug}>
                        <Link
                          href={`/locations/${loc.slug}`}
                          className="text-slate-300 hover:text-brand-orange flex items-center justify-between py-1"
                        >
                          <span>{loc.name}</span>
                          <span className="text-[11px] text-slate-500">{loc.elevation}</span>
                        </Link>
                      </li>
                    ))}
                    <li className="pt-1">
                      <Link
                        href="/locations"
                        className="text-brand-orange hover:underline font-bold block pt-1"
                      >
                        ← All Colorado Springs Areas
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
