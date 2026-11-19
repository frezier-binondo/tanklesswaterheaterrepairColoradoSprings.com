import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.rinnai.metaTitle,
  description: SERVICES_DATA.rinnai.metaDescription,
};

export default function RinnaiRepairPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Rinnai Tankless Repair", url: "/tankless-water-heater-repair/rinnai" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.rinnai}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Navien Tankless Repair", href: "/tankless-water-heater-repair/navien" },
        { title: "Noritz Tankless Repair", href: "/tankless-water-heater-repair/noritz" },
        { title: "Rinnai Code 10, 11, 12 Troubleshooting", href: "/blog/rinnai-error-codes-10-11-12-troubleshooting" },
        { title: "Gas Tankless Repair", href: "/tankless-water-heater-repair/gas" },
        { title: "Annual Descaling & Flush", href: "/tankless-water-heater-maintenance/descaling" },
      ]}
      externalLink={{
        title: "Rinnai America Corporation Support",
        url: "https://www.rinnai.us",
      }}
    />
  );
}
