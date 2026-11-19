export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "cost" | "troubleshooting" | "maintenance" | "installation";
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "cost-repair",
    category: "cost",
    question: "How much does tankless water heater repair typically cost in Colorado Springs?",
    answer: "Most tankless water heater repairs in the Colorado Springs region range between $220 and $480 for common component issues such as flame ionization sensors, igniters, flow turbines, or standard chemical descaling flushes. More extensive repairs—such as replacing an electronic control PCB, combustion draft fan motor, or secondary condensing heat exchanger—typically cost between $500 and $950. Technicians in our network perform a complete multi-point diagnostic check upon arrival and provide an upfront, transparent quote before any repair work commences."
  },
  {
    id: "same-day-speed",
    category: "troubleshooting",
    question: "How quickly can a technician arrive for an emergency or same-day repair?",
    answer: "For emergency service calls (such as active pressurized water leaks, strong natural gas odors, or complete loss of heat during below-freezing Front Range temperatures), technicians are dispatched on an expedited priority basis. In most cases across Colorado Springs, Monument, and Fountain, a technician can arrive within 2 to 4 hours. Calling before 12:00 PM significantly increases the availability of same-day service appointments."
  },
  {
    id: "altitude-impact",
    category: "installation",
    question: "How does Colorado Springs' 6,035-foot elevation affect tankless water heater performance?",
    answer: "At elevations over 6,000 feet (and up to 8,500 feet in Woodland Park), atmospheric air contains approximately 20% to 26% less oxygen per cubic foot compared to sea level. Gas tankless water heaters require recalibration of their electronic high-altitude DIP switches or manifold gas valves so the blower fan delivers additional combustion air. Failing to calibrate for Colorado altitude results in incomplete combustion, dangerous carbon monoxide production, severe soot clogging, and premature heat exchanger burn-through."
  },
  {
    id: "maintenance-frequency",
    category: "maintenance",
    question: "How often should a tankless water heater be flushed and descaled in El Paso County?",
    answer: "Due to the moderate-to-high mineral content of water sourced from Pikes Peak mountain runoff and deep bedrock aquifers across El Paso County, manufacturers strongly advise a professional chemical descaling flush every 12 months. If your home is connected to a private well in Falcon or Black Forest with hardness levels exceeding 150 mg/L (9 grains per gallon), flushing every 6 to 9 months is strongly recommended to protect your equipment from permanent heat exchanger damage."
  },
  {
    id: "cold-water-sandwich",
    category: "troubleshooting",
    question: "Why does my hot water suddenly turn cold for 30 seconds in the middle of a shower?",
    answer: "This sensation is known throughout the plumbing industry as a 'cold water sandwich.' When you turn off a faucet and immediately turn it back on, cold water that entered the piping while the burner shut down flows downstream to your shower head before the burner can reignite. If this happens while the water has been running continuously, the culprit is almost always a calcified flow sensor that briefly dropped below the 0.4 GPM firing threshold or scale buildup restricting heat exchanger thermal transfer."
  },
  {
    id: "diy-vs-pro-flush",
    category: "maintenance",
    question: "Can I descale my tankless water heater myself with white vinegar?",
    answer: "While some homeowners attempt a DIY flush using household white vinegar and a small utility pump, grocery store white vinegar only contains 5% acetic acid, which is frequently too weak to dissolve hardened calcium carbonate scale found in Front Range water. Professional technicians utilize virgin food-grade citric or specialized non-corrosive sulfamic descaling formulas with calibrated pH monitoring that thoroughly dissolve calcified scale without corroding delicate internal copper and stainless steel alloys."
  },
  {
    id: "tankless-vs-tank",
    category: "installation",
    question: "Is switching from a conventional 50-gallon tank to a tankless unit worth the investment?",
    answer: "For most Colorado Springs families, yes. Conventional water tanks continuously burn energy keeping 40 to 50 gallons of standing water hot 24/7, losing significant standby heat in cold basements. A modern condensing tankless unit only burns gas when hot water is actually in use, achieving an efficiency rating of up to 0.96 UEF (saving up to 30-40% on water heating utility bills) while delivering continuous, unlimited hot water and lasting 20+ years compared to just 8-10 years for a tank."
  },
  {
    id: "permits-pprbd",
    category: "installation",
    question: "Are permits required to repair or replace a water heater in Colorado Springs?",
    answer: "Minor component repairs (replacing sensors, valves, or flushes) do not require permits. However, full water heater replacements, fuel-type conversions (electric to gas), or major venting relocations require a mechanical and plumbing permit issued by the Pikes Peak Regional Building Department (PPRBD). Licensed technicians in our network handle all permit submissions, code compliance checks, and final city inspections."
  },
  {
    id: "gas-vs-electric",
    category: "installation",
    question: "Which is better for Colorado Springs homes: gas or electric tankless water heaters?",
    answer: "Gas tankless water heaters (natural gas or liquid propane) are overwhelmingly preferred for whole-home use in Colorado Springs. Heating icy 38°F winter inlet water to 120°F requires massive instantaneous thermal energy (150k to 199k BTUs). An electric tankless unit attempting this level of heat rise requires 28 to 36 kW of power, demanding 120 to 150 amps of electrical capacity, which often necessitates an expensive $3,000+ main electrical panel upgrade."
  },
  {
    id: "lifespan-warranty",
    category: "cost",
    question: "How long do tankless water heaters last, and how do I preserve the manufacturer warranty?",
    answer: "With routine annual descaling and preventative maintenance, quality tankless water heaters from premium manufacturers like Navien, Rinnai, and Noritz reliably operate for 18 to 25 years. To keep your 12-to-15 year heat exchanger factory warranty valid, manufacturers require documented annual servicing and the installation of an approved scale prevention system if water hardness exceeds 120 mg/L."
  }
];
