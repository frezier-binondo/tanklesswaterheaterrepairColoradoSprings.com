import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  ShieldAlert,
  Clock,
  Flame,
  CheckCircle,
  MapPin,
  ChevronRight,
  ShieldCheck,
  ThermometerSnowflake,
  Mountain,
  Activity,
  Layers,
  ArrowRight,
  FileCheck,
  Star,
  ExternalLink,
  Phone,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";
import Accordion from "@/components/Accordion";
import { LocalBusinessSchema, FAQSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Water Heater Repair in Colorado Springs, CO",
  description:
    "Fast, licensed water heater repair in Colorado Springs, CO. Expert diagnostics for atmospheric gas, dual electric elements, and tankless units. Call (719) 602-1977.",
};

const faqs = [
  {
    question: "How quickly can a technician respond for water heater repair in Colorado Springs?",
    answer:
      "For urgent situations such as active water leaks, failed gas control valves, or complete hot water loss during sub-zero Front Range cold snaps, local technician dispatch typically arrives within 45 to 60 minutes across Colorado Springs, Manitou Springs, and Fountain. Routine troubleshooting appointments can also be scheduled same-day or at your convenience.",
  },
  {
    question: "How does Colorado Springs' 6,035+ ft altitude affect water heater operation?",
    answer:
      "Because atmospheric pressure drops significantly at mile-high and alpine elevations, combustion air contains roughly 18% to 20% less oxygen than at sea level. Standard atmospheric gas water heaters require high-altitude orifice derating (typically 4% derate per 1,000 feet above 2,000 feet) and precise draft hood spill testing to ensure full combustion without producing elevated carbon monoxide (CO) or soot accumulation.",
  },
  {
    question: "What causes popping or rumbling noises in my water heater tank?",
    answer:
      "Popping, cracking, or 'kettling' noises are caused by calcium and magnesium mineral scale accumulating at the bottom of the tank. As the gas burner ignites beneath the tank, trapped water under the hardened sediment boils violently, creating steam bubbles that burst through the scale layer. This insulating sediment drastically reduces heating efficiency and will eventually cause the steel bottom seam to crack if not professionally flushed and descaled.",
  },
  {
    question: "Do water heater repairs in El Paso County require a building permit?",
    answer:
      "Minor component repairs—such as replacing a thermocouple, heating element, thermostat, or temperature-and-pressure (T&P) relief valve—generally do not require a separate permit. However, complete water heater replacements, gas line modifications, or major flue venting reconfigurations fall under the jurisdiction of the Pikes Peak Regional Building Department (PPRBD) and require an official mechanical/plumbing permit and final safety inspection.",
  },
  {
    question: "Why is hot water running out after only a few minutes in an electric water heater?",
    answer:
      "This symptom almost always points to a burned-out lower heating element or a failed lower thermostat. In dual-element electric water heaters, the upper element heats the top third of the tank first, then switches power to the lower element to heat the rest. If the lower element fails, only a small reservoir of hot water remains at the top of the tank, resulting in showers turning lukewarm within three to five minutes.",
  },
  {
    question: "Should I repair or replace my aging water heater?",
    answer:
      "If your water heater is under 8 to 10 years old and the repair involves an external component (such as an electrical element, gas control valve, thermal expansion tank, or flame sensor), a repair is generally the most cost-effective solution. However, if the steel storage tank itself is leaking from the base or internal seam, the glass lining has failed, and a complete replacement is necessary because tank structural ruptures cannot be patched safely.",
  },
];

