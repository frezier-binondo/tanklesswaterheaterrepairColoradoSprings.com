import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.descaling.metaTitle,
  description: SERVICES_DATA.descaling.metaDescription,
};

export default function DescalingPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Maintenance", url: "/tankless-water-heater-maintenance" },
    { name: "Descaling", url: "/tankless-water-heater-maintenance/descaling" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.descaling}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "System Flushing", href: "/tankless-water-heater-maintenance/flushing" },
        { title: "Annual Maintenance Protocol", href: "/tankless-water-heater-maintenance" },
        { title: "DIY Vinegar vs Pro Descaling", href: "/blog/diy-vinegar-flush-vs-professional-acid-descaling" },
        { title: "Hard Water Mineral Damage", href: "/blog/colorado-springs-hard-water-tankless-damage" },
        { title: "Tankless Water Heater Repair", href: "/tankless-water-heater-repair" },
      ]}
      externalLink={{
        title: "Colorado Springs Utilities Water Quality Info",
        url: "https://www.csu.org",
      }}
    />
  );
}
