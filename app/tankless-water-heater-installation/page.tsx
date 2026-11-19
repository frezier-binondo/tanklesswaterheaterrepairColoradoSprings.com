import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.installation.metaTitle,
  description: SERVICES_DATA.installation.metaDescription,
};

export default function InstallationPillarPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Installation", url: "/tankless-water-heater-installation" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.installation}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Tankless Replacement", href: "/tankless-water-heater-installation/replacement" },
        { title: "Tankless vs Tank Comparison", href: "/blog/tankless-vs-tank-water-heaters-colorado-efficiency" },
        { title: "Gas Line Sizing Guide", href: "/blog/gas-line-sizing-199k-btu-tankless-colorado" },
        { title: "Altitude Derating Requirements", href: "/blog/altitude-derating-tankless-water-heaters-colorado" },
        { title: "Annual Descaling & Flush", href: "/tankless-water-heater-maintenance/descaling" },
      ]}
      externalLink={{
        title: "Pikes Peak Regional Building Department (PPRBD) Permits",
        url: "https://www.pprbd.org",
      }}
    />
  );
}
