import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Wrench,
  ShieldAlert,
  Clock,
  Flame,
  CheckCircle,
  MapPin,
  ChevronRight,
  ShieldCheck,
  ThermometerSnowflake,
  Activity,
  Layers,
  ArrowRight,
  FileCheck,
  Star,
  ExternalLink,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import PhoneCallerCard from "@/components/PhoneCallerCard";
import Accordion from "@/components/Accordion";

export const metadata = {
  title: "Tankless Water Heater Repair in Colorado Springs, CO",
  description:
    "Colorado Springs' premier tankless water heater repair & dispatch service. Fast local diagnosis for Navien, Rinnai, Noritz. Sized for 6,000 ft altitude. Call (719) 602-1977.",
};

export default function HomePage() {
  const homeFaqs = [
    {
      question: "How quickly can a tankless water heater technician reach my Colorado Springs home?",
      answer:
        "For urgent failures—such as pressurized water leaks, burning smells, or zero hot water in freezing temperatures—technicians are dispatched on priority status. Typical arrival windows range between 2 and 4 hours across Colorado Springs, Monument, and Fountain. For same-day service, calling before 12:00 PM gives you the highest scheduling priority.",
    },
    {
      question: "Why do gas tankless water heaters require special altitude calibration in Colorado Springs?",
      answer:
        "Colorado Springs sits at roughly 6,035 feet above sea level (and higher in surrounding foothills). With 20% less atmospheric oxygen than sea level, factory out-of-the-box gas settings result in poor fuel burning, sooting, and carbon monoxide buildup. Technicians calibrate high-altitude DIP switches and fan blower speeds to maintain clean blue-flame combustion.",
    },
    {
      question: "What causes the 'cold water sandwich' when taking a shower in Colorado Springs?",
      answer:
        "A cold water sandwich occurs when the unit briefly shuts down during faucet cycling or when water flow dips below the flow sensor threshold (0.4 GPM). In our area, calcium mineral buildup in the heat exchanger and calcified flow sensor impellers exacerbate this issue, causing the burner to disengage unexpectedly.",
    },
    {
      question: "How does Colorado Springs water hardness impact tankless lifespan?",
      answer:
        "Municipal water from Colorado Springs Utilities (CSU) and private wells in Falcon and Black Forest carry substantial calcium and magnesium minerals. When heated past 130°F, these minerals bake onto internal heat exchanger walls. Annual descaling with professional-grade citric or sulfamic solutions is required to maintain heating efficiency and protect manufacturer warranties.",
    },
    {
      question: "Can I replace my old 50-gallon tank water heater with a tankless unit?",
      answer:
        "Yes! Upgrading to an on-demand tankless system saves up to 35% on gas utility bills, frees up 16 square feet of basement floor space, and delivers endless hot water. Our network installers evaluate gas line capacity, venting routes, and pull all required Pikes Peak Regional Building Department (PPRBD) permits.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Drainhaus Contractor Style with Background Image */}
      <section className="relative bg-navy-950 text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        {/* Background Image with Balanced Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-technician.jpg"
            alt="Licensed technician repairing a tankless water heater in Colorado Springs"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          {/* Calibrated dark overlay so the technician and equipment are clearly visible without washing out the text */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950/90"></div>
          <div className="absolute inset-0 bg-navy-950/20"></div>
        </div>

        {/* Subtle decorative glow accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8 text-center max-w-4xl mx-auto">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Flame className="w-4 h-4 fill-brand-orange" />
              <span>Pikes Peak Region’s Tankless Water Heater Specialists</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight leading-[1.1] drop-shadow-xl">
              Tankless Water Heater Repair in{" "}
              <span className="text-brand-orange">
                Colorado Springs
              </span>
            </h1>

            {/* Subtitle / Intro Text */}
            <p className="text-slate-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal drop-shadow-md">
              Waking up to ice-cold mountain water, flashing error codes, or an active cabinet leak? We connect Colorado Springs homeowners with vetted, licensed local technicians specializing exclusively in high-altitude on-demand tankless systems. No waiting for online form replies—call our direct 24/7 technical dispatch line now.
            </p>

            {/* Primary Call to Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-9 py-4 rounded-xl font-heading font-extrabold text-lg sm:text-xl flex items-center justify-center gap-3 shadow-2xl shadow-brand-orange/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <Phone className="w-6 h-6 fill-white animate-bounce" />
                <span>Call {SITE_CONFIG.phoneDisplay}</span>
              </a>
              <div className="text-center sm:text-left text-xs text-slate-300 bg-navy-900/80 border border-navy-700/80 px-4 py-2.5 rounded-xl">
                <span className="font-bold text-white block">Phone-Only Rapid Response</span>
                <span>Average dispatch match under 15 minutes</span>
              </div>
            </div>

            {/* 4 Trust Badges Across Full Width */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 text-left">
              <div className="bg-navy-900/85 backdrop-blur-md border border-navy-700/80 rounded-xl p-3.5 flex items-center gap-3 shadow-md">
                <Clock className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">24/7 Dispatch</span>
                  <span className="text-[11px] text-slate-300">Emergency & Same-Day</span>
                </div>
              </div>
              <div className="bg-navy-900/85 backdrop-blur-md border border-navy-700/80 rounded-xl p-3.5 flex items-center gap-3 shadow-md">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Screened & Insured</span>
                  <span className="text-[11px] text-slate-300">PPRBD Code Compliant</span>
                </div>
              </div>
              <div className="bg-navy-900/85 backdrop-blur-md border border-navy-700/80 rounded-xl p-3.5 flex items-center gap-3 shadow-md">
                <ThermometerSnowflake className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">6,000+ Ft Altitude</span>
                  <span className="text-[11px] text-slate-300">High-Altitude Tuned</span>
                </div>
              </div>
              <div className="bg-navy-900/85 backdrop-blur-md border border-navy-700/80 rounded-xl p-3.5 flex items-center gap-3 shadow-md">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Clear Upfront Quote</span>
                  <span className="text-[11px] text-slate-300">No Surprise Fees</span>
                </div>
              </div>
            </div>

            {/* Caller Preparation Ribbon (Full Width) */}
            <div className="bg-navy-900/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-navy-700/90 text-white text-xs max-w-4xl mx-auto shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-800 pb-3 mb-3 text-left">
                <span className="font-bold text-slate-200 uppercase tracking-wider text-xs flex items-center gap-2">
                  <Flame className="w-4 h-4 text-brand-orange" />
                  <span>What to have ready when you call for faster technician routing:</span>
                </span>
                <span className="text-brand-orange font-bold text-[11px] bg-brand-orange/10 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                  Direct Dispatch
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span><strong>Brand & Model:</strong> On front label</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span><strong>Error Code:</strong> Flashing letters/numbers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span><strong>Fuel Type:</strong> Gas, Propane, Electric</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span><strong>Address:</strong> Colorado Springs area</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Links Nav Strip to Service Silos */}
      <section className="bg-slate-100 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-700">
            <span className="text-slate-500 uppercase tracking-wider font-bold">Popular Silos:</span>
            <Link href="/tankless-water-heater-repair" className="in-content-link">
              Tankless Water Heater Repair
            </Link>
            <Link href="/tankless-water-heater-repair/emergency" className="in-content-link text-red-600">
              Emergency Repair
            </Link>
            <Link href="/tankless-water-heater-installation" className="in-content-link">
              Tankless Installation
            </Link>
            <Link href="/tankless-water-heater-maintenance" className="in-content-link">
              Descaling & Maintenance
            </Link>
            <Link href="/locations" className="in-content-link">
              Regional Locations Hub
            </Link>
            <a
              href="https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-600 hover:text-brand-orange underline"
            >
              <span>U.S. Dept. of Energy Tankless Guide</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Deep-Dive Section (2,000+ Words locally optimized content) */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: The Local Problem & Colorado Springs Context */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 border-brand-orange pl-4 sm:pl-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Local Technical Authority
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-navy-950 mt-1">
                Why Tankless Water Heaters Demand Specialized Local Expertise in Colorado Springs
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
              <p>
                When your tankless water heater malfunctions in Colorado Springs, you cannot simply call a general handyman and hope for the best. Unlike conventional 50-gallon tank water heaters that rely on rudimentary standing pilots and passive buoyancy convection, modern on-demand tankless water heaters are intricate mechanical-electronic computers. They integrate multi-stage variable speed DC draft combustion blowers, negative-pressure modulating gas solenoid valves, micro-amp flame rectification sensors, high-frequency water turbine flow sensors, and dual condensing stainless steel heat exchangers.
              </p>

              <p>
                Furthermore, servicing tankless units in the Pikes Peak region introduces four extreme geographical and climatic challenges that do not exist at sea level or in milder coastal climates:
              </p>

              {/* 4 Environmental Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 text-brand-orange flex items-center justify-center font-bold">
                      6,035′
                    </div>
                    <h3 className="font-heading font-bold text-navy-950 text-base">
                      High-Altitude Oxygen Starvation
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Colorado Springs sits over a mile above sea level, with surrounding communities like <Link href="/locations/monument" className="in-content-link">Monument (6,900 ft)</Link> and <Link href="/locations/woodland-park" className="in-content-link">Woodland Park (8,500 ft)</Link> reaching extreme elevations. At these heights, atmospheric air contains 20% to 26% less oxygen per cubic foot. Gas burners require precise high-altitude DIP switch calibration and electronic manifold adjustments to prevent incomplete combustion, heavy soot formation, and carbon monoxide buildup.
                  </p>
                </div>

                <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 text-blue-400 flex items-center justify-center font-bold">
                      37°F
                    </div>
                    <h3 className="font-heading font-bold text-navy-950 text-base">
                      Frigid Winter Groundwater Delta-T
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    In warmer climates, municipal tap water enters homes at 65°F to 70°F, requiring only a modest 50°F temperature rise. In Colorado Springs during December and January, mountain runoff drops groundwater temperatures to 37°F or 38°F. To achieve a standard 120°F shower, your heater must produce a massive 82°F to 85°F Delta-T temperature rise, requiring up to 199,000 BTUs of instantaneous firing capacity.
                  </p>
                </div>

                <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 text-emerald-400 flex items-center justify-center font-bold">
                      CaCO₃
                    </div>
                    <h3 className="font-heading font-bold text-navy-950 text-base">
                      Front Range Calcium & Silica Scale
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Water supplied by Colorado Springs Utilities (CSU) and deep bedrock wells in <Link href="/locations/falcon" className="in-content-link">Falcon (80831)</Link> carries dissolved calcium and magnesium. When heated to high temperatures inside narrow tankless coils, these minerals crystallize into concrete-like calcite scale. Regular <Link href="/tankless-water-heater-maintenance/descaling" className="in-content-link">tankless descaling</Link> is essential to avoid heat exchanger overheating and thermal fractures.
                  </p>
                </div>

                <div className="drainhaus-card p-6 bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 text-red-400 flex items-center justify-center font-bold">
                      -15°F
                    </div>
                    <h3 className="font-heading font-bold text-navy-950 text-base">
                      Sub-Zero Condensate Line Freezes
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Condensing tankless units produce 1 to 2 gallons of acidic water daily. During sub-zero Arctic blasts, exterior drain lines or exposed wall penetrations freeze solid. Once the drain backs up into the secondary chamber, safety float switches trigger emergency lockouts. Our emergency team provides rapid thawing, insulation retrofits, and code-compliant drainage rerouting.
                  </p>
                </div>
              </div>

              <p>
                For these reasons, our referral service was built exclusively around tankless water heating equipment. We connect you with local contractors who carry specialized digital manometers, combustion analyzers, OEM factory diagnostic adapters, and fast-moving components on their service vehicles.
              </p>
            </div>
          </div>

          {/* Section 2: Comprehensive Service Offerings */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Full-Spectrum Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-950 mt-1">
                Complete Tankless Services We Coordinate Across Colorado Springs
              </h2>
              <p className="text-slate-600 text-base mt-2">
                From emergency 24/7 winter freeze recovery to new high-efficiency installations and annual preventative descaling, we have every aspect of your tankless system covered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Tankless Repair */}
              <div className="drainhaus-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
                    <Wrench className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-navy-950 mb-3">
                    Tankless Water Heater Repair
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Fast diagnosis for cold showers, lukewarm water, error codes, and leaks. Certified technicians service both natural gas (CSU) and liquid propane systems from <Link href="/tankless-water-heater-repair/navien" className="in-content-link">Navien</Link>, <Link href="/tankless-water-heater-repair/rinnai" className="in-content-link">Rinnai</Link>, and <Link href="/tankless-water-heater-repair/noritz" className="in-content-link">Noritz</Link>.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Digital Error Code Extraction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Flame Rod & Igniter Cleaning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Gas Pressure Manometer Calibration</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/tankless-water-heater-repair"
                  className="inline-flex items-center justify-between text-sm font-bold text-navy-900 hover:text-brand-orange pt-4 border-t border-slate-100 group"
                >
                  <span>Explore Repair Services</span>
                  <ChevronRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Card 2: Tankless Installation */}
              <div className="drainhaus-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 text-white flex items-center justify-center mb-6">
                    <Layers className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-navy-950 mb-3">
                    Installation & Replacement
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Upgrade from an inefficient 50-gallon tank or replace an aging tankless system. Precision sizing for winter temperature rise, 3/4-inch gas line upgrades, direct venting, and full Pikes Peak Regional Building Department (PPRBD) permitting.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Tank-to-Tankless Conversions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>0.96 UEF Condensing High-Efficiency</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>PPRBD Permits & Inspections Handled</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/tankless-water-heater-installation"
                  className="inline-flex items-center justify-between text-sm font-bold text-navy-900 hover:text-brand-orange pt-4 border-t border-slate-100 group"
                >
                  <span>Installation & Upgrades</span>
                  <ChevronRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Card 3: Tankless Maintenance */}
              <div className="drainhaus-card p-8 bg-white border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center mb-6">
                    <Activity className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-navy-950 mb-3">
                    Maintenance & Descaling
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Annual chemical flushing dissolves hard calcium crust before it ruins your copper or stainless heat exchanger. Multi-point safety audit includes filter cleaning, blower vacuuming, and combustion analysis to protect your warranty.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Virgin Food-Grade Citric Acid Flush</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Cold Inlet Filter Screen Cleaning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Warranty Preservation Documentation</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/tankless-water-heater-maintenance"
                  className="inline-flex items-center justify-between text-sm font-bold text-navy-900 hover:text-brand-orange pt-4 border-t border-slate-100 group"
                >
                  <span>Maintenance & Descaling</span>
                  <ChevronRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>

          {/* Section 3: In-Depth Breakdown of Common Tankless Failures */}
          <div className="mt-20 max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 border-navy-800 pl-4 sm:pl-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Troubleshooting Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950 mt-1">
                Common Tankless Water Heater Failures in Colorado Springs & How We Resolve Them
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6">
              <p>
                When a tankless water heater begins acting up, symptoms rarely resolve themselves without professional intervention. Because the machine operates under high pressure, high electrical voltage (120V to 240V), and high thermal gas combustion, safety interlocks will lock the machine down to prevent fires or explosions. Here are the most frequent issues our network technicians encounter across El Paso County:
              </p>

              <h3 className="text-xl font-heading font-bold text-navy-950">
                1. No Hot Water or Inconsistent Warm Water (The Cold Water Sandwich)
              </h3>
              <p>
                Few things are more frustrating than stepping into a hot shower, only for the water to turn freezing cold after 60 seconds. In many instances, this is caused by a failing or calcified turbine flow sensor. The sensor contains tiny magnetic impellers that measure gallons per minute. When coated in hard mineral scale, the turbine fails to spin freely at low flow rates, signaling the control board that the faucet was shut off. Read our in-depth diagnostic guide on <Link href="/tankless-water-heater-repair/not-producing-hot-water" className="in-content-link">why tankless water heaters stop producing hot water</Link> or learn how we fix faulty <Link href="/tankless-water-heater-repair/flow-sensor" className="in-content-link">water flow sensors</Link>.
              </p>

              <h3 className="text-xl font-heading font-bold text-navy-950">
                2. Continuous Clicking With Ignition Failure (Error Codes E003, Code 11, Code 12)
              </h3>
              <p>
                If your water heater clicks three or four times, pauses, and then flashes an error code on the digital screen, the unit has suffered an ignition lockout. Common triggers include low working gas pressure during high winter furnace demand, soot build-up on the spark igniter pins, an insect nest in the exterior air intake pipe, or a glazed flame rectification rod. Learn more about resolving <Link href="/tankless-water-heater-repair/ignition-problems" className="in-content-link">tankless ignition faults</Link> and understanding <Link href="/tankless-water-heater-repair/error-codes" className="in-content-link">flashing error codes</Link>.
              </p>

              <h3 className="text-xl font-heading font-bold text-navy-950">
                3. Active Water Leaking From Cabinet or Isolation Service Valves
              </h3>
              <p>
                A water leak beneath your tankless unit must be addressed immediately. While a minor weep from a threaded brass service cap may simply require Teflon tape and a new rubber washer, internal cabinet leaks often indicate a ruptured heat exchanger tube or cracked condensate trap. If your unit is leaking, shut off the cold water isolation handle under the unit and call our <Link href="/tankless-water-heater-repair/leak-repair" className="in-content-link">leak repair specialists</Link> right away.
              </p>

              <h3 className="text-xl font-heading font-bold text-navy-950">
                4. Loud Rattling, Rumbling, or Kettling Noises
              </h3>
              <p>
                Does your water heater sound like a vibrating steam engine or popping kettle whenever a hot faucet is turned on? This sound is known as 'kettling.' It occurs when localized mineral scale traps small pockets of water against superheated copper coils, causing steam bubbles to form and collapse violently. Ignoring kettling sounds will inevitably lead to heat exchanger rupture. Scheduling an immediate <Link href="/tankless-water-heater-maintenance/flushing" className="in-content-link">tankless flushing service</Link> dissolves the mineral pockets before catastrophic failure occurs.
              </p>
            </div>
          </div>

          {/* Section 4: Phone-Only Conversion Card */}
          <div className="mt-16 max-w-5xl mx-auto">
            <PhoneCallerCard
              title="Don't Suffer Through Another Cold Shower in Colorado Springs"
              subtitle="Describe your symptoms to an on-call dispatcher and get matched with a local, screened technician in minutes. Direct phone dispatch with upfront quotes before work begins."
            />
          </div>

          {/* Section 5: Local Coverage Footprint (20-Mile Radius) */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Regional Service Coverage
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-navy-950 mt-1">
                Serving Colorado Springs & Surrounding Pikes Peak Communities
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                We provide complete service throughout central Colorado Springs neighborhoods and surrounding markets within a 20-mile radius.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Link
                href="/locations/monument"
                className="drainhaus-card p-6 bg-slate-50 hover:bg-white border border-slate-200 group transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-navy-950 text-lg group-hover:text-brand-orange transition-colors">
                    Monument, CO
                  </h3>
                  <span className="text-xs bg-navy-100 text-navy-800 font-bold px-2 py-0.5 rounded">
                    6,900 ft
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Serving Tri-Lakes, Jackson Creek, and Palmer Lake border. High-altitude gas calibration and sub-zero freeze protection.
                </p>
                <span className="text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Monument Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href="/locations/fountain"
                className="drainhaus-card p-6 bg-slate-50 hover:bg-white border border-slate-200 group transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-navy-950 text-lg group-hover:text-brand-orange transition-colors">
                    Fountain, CO
                  </h3>
                  <span className="text-xs bg-navy-100 text-navy-800 font-bold px-2 py-0.5 rounded">
                    5,500 ft
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Serving Fountain Valley, Mesa Ridge, Widefield, and Fort Carson neighborhoods. Tank-to-tankless retrofits and descaling.
                </p>
                <span className="text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Fountain Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href="/locations/manitou-springs"
                className="drainhaus-card p-6 bg-slate-50 hover:bg-white border border-slate-200 group transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-navy-950 text-lg group-hover:text-brand-orange transition-colors">
                    Manitou Springs, CO
                  </h3>
                  <span className="text-xs bg-navy-100 text-navy-800 font-bold px-2 py-0.5 rounded">
                    6,400 ft
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Serving historic downtown, Ruxton Ave, and Crystal Park foothills. Tight-clearance venting and mineral scale removal.
                </p>
                <span className="text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Manitou Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href="/locations/woodland-park"
                className="drainhaus-card p-6 bg-slate-50 hover:bg-white border border-slate-200 group transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-navy-950 text-lg group-hover:text-brand-orange transition-colors">
                    Woodland Park, CO
                  </h3>
                  <span className="text-xs bg-navy-100 text-navy-800 font-bold px-2 py-0.5 rounded">
                    8,500 ft
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Serving Teller County, Woodland Heights, and Divide. Alpine high-altitude gas combustion and freeze prevention.
                </p>
                <span className="text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Woodland Park Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href="/locations/falcon"
                className="drainhaus-card p-6 bg-slate-50 hover:bg-white border border-slate-200 group transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-navy-950 text-lg group-hover:text-brand-orange transition-colors">
                    Falcon, CO
                  </h3>
                  <span className="text-xs bg-navy-100 text-navy-800 font-bold px-2 py-0.5 rounded">
                    7,200 ft
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3">
                  Serving Meridian Ranch, Woodmen Hills, and Peyton. Deep bedrock well water descaling and wind-resistant venting.
                </p>
                <span className="text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Falcon Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href="/locations"
                className="drainhaus-card p-6 bg-navy-950 text-white border border-navy-800 group hover:border-brand-orange transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading font-bold text-white text-lg">
                      Colorado Springs ZIP Codes
                    </h3>
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3">
                    Covering Briargate (80920), Broadmoor (80906), Rockrimmon (80919), Powers (80922), Downtown (80903), and all residential ZIPs.
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-orange flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Full Coverage Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

            </div>
          </div>

          {/* Section 6: How Our Referral & Technical Dispatch Works */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Simple 4-Step Process
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-navy-950 mt-1">
                How Our Direct Phone Dispatch Works
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                We respect your time. When you call us, you bypass call center queues and talk directly to knowledgeable professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="drainhaus-card p-6 bg-white border border-slate-200 text-center relative">
                <div className="w-12 h-12 rounded-full bg-brand-orange text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="font-heading font-bold text-navy-950 text-base mb-2">
                  Call Direct
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Call <a href={SITE_CONFIG.phoneHref} className="font-bold text-navy-950 hover:text-brand-orange">{SITE_CONFIG.phoneDisplay}</a>. Describe the issue, error codes, and your unit’s brand.
                </p>
              </div>

              <div className="drainhaus-card p-6 bg-white border border-slate-200 text-center relative">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="font-heading font-bold text-navy-950 text-base mb-2">
                  Matched With Pro
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  We match your specific brand and location with a pre-vetted, licensed technician who carries OEM parts.
                </p>
              </div>

              <div className="drainhaus-card p-6 bg-white border border-slate-200 text-center relative">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="font-heading font-bold text-navy-950 text-base mb-2">
                  Clear Upfront Quote
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  The technician inspects the system, explains the failure mechanism, and provides a transparent quote before turning a wrench.
                </p>
              </div>

              <div className="drainhaus-card p-6 bg-white border border-slate-200 text-center relative">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="font-heading font-bold text-navy-950 text-base mb-2">
                  Hot Water Restored
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Repairs are completed, combustion is tested, and your home enjoys reliable, endless hot water once again.
                </p>
              </div>

            </div>
          </div>

          {/* Section 7: Frequently Asked Questions Accordion */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Got Questions?
              </span>
              <h2 className="text-3xl font-heading font-extrabold text-navy-950 mt-1">
                Frequently Asked Homeowner Questions
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Everything you need to know about tankless repair, costs, and high-altitude maintenance in Colorado Springs.
              </p>
            </div>

            <Accordion items={homeFaqs} />

            <div className="text-center mt-6">
              <Link href="/faq" className="in-content-link text-sm">
                View all 10 detailed FAQ guides & answers →
              </Link>
            </div>
          </div>

          {/* Section 8: Final Call to Action */}
          <div className="mt-20 max-w-4xl mx-auto text-center bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-navy-700">
            <div className="inline-flex items-center gap-2 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>Priority Dispatch Available Now</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white mb-4">
              Ready to Fix Your Tankless Water Heater in Colorado Springs?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Call our dedicated local technical line right now at <strong className="text-white">{SITE_CONFIG.phoneDisplay}</strong>. A friendly, knowledgeable dispatcher will review your symptoms and route an available technician directly to your door.
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-heading font-extrabold text-lg shadow-xl shadow-brand-orange/40 transform hover:scale-105 active:scale-95 transition-all"
            >
              <Phone className="w-6 h-6 fill-white" />
              <span>Call {SITE_CONFIG.phoneDisplay} Now</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
