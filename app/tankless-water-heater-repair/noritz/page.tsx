import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.noritz.metaTitle,
  description: SERVICES_DATA.noritz.metaDescription,
};

export default function NoritzRepairPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Noritz Tankless Repair", url: "/tankless-water-heater-repair/noritz" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.noritz}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Navien Tankless Repair", href: "/tankless-water-heater-repair/navien" },
        { title: "Rinnai Tankless Repair", href: "/tankless-water-heater-repair/rinnai" },
        { title: "Error Codes Guide", href: "/tankless-water-heater-repair/error-codes" },
        { title: "Ignition Problem Diagnosis", href: "/tankless-water-heater-repair/ignition-problems" },
        { title: "Annual Descaling & Flush", href: "/tankless-water-heater-maintenance/descaling" },
      ]}
      externalLink={{
        title: "Noritz America Technical Reference",
        url: "https://www.noritz.com",
      }}
    />
  );
}
