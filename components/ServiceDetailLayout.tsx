import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Clock,
  Phone,
  Flame,
  ChevronRight,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";
import Accordion from "@/components/Accordion";
import { ServiceItem } from "@/data/servicesData";

interface ServiceDetailLayoutProps {
  service: ServiceItem;
  breadcrumbs: BreadcrumbItem[];
  relatedServices?: { title: string; href: string }[];
  locationsCovered?: { name: string; href: string }[];
  externalLink?: { title: string; url: string };
}

export default function ServiceDetailLayout({
  service,
  breadcrumbs,
  relatedServices = [
    { title: "Emergency 24/7 Repair", href: "/tankless-water-heater-repair/emergency" },
    { title: "Same-Day Service", href: "/tankless-water-heater-repair/same-day" },
    { title: "Gas Tankless Repair", href: "/tankless-water-heater-repair/gas" },
    { title: "Installation & Sizing", href: "/tankless-water-heater-installation" },
    { title: "Annual Descaling & Flush", href: "/tankless-water-heater-maintenance/descaling" },
  ],
  locationsCovered = [
    { name: "Monument, CO", href: "/locations/monument" },
    { name: "Fountain, CO", href: "/locations/fountain" },
    { name: "Manitou Springs, CO", href: "/locations/manitou-springs" },
    { name: "Woodland Park, CO", href: "/locations/woodland-park" },
    { name: "Falcon, CO", href: "/locations/falcon" },
  ],
  externalLink = {
    title: "U.S. Department of Energy: Tankless Water Heaters",
    url: "https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters",
  },
}: ServiceDetailLayoutProps) {
  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
              <Wrench className="w-3.5 h-3.5" />
              <span>Colorado Springs Specialized Technical Service</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              {service.overview}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-heading font-extrabold text-base flex items-center justify-center gap-2 shadow-xl shadow-brand-orange/30 transform hover:-translate-y-0.5 transition-all text-center"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call {SITE_CONFIG.phoneDisplay} For Service</span>
              </a>
              <span className="text-xs text-slate-400">
                Direct Local Phone Dispatch • Available 24/7/365
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-72 sm:h-96">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Signs It Is Time to Call a Professional */}
              <div>
                <h2 className="text-2xl font-heading font-extrabold text-navy-950 mb-4 border-l-4 border-brand-orange pl-4">
                  Signs It Is Time to Call a Professional
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {service.symptoms.map((symptom, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                        {symptom}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagnostic & Repair Protocol */}
              <div>
                <h2 className="text-2xl font-heading font-extrabold text-navy-950 mb-4 border-l-4 border-navy-800 pl-4">
                  How Our Certified Technicians Diagnose & Resolve the Issue
                </h2>
                <div className="space-y-3 mt-4">
                  {service.diagnosticProcess.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="w-8 h-8 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-navy-950 block">
                          {step}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Colorado Springs Climate & Altitude Factors */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-heading font-extrabold text-navy-950 mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-brand-orange" />
                  <span>Colorado Springs Altitude & Climate Considerations</span>
                </h2>
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  {service.coloradoSpringsFactors.map((factor, idx) => (
                    <p key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                      <span>{factor}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Detailed Engineering Diagnostics & Technical Workflow */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-heading font-extrabold text-navy-950 border-l-4 border-navy-800 pl-4">
                  Advanced Engineering Diagnostics: How Technicians Resolve {service.shortTitle}
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-3">
                  <p>
                    Unlike conventional tank water heaters that rely on basic mechanical thermostats, modern on-demand tankless systems operate as complex, computer-controlled hydronic machines. When executing {service.shortTitle.toLowerCase()} services in Colorado Springs, technicians follow an uncompromising diagnostic protocol designed to isolate the fundamental mechanical or electrical failure rather than merely replacing components by trial and error.
                  </p>
                  <p>
                    The service begins with digital error log extraction directly through the unit&apos;s onboard microprocessor interface. Technicians connect specialized diagnostic tools to review the historical sequence of ignition attempts, thermistor temperature curves, DC blower fan RPM fluctuations, and flame rectification current signals. Using dual-port digital manometers, technicians verify dynamic working gas pressures under 100% full-fire load, ensuring the system maintains between 7.0 and 10.5 inches of water column (W.C.) for natural gas or 11.0 to 14.0 inches W.C. for liquid propane. Inadequate dynamic gas pressure caused by undersized 1/2-inch legacy piping or sticking gas regulators is a primary cause of intermittent flame failures across El Paso County.
                  </p>
                  <p>
                    Next, electrical components are individually tested against factory resistance specifications. Technicians check flame rectification rods for microscopic silica glazing, measure igniter spark electrode gap spacing down to 1/8-inch tolerances, test high-limit thermal fuses for continuity, and examine the Hall-effect water flow turbine. By systematically testing the combustion, electronic, and hydraulic sub-systems, our network technicians resolve {service.shortTitle.toLowerCase()} issues quickly and permanently on the initial visit.
                  </p>
                </div>
              </div>

              {/* Colorado Springs Pikes Peak Altitude & Climate Standards */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-heading font-extrabold text-navy-950 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-brand-orange" />
                  <span>High-Altitude & Water Chemistry Standards in Colorado Springs</span>
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-3">
                  <p>
                    At Colorado Springs&apos; base elevation of 6,035 feet—extending upward to 7,200 feet in Falcon and over 8,400 feet in Woodland Park—atmospheric air density drops by more than 20% compared to sea level. This thin mountain atmosphere drastically alters the stoichiometric fuel-to-oxygen ratio required for clean gas combustion. Without high-altitude recalibration (including configuring DIP switches and adjusting electronic gas manifold pressures), gas burners suffer from incomplete combustion, producing heavy carbon soot, high carbon monoxide output, and premature heat exchanger thermal cracking.
                  </p>
                  <p>
                    Additionally, winter groundwater temperatures sourced from mountain snowmelt drop as low as 36°F to 39°F between November and March. To supply a household shower at the standard 120°F setpoint, the water heater must deliver an extreme 81°F to 84°F temperature rise (Delta-T). Under these demanding winter conditions, even a microscopic layer of calcium carbonate scale—common in Colorado Springs Utilities (CSU) municipal supplies and local deep bedrock wells—severely throttles hot water volume. Certified technicians calibrate systems specifically to overcome these rigorous alpine operating hurdles.
                  </p>
                </div>
              </div>

              {/* PPRBD Code Compliance & Safety Standards */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
                <h3 className="text-xl font-heading font-extrabold text-navy-950 border-l-4 border-brand-orange pl-4">
                  PPRBD Building Code & Municipal Safety Compliance
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  All tankless water heater servicing and replacements in the Pikes Peak region comply with the rigorous standards enforced by the Pikes Peak Regional Building Department (PPRBD) and local fire jurisdictions. Technicians verify direct-vent clearance distances from doors, windows, and exterior electrical meters; check that flue gas exhaust piping uses approved Category IV polypropylene or CPVC materials; inspect gas drip sediment legs; and ensure thermal expansion tanks and pressure relief valves are properly plumbed to an approved drain. These measures guarantee safe, code-compliant operation and protect homeowner warranty coverage.
                </p>
              </div>

              {/* Transparent Pricing & What Callers Should Have Ready */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3">
                <h3 className="text-xl font-heading font-extrabold text-navy-950">
                  Transparent Service Pricing & What to Have Ready
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We believe Colorado Springs homeowners deserve clear, upfront communication. Component diagnostics, flow turbine cleans, and maintenance flushes start with transparent flat-rate pricing, and all repairs require your approval before any physical work begins. Because we operate as a direct phone-only technical network, there are no lengthy online forms or automated email delays.
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-200 mt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-950 block mb-2">
                    Information to Have Ready When You Call:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Unit Brand & Model Number (on cabinet label)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Current Error Code (flashing on digital display)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Fuel Type (Natural Gas, Propane, or Electric)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Approximate Age of Unit & Last Service Date</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Brands Serviced */}
              <div>
                <h3 className="text-lg font-heading font-bold text-navy-950 mb-3">
                  Brands Serviced Daily
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.brandsHandled.map((brand, idx) => (
                    <span
                      key={idx}
                      className="bg-navy-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Phone-Only Conversion Card */}
              <PhoneCallerCard />

              {/* Service FAQ Accordion */}
              {service.faq && service.faq.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-extrabold text-navy-950 mb-4 border-l-4 border-brand-orange pl-4">
                    Frequently Asked Questions
                  </h2>
                  <Accordion
                    items={service.faq.map((f) => ({ question: f.q, answer: f.a }))}
                  />
                </div>
              )}

              {/* External Citation Link */}
              <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
                <span>Verified Reference: </span>
                <a
                  href={externalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="in-content-link inline-flex items-center gap-1"
                >
                  <span>{externalLink.title}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Right Sidebar: Internal Link Map & Locations */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Sticky Emergency Call Card */}
              <div className="bg-navy-950 text-white p-6 rounded-2xl border border-navy-800 shadow-xl sticky top-28">
                <span className="text-brand-orange text-xs font-bold uppercase tracking-wider block mb-1">
                  Need Help Fast?
                </span>
                <h3 className="text-xl font-heading font-extrabold text-white mb-2">
                  Talk to a Technician
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  No online forms. Direct phone dispatch with screened local specialists across Colorado Springs.
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

                {/* Related Internal Service Links (At least 5 as requested) */}
                <div className="mt-8 pt-6 border-t border-navy-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Related Services
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {relatedServices.map((rs, idx) => (
                      <li key={idx}>
                        <Link
                          href={rs.href}
                          className="text-slate-300 hover:text-brand-orange flex items-center justify-between group py-1"
                        >
                          <span className="group-hover:underline underline-offset-2">{rs.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-orange group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Regional Suburb Service Pages (Internal Links) */}
                <div className="mt-6 pt-6 border-t border-navy-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Nearby Service Areas</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {locationsCovered.map((loc, idx) => (
                      <li key={idx}>
                        <Link
                          href={loc.href}
                          className="text-slate-300 hover:text-brand-orange flex items-center justify-between group py-1"
                        >
                          <span className="group-hover:underline underline-offset-2">{loc.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-orange group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
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
