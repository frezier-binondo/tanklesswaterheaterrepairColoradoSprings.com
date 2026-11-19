import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA["ignition-problems"].metaTitle,
  description: SERVICES_DATA["ignition-problems"].metaDescription,
};

export default function IgnitionProblemsPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Ignition Problems", url: "/tankless-water-heater-repair/ignition-problems" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA["ignition-problems"]}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Gas Tankless Repair", href: "/tankless-water-heater-repair/gas" },
        { title: "Error Codes Troubleshooting", href: "/tankless-water-heater-repair/error-codes" },
        { title: "Navien Error Code E003 Guide", href: "/blog/navien-error-code-003-012-colorado-springs" },
        { title: "Gas Line Sizing Guide", href: "/blog/gas-line-sizing-199k-btu-tankless-colorado" },
        { title: "Emergency 24/7 Repair", href: "/tankless-water-heater-repair/emergency" },
      ]}
    />
  );
}
