import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA["flow-sensor"].metaTitle,
  description: SERVICES_DATA["flow-sensor"].metaDescription,
};

export default function FlowSensorPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Flow Sensor Repair", url: "/tankless-water-heater-repair/flow-sensor" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA["flow-sensor"]}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Not Producing Hot Water", href: "/tankless-water-heater-repair/not-producing-hot-water" },
        { title: "Cold Water Sandwich Guide", href: "/blog/cold-water-sandwich-tankless-shutting-off" },
        { title: "Error Codes Troubleshooting", href: "/tankless-water-heater-repair/error-codes" },
        { title: "Annual Descaling & Flush", href: "/tankless-water-heater-maintenance/descaling" },
        { title: "Same-Day Service", href: "/tankless-water-heater-repair/same-day" },
      ]}
    />
  );
}
