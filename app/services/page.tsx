import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  ShieldAlert,
  Clock,
  Flame,
  CheckCircle,
  ArrowRight,
  Layers,
  Activity,
  FileCheck,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata = {
  title: "Tankless Water Heater Services in Colorado Springs",
  description:
    "Explore our complete tankless water heater service directory in Colorado Springs. Emergency repairs, same-day service, gas & electric diagnostics, installation, and descaling. Call (719) 602-1977.",
};

export default function ServicesPage() {
  const breadcrumbs = [{ name: "Services", url: "/services" }];

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <Wrench className="w-3.5 h-3.5" />
            <span>Comprehensive Technical Service Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Tankless Water Heater Services in Colorado Springs
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
            From emergency midnight freeze recovery to precision high-altitude combustion tuning and warranty-preserving descaling flushes, our referral network connects you with master plumbers and factory-trained specialists across El Paso and Teller counties.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.phoneHref}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-heading font-extrabold text-base flex items-center gap-2 shadow-xl shadow-brand-orange/30 transform hover:-translate-y-0.5 transition-all"
            >
              <span>Call Technician Now: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Silo Directory (1000+ words) */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Silo 1: Tankless Water Heater Repair */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-brand-orange mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                  Core Silo #1
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950">
                  Tankless Water Heater Diagnostics & Repair
                </h2>
              </div>
              <Link
                href="/tankless-water-heater-repair"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-brand-orange"
              >
                <span>View Full Repair Pillar Page</span>
                <ArrowRight className="w-4 h-4 text-brand-orange" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-7 prose prose-slate max-w-none text-slate-700 text-base leading-relaxed">
                <p>
                  When an on-demand water heater stops functioning, it disrupts every rhythm of your household—from morning showers and teeth brushing to running the dishwasher and sanitizing laundry. Because tankless units do not store heated water, every component in the operating chain must fire with microsecond precision. A slight voltage irregularity on an electronic board, a microscopic grain of silica on a flame rectification sensor, or an undersized gas line will instantly trigger a safety lockout.
                </p>
                <p>
                  Our network technicians provide specialized diagnostics that separate root mechanical causes from false electronic sensor codes. Rather than guessing and replacing expensive motherboards, technicians measure static and dynamic gas pressure using dual-port digital manometers, test thermistor resistance curves, inspect water turbine impellers, and burnish flame rods according to factory tolerances.
                </p>
              </div>
              <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/services/service-circuit-board-multimeter.jpg"
                  alt="Technician testing circuit board on tankless water heater in Colorado Springs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold bg-brand-orange/90 px-3 py-1 rounded-full">
                    Diagnostic Circuit Board & Multi-Meter Testing
                  </span>
                </div>
              </div>
            </div>

            {/* Repair Sub-Pages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-4">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                    Emergency 24/7 Repair
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Immediate dispatch for active cabinet ruptures, natural gas odors, scorched electrical smells, and complete heating loss during freezing winter weather.
                  </p>
                </div>
                <Link
                  href="/tankless-water-heater-repair/emergency"
                  className="in-content-link text-xs font-bold inline-flex items-center gap-1"
                >
                  <span>Emergency Service Info →</span>
                </Link>
              </div>

              <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                    Same-Day Repair
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Call before 12:00 PM for same-day technician dispatch. Mobile service trucks carry fast-moving parts for Navien, Rinnai, and Noritz units to resolve 80% of issues on the spot.
                  </p>
                </div>
                <Link
                  href="/tankless-water-heater-repair/same-day"
                  className="in-content-link text-xs font-bold inline-flex items-center gap-1"
                >
                  <span>Same-Day Booking →</span>
                </Link>
              </div>

              <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-brand-orange flex items-center justify-center mb-4">
                    <Flame className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                    Gas Tankless Repair
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    High-altitude combustion recalibration, negative pressure gas valve adjustments, igniter electrode gap spacing, and direct-vent backpressure testing.
                  </p>
                </div>
                <Link
                  href="/tankless-water-heater-repair/gas"
                  className="in-content-link text-xs font-bold inline-flex items-center gap-1"
                >
                  <span>Gas Service Details →</span>
                </Link>
              </div>

              <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                    Electric Tankless Repair
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Troubleshooting tripped 240V breakers, ruptured immersion heating elements, high-limit thermal cutoff resets, and modulation triac relay testing.
                  </p>
                </div>
                <Link
                  href="/tankless-water-heater-repair/electric"
                  className="in-content-link text-xs font-bold inline-flex items-center gap-1"
                >
                  <span>Electric Unit Support →</span>
                </Link>
              </div>

              <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                    Error Code Diagnostics
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Complete translation of cryptic alphanumeric fault codes across Navien (E003, E012, E110), Rinnai (Code 10, 11, 12, 14), and Noritz (11, 90, 72).
                  </p>
                </div>
                <Link
                  href="/tankless-water-heater-repair/error-codes"
                  className="in-content-link text-xs font-bold inline-flex items-center gap-1"
                >
                  <span>Troubleshoot Error Codes →</span>
                </Link>
              </div>

              <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                    Flow Sensor & Leak Repairs
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Unclogging stuck water turbine flow sensors, resolving the cold-water sandwich effect, and replacing dripping isolation valves and condensate traps.
                  </p>
                </div>
                <Link
                  href="/tankless-water-heater-repair/flow-sensor"
                  className="in-content-link text-xs font-bold inline-flex items-center gap-1"
                >
                  <span>Flow Sensor Details →</span>
                </Link>
              </div>

            </div>
          </div>

          {/* Silo 2: Tankless Installation & Replacement */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-navy-800 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Core Silo #2
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950">
                  Tankless Water Heater Installation & Replacement
                </h2>
              </div>
              <Link
                href="/tankless-water-heater-installation"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-brand-orange"
              >
                <span>View Full Installation Pillar Page</span>
                <ArrowRight className="w-4 h-4 text-brand-orange" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-7 prose prose-slate max-w-none text-slate-700 text-base leading-relaxed">
                <p>
                  Converting from a standard 40- or 50-gallon tank water heater to a high-efficiency on-demand tankless unit is one of the highest-ROI home improvements a Colorado Springs homeowner can make. Conventional tanks suffer heavy standby heat loss in chilly basements, continuously heating standing water when no one is home. A modern 0.96 UEF condensing unit cuts water heating gas usage by up to 35% while freeing up over 16 square feet of floor space.
                </p>
                <p>
                  However, a successful tankless installation in El Paso County requires stringent engineering standards:
                </p>
                <ul>
                  <li>
                    <strong>High-Altitude Capacity Sizing:</strong> Units must be sized to deliver adequate flow during sub-zero January weather when incoming mountain groundwater plummets to 37°F. Undersized units result in lukewarm showers when two faucets run at once.
                  </li>
                  <li>
                    <strong>Gas Supply Verification:</strong> A tankless heater demands up to 199,000 BTUs—nearly five times the fuel rate of an old tank. Installers evaluate meter capacity, pipe friction drop, and upgrade gas lines to 3/4-inch or 1-inch pipe where required.
                  </li>
                  <li>
                    <strong>PPRBD Code Compliance:</strong> The Pikes Peak Regional Building Department strictly enforces mechanical venting clearances, seismic strapping, thermal expansion tanks, and combustion safety. Installers pull all required permits and schedule final municipal inspections.
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/services/service-outdoor-van-installation.jpg"
                  alt="Licensed technician installing outdoor tankless water heater with service van"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold bg-navy-900/90 px-3 py-1 rounded-full border border-slate-600">
                    Direct-Vent Tankless Installation & Replacement
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="drainhaus-card p-6 bg-white border border-slate-200">
                <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                  New System Sizing & Conversion
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Full home peak flow audits, calculating simultaneous GPM requirements for master showers, dishwashers, and laundry. We recommend premium condensing equipment like the Navien NPE-240A2 and Rinnai SENSEI RU199i.
                </p>
                <Link href="/tankless-water-heater-installation" className="in-content-link text-xs font-bold">
                  Explore Installation Standards →
                </Link>
              </div>

              <div className="drainhaus-card p-6 bg-white border border-slate-200">
                <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                  Aging Unit Replacement & Upgrades
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  If your older tankless unit is over 14 years old, has a leaking heat exchanger, or requires expensive obsolete parts, we coordinate clean unit swaps that reuse existing venting and gas infrastructure where appropriate.
                </p>
                <Link href="/tankless-water-heater-installation/replacement" className="in-content-link text-xs font-bold">
                  View Replacement Options →
                </Link>
              </div>
            </div>
          </div>

          {/* Silo 3: Annual Maintenance & Descaling */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-emerald-600 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                  Core Silo #3
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950">
                  Preventative Maintenance & Chemical Descaling
                </h2>
              </div>
              <Link
                href="/tankless-water-heater-maintenance"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-brand-orange"
              >
                <span>View Full Maintenance Pillar Page</span>
                <ArrowRight className="w-4 h-4 text-brand-orange" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-7 prose prose-slate max-w-none text-slate-700 text-base leading-relaxed">
                <p>
                  Because Colorado Springs water originates from mountain runoff and deep alluvial wells, it contains dissolved calcium, magnesium, and silica. In high-temperature tankless heat exchangers, these minerals precipitate out of solution, forming hard calcite scale. As little as 1/32 of an inch of scale insulates copper coils, causing burner hot spots, kettling rumblings, and premature heat exchanger fractures.
                </p>
                <p>
                  Annual professional maintenance is mandatory to maintain manufacturer warranty coverage from Navien, Rinnai, and Noritz. A certified technician circulates food-grade virgin citric or sulfamic acid through isolation service valves for 45 to 60 minutes, thoroughly dissolving mineral scale without corroding internal metal alloys.
                </p>
              </div>
              <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/services/service-descaling-flush-bucket.jpg"
                  alt="Technician performing active chemical descaling flush with submersible pump and bucket"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold bg-emerald-700/90 px-3 py-1 rounded-full">
                    Annual Chemical Descaling & Isolation Flush
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="drainhaus-card p-6 bg-white border border-slate-200">
                <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                  Chemical Descaling Protocol
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Recirculation with acid descaling solutions, cold inlet debris screen extraction, sonic cleaning, and freshwater neutralization wash.
                </p>
                <Link href="/tankless-water-heater-maintenance/descaling" className="in-content-link text-xs font-bold">
                  Chemical Descaling Details →
                </Link>
              </div>

              <div className="drainhaus-card p-6 bg-white border border-slate-200">
                <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                  Full Multi-Point Safety Inspection
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Combustion fan wheel vacuuming, flame sensor polishing, exhaust vent static backpressure testing, and condensate trap neutralizer renewal.
                </p>
                <Link href="/tankless-water-heater-maintenance/flushing" className="in-content-link text-xs font-bold">
                  Flushing & Inspection Guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Colorado Springs Engineering & Altitude Standards Guide (Extensive Local Guide) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-16 shadow-sm">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Local Technical Reference
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-navy-950">
                Pikes Peak Regional Engineering Standards: Altitude, Fuel & Water Chemistry
              </h3>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4">
              <p>
                Operating an on-demand tankless water heater in Colorado Springs presents distinct mechanical and thermodynamic challenges not encountered in sea-level communities. Because Colorado Springs sits at an average altitude of 6,035 feet—with mountain foothill neighborhoods like Manitou Springs, Broadmoor, and Woodland Park climbing above 6,500 to 8,500 feet—atmospheric pressure drops from 14.7 psi to less than 11.5 psi. This 20% to 26% decrease in atmospheric oxygen directly starves standard gas combustion chambers unless specialized electronic manifold derating and fan speed recalibrations are performed by a factory-trained technician.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 not-prose">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <div className="text-brand-orange font-bold text-base mb-1">High-Altitude Combustion</div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    At 6,000+ ft, natural gas units require 4% input derating per 1,000 ft above 2,000 ft. Technicians adjust dip switches, program electronic manifold pressure, and calibrate draft blowers to achieve clean stoichiometric blue flames.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <div className="text-brand-orange font-bold text-base mb-1">Groundwater Delta-T Demand</div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Winter runoff from Pikes Peak brings tap water into homes at 36°F to 39°F. Delivering 120°F showers requires an extreme 81°F to 84°F temperature rise (Delta-T), demanding a fully firing 199,000 BTU burner and 3/4-inch gas lines.
                  </p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <div className="text-brand-orange font-bold text-base mb-1">Mineral Scale Calcification</div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Municipal water from Colorado Springs Utilities (CSU) and deep wells in Falcon and Black Forest carry 8 to 14 grains of hardness. Calcium carbonate bakes onto heat exchangers over 130°F, requiring documented annual descaling.
                  </p>
                </div>
              </div>

              <p>
                Furthermore, all gas and water heater replacements throughout El Paso County are governed by the Pikes Peak Regional Building Department (PPRBD). PPRBD enforces strict mechanical codes regarding dedicated combustion air intakes, category IV polypropylene or CPVC venting terminations, seismic strapping, sediment traps on gas trains, and properly sized thermal expansion tanks. Network installers pull formal PPRBD mechanical permits and schedule code-compliance inspections to protect homeowner property values and insurance policies.
              </p>
            </div>
          </div>

          {/* Homeowner Troubleshooting Diagnostic Matrix Table */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Homeowner Diagnostic Guide
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-navy-950">
                Tankless Water Heater Problem & Solution Matrix
              </h3>
              <p className="text-slate-600 text-xs mt-1">
                Common error conditions, root mechanical causes, and technician resolution protocols across Colorado Springs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-navy-950 text-white font-heading text-xs uppercase tracking-wider">
                    <th className="p-3.5 rounded-tl-lg">Symptom / Code</th>
                    <th className="p-3.5">Probable Root Cause</th>
                    <th className="p-3.5">What You Can Check</th>
                    <th className="p-3.5 rounded-tr-lg">Professional Technician Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="p-3.5 font-bold text-navy-950">Cold Water Sandwich (Shower goes cold then hot)</td>
                    <td className="p-3.5">Calcified flow sensor turbine or clogged cold inlet debris filter screen below 0.4 GPM threshold.</td>
                    <td className="p-3.5">Check if faucet aerator is clogged; verify multiple taps increase hot flow.</td>
                    <td className="p-3.5">Ultrasonic cleaning of flow impeller, inlet screen scrub, and buffer tank recirculation check.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-navy-950">Navien E003 / Rinnai Code 11 (Ignition Failure)</td>
                    <td className="p-3.5">Dirty flame ionization rod, insufficient dynamic gas pressure, or frozen exhaust vent termination.</td>
                    <td className="p-3.5">Verify gas shutoff lever is parallel to pipe; check outside vent for snow/ice blockage.</td>
                    <td className="p-3.5">Dual-port digital manometer gas pressure adjustment, flame rod polishing, and spark gap calibration.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-navy-950">Kettling / Popping / Loud Rumbling Noise</td>
                    <td className="p-3.5">Severe calcium carbonate scale insulating copper heat exchanger coils, causing localized boiling.</td>
                    <td className="p-3.5">Do not operate unit on maximum temperature; note date of last descaling flush.</td>
                    <td className="p-3.5">45-minute pressurized chemical descaling circulation with food-grade virgin citric solution.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-navy-950">Active Water Dripping Beneath Cabinet</td>
                    <td className="p-3.5">Blown isolation valve O-ring, weeping T&P relief valve, or heat exchanger freeze rupture.</td>
                    <td className="p-3.5">Immediately turn blue cold water shutoff 90 degrees; cut electrical breaker.</td>
                    <td className="p-3.5">Hydrostatic pressure leak isolation, valve replacement, or secondary heat exchanger assembly swap.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-navy-950">Navien E110 / Noritz Code 90 (Vent Blockage)</td>
                    <td className="p-3.5">Front Range wind gusts forcing backdraft, snow accumulation in intake, or soot-choked blower.</td>
                    <td className="p-3.5">Inspect exterior PVC termination caps for leaves, bird nests, or icicles.</td>
                    <td className="p-3.5">Combustion blower disassembly, static vent backpressure verification, and wind cap retrofit.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-16">
            <h3 className="text-xl font-heading font-extrabold text-navy-950 text-center mb-6">
              Major Tankless Brands Serviced Daily Across Colorado Springs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-heading font-bold text-navy-950 text-lg mb-1">Navien NPE & NPN</h4>
                <p className="text-xs text-slate-500 mb-3">Condensing dual stainless steel heat exchangers and ComfortFlow recirculation</p>
                <Link href="/tankless-water-heater-repair/navien" className="in-content-link text-xs">
                  Navien Repair Guide →
                </Link>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-heading font-bold text-navy-950 text-lg mb-1">Rinnai SENSEI</h4>
                <p className="text-xs text-slate-500 mb-3">Commercial-grade copper exchangers and smart fiber-mesh burners</p>
                <Link href="/tankless-water-heater-repair/rinnai" className="in-content-link text-xs">
                  Rinnai Repair Guide →
                </Link>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-heading font-bold text-navy-950 text-lg mb-1">Noritz EZ & NRC</h4>
                <p className="text-xs text-slate-500 mb-3">High-capacity residential and commercial tandem configurations</p>
                <Link href="/tankless-water-heater-repair/noritz" className="in-content-link text-xs">
                  Noritz Repair Guide →
                </Link>
              </div>
            </div>
          </div>

          {/* Phone-Only Conversion Block */}
          <PhoneCallerCard
            title="Need Fast Diagnosis on Your Tankless Water Heater?"
            subtitle="Speak directly with an on-call Colorado Springs dispatcher. No forms, no wait. Fast local dispatch with upfront quotes before work begins."
          />

          {/* External Citation Link as Required */}
          <div className="mt-8 text-center text-xs text-slate-500">
            For federal standards on demand-type water heating efficiency, review the{" "}
            <a
              href="https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters"
              target="_blank"
              rel="noopener noreferrer"
              className="in-content-link"
            >
              U.S. Department of Energy Tankless Water Heater Guide
            </a>
            .
          </div>

        </div>
      </section>
    </div>
  );
}
