import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.maintenance.metaTitle,
  description: SERVICES_DATA.maintenance.metaDescription,
};

export default function MaintenancePillarPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Maintenance", url: "/tankless-water-heater-maintenance" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.maintenance}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Chemical Descaling", href: "/tankless-water-heater-maintenance/descaling" },
        { title: "System Flushing", href: "/tankless-water-heater-maintenance/flushing" },
        { title: "DIY Vinegar vs Pro Descaling", href: "/blog/diy-vinegar-flush-vs-professional-acid-descaling" },
        { title: "Colorado Springs Hard Water Guide", href: "/blog/colorado-springs-hard-water-tankless-damage" },
        { title: "Tankless Water Heater Repair", href: "/tankless-water-heater-repair" },
      ]}
      externalLink={{
        title: "Colorado Springs Utilities Annual Water Quality Report",
        url: "https://www.csu.org",
      }}
    />
  );
}
