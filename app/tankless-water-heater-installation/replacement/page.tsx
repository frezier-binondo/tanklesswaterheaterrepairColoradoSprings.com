import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.replacement.metaTitle,
  description: SERVICES_DATA.replacement.metaDescription,
};

export default function ReplacementPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Installation", url: "/tankless-water-heater-installation" },
    { name: "Replacement", url: "/tankless-water-heater-installation/replacement" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.replacement}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "New Tankless Installation", href: "/tankless-water-heater-installation" },
        { title: "When to Repair vs Replace Guide", href: "/blog/repair-vs-replace-failing-tankless-water-heater" },
        { title: "Leak Repair Services", href: "/tankless-water-heater-repair/leak-repair" },
        { title: "Gas Tankless Repair", href: "/tankless-water-heater-repair/gas" },
        { title: "Emergency 24/7 Service", href: "/tankless-water-heater-repair/emergency" },
      ]}
      externalLink={{
        title: "Colorado Springs Utilities Energy Rebates",
        url: "https://www.csu.org",
      }}
    />
  );
}
