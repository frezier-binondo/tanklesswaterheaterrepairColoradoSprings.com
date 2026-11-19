import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA["same-day"].metaTitle,
  description: SERVICES_DATA["same-day"].metaDescription,
};

export default function SameDayPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Same-Day Repair", url: "/tankless-water-heater-repair/same-day" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA["same-day"]}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Emergency 24/7 Repair", href: "/tankless-water-heater-repair/emergency" },
        { title: "Gas Tankless Repair", href: "/tankless-water-heater-repair/gas" },
        { title: "Flow Sensor Repair", href: "/tankless-water-heater-repair/flow-sensor" },
        { title: "Error Code Diagnostics", href: "/tankless-water-heater-repair/error-codes" },
        { title: "Navien Tankless Repair", href: "/tankless-water-heater-repair/navien" },
      ]}
    />
  );
}
