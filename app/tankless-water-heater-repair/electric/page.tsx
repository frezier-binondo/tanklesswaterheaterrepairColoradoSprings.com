import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.electric.metaTitle,
  description: SERVICES_DATA.electric.metaDescription,
};

export default function ElectricRepairPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Electric Tankless Repair", url: "/tankless-water-heater-repair/electric" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.electric}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Gas Tankless Repair", href: "/tankless-water-heater-repair/gas" },
        { title: "Not Producing Hot Water", href: "/tankless-water-heater-repair/not-producing-hot-water" },
        { title: "Tankless Installation", href: "/tankless-water-heater-installation" },
        { title: "Flow Sensor Repair", href: "/tankless-water-heater-repair/flow-sensor" },
        { title: "Descaling & Element Maintenance", href: "/tankless-water-heater-maintenance/descaling" },
      ]}
    />
  );
}