export default function WaterHeaterRepairPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Water Heater Repair", url: "/services/water-heater-repair" },
  ];

  const commonFailures = [
    {
      title: "Thermocouple / Flame Sensor Probe",
      symptom: "Pilot light lights when manually depressed, but extinguishes immediately upon releasing the control knob.",
      solution: "Clean heavy carbon and oxidation from the probe tip, verify minimum 25–30 millivolt output under flame load, or replace with a heavy-duty universal thermocouple assembly.",
      icon: Flame,
    },
    {
      title: "Upper & Lower Electric Elements",
      symptom: "Water is lukewarm, or showers run out of hot water in less than 3 to 4 minutes during morning usage.",
      solution: "Conduct digital multimeter resistance testing (12.8 ohms nominal for 4500W @ 240V), flush settled sediment from the base, and install low-watt-density resistored elements.",
      icon: Zap,
    },
    {
      title: "Electronic Gas Control Valve",
      symptom: "Burner fails to ignite, status LED flashes diagnostic error codes, or internal thermopile fails to hold solenoid open.",
      solution: "Test thermopile open/closed circuit voltage (minimum 350mV required), clear pilot orifice, and replace complete Honeywell or White-Rodgers gas control valve if internal electronic board has failed.",
      icon: Activity,
    },
    {
      title: "Temperature & Pressure (T&P) Relief Valve",
      symptom: "Continuous weeping or intermittent gushing of hot water from the 3/4-inch copper discharge drain pipe.",
      solution: "Test household water pressure (must be below 80 PSI per PPRBD code), inspect thermal expansion tank bladder pressure, and replace defective 150 PSI / 210°F ASME-rated relief valve.",
      icon: AlertTriangle,
    },
    {
      title: "Dip Tube Fracture / Disintegration",
      symptom: "Sudden loss of hot water recovery speed, or white polypropylene plastic fragments clogging faucet aerators and showerheads.",
      solution: "Extract broken cold water dip tube from top inlet nipple and install a cross-linked polyethylene diffuser tube designed to direct incoming water straight to the burner base.",
      icon: Wrench,
    },
    {
      title: "High-Altitude Flue Venting & Draft Hood",
      symptom: "Burner flame roll-out, melted plastic grommets atop the tank, or spillage of combustion exhaust into basement utility rooms.",
      solution: "Conduct draft gauge negative pressure testing, inspect B-vent chimney clearances, remove bird nests or snow caps, and verify compliant high-altitude combustion air intake.",
      icon: ShieldAlert,
    },
  ];

  return (
    <div className="bg-white">
      <LocalBusinessSchema
        name="Water Heater Repair in Colorado Springs, CO"
        description="Comprehensive diagnostic and repair services for atmospheric gas, dual element electric, and tankless water heaters across Colorado Springs and El Paso County."
        url={`${SITE_CONFIG.siteUrl}/services/water-heater-repair`}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
                <Flame className="w-3.5 h-3.5" />
                <span>24/7 Priority Emergency Dispatch • Colorado Springs, CO</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Water Heater Repair in Colorado Springs, CO
              </h1>
              <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl">
                Comprehensive diagnostics and repairs for residential gas, electric storage, and high-efficiency tankless water heating systems throughout Colorado Springs and El Paso County. Fast local technician dispatch, upfront written quotes, and 100% phone-first service.
              </p>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-navy-800">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>45–60 Min Response</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Licensed CO Plumbers</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Upfront Written Pricing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Mountain className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>PPRBD Code Compliant</span>
                </div>
              </div>

              {/* Call CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white text-base sm:text-lg font-bold px-7 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5 fill-white animate-pulse" />
                  <span>Call Dispatch: {SITE_CONFIG.phoneDisplay}</span>
                </a>
                <Link
                  href="/services"
                  className="bg-navy-800/80 hover:bg-navy-800 text-white font-semibold px-6 py-4 rounded-xl border border-navy-700 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <span>Explore Service Directory</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-navy-700 shadow-2xl">
                <Image
                  src="/images/services/service-circuit-board-multimeter.jpg"
                  alt="Certified water heater technician testing electrical diagnostics on heating system in Colorado Springs"
                  width={600}
                  height={420}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md p-4 rounded-xl border border-navy-800 text-xs text-slate-300">
                  <div className="font-bold text-white mb-1 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-brand-orange" />
                    <span>Mobile Front Range Service Vans</span>
                  </div>
                  Stocked with OEM gas valves, thermostats, dual 240V heating elements, and electronic thermocouples.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Section 1: Overview & High Altitude Realities */}
              <div className="prose prose-slate max-w-none text-slate-700 space-y-5 leading-relaxed">
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950 tracking-tight">
                  Reliable, Licensed Water Heater Repair Across Colorado Springs & El Paso County
                </h2>
                <p>
                  When your hot water supply fails in Colorado Springs, waiting days for an appointment or enduring unanswered online web forms is simply not an option. Between sub-zero winter temperatures rolling off Pikes Peak, frigid 38°F municipal groundwater entering from mountain reservoirs, and complex high-altitude combustion demands, residential water heating systems in El Paso County operate under tremendous mechanical stress.
                </p>
                <p>
                  At <strong>Tankless Water Heater Repair in Colorado Springs</strong>, our technical network connects residential homeowners, multi-family landlords, and commercial property managers throughout Colorado Springs with vetted, insured, and licensed Colorado plumbing professionals specializing in complete water heater diagnostics and repair. Whether your property utilizes a traditional atmospheric gas storage tank, a modern power-vented unit, a heavy-amperage 240V electric system, or a high-efficiency condensing tankless system, our mobile partners arrive equipped with the electronic meters, replacement valves, and heating elements necessary to resolve your breakdown in a single prompt visit.
                </p>
              </div>

              {/* Section 2: Multi-Point Diagnostic Protocol */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2.5 text-brand-orange font-bold text-xs uppercase tracking-wider mb-2">
                  <Activity className="w-4 h-4" />
                  <span>Technical Diagnostic Protocol</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-950 mb-4">
                  Our Multi-Point Diagnostic & Safety Protocol for Water Heater Repair
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Every service visit begins with a systematic inspection of the heat source, fuel lines, venting, safety relief valves, and electrical circuitry. Our partner technicians follow rigorous diagnostic standards to isolate the root cause before recommending a component repair or replacement:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base">
                        Combustion Pressure & Electrical Circuit Testing
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                        Precision digital manometer measurement of static and dynamic natural gas pressure (verifying 5.0 to 7.0 inches Water Column on Colorado Springs Utilities lines) or dual 240V element continuity and resistance testing with high-accuracy digital multimeters.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base">
                        Thermal Imaging & Acoustic Leak Isolation
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                        Infrared thermal imaging along dielectric nipples, copper flex connectors, brass drain cocks, and perimeter tank seams to distinguish between condensation weeping, valve gland leakage, and catastrophic inner vessel failure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base">
                        Sediment Calcification & Heat Transfer Inspection
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                        Sediment depth assessment inside the lower vessel dome. Pikes Peak granitic runoff and Fountain Creek alluvial minerals precipitate as hard calcium crusts, creating hot spots that crack internal porcelain glass linings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base">
                        Sacrificial Anode Rod Depletion Analysis
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                        Measurement of remaining magnesium or aluminum sacrificial anode mass. When the sacrificial rod depletes below 25% core wire exposure, corrosive galvanic reactions immediately target the exposed steel tank walls.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base">
                        Water Pressure Regulation & PRV Verification
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                        Testing street delivery pressure to verify it remains under the strict 80 PSI maximum mandated by Pikes Peak Regional Building Department (PPRBD) plumbing codes. Pressure spikes from mountain elevation changes require functional thermal expansion tanks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Common Component Failures Grid */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-extrabold text-navy-950 tracking-tight">
                    Common Component Failures & Professional Solutions
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2">
                    Water heaters rarely break down without subtle preliminary warnings. Review the most frequent mechanical issues diagnosed by Colorado Springs plumbing specialists:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {commonFailures.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-navy-50 text-brand-orange flex items-center justify-center flex-shrink-0">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <h4 className="font-heading font-bold text-navy-950 text-base">
                            {item.title}
                          </h4>
                        </div>
                        <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                          <p>
                            <strong className="text-slate-900">Symptom:</strong> {item.symptom}
                          </p>
                          <p className="pt-1.5 border-t border-slate-100">
                            <strong className="text-brand-orange font-semibold">Solution:</strong> {item.solution}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 4: Colorado Springs Water Hardness & Altitude */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider">
                  <Mountain className="w-4 h-4" />
                  <span>Regional Water Quality & Elevation Chemistry</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                  Colorado Springs Hard Water & High-Altitude Impact on Water Heaters
                </h3>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Tap water throughout Colorado Springs originates from high-altitude surface collection across the Continental Divide, including the Homestake, Fryingpan-Arkansas, and Twin Lakes collection systems, supplemented by local runoff from the Pikes Peak North and South Slope watersheds. Managed by <strong>Colorado Springs Utilities (CSU)</strong>, mineral hardness typically measures between <strong>60 and 120+ mg/L (approximately 3.5 to 7.0 grains per gallon)</strong> in metropolitan zones, rising significantly higher (12 to 18+ gpg) in eastern El Paso County communities such as Falcon and Peyton where private well systems tap deep alluvial aquifers.
                  </p>
                  <p>
                    When hard water is heated above 125°F, dissolved calcium carbonate and magnesium precipitate out of solution, falling to the bottom of storage tanks or encrusting heating elements and copper heat exchanger tubes. In storage water heaters, this insulating crust acts as a thermal barrier between the gas burner and the water, forcing the burner to fire significantly longer to achieve desired temperatures. Homeowners frequently hear loud, frightening popping, knocking, or kettling sounds as trapped water beneath the sediment flashes into superheated steam.
                  </p>
                  <p>
                    Furthermore, at Colorado Springs' baseline elevation of <strong>6,035 feet</strong> (extending above 7,400 feet in Rockrimmon and 8,500 feet in Woodland Park), atmospheric air density is roughly 20% lower than at sea level. Standard atmospheric draft hoods must draft cleanly against dense, cold winter air in utility chimneys without backdrafting toxic carbon monoxide into living quarters.
                  </p>
                </div>
                <div className="pt-4 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                  <span>Data verified via Colorado Springs Utilities (CSU) Water Quality Reports</span>
                  <a
                    href="https://www.csu.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-orange hover:text-white inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Visit Colorado Springs Utilities</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Section 5: Local Neighborhoods & Housing Dynamics */}
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-extrabold text-navy-950 tracking-tight">
                  Local Colorado Springs Housing Types & Plumbing Dynamics
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our network technicians provide rapid same-day water heater repair across every neighborhood in Colorado Springs and neighboring El Paso County jurisdictions:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base mb-1.5 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                      <span>Historic Downtown & Old Colorado City</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Charming turn-of-the-century Victorian homes and bungalows frequently feature masonry chimney flues, cramped cellar access, and legacy galvanized piping that require custom B-vent adapters, dielectric isolation unions, and draft spill testing.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base mb-1.5 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                      <span>Broadmoor & Cheyenne Mountain</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Hillside luxury properties experience dramatic municipal pressure surges (often 100+ PSI from high-elevation water tanks). Technicians routinely calibrate pressure-reducing valves (PRVs) and install oversized 4.5-gallon thermal expansion tanks to prevent tank seam ruptures.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base mb-1.5 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                      <span>Briargate, Cordera & Northgate (D-20)</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Modern two-story suburban homes with high simultaneous morning water demand. Common repairs involve multi-stage power-vent blowers, electronic thermopiles, recirculation return pumps, and dual 5500W electric element replacements.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <h4 className="font-heading font-bold text-navy-950 text-sm sm:text-base mb-1.5 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                      <span>Falcon, Peyton & Black Forest</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Semi-rural acreages utilizing private well pumps with elevated mineral hardness and liquefied petroleum (propane/LP) storage tanks. Technicians carry specialized LP gas conversion orifices and heavy-duty sacrificial anode rods.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6: PPRBD Building Codes & Safety Standards */}
              <div className="border-l-4 border-brand-orange bg-slate-50 p-6 rounded-r-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900">
                  <FileCheck className="w-4 h-4 text-brand-orange" />
                  <span>Pikes Peak Regional Building Department (PPRBD) Standards</span>
                </div>
                <h3 className="text-xl font-heading font-extrabold text-navy-950">
                  Colorado Plumbing Codes & Safety Compliance
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  In Colorado Springs and El Paso County, mechanical and plumbing installations are regulated by the <strong>Pikes Peak Regional Building Department (PPRBD)</strong> under the International Plumbing Code (IPC) and International Fuel Gas Code (IFGC). While standard component replacements (such as thermocouple cleaning or element swaps) do not trigger new permit fees, any major water heater replacement, gas line extension, or flue redesign must adhere strictly to local safety mandates:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>Calibrated thermal expansion tanks on closed-loop meters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>ASME-rated 150 PSI / 210°F T&P relief valves piped within 6" of floor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>Dedicated gas sediment trap (drip leg) before control valve</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>High-altitude combustion derating & B-vent clearances</span>
                  </li>
                </ul>
                <div className="text-xs text-slate-500 pt-2">
                  Official code requirements can be verified at{" "}
                  <a
                    href="https://www.pprbd.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-orange hover:underline font-semibold"
                  >
                    Pikes Peak Regional Building Department (PPRBD)
                  </a>.
                </div>
              </div>

              {/* Section 7: Transparent Pricing Breakdown */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl font-heading font-extrabold text-navy-950 tracking-tight">
                  Transparent Pricing & Written Repair Estimates
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We believe Colorado Springs homeowners deserve complete financial clarity before any technician turns a wrench. Typical component repair ranges in El Paso County include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Minor Component Fixes</span>
                    <span className="text-2xl font-heading font-extrabold text-navy-950 my-1 block">$150 – $295</span>
                    <p className="text-xs text-slate-600">Thermocouple replacement, heating element swaps, thermostat calibration, or relief valve replacement.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Complex Diagnostics</span>
                    <span className="text-2xl font-heading font-extrabold text-navy-950 my-1 block">$325 – $650</span>
                    <p className="text-xs text-slate-600">Electronic gas control valve replacement, thermal expansion tank additions, or flue draft re-piping.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Full System Upgrades</span>
                    <span className="text-2xl font-heading font-extrabold text-navy-950 my-1 block">Custom Quote</span>
                    <p className="text-xs text-slate-600">Tankless retrofit conversions, high-efficiency hybrid heat pump installs with full PPRBD permitting.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 italic pt-2 text-center">
                  *Every dispatched technician provides an itemized, written quote on-site before commencing any work. Zero surprise fees.
                </p>
              </div>

              {/* Section 8: What to Have Ready */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-950">
                  What Homeowners Should Have Ready When Calling
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To ensure our dispatch desk matches you immediately with a technician carrying the exact replacement parts for your system, please take a quick look at your water heater before calling:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-navy-950 text-xs sm:text-sm">Fuel Source</h4>
                      <p className="text-xs text-slate-600">Natural gas, LP propane (black pipe & viewing glass), or 240V electric (metallic electrical conduit).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-navy-950 text-xs sm:text-sm">System Configuration</h4>
                      <p className="text-xs text-slate-600">Traditional upright storage tank (40, 50, or 75 gal) or wall-hung on-demand tankless unit.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-navy-950 text-xs sm:text-sm">Brand & Model Number</h4>
                      <p className="text-xs text-slate-600">Located on rating plate label (e.g., Bradford White, Rheem, A.O. Smith, State, Navien, Rinnai).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-navy-950 text-xs sm:text-sm">Observed Malfunction</h4>
                      <p className="text-xs text-slate-600">Complete ice cold water, active water pooling, loud banging sounds, or pilot ignition failure.</p>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Safety Notice:</strong> If you detect a strong sulfur or rotten-egg odor indicative of natural gas, evacuate the premises immediately and call Colorado Springs Utilities emergency gas dispatch (719-448-4800) or 911 from a safe distance before requesting plumbing service.
                  </span>
                </div>
              </div>

              {/* Section 9: FAQ Accordion */}
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-extrabold text-navy-950 tracking-tight">
                  Frequently Asked Questions About Water Heater Repair
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  Expert answers to common questions about repairing water heaters across Colorado Springs and El Paso County:
                </p>
                <div className="pt-2">
                  <Accordion items={faqs} />
                </div>
              </div>

              {/* In-Content Phone Caller Card */}
              <PhoneCallerCard
                title="Need Fast Water Heater Repair in Colorado Springs?"
                subtitle="Speak directly to our local technical dispatch desk. We will diagnose your symptoms and route a licensed technician to your home."
              />

            </div>

            {/* Right Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Sticky Priority Call Box */}
              <div className="bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-2xl p-6 border-2 border-brand-orange/40 shadow-xl sticky top-24">
                <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
                  <Phone className="w-4 h-4 animate-bounce" />
                  <span>24/7 Phone-Only Dispatch</span>
                </div>
                <h4 className="text-xl font-heading font-bold text-white mb-2">
                  Immediate Technician Scheduling
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed mb-5">
                  We don’t operate web quote forms or automated email queues. Call right now to speak with a knowledgeable dispatcher who can route an available technician to your home.
                </p>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-4 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5 text-base"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </a>
                <div className="text-center text-[11px] text-slate-400 mt-3 space-y-1">
                  <p>Average response: 45 to 60 minutes</p>
                  <p>Serving all Colorado Springs ZIP codes</p>
                </div>

                <hr className="border-navy-800 my-5" />

                {/* Related Service Silos */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Specialized Water Heater Silos
                  </h5>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <Link
                        href="/tankless-water-heater-repair"
                        className="flex items-center justify-between text-slate-300 hover:text-white p-2 rounded-lg hover:bg-navy-800/60 transition-colors"
                      >
                        <span>Tankless Water Heater Repair</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tankless-water-heater-repair/emergency"
                        className="flex items-center justify-between text-slate-300 hover:text-white p-2 rounded-lg hover:bg-navy-800/60 transition-colors"
                      >
                        <span className="text-red-400 font-medium">Emergency 24/7 Repair</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tankless-water-heater-repair/same-day"
                        className="flex items-center justify-between text-slate-300 hover:text-white p-2 rounded-lg hover:bg-navy-800/60 transition-colors"
                      >
                        <span>Same-Day Repair Service</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tankless-water-heater-repair/gas"
                        className="flex items-center justify-between text-slate-300 hover:text-white p-2 rounded-lg hover:bg-navy-800/60 transition-colors"
                      >
                        <span>Gas Water Heater Diagnostics</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tankless-water-heater-repair/electric"
                        className="flex items-center justify-between text-slate-300 hover:text-white p-2 rounded-lg hover:bg-navy-800/60 transition-colors"
                      >
                        <span>Electric Element & Thermostat Fix</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tankless-water-heater-installation"
                        className="flex items-center justify-between text-slate-300 hover:text-white p-2 rounded-lg hover:bg-navy-800/60 transition-colors"
                      >
                        <span>Installation & High-Altitude Sizing</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tankless-water-heater-maintenance/descaling"
                        className="flex items-center justify-between text-slate-300 hover:text-white p-2 rounded-lg hover:bg-navy-800/60 transition-colors"
                      >
                        <span>Hard Water Sediment Flushing</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                      </Link>
                    </li>
                  </ul>
                </div>

                <hr className="border-navy-800 my-5" />

                {/* Regional Markets */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Nearby Service Communities
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Link
                      href="/locations/monument"
                      className="p-2 bg-navy-900 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors block text-center"
                    >
                      Monument, CO
                    </Link>
                    <Link
                      href="/locations/fountain"
                      className="p-2 bg-navy-900 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors block text-center"
                    >
                      Fountain, CO
                    </Link>
                    <Link
                      href="/locations/manitou-springs"
                      className="p-2 bg-navy-900 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors block text-center"
                    >
                      Manitou Springs
                    </Link>
                    <Link
                      href="/locations/woodland-park"
                      className="p-2 bg-navy-900 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors block text-center"
                    >
                      Woodland Park
                    </Link>
                  </div>
                  <Link
                    href="/locations"
                    className="mt-3 block text-center text-xs text-brand-orange hover:text-white transition-colors font-semibold"
                  >
                    View All El Paso County Locations →
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
