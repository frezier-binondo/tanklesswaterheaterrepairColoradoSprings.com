import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  ExternalLink,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";
import { LOCATIONS_DATA } from "@/data/locationsData";

export const metadata = {
  title: "Tankless Water Heater Service Areas Near Colorado Springs",
  description:
    "Local tankless water heater repair & installation coverage across Colorado Springs, Monument, Fountain, Manitou Springs, Woodland Park, and Falcon. Call (719) 602-1977.",
};

export default function LocationsHubPage() {
  const breadcrumbs = [{ name: "Locations", url: "/locations" }];

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
            <MapPin className="w-3.5 h-3.5" />
            <span>Pikes Peak Region Service Footprint</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Tankless Water Heater Service Areas in Colorado Springs & Surrounding Markets
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
            From the high alpine peaks of Woodland Park down to the Fountain Valley plains, elevation, water chemistry, and winter weather vary dramatically. Explore our dedicated technical service coverage within a 20-mile radius of Colorado Springs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.phoneHref}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-heading font-extrabold text-base flex items-center gap-2 shadow-xl shadow-brand-orange/30 transform hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Direct Dispatch: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content (2,000+ words locally optimized content) */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Geographic Reality of the Pikes Peak Region */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <div className="border-l-4 border-brand-orange pl-4 sm:pl-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                Regional Elevation & Water Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950 mt-1">
                Why Service Area Location Matters for Tankless Systems in El Paso & Teller Counties
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
              <p>
                In the plumbing industry, most contractors treat a metropolitan area as a uniform flat plain. Along the Colorado Front Range, doing so leads to catastrophic equipment failures, repeated error code lockouts, and disgruntled homeowners taking freezing showers. Between our lowest service boundary in Fountain (5,500 feet) and our highest in Woodland Park (nearly 8,500 feet), there is a staggering 3,000-foot vertical difference.
              </p>
              <p>
                That elevation swing transforms how air enters combustion chambers, how natural gas burns, how winter cold snaps chill groundwater, and how mineral scale crystallizes. A tankless unit installed in Monument requires completely different DIP switch settings and venting considerations than a unit operating in downtown Colorado Springs or an agricultural property in Falcon.
              </p>
              <p>
                Here is how geographic factors dictate tankless service protocols across our six primary market zones:
              </p>
            </div>
          </div>

          {/* 5 Surrounding Markets Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Monument */}
            <div className="drainhaus-card overflow-hidden bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={LOCATIONS_DATA.monument.heroImage}
                    alt="Monument CO Tankless Water Heater Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded">
                    6,900 ft
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-extrabold text-navy-950 mb-2">
                    Monument, CO
                  </h3>
                  <p className="text-xs text-brand-orange font-bold uppercase tracking-wider mb-3">
                    Tri-Lakes • Jackson Creek • Palmer Lake
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Sitting directly on the Palmer Divide, Monument experiences sub-zero winter temperatures, severe wind gusts, and frigid incoming groundwater (36°F). Units require winterization against frozen condensate lines and high-altitude gas combustion tuning.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>ZIP: 80132 Coverage</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Tri-Lakes Well & Hard Water Descaling</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/locations/monument"
                  className="w-full bg-navy-900 hover:bg-brand-orange text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Monument Location Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Fountain */}
            <div className="drainhaus-card overflow-hidden bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={LOCATIONS_DATA.fountain.heroImage}
                    alt="Fountain CO Tankless Water Heater Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded">
                    5,500 ft
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-extrabold text-navy-950 mb-2">
                    Fountain, CO
                  </h3>
                  <p className="text-xs text-brand-orange font-bold uppercase tracking-wider mb-3">
                    Mesa Ridge • Cross Creek • Widefield
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Located just south of Colorado Springs near Fort Carson. Subdivisions here have high hot water demands from active families. Many older homes are actively converting from 40-gallon tanks to high-output 199,000 BTU tankless units.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>ZIP: 80817 Coverage</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Tank-to-Tankless Gas Line Upgrades</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/locations/fountain"
                  className="w-full bg-navy-900 hover:bg-brand-orange text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Fountain Location Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Manitou Springs */}
            <div className="drainhaus-card overflow-hidden bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={LOCATIONS_DATA["manitou-springs"].heroImage}
                    alt="Manitou Springs CO Tankless Water Heater Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded">
                    6,400 ft
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-extrabold text-navy-950 mb-2">
                    Manitou Springs, CO
                  </h3>
                  <p className="text-xs text-brand-orange font-bold uppercase tracking-wider mb-3">
                    Historic Downtown • Ruxton • Crystal Park
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Historic Victorian architecture and mountain foothill topography present unique venting challenges. Older mechanical spaces demand side-wall concentric venting adaptations and aggressive descaling for mineral-rich foothill spring water.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>ZIP: 80829 Coverage</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Historic Zero-Clearance Venting</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/locations/manitou-springs"
                  className="w-full bg-navy-900 hover:bg-brand-orange text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Manitou Springs Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Woodland Park */}
            <div className="drainhaus-card overflow-hidden bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={LOCATIONS_DATA["woodland-park"].heroImage}
                    alt="Woodland Park CO Tankless Water Heater Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded">
                    8,500 ft
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-extrabold text-navy-950 mb-2">
                    Woodland Park, CO
                  </h3>
                  <p className="text-xs text-brand-orange font-bold uppercase tracking-wider mb-3">
                    Teller County • Divide • Paradise Estates
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    At 8,500 feet, air density is 26% lower than sea level. Many homes run on LP propane requiring dedicated two-stage regulators. Harsh alpine winters demand high-capacity freeze protection and precise blower calibration.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>ZIP: 80863 & 80866 Coverage</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Alpine Propane & Altitude Derating</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/locations/woodland-park"
                  className="w-full bg-navy-900 hover:bg-brand-orange text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Woodland Park Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Falcon */}
            <div className="drainhaus-card overflow-hidden bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={LOCATIONS_DATA.falcon.heroImage}
                    alt="Falcon CO Tankless Water Heater Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded">
                    7,200 ft
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-extrabold text-navy-950 mb-2">
                    Falcon, CO
                  </h3>
                  <p className="text-xs text-brand-orange font-bold uppercase tracking-wider mb-3">
                    Meridian Ranch • Woodmen Hills • Peyton
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Prairie winds and deep bedrock well water supplies from the Arapahoe and Denver basins define Falcon plumbing. Units require wind-baffle vent terminations and intensive chemical descaling to dissolve silica and calcium.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>ZIP: 80831 Coverage</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Deep Well Mineral & Silica Treatment</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/locations/falcon"
                  className="w-full bg-navy-900 hover:bg-brand-orange text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Falcon Location Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Colorado Springs Core */}
            <div className="drainhaus-card overflow-hidden bg-navy-950 text-white border border-navy-800 flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-heading font-extrabold text-white">
                    Colorado Springs (Main Hub)
                  </h3>
                  <span className="text-xs bg-brand-orange text-white font-bold px-2.5 py-1 rounded">
                    6,035 ft
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Our central dispatch base covers all residential ZIP codes throughout Colorado Springs. From Briargate to Broadmoor, we coordinate same-day repairs, 24/7 emergency freeze calls, and code-compliant installations.
                </p>
                <div className="border-t border-navy-800 pt-3 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Neighborhoods Covered:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                    <span>• Briargate (80920)</span>
                    <span>• Broadmoor (80906)</span>
                    <span>• Rockrimmon (80919)</span>
                    <span>• Powers (80922)</span>
                    <span>• Stetson Hills (80923)</span>
                    <span>• Old Colorado (80904)</span>
                    <span>• Downtown (80903)</span>
                    <span>• Northgate (80921)</span>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/tankless-water-heater-repair"
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Colorado Springs Repair Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Section 2: Deep Dive into Neighborhood Plumbing Dynamics */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950 border-l-4 border-navy-800 pl-4 sm:pl-6">
              Neighborhood-by-Neighborhood Service Analysis in Colorado Springs
            </h2>

            <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6">
              <h3 className="text-xl font-heading font-bold text-navy-950">
                Briargate, Northgate & Cordera (80920, 80921, 80924)
              </h3>
              <p>
                These northern Colorado Springs master-planned communities feature newer suburban single-family homes built over the past two decades. A high percentage of homes here were constructed with high-efficiency direct-vent systems. However, because homes often exceed 3,500 square feet with multiple bathrooms, peak hot water demand is high. Technicians in this corridor frequently service <Link href="/tankless-water-heater-repair/navien" className="in-content-link">Navien NPE units</Link> with ComfortFlow recirculation pumps that ensure instant hot water across sprawling multi-story floorplans.
              </p>

              <h3 className="text-xl font-heading font-bold text-navy-950">
                Old Colorado City & Downtown Historic Core (80903, 80904)
              </h3>
              <p>
                Older and historic bungalows near downtown feature aging utility basements, 1/2-inch galvanized or black iron gas lines, and limited electrical panel headroom (often 100-amp service). When homeowners here upgrade to tankless equipment, careful gas line sizing and concentric venting routing through masonry or rim joists is essential. Our installers review <Link href="/blog/gas-line-sizing-199k-btu-tankless-colorado" className="in-content-link">gas pipe sizing requirements</Link> before every installation to guarantee code compliance with the <a href="https://www.pprbd.org" target="_blank" rel="noopener noreferrer" className="in-content-link">Pikes Peak Regional Building Department (PPRBD)</a>.
              </p>

              <h3 className="text-xl font-heading font-bold text-navy-950">
                Broadmoor & Southwest Foothills (80906)
              </h3>
              <p>
                The luxury estates in the Broadmoor and Cheyenne Mountain foothills often feature complex multi-unit tandem tankless setups—such as paired <Link href="/tankless-water-heater-repair/noritz" className="in-content-link">Noritz NRC commercial heaters</Link> connected with electronic Quick-Connect cables. When one unit in a paired setup suffers an ignition lockout, our network technicians can balance flow manifolds and calibrate stage controllers.
              </p>

              <h3 className="text-xl font-heading font-bold text-navy-950">
                Powers Corridor & Stetson Hills (80922, 80923)
              </h3>
              <p>
                The eastern residential belt along Powers Boulevard is characterized by mid-1990s to 2010s family housing. Many original builder-grade 50-gallon tank water heaters are now failing from corrosion. Homeowners are actively converting to on-demand tankless units to eliminate basement flood risks. Technicians provide fast <Link href="/tankless-water-heater-installation" className="in-content-link">tank-to-tankless conversion assessments</Link> and upfront estimates.
              </p>
            </div>
          </div>

          {/* Section 3: Phone-Only Conversion Card */}
          <div className="max-w-5xl mx-auto mb-16">
            <PhoneCallerCard
              title="Need Service in Monument, Fountain, or Woodland Park?"
              subtitle="Call our central Colorado Springs dispatch line. Tell us your address and symptoms, and we will route an available technician to your home."
            />
          </div>

          {/* Section 4: Map & Regional Dispatch Facts */}
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <h3 className="text-lg font-heading font-bold text-navy-950 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-orange" />
              <span>Rapid Regional Dispatch Standards</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Central Colorado Springs:</strong> Average arrival window of 2 to 3 hours for emergency calls.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Monument & Tri-Lakes:</strong> Routed via I-25 North corridor; technicians carry Palmer Divide freeze kits.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Woodland Park & Teller County:</strong> Dispatched via US-24 West up Ute Pass with high-altitude calibrated equipment.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Falcon & Peyton:</strong> Direct eastern dispatch along Highway 24 with well water testing and spin-down filter cartridges.</span>
              </li>
            </ul>
          </div>

          {/* External Reference */}
          <div className="mt-8 text-center text-xs text-slate-500">
            For local building code and permit verification across all El Paso County jurisdictions, visit the{" "}
            <a
              href="https://www.pprbd.org"
              target="_blank"
              rel="noopener noreferrer"
              className="in-content-link"
            >
              Pikes Peak Regional Building Department (PPRBD)
            </a>
            .
          </div>

        </div>
      </section>
    </div>
  );
}
