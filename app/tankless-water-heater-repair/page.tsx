import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.repair.metaTitle,
  description: SERVICES_DATA.repair.metaDescription,
};

export default function RepairPillarPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Tankless Water Heater Repair", url: "/tankless-water-heater-repair" },
  ];

  const related = [
    { title: "Emergency 24/7 Repair", href: "/tankless-water-heater-repair/emergency" },
    { title: "Same-Day Service", href: "/tankless-water-heater-repair/same-day" },
    { title: "Gas Tankless Repair", href: "/tankless-water-heater-repair/gas" },
    { title: "Electric Tankless Repair", href: "/tankless-water-heater-repair/electric" },
    { title: "Error Code Diagnostics", href: "/tankless-water-heater-repair/error-codes" },
    { title: "Navien Tankless Repair", href: "/tankless-water-heater-repair/navien" },
    { title: "Rinnai Tankless Repair", href: "/tankless-water-heater-repair/rinnai" },
    { title: "Noritz Tankless Repair", href: "/tankless-water-heater-repair/noritz" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.repair}
      breadcrumbs={breadcrumbs}
      relatedServices={related}
    />
  );
}
