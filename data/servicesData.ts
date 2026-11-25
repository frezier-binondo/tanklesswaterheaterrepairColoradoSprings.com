export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: "repair" | "installation" | "maintenance" | "problem" | "brand";
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  overview: string;
  symptoms: string[];
  diagnosticProcess: string[];
  coloradoSpringsFactors: string[];
  brandsHandled: string[];
  faq: { q: string; a: string }[];
}

export const SERVICES_DATA: Record<string, ServiceItem> = {
  repair: {
    id: "repair",
    slug: "tankless-water-heater-repair",
    title: "Tankless Water Heater Repair in Colorado Springs, CO",
    shortTitle: "Tankless Repair",
    category: "repair",
    heroImage: "/images/services/service-circuit-board-multimeter.jpg",
    metaTitle: "Tankless Water Heater Repair Colorado Springs CO",
    metaDescription: "Fast, certified tankless water heater repair in Colorado Springs. Fix error codes, cold water, leaks, and ignition failures on Navien, Rinnai, Noritz. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater repair colorado springs",
    overview: "When your tankless water heater malfunctions in the Pikes Peak region, you need an experienced technician who understands the nuances of forced-draft combustion, electronic control boards, multi-stage copper and stainless steel heat exchangers, and high-altitude gas combustion. We match Colorado Springs homeowners with vetted, insured tankless technicians who arrive equipped with diagnostic manometers, OEM digital error readers, and common factory replacement components.",
    symptoms: [
      "Water runs scalding hot then suddenly plunges ice cold (the dreaded 'cold water sandwich')",
      "System control panel displays flashing alphanumeric error codes (such as Navien E003/E012 or Rinnai 11/12)",
      "Loud knocking, kettling, or humming sounds echoing from the internal heat exchanger",
      "Noticeable water dripping or pooling beneath the isolation valve assembly or cabinet housing",
      "Burner clicks continuously but refuses to establish a steady ignition flame",
      "Water remains perpetually lukewarm regardless of thermostat settings or reduced faucet flow"
    ],
    diagnosticProcess: [
      "Comprehensive Digital Error History Log Analysis via manufacturer diagnostic port",
      "Dynamic Static & Working Gas Pressure Manometer Testing (verifying 7-14 in. W.C.)",
      "Electrical Ohm and Micro-amp Ionization Flame Sensor & Igniter Gap Measurement",
      "Turbine Flow Sensor Impeller & Cold Inlet Debris Screen Inspection",
      "Differential Water Pressure & Delta-T Temperature Rise Heat Exchanger Evaluation",
      "Combustion Air Intake & Exhaust Venting Static Backpressure Verification"
    ],
    coloradoSpringsFactors: [
      "Elevation derating at 6,035 ft to 8,500 ft: Thinner mountain air requires recalibrating electronic manifold pressures to prevent incomplete combustion and soot formation.",
      "Extreme Front Range winter groundwater chill: Inlet water temperatures plummet to 37°F in January, pushing 199k BTU heaters to their absolute limit to achieve a 120°F output.",
      "Pikes Peak and alluvial aquifer mineral hardness: High levels of calcium carbonate precipitate instantly onto heat exchanger walls, requiring aggressive descaling protocols."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Rheem", "Bosch", "Takagi", "Bradford White", "Westinghouse"],
    faq: [
      {
        q: "How much does a typical tankless water heater repair cost in Colorado Springs?",
        a: "Most component repairs (flame rods, flow sensors, igniters, or standard descaling) range from $220 to $480 depending on the brand and accessibility. Complex repairs involving control boards, variable speed blowers, or secondary heat exchangers range from $500 to $950. Technicians provide clear upfront quotes before starting work."
      },
      {
        q: "Can my tankless unit be repaired the same day I call?",
        a: "Yes, when you call early in the day with your brand and model number ready, our network technicians carry fast-moving parts for Navien, Rinnai, and Noritz units on their mobile service vehicles to complete repairs on the initial trip."
      },
      {
        q: "What causes the water to go cold in the middle of a hot shower?",
        a: "This is commonly known as a 'cold water sandwich' or minimum flow cutoff. It is usually caused by a calcified flow sensor that fails to detect lower flow rates, a clogged inlet filter screen, or scale accumulation in the primary heat exchanger restricting heat transfer."
      }
    ]
  },
  emergency: {
    id: "emergency",
    slug: "tankless-water-heater-repair/emergency",
    title: "Emergency Tankless Water Heater Repair in Colorado Springs",
    shortTitle: "Emergency Repair",
    category: "repair",
    heroImage: "/images/services/service-outdoor-van-installation.jpg",
    metaTitle: "Emergency Tankless Water Heater Repair Colorado Springs",
    metaDescription: "Urgent tankless water heater repair in Colorado Springs. Fast 24/7 dispatch for active leaks, gas odor, and frozen lines. Call (719) 602-1977 immediately.",
    primaryKeyword: "emergency tankless water heater repair colorado springs",
    overview: "A tankless water heater emergency—such as an active cabinet water rupture, a scorched electrical odor, an unburned natural gas smell, or complete loss of heating during sub-zero Front Range blizzards—demands rapid, qualified intervention. Our dispatch team connects you with emergency-ready technicians standing by 24/7 across Colorado Springs, Monument, Fountain, and Teller County.",
    symptoms: [
      "Sulfur or rotten-egg odor near the water heater cabinet (Indicates potential gas leak—evacuate immediately)",
      "High-pressure water spewing from the unit or isolation valves threatening basement flooding",
      "Repeated electrical breaker trips immediately upon turning on any hot water tap",
      "Acrid burning plastic or ozone electrical odor emanating from the control board",
      "Frozen external vent termination with unit displaying critical freeze-warning codes in sub-zero weather"
    ],
    diagnosticProcess: [
      "Emergency Gas Shutoff & Combustible Gas Sniffer Leak Detection",
      "High-Voltage Electrical Isolation & Ground-Fault Diagnostic Check",
      "Isolation Valve Bypass & Emergency Leak Containment",
      "Thawing of External Vent & Condensate Drain Lines with Controlled Thermal Heat",
      "Direct OEM Error Code Extraction and Safety Lockout Reset"
    ],
    coloradoSpringsFactors: [
      "Freezing Pikes Peak Blizzards: Sub-zero Arctic cold fronts can flash-freeze uninsulated condensate drain lines, causing acidic condensate to back up into the combustion chamber and trigger safety shutoffs.",
      "High Gas Pressure Spikes: Mountain utility line fluctuations require immediate manometer testing to protect delicate proportional gas solenoid valves."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Rheem", "Takagi"],
    faq: [
      {
        q: "What should I do right now while waiting for the emergency technician?",
        a: "If you smell gas, evacuate your home immediately and call Colorado Springs Utilities (719-448-4800) or 911. For water leaks, locate the cold water isolation handle beneath the unit (usually blue or silver) and turn it 90 degrees perpendicular to the pipe, then flip the dedicated circuit breaker."
      },
      {
        q: "Are emergency service technicians available on weekends and holidays?",
        a: "Yes. Our matching network provides on-call emergency dispatch 24 hours a day, 7 days a week, 365 days a year across El Paso and Teller counties."
      }
    ]
  },
  "same-day": {
    id: "same-day",
    slug: "tankless-water-heater-repair/same-day",
    title: "Same-Day Tankless Water Heater Service in Colorado Springs",
    shortTitle: "Same-Day Service",
    category: "repair",
    heroImage: "/images/services/service-outdoor-van-installation.jpg",
    metaTitle: "Same-Day Tankless Water Heater Repair Colorado Springs",
    metaDescription: "Need your tankless water heater repaired today? Same-day dispatch in Colorado Springs. Most repairs completed in one visit with OEM parts. Call (719) 602-1977.",
    primaryKeyword: "same day tankless water heater repair colorado springs",
    overview: "You rely on hot water every single day for showers, sanitation, cooking, and laundry. Waiting days for an appointment is unacceptable. We prioritize same-day service calls for Colorado Springs homeowners, dispatching mobile technicians who carry stocked inventories of igniters, flame sensors, thermistors, flow sensors, water control valves, and circulation cartridges.",
    symptoms: [
      "Water heater stopped firing this morning with guests in town",
      "Flashing service light or error code requiring instant reset and diagnosis",
      "Water output is restricted to a trickle due to a clogged filter",
      "Loud vibrating fan noise whenever hot water is opened"
    ],
    diagnosticProcess: [
      "Immediate Phone Triaging: We capture your brand, model, and error code to match you with a truck already carrying your parts",
      "Precision 30-Minute Diagnostic Window upon arrival",
      "Truck-Stocked Component Swap: 80% of same-day calls resolved within 90 minutes on site",
      "Final High-Flow Combustion & Temperature Verification"
    ],
    coloradoSpringsFactors: [
      "Traffic along I-25 & Powers Blvd: Our network features technicians zoned throughout North Colorado Springs, Downtown, and South Fountain Valley to ensure prompt arrival windows."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Bradford White", "Takagi"],
    faq: [
      {
        q: "How early do I need to call for same-day service?",
        a: "We recommend calling before 12:00 PM for the highest probability of afternoon dispatch. However, afternoon calls are regularly accommodated based on regional technician routing."
      }
    ]
  },
  gas: {
    id: "gas",
    slug: "tankless-water-heater-repair/gas",
    title: "Gas Tankless Water Heater Repair in Colorado Springs",
    shortTitle: "Gas Tankless Repair",
    category: "repair",
    heroImage: "/images/services/service-gas-burner-maintenance.jpg",
    metaTitle: "Gas Tankless Water Heater Repair Colorado Springs",
    metaDescription: "Certified gas tankless water heater repair in Colorado Springs. Natural gas & LP propane combustion calibration, gas valve repair, and venting fixes. Call (719) 602-1977.",
    primaryKeyword: "gas tankless water heater repair colorado springs",
    overview: "Gas-fired tankless water heaters (natural gas and liquid propane) generate immense thermal power—often requiring 150,000 to 199,000 BTUs—to heat water on demand. At Colorado Springs' 6,000+ foot elevation, the reduced atmospheric oxygen requires exact gas-to-air combustion ratios. An uncalibrated gas valve will produce yellow flames, noxious carbon monoxide, and rapid soot buildup that destroys heat exchangers.",
    symptoms: [
      "Unit repeatedly clicks 3 times, tries to ignite, then locks out with a flame error code",
      "Yellow or orange burner flame instead of a crisp, quiet blue flame",
      "Black soot or carbon dust visible around exhaust vent terminations or intake ports",
      "Burner fires briefly for 15 seconds then abruptly turns off",
      "Hissing or whistling gas valve sounds during high-demand firing"
    ],
    diagnosticProcess: [
      "Digital Manometer Dual-Port Testing: Measuring static gas pressure and working pressure drop under full load",
      "Flue Gas Combustion Analysis: Testing O2, CO2, and CO levels in the exhaust stream",
      "Proportional Gas Solenoid Resistance & DC Voltage Testing",
      "Direct Spark Igniter Electrode Gap & Ceramic Insulator Inspection",
      "High-Altitude Altitude DIP Switch & Microprocessor Calibration"
    ],
    coloradoSpringsFactors: [
      "High-Altitude Air Density: Colorado Springs sits at roughly 6,035 ft. Natural gas delivery pressures must be meticulously calibrated to avoid carbon buildup.",
      "Rural Teller & El Paso County Propane: Many homes in Falcon, Black Forest, and Woodland Park run on bottled LP propane, which operates at higher pressures (11-14 in. W.C.) and requires dedicated burner orifices."
    ],
    brandsHandled: ["Navien NPE Series", "Rinnai RU/RUR Series", "Noritz NRC/EZ Series", "Takagi T-H3"],
    faq: [
      {
        q: "Why does my gas tankless water heater struggle more in winter?",
        a: "In January and February, incoming municipal water from the mountains drops from 55°F to 38°F. To deliver 120°F water, the unit must produce an 82°F temperature rise, forcing the gas burner to fire at its maximum BTU limit."
      }
    ]
  },
  electric: {
    id: "electric",
    slug: "tankless-water-heater-repair/electric",
    title: "Electric Tankless Water Heater Repair in Colorado Springs",
    shortTitle: "Electric Tankless Repair",
    category: "repair",
    heroImage: "/images/services/service-circuit-board-multimeter.jpg",
    metaTitle: "Electric Tankless Water Heater Repair Colorado Springs",
    metaDescription: "Expert electric tankless water heater repair in Colorado Springs. Fix tripped 240V breakers, burned heating elements, and fluctuating temperatures. Call (719) 602-1977.",
    primaryKeyword: "electric tankless water heater repair colorado springs",
    overview: "Whole-home electric tankless water heaters draw significant electrical currents—frequently requiring three to four dedicated 40-amp double-pole breakers (120 to 150 total amps). When an electric unit fails, problems typically stem from calcified immersion heating elements, blown high-limit thermal cutoffs, scorched contactor relays, or flow activation sensor faults.",
    symptoms: [
      "Breaker panel trips immediately when you turn on a hot water faucet",
      "Water gets warm but never hot enough for a comfortable shower",
      "Digital display is totally dark with no indicator lights",
      "Temperature fluctuates wildly while water is continuously running",
      "Burning electrical smell inside the utility closet"
    ],
    diagnosticProcess: [
      "AC Line Voltage & Amperage Clamp Testing across all individual heating stages",
      "Immersion Element Cold Resistance Ohm Testing (identifying shorted or ruptured sheaths)",
      "High-Limit Thermal Safety Switch Continuity & Reset Verification",
      "Solid State Relay (SSR) Triac Gate Signal & Modulation Analysis",
      "Flow Activation Reed Switch & Thermistor Resistance Curves"
    ],
    coloradoSpringsFactors: [
      "Colorado Springs Electrical Panels: Older homes in Central Colorado Springs and Old Colorado City often have 100-amp electrical services, causing severe voltage drops when electric tankless units fire. Technicians verify panel load calculations."
    ],
    brandsHandled: ["EcoSmart", "Stiebel Eltron", "Rheem Performance Platinum", "Titan", "Chronomite"],
    faq: [
      {
        q: "Why does my electric tankless water heater trip the circuit breaker?",
        a: "The most common culprit is a ruptured heating element. Hard water scale insulates the copper or titanium sheath, causing the internal nichrome wire to overheat, melt, and short directly to the grounded water pipe."
      }
    ]
  },
  installation: {
    id: "installation",
    slug: "tankless-water-heater-installation",
    title: "Tankless Water Heater Installation in Colorado Springs, CO",
    shortTitle: "Tankless Installation",
    category: "installation",
    heroImage: "/images/services/service-outdoor-van-installation.jpg",
    metaTitle: "Tankless Water Heater Installation Colorado Springs",
    metaDescription: "Professional tankless water heater installation in Colorado Springs. Certified sizing for 6,000 ft altitude, PPRBD permits, and tank-to-tankless retrofits. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater installation colorado springs",
    overview: "Upgrading to a high-efficiency tankless water heater frees up 16+ square feet of basement floor space, eliminates the risk of a 50-gallon tank catastrophic flood, and provides continuous, on-demand hot water that never runs out. However, a successful installation in Colorado Springs requires exacting standards: sizing for high-altitude derating, 3/4-inch gas line validation, zero-clearance 2-inch or 3-inch PVC/polypropylene direct venting, and Pikes Peak Regional Building Department (PPRBD) permit compliance.",
    symptoms: [
      "Your old tank water heater is over 10-12 years old and showing rust",
      "Your family routinely runs out of hot water after back-to-back showers",
      "High monthly utility bills from continuously heating 50 gallons of standby water",
      "Planning a bathroom addition or finished basement requiring expanded capacity"
    ],
    diagnosticProcess: [
      "Comprehensive Whole-Home Peak Flow Demand Audit (Calculating simultaneous GPM for all fixtures)",
      "Winter Temperature Rise (Delta-T) Calculation based on 38°F winter inlet water",
      "Gas Supply Capacity Assessment: Verifying gas meter CFH and pipe diameter from meter to unit",
      "Venting Pathway Engineering: Selecting concentric vs dual-pipe direct vent routes",
      "PPRBD Code Compliance & Permit Filings"
    ],
    coloradoSpringsFactors: [
      "Pikes Peak Regional Building Department (PPRBD) Plumbing Codes: All gas and water heater replacements require formal permits, seismic strapping, sediment traps, expansion tanks, and combustion clearances.",
      "Winter Delta-T Requirements: In warmer climates, heaters only need a 50°F rise. In Colorado Springs, units must achieve an 80°F to 85°F rise in mid-winter."
    ],
    brandsHandled: ["Navien NPE-A2 Series", "Rinnai SENSEI Series", "Noritz EZ Series"],
    faq: [
      {
        q: "Do I need a new gas line for a tankless water heater?",
        a: "Standard tank heaters use 36,000 to 40,000 BTUs on a 1/2-inch gas line. Modern condensing tankless units demand up to 199,000 BTUs. Advanced models like the Navien NPE-2 series feature dual negative-pressure gas valves that can utilize existing 1/2-inch lines up to 24 feet, but longer runs require a 3/4-inch or 1-inch upgrade."
      },
      {
        q: "How long does a complete tankless installation take?",
        a: "A standard tank-to-tankless conversion takes roughly 6 to 8 hours to complete. A direct tankless-to-tankless replacement can often be finished in 4 to 5 hours."
      }
    ]
  },
  replacement: {
    id: "replacement",
    slug: "tankless-water-heater-installation/replacement",
    title: "Tankless Water Heater Replacement in Colorado Springs",
    shortTitle: "Tankless Replacement",
    category: "installation",
    heroImage: "/images/services/service-technician-inspection-clipboard.jpg",
    metaTitle: "Tankless Water Heater Replacement Colorado Springs",
    metaDescription: "Time to replace your aging tankless water heater in Colorado Springs? Seamless replacement, modern condensing efficiency, and full warranty. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater replacement colorado springs",
    overview: "While tankless water heaters boast lifespans of 18 to 25 years—nearly double that of conventional tank units—neglected maintenance, severe hard water scale crusting, or internal heat exchanger pinholes eventually mandate replacement. Upgrading an obsolete non-condensing unit to a modern 0.96 UEF condensing model lowers gas consumption, adds built-in recirculation, and eliminates costly recurring repair bills.",
    symptoms: [
      "Unit is over 15-18 years old and experiencing recurring component failures",
      "Heat exchanger is leaking internally onto electrical circuits",
      "Manufacturer has discontinued replacement parts for your model",
      "Cost of required repairs exceeds 50% of a brand-new unit with a 15-year warranty"
    ],
    diagnosticProcess: [
      "Repair vs. Replace Cost-Benefit Financial Analysis",
      "Existing Venting & Gas Piping Compatibility Assessment",
      "Old Equipment Safe Disconnection, Evacuation, and Metal Recycling",
      "Mounting of High-Efficiency Condensing Unit with Built-in Isolation Valves",
      "Manufacturer 15-Year Heat Exchanger & 5-Year Parts Warranty Registration"
    ],
    coloradoSpringsFactors: [
      "Utility Rebates: Colorado Springs Utilities frequently offers cash rebates for qualifying ENERGY STAR certified tankless water heaters with 0.87+ UEF ratings."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Bradford White"],
    faq: [
      {
        q: "When does replacement make more sense than repair?",
        a: "If your unit is older than 12-14 years, has suffered an internal heat exchanger freeze rupture, or requires more than $600 in replacement parts, upgrading to a modern unit with a full factory warranty is substantially more economical."
      }
    ]
  },
  maintenance: {
    id: "maintenance",
    slug: "tankless-water-heater-maintenance",
    title: "Tankless Water Heater Maintenance in Colorado Springs",
    shortTitle: "Annual Maintenance",
    category: "maintenance",
    heroImage: "/images/services/service-descaling-flush-bucket.jpg",
    metaTitle: "Tankless Water Heater Maintenance Colorado Springs",
    metaDescription: "Keep your tankless water heater running at peak efficiency. Professional descaling, flushing, flame rod cleaning & safety inspection in Colorado Springs. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater maintenance colorado springs",
    overview: "Regular annual maintenance is not optional for tankless water heaters in Colorado Springs—it is the single most critical factor in preventing unexpected shutdowns, preserving your 15-year factory warranty, and protecting your equipment from the severe mineral scale generated by Front Range water. Our comprehensive multi-point maintenance protocol restores heat transfer efficiency and extends the working life of your system.",
    symptoms: [
      "Unit has not been serviced or flushed in over 12 months",
      "Popping, boiling, or rumbling kettle sounds during operation",
      "Water takes noticeably longer to heat up at bathroom sinks",
      "Gradual drop in hot water pressure compared to cold water pressure"
    ],
    diagnosticProcess: [
      "Isolation & Circulating Acid Descaling: 45-60 minute recirculation of virgin food-grade citric or phosphoric acid",
      "Cold Water Inlet Filter Screen Extraction, Sonic Bath Cleaning, and O-ring Inspection",
      "Combustion Air Blower Fan Impeller Dusting and Intake Screen Vacuuming",
      "Igniter & Flame Rod Sensor Polishing to Remove Carbon Oxidation",
      "Condensate Trap Disassembly, Neutralizer Media Check, and Acid Flushing"
    ],
    coloradoSpringsFactors: [
      "Mineral Calcification Rates: In Colorado Springs, tap water carries dissolved calcium and magnesium that bake onto heat exchanger tubes at temperatures exceeding 130°F, acting as an insulating blanket that causes heat exchanger overheating."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Rheem", "Bosch", "Takagi"],
    faq: [
      {
        q: "Why do manufacturers require annual maintenance?",
        a: "Navien, Rinnai, and Noritz warranties explicitly state that heat exchanger failures caused by scale accumulation are not covered under manufacturer warranty unless documented annual maintenance has been performed."
      },
      {
        q: "How long does a professional maintenance service take?",
        a: "A thorough maintenance service takes approximately 75 to 90 minutes, including the 45-minute active chemical circulation cycle."
      }
    ]
  },
  flushing: {
    id: "flushing",
    slug: "tankless-water-heater-maintenance/flushing",
    title: "Tankless Water Heater Flushing in Colorado Springs",
    shortTitle: "Water Heater Flushing",
    category: "maintenance",
    heroImage: "/images/services/service-descaling-flush-bucket.jpg",
    metaTitle: "Tankless Water Heater Flushing Colorado Springs",
    metaDescription: "Professional tankless water heater flushing in Colorado Springs. Clear sediment, mineral deposits, and scale from your system. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater flushing colorado springs",
    overview: "Flushing a tankless water heater involves connecting a submersible utility pump and high-pressure washing hoses to the external isolation service ports to circulate cleaning agents through the narrow passages of the heat exchanger. This removes sediment, grit, and lime scale that choke water flow and cause overheating errors.",
    symptoms: [
      "Noticeable reduction in shower water velocity when hot water is active",
      "Intermittent E016 or Code 14 overheat shutdowns",
      "White flaky calcium specks clogging aerators in kitchen and bathroom faucets"
    ],
    diagnosticProcess: [
      "Closing main cold and hot home isolation valves to isolate the heater",
      "Hooking up 1/6 HP circulation pump with 5-gallon solution reservoir",
      "Recirculating solution through copper/stainless core",
      "High-volume fresh water purge to neutralize and flush all cleaning residue",
      "Pressure testing isolation valves for drip-free seal"
    ],
    coloradoSpringsFactors: [
      "Sediment from seasonal mountain runoff: During spring runoff, fine silt and sediment can enter municipal supply lines, quickly accumulating in the micro-mesh inlet filter screen of tankless heaters."
    ],
    brandsHandled: ["All major makes and models"],
    faq: [
      {
        q: "What is the difference between flushing and descaling?",
        a: "Flushing refers to the mechanical circulation and rinsing process, whereas descaling refers specifically to the chemical dissolution of bonded calcium and magnesium mineral scale using specialized acids."
      }
    ]
  },
  descaling: {
    id: "descaling",
    slug: "tankless-water-heater-maintenance/descaling",
    title: "Tankless Water Heater Descaling in Colorado Springs",
    shortTitle: "Chemical Descaling",
    category: "maintenance",
    heroImage: "/images/services/service-descaling-flush-bucket.jpg",
    metaTitle: "Tankless Water Heater Descaling Colorado Springs",
    metaDescription: "Deep chemical descaling for tankless water heaters in Colorado Springs. Eliminate stubborn calcium buildup and prevent cracked heat exchangers. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater descaling colorado springs",
    overview: "In the Pikes Peak region, hard water minerals form a concrete-like crust of calcium carbonate and magnesium sulfate inside the internal waterways of your tankless unit. Just 1/16 of an inch of scale buildup reduces heat transfer efficiency by over 15% and causes localized metal hot spots that lead to cracked heat exchangers. Our chemical descaling service utilizes professional virgin descaling compounds that dissolve 100% of mineral scale without corroding internal copper or stainless steel alloys.",
    symptoms: [
      "Loud kettle-boiling and rumbling sounds coming from the unit during use",
      "Error codes indicating high exhaust temperature or heat exchanger thermal stress",
      "Heater uses more natural gas to produce the same temperature water",
      "Water pressure drops significantly between cold and hot settings"
    ],
    diagnosticProcess: [
      "pH-monitored chemical circulation test: Watching the acid solution bubble as calcium carbonate is dissolved into carbon dioxide gas",
      "Flow rate baseline testing before and after descaling",
      "Secondary clean-water neutralization wash to remove all acid traces",
      "Inspection of isolated valve seals and internal manifold joints"
    ],
    coloradoSpringsFactors: [
      "Alluvial and deep bedrock water: Water sourced from alluvial wells along Fountain Creek and deep wells in Falcon and Black Forest features intense mineral hardness that demands aggressive descaling."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Rheem", "Takagi"],
    faq: [
      {
        q: "Can I just use grocery store white vinegar?",
        a: "White vinegar has a mild 5% acetic acid concentration. While acceptable for light maintenance in low-hardness regions, severe Colorado Springs mineral scale requires professional-grade virgin citric or non-toxic phosphoric descaling solutions to completely dissolve hardened deposits within an hour."
      }
    ]
  },
  "error-codes": {
    id: "error-codes",
    slug: "tankless-water-heater-repair/error-codes",
    title: "Tankless Water Heater Error Codes Troubleshooting Guide",
    shortTitle: "Error Codes",
    category: "problem",
    heroImage: "/images/services/service-digital-multimeter-testing.jpg",
    metaTitle: "Tankless Water Heater Error Codes Colorado Springs",
    metaDescription: "Flashing error code on your Navien, Rinnai, or Noritz tankless water heater? Clear diagnostic guide and emergency repair in Colorado Springs. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater error codes colorado springs",
    overview: "Modern tankless water heaters feature onboard microprocessors that constantly monitor dozens of thermistors, pressure switches, flame ionization rods, and airflow sensors. When an operational parameter deviates from safe factory limits, the computer shuts down the burner and displays a flashing code. Here is how to interpret common codes and when you need professional service.",
    symptoms: [
      "Flashing two or three digit number on digital display screen",
      "Audible beeping alarm echoing from inside the utility closet",
      "Unit refuses to fire or restart after resetting power"
    ],
    diagnosticProcess: [
      "OEM Error Code Decoding & Diagnostic History Retrieval",
      "Sensor Continuity and Voltage Resistance Testing",
      "Mechanical Gas, Water, and Venting Physical Inspection",
      "Fault Resolution and Electronic Board Clear"
    ],
    coloradoSpringsFactors: [
      "Altitude and wind-induced codes: Mountain gusts down Ute Pass and thin air frequently trigger false vent pressure (Navien E110, Noritz 90) or flame ionization failure (Rinnai Code 11/12)."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Rheem"],
    faq: [
      {
        q: "What does Navien Error Code E003 or E012 mean?",
        a: "E003 indicates an ignition failure (the unit tried to spark but could not detect a flame). E012 indicates flame loss during active operation, often caused by low gas pressure, a dirty flame sensor rod, or altitude combustion issues."
      },
      {
        q: "What does Rinnai Code 11 or 12 mean?",
        a: "Rinnai Code 11 is an ignition failure; Code 12 is flame failure during run. Common culprits include a closed gas valve, moisture on the flame rod, or insect nests in the outside air intake pipe."
      }
    ]
  },
  "not-producing-hot-water": {
    id: "not-producing-hot-water",
    slug: "tankless-water-heater-repair/not-producing-hot-water",
    title: "Tankless Water Heater Not Producing Hot Water in Colorado Springs",
    shortTitle: "No Hot Water",
    category: "problem",
    heroImage: "/images/services/service-circuit-board-multimeter.jpg",
    metaTitle: "Tankless Heater Not Producing Hot Water",
    metaDescription: "No hot water from your tankless water heater? Learn why and get fast local repair in Colorado Springs, Monument, and Fountain. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater not producing hot water colorado springs",
    overview: "Turning on your shower faucet only to be greeted by icy mountain runoff is a homeowner's nightmare. Because tankless units do not store heated water, every link in the heating chain—water flow detection, gas ignition, combustion air, and heat transfer—must operate flawlessly. When one part stalls, the whole system refuses to deliver hot water.",
    symptoms: [
      "Water runs completely cold at every fixture in the home",
      "Display panel is lit but burner never initiates firing sequence",
      "Unit fires briefly for 10 seconds then immediately shuts off",
      "Water is hot at the bathtub but stays cold at the low-flow bathroom sink"
    ],
    diagnosticProcess: [
      "Flow Activation Threshold Verification (testing if fixtures meet 0.4 - 0.5 GPM minimum)",
      "Cold Inlet Water Filter Screen Removal and Cleaning",
      "Cross-Over Fixture / Faulty Shower Cartridge Isolation Test",
      "Burner Ignition and Flame Sensor Current Verification"
    ],
    coloradoSpringsFactors: [
      "Extreme cold incoming winter water: When municipal water drops to 38°F, low flow rates combined with high thermal demand can trigger safety cutoffs."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Rheem", "Takagi"],
    faq: [
      {
        q: "Why does my hot water work in the tub but not the sink?",
        a: "Tankless water heaters require a minimum flow rate—usually 0.4 to 0.5 gallons per minute (GPM)—to activate the flow sensor turbine. Low-flow aerators or clogged sink cartridges often fall below this firing threshold."
      }
    ]
  },
  "ignition-problems": {
    id: "ignition-problems",
    slug: "tankless-water-heater-repair/ignition-problems",
    title: "Tankless Water Heater Ignition Problems Troubleshooting",
    shortTitle: "Ignition Problems",
    category: "problem",
    heroImage: "/images/services/service-gas-burner-maintenance.jpg",
    metaTitle: "Tankless Water Heater Ignition Problems",
    metaDescription: "Tankless water heater clicks but won't ignite? Fix flame failures, dirty igniters & gas pressure issues in Colorado Springs. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater ignition problems colorado springs",
    overview: "When you demand hot water, your tankless unit's control board starts the draft blower fan, opens the electronic gas solenoid valve, and generates high-voltage sparks across the igniter electrodes to light the burner. If ignition fails within 5 to 10 seconds, the system shuts the gas valve to prevent gas accumulation. Understanding why ignition fails gets your hot water back faster.",
    symptoms: [
      "Unit clicks multiple times rapidly, but no burner roar occurs",
      "Flame ignites for 2 seconds then immediately extinguishes with an error code",
      "Unburned natural gas odor near the exhaust termination pipe",
      "System works intermittently during warm afternoons but fails on freezing mornings"
    ],
    diagnosticProcess: [
      "Static and Dynamic Gas Pressure Manometer Checks",
      "Igniter Spark Gap and Ceramic Electrode Cracking Inspection",
      "Flame Rectification Ionization Rod Micro-amp Measurement (verifying >1.0 µA)",
      "Venting Backdraft & Flue Gas Recirculation Assessment"
    ],
    coloradoSpringsFactors: [
      "High altitude air-fuel ratios: Thinner air at 6,000+ ft creates a leaner fuel mixture that requires precise igniter spark gap spacing and burner throat cleanliness."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Rheem"],
    faq: [
      {
        q: "Can a dirty flame rod cause ignition failure?",
        a: "Yes! A flame rod detects the small micro-amp electrical current conducted through an active flame. Over time, silica and carbon deposits coat the metal rod, blinding the sensor so the control board thinks no flame ignited."
      }
    ]
  },
  "leak-repair": {
    id: "leak-repair",
    slug: "tankless-water-heater-repair/leak-repair",
    title: "Tankless Water Heater Leak Repair in Colorado Springs",
    shortTitle: "Leak Repair",
    category: "problem",
    heroImage: "/images/services/service-pipe-wrench-valves.jpg",
    metaTitle: "Tankless Water Heater Leak Repair Colorado Springs",
    metaDescription: "Active leak on your tankless water heater? Fast leak repair in Colorado Springs. Fix cracked heat exchangers, dripping valves & condensate drains. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater leak repair colorado springs",
    overview: "Water leaking from a tankless water heater should never be ignored. Even a slow drip inside the cabinet can corrode electronic motherboards, short out blower motors, damage drywall, and indicate severe heat exchanger failure. Our local technicians quickly pinpoint whether the leak originates from service valves, condensation drain traps, or internal pressurized plumbing.",
    symptoms: [
      "Puddle of water forming directly beneath the water heater cabinet",
      "Dripping from the brass temperature and pressure relief (T&P) valve pipe",
      "Moisture spraying or weeping from threaded isolation valves",
      "Corrosion, white calcium crust, or rust trails running down the cabinet seams"
    ],
    diagnosticProcess: [
      "Cabinet Panel Removal & Pressurized Leak Tracing",
      "Heat Exchanger Thermal Stress & Pin-hole Fluoroscopic Dye / Pressure Testing",
      "T&P Relief Valve Pressure and Thermal Expansion Testing",
      "Condensate Trap & Neutralizer Seal Integrity Check"
    ],
    coloradoSpringsFactors: [
      "Thermal shock and freezing: Extreme Colorado cold snaps can freeze exposed wall penetrations, causing copper tubing inside the heat exchanger to split open."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Bradford White"],
    faq: [
      {
        q: "What should I do first if my tankless water heater is leaking?",
        a: "Immediately turn off the cold water shutoff valve directly under the unit (turn the lever 90 degrees). Next, turn off the dedicated electrical switch or circuit breaker to prevent electrical short-circuits, then call us for dispatch."
      }
    ]
  },
  "flow-sensor": {
    id: "flow-sensor",
    slug: "tankless-water-heater-repair/flow-sensor",
    title: "Tankless Water Heater Flow Sensor Repair in Colorado Springs",
    shortTitle: "Flow Sensor Repair",
    category: "problem",
    heroImage: "/images/services/service-wiring-diagnostics-gloves.jpg",
    metaTitle: "Tankless Water Heater Flow Sensor Repair Colorado Springs",
    metaDescription: "Water heater not sensing water flow? Expert flow sensor and turbine repair in Colorado Springs. Restore reliable hot water today. Call (719) 602-1977.",
    primaryKeyword: "tankless water heater flow sensor repair colorado springs",
    overview: "The water flow sensor (or flow turbine) is the nerve center of a tankless water heater. When you open a faucet, incoming water spins a tiny magnetic turbine inside the sensor. The sensor sends high-speed digital pulse signals to the microprocessor, communicating exact gallons per minute so the computer knows how high to fire the burner. When mineral scale or sediment locks the turbine, the heater is blind to your demand.",
    symptoms: [
      "Water runs full blast at the faucet, but the heater never shows any flame or firing indicator",
      "Hot water stops abruptly when you slightly dial down the shower temperature",
      "Display shows specific water flow error codes (such as Rinnai Code 65 or Navien flow sensor alert)",
      "Water alternates between warm and cold during low-flow hand washing"
    ],
    diagnosticProcess: [
      "Digital Diagnostics: Reading live GPM pulse counts on the technician control menu",
      "Sensor Assembly Extraction and Visual Inspection for Calcification and Grit",
      "Magnetic Hall-Effect Switch Signal Testing with an Oscilloscope / Multimeter",
      "Replacement with OEM Factory Calibrated Sensor Assembly"
    ],
    coloradoSpringsFactors: [
      "Grit and sand in regional well water: Homes in Falcon, Peyton, and Black Forest that use private wells often have fine sand that jams delicate flow sensor impellers."
    ],
    brandsHandled: ["Navien", "Rinnai", "Noritz", "Rheem", "Takagi"],
    faq: [
      {
        q: "Can a jammed flow sensor be cleaned or does it have to be replaced?",
        a: "In many cases, carefully cleaning mineral deposits and sediment from the turbine impeller frees the mechanism. If the internal magnetic pickup or Hall-effect electronic sensor has failed, replacing the inexpensive sensor assembly is the permanent solution."
      }
    ]
  },
  navien: {
    id: "navien",
    slug: "tankless-water-heater-repair/navien",
    title: "Navien Tankless Water Heater Repair in Colorado Springs",
    shortTitle: "Navien Repair",
    category: "brand",
    heroImage: "/images/services/service-gas-burner-maintenance.jpg",
    metaTitle: "Navien Tankless Water Heater Repair Colorado Springs",
    metaDescription: "Authorized Navien tankless water heater repair in Colorado Springs. NPE-A2, NPE-S2, NPN, NCB diagnostics, E003/E012 errors, and recirculation fixes. Call (719) 602-1977.",
    primaryKeyword: "navien tankless water heater repair colorado springs",
    overview: "Navien is one of the most widely installed condensing tankless brands in Colorado Springs thanks to its dual stainless steel heat exchangers and innovative ComfortFlow built-in buffer tank and recirculation pump. However, Navien units require specialized diagnostic familiarity to troubleshoot their negative pressure gas valves, digital flow sensors, and secondary condensation recovery systems.",
    symptoms: [
      "Flashing Navien Error Code: E003 (Ignition Failure), E012 (Flame Loss), E016 (Heat Exchanger Overheat), E110 (Exhaust Static Pressure)",
      "Recirculation pump runs continuously without delivering hot water to distant fixtures",
      "Condensate trap backed up with acidic water triggering emergency lockout",
      "DIP switches on motherboard misconfigured for high elevation operation"
    ],
    diagnosticProcess: [
      "Navien Service Tool & Onboard PCB Diagnostic Menu Access",
      "Negative Pressure Gas Valve Differential Setting with Digital Manometer",
      "Dual Stainless Steel Heat Exchanger Scale & Condensate Drain Flush",
      "Internal 0.5-Gallon Buffer Tank & Recirculation Check Valve Inspection"
    ],
    coloradoSpringsFactors: [
      "High-Altitude DIP Switch Configuration: Navien units must have DIP switches set for 'High Altitude' (above 5,400 ft) to adjust the DC blower fan speed for thinner Colorado Springs air."
    ],
    brandsHandled: ["Navien NPE-A2", "Navien NPE-S2", "Navien NPN", "Navien NCB Series"],
    faq: [
      {
        q: "What causes Navien error code E003 in Colorado Springs?",
        a: "E003 is an ignition failure. In our region, it is most frequently caused by a dirty flame sensor rod, low working gas pressure during high winter demand, or misconfigured high-altitude DIP switches."
      }
    ]
  },
  rinnai: {
    id: "rinnai",
    slug: "tankless-water-heater-repair/rinnai",
    title: "Rinnai Tankless Water Heater Repair in Colorado Springs",
    shortTitle: "Rinnai Repair",
    category: "brand",
    heroImage: "/images/services/service-pipe-wrench-valves.jpg",
    metaTitle: "Rinnai Tankless Water Heater Repair Colorado Springs",
    metaDescription: "Fast, certified Rinnai tankless water heater repair in Colorado Springs. Fix error code 10, 11, 12, 14, 25 on SENSEI, RU, RUR, and RL models. Call (719) 602-1977.",
    primaryKeyword: "rinnai tankless water heater repair colorado springs",
    overview: "Rinnai is renowned for manufacturing bulletproof commercial and residential tankless systems. The Rinnai SENSEI and older RL/RU series are common across Colorado Springs subdivisions. When a Rinnai unit triggers an error code or produces lukewarm water, technicians must test their copper heat exchangers, proportional gas valves, and electronic bypass valves.",
    symptoms: [
      "Flashing Rinnai Diagnostic Codes: Code 10 (Air intake or exhaust restriction), Code 11 (No ignition), Code 12 (Flame failure), Code 14 (Thermal fuse open), Code 25 (Condensate trap full)",
      "Water fluctuates between scalding hot and lukewarm while showering",
      "Burner clicks loudly and shuts off after 5 seconds",
      "Remote MC-91-2 controller displays 'LC' (Lime Scale / Maintenance Alert)"
    ],
    diagnosticProcess: [
      "Rinnai PCB Diagnostic Memory Interrogation for past fault codes",
      "Manifold Gas Pressure Port Testing during maximum BTU high-fire operation",
      "Thermal Fuse Circuit Continuity and Overheat Protector Verification",
      "Combustion Air Fan Blower Wheel Cleaning and Outside Air Intake Debris Removal"
    ],
    coloradoSpringsFactors: [
      "Rinnai 'LC' Scale Alarm: Rinnai units feature a built-in software algorithm that tracks heating cycles and triggers 'LC' (Lime Scale) when mineral deposits reduce heat transfer efficiency in hard Colorado Springs water."
    ],
    brandsHandled: ["Rinnai SENSEI (RU/RUR)", "Rinnai Value Series", "Rinnai Luxury RL Series"],
    faq: [
      {
        q: "What does code LC mean on a Rinnai water heater?",
        a: "LC stands for Scale/Lime Check. It indicates the heat exchanger has accumulated calcium scale and requires immediate chemical descaling to prevent permanent metal heat damage."
      }
    ]
  },
  noritz: {
    id: "noritz",
    slug: "tankless-water-heater-repair/noritz",
    title: "Noritz Tankless Water Heater Repair in Colorado Springs",
    shortTitle: "Noritz Repair",
    category: "brand",
    heroImage: "/images/services/service-technician-inspection-clipboard.jpg",
    metaTitle: "Noritz Tankless Water Heater Repair Colorado Springs",
    metaDescription: "Professional Noritz tankless water heater repair in Colorado Springs. EZ, NRC, and NR series diagnostics, error code 11, 90, and 72 repairs. Call (719) 602-1977.",
    primaryKeyword: "noritz tankless water heater repair colorado springs",
    overview: "Noritz engineered some of the earliest tankless water heaters in North America and remains a premier choice for commercial and luxury homes in Colorado Springs (such as Broadmoor and Kissing Camels). Our network technicians are well-versed in Noritz commercial-grade dual heat exchangers, Quick-Connect dual-unit tandem systems, and EZ-series top-mount water connections.",
    symptoms: [
      "Noritz Error Codes: Code 11 (Ignition fault), Code 12 (Flame rod failure), Code 90 (Combustion abnormal), Code 16 (High outlet temperature), Code 72 (Flame sensor circuit fault)",
      "Uneven water temperature across multi-unit tandem setups",
      "Condensate drain line leaking around the neutralizer canister",
      "High-pitch whine from the combustion fan motor"
    ],
    diagnosticProcess: [
      "Noritz Circuit Board Diagnostic Potentiometer & Microswitch Calibration",
      "High-Altitude Altitude Setting Verification (Level 1, 2, or 3 settings)",
      "Commercial Dual Copper-Stainless Exchanger Fluvial Inspection",
      "Flame Sensor Microamp Ionization Curve Analysis"
    ],
    coloradoSpringsFactors: [
      "Altitude Dip Switch Setting #3: At elevations between 6,000 and 8,000 feet, Noritz units must have their operational DIP switch #3 engaged to ensure correct air/fuel blower curves."
    ],
    brandsHandled: ["Noritz EZ Series (EZ98, EZ111)", "Noritz NRC Series", "Noritz NR Series"],
    faq: [
      {
        q: "What causes Noritz error code 90?",
        a: "Error code 90 indicates abnormal combustion or vent restriction. In Colorado Springs, this is commonly triggered by snow or ice blocking the intake pipe, dust build-up in the blower fan, or high-altitude oxygen starvation."
      }
    ]
  }
};
