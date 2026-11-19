import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.flushing.metaTitle,
  description: SERVICES_DATA.flushing.metaDescription,
};

export default function FlushingPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Maintenance", url: "/tankless-water-heater-maintenance" },
    { name: "Flushing", url: "/tankless-water-heater-maintenance/flushing" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.flushing}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Chemical Descaling", href: "/tankless-water-heater-maintenance/descaling" },
        { title: "Annual Maintenance Protocol", href: "/tankless-water-heater-maintenance" },
        { title: "Flow Sensor Repair", href: "/tankless-water-heater-repair/flow-sensor" },
        { title: "Colorado Springs Hard Water Guide", href: "/blog/colorado-springs-hard-water-tankless-damage" },
        { title: "Tankless Water Heater Repair", href: "/tankless-water-heater-repair" },
      ]}
    />
  );
}
