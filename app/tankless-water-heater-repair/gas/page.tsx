import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.gas.metaTitle,
  description: SERVICES_DATA.gas.metaDescription,
};

export default function GasRepairPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Gas Tankless Repair", url: "/tankless-water-heater-repair/gas" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.gas}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Electric Tankless Repair", href: "/tankless-water-heater-repair/electric" },
        { title: "Ignition Problem Diagnosis", href: "/tankless-water-heater-repair/ignition-problems" },
        { title: "Gas Line Sizing Guide", href: "/blog/gas-line-sizing-199k-btu-tankless-colorado" },
        { title: "Altitude Derating Guide", href: "/blog/altitude-derating-tankless-water-heaters-colorado" },
        { title: "Emergency Gas Repair", href: "/tankless-water-heater-repair/emergency" },
      ]}
      externalLink={{
        title: "Colorado Springs Utilities (CSU) Gas Service",
        url: "https://www.csu.org",
      }}
    />
  );
}
