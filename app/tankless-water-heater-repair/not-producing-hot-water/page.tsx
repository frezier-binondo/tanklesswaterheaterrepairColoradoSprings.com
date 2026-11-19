import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA["not-producing-hot-water"].metaTitle,
  description: SERVICES_DATA["not-producing-hot-water"].metaDescription,
};

export default function NotProducingHotWaterPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Not Producing Hot Water", url: "/tankless-water-heater-repair/not-producing-hot-water" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA["not-producing-hot-water"]}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Flow Sensor Repair", href: "/tankless-water-heater-repair/flow-sensor" },
        { title: "Ignition Problem Diagnosis", href: "/tankless-water-heater-repair/ignition-problems" },
        { title: "Cold Water Sandwich Guide", href: "/blog/cold-water-sandwich-tankless-shutting-off" },
        { title: "Error Codes Troubleshooting", href: "/tankless-water-heater-repair/error-codes" },
        { title: "Annual Descaling & Flush", href: "/tankless-water-heater-maintenance/descaling" },
      ]}
    />
  );
}
