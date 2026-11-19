export interface LocationInfo {
  slug: string;
  name: string;
  county: string;
  elevation: string;
  population: string;
  zipCodes: string[];
  neighborhoods: string[];
  distanceFromSprings: string;
  heroImage: string;
  description: string;
  uniqueChallenges: string[];
  waterCharacteristics: string;
  recommendedMaintenance: string;
  commonErrorCodes: string[];
  metaTitle: string;
  metaDescription: string;
}

export const LOCATIONS_DATA: Record<string, LocationInfo> = {
  monument: {
    slug: "monument",
    name: "Monument, CO",
    county: "El Paso County",
    elevation: "6,900 ft",
    population: "10,500+",
    zipCodes: ["80132"],
    neighborhoods: ["Tri-Lakes", "Jackson Creek", "Palmer Lake Border", "Promontory Pointe", "Bent Tree", "Kings Deer"],
    distanceFromSprings: "18 miles North",
    heroImage: "/images/services/service-outdoor-van-installation.jpg",
    description: "Located right on the Palmer Divide at nearly 7,000 feet, Monument experiences significantly colder winter nights than central Colorado Springs. Incoming winter municipal water often drops into the mid-30s Fahrenheit, demanding maximum heating output and strict freeze protection for condensate lines.",
    uniqueChallenges: [
      "Sub-zero winter windchills on the Palmer Divide that freeze exterior wall condensate lines",
      "Elevation derating of gas combustion chambers requiring high-altitude dip switch calibration",
      "Tri-Lakes area well and municipal water hardness causing accelerated heat exchanger calcification",
      "High winter peak hot water demand when incoming groundwater reaches 36°F to 39°F"
    ],
    waterCharacteristics: "Moderate to high mineral hardness (120-190 mg/L) requiring annual descaling with food-grade virgin citric solution.",
    recommendedMaintenance: "Every 9 to 12 months, including intake air filter vacuuming and freeze protection heating coil validation.",
    commonErrorCodes: ["Navien E003 (Flame Failure during high wind)", "Rinnai Code 11 (Ignition fault in thin air)", "Noritz 11 (Burner ignition delay)"],
    metaTitle: "Tankless Water Heater Repair Monument CO",
    metaDescription: "Fast, reliable tankless water heater repair in Monument, CO. Specialized high-altitude diagnostics for Navien, Rinnai, Noritz in Tri-Lakes & Jackson Creek. Call (456) 789-0123."
  },
  fountain: {
    slug: "fountain",
    name: "Fountain, CO",
    county: "El Paso County",
    elevation: "5,545 ft",
    population: "30,000+",
    zipCodes: ["80817"],
    neighborhoods: ["Fountain Valley", "Cross Creek", "Mesa Ridge", "Widefield", "Countryside", "Heritage"],
    distanceFromSprings: "13 miles South",
    heroImage: "/images/services/service-gas-burner-maintenance.jpg",
    description: "Situated south of Colorado Springs adjacent to Fort Carson, Fountain has a high concentration of growing military and civilian family subdivisions. Many homes built with 40-50 gallon tank units are actively converting to high-efficiency tankless systems for continuous laundry and multi-bath capacity.",
    uniqueChallenges: [
      "Frequent undersized 1/2-inch legacy gas piping from standard builder tank conversions",
      "High household peak demand with concurrent showers and laundry requiring 199,000 BTU input",
      "Sediment and calcium carbonate scale buildup from Fountain Valley aquifer supplies",
      "Exhaust termination clearance challenges in tightly spaced modern suburban lot configurations"
    ],
    waterCharacteristics: "High calcium mineral content (140-210 mg/L) causing heat exchanger scale constriction within 14-18 months without service.",
    recommendedMaintenance: "Annual descaling and isolation valve flush; sediment screen inspection every 6 months.",
    commonErrorCodes: ["Navien E016 (Heat Exchanger Overheat due to scale)", "Rinnai Code 14 (Thermal fuse tripped)", "Noritz 16 (Outlet temperature abnormal)"],
    metaTitle: "Tankless Water Heater Repair Fountain CO",
    metaDescription: "Expert tankless water heater repair in Fountain, CO. Serving Mesa Ridge, Cross Creek, and Widefield. Gas and electric troubleshooting. Call (456) 789-0123."
  },
  "manitou-springs": {
    slug: "manitou-springs",
    name: "Manitou Springs, CO",
    county: "El Paso County",
    elevation: "6,412 ft",
    population: "5,400+",
    zipCodes: ["80829"],
    neighborhoods: ["Historic Downtown", "Ruxton Avenue", "Crystal Park Corridor", "Cascade Foothills", "Pawnee Avenue", "Iron Springs"],
    distanceFromSprings: "6 miles West",
    heroImage: "/images/services/service-pipe-wrench-valves.jpg",
    description: "Nestled at the base of Pikes Peak, Manitou Springs features century-old Victorian architecture, historic stone foundations, and compact utility closets. Technicians must understand non-standard zero-clearance venting, retrofitted masonry chases, and spring water mineral dynamics.",
    uniqueChallenges: [
      "Extremely tight interior mechanical closets requiring side-wall concentric venting adaptations",
      "Historic residential masonry structures requiring core diamond drilling for direct-vent intakes",
      "Heavy mineral-rich water from mountain basin runoff causing stubborn mineral scale crusting",
      "Older electrical services (60-100 amp panels) requiring careful analysis before electric tankless upgrades"
    ],
    waterCharacteristics: "Naturally mineral-saturated foothill water that crystallizes quickly on stainless steel and copper heat exchangers.",
    recommendedMaintenance: "Strict annual descaling with citric acid and flame sensor wire burnishing.",
    commonErrorCodes: ["Noritz 90 (Combustion abnormal / vent restriction)", "Navien E110 (Exhaust vent blockage)", "Rinnai Code 10 (Air intake obstruction)"],
    metaTitle: "Tankless Water Heater Repair Manitou Springs CO",
    metaDescription: "Specialized tankless water heater repair in Manitou Springs, CO. Historic home venting, tight-clearance retrofits, and mineral descaling. Call (456) 789-0123."
  },
  "woodland-park": {
    slug: "woodland-park",
    name: "Woodland Park, CO",
    county: "Teller County",
    elevation: "8,465 ft",
    population: "7,800+",
    zipCodes: ["80863", "80866"],
    neighborhoods: ["Downtown Woodland Park", "Woodland Heights", "Paradise Estates", "Divide Foothills", "Sherwood Forest", "Rampart Range Corridor"],
    distanceFromSprings: "18 miles Northwest via Hwy 24",
    heroImage: "/images/services/service-circuit-board-multimeter.jpg",
    description: "Sitting at almost 8,500 feet in the Rampart Range, Woodland Park is the most climatically demanding service zone in our territory. Air density is 26% lower than sea level, requiring specialized electronic manifold pressure re-calibration and heavy-duty freeze protection kits.",
    uniqueChallenges: [
      "Severe atmospheric derating requiring 4% gas input reduction per 1,000 ft over 2,000 ft",
      "Sub-zero alpine winters where exposed exhaust and intake PVC can collect icicles and frost blockages",
      "Incoming winter water temperatures reaching 34°F requiring extreme 85°F temperature rise (Delta-T)",
      "Propane (LPG) tank systems requiring two-stage regulators and correct orifice sizing"
    ],
    waterCharacteristics: "High granitic mineral particulates and well water sand requiring dual spin-down sediment pre-filters.",
    recommendedMaintenance: "Bi-annual inspection before and after winter; burner blower cleaning and freeze-stat testing.",
    commonErrorCodes: ["Navien E004 (False flame detection / ionization)", "Rinnai Code 12 (Flame rod ionization current drop)", "Noritz 72 (High-altitude flame rod failure)"],
    metaTitle: "Tankless Water Heater Repair Woodland Park CO",
    metaDescription: "Alpine tankless water heater repair in Woodland Park, CO. High-altitude gas calibration, propane conversions, and winter freeze recovery. Call (456) 789-0123."
  },
  falcon: {
    slug: "falcon",
    name: "Falcon, CO",
    county: "El Paso County",
    elevation: "7,200 ft",
    population: "14,000+",
    zipCodes: ["80831"],
    neighborhoods: ["Meridian Ranch", "Woodmen Hills", "Peyton Edge", "Black Forest Border", "Rolling Thunder", "Antler Creek"],
    distanceFromSprings: "14 miles Northeast via Hwy 24",
    heroImage: "/images/services/service-descaling-flush-bucket.jpg",
    description: "Located on the open plains northeast of Colorado Springs, Falcon combines expansive master-planned golf communities with sprawling semi-rural acreage lots. Tankless units here often run on Arapahoe and Denver Basin deep aquifer wells containing dissolved silica and iron minerals.",
    uniqueChallenges: [
      "Deep well water supplies with elevated mineral silica that forms tough glassy scale if not maintained",
      "Exposed windward prairie winds that can cause flue backdrafts without bird screens and wind caps",
      "Large square footage floorplans requiring internal recirculation loops to eliminate long wait times",
      "Well water pressure fluctuations requiring dedicated expansion tanks and pressure reducing valves"
    ],
    waterCharacteristics: "Hard groundwater from deep bedrock aquifers (160-240 mg/L) demanding scale prevention water treatment.",
    recommendedMaintenance: "Every 10 to 12 months with internal water filter cleaning and flow sensor impeller check.",
    commonErrorCodes: ["Navien E027 (Air intake pressure sensor abnormal)", "Rinnai Code 65 (Water flow control valve fault)", "Noritz 12 (Flame failure due to well pressure drop)"],
    metaTitle: "Tankless Water Heater Repair Falcon CO",
    metaDescription: "Trusted tankless water heater repair in Falcon, CO. Deep well descaling, recirculation pump fixes, and error code service in 80831. Call (456) 789-0123."
  }
};
