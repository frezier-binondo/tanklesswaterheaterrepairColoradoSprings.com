import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA["leak-repair"].metaTitle,
  description: SERVICES_DATA["leak-repair"].metaDescription,
};

export default function LeakRepairPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Leak Repair", url: "/tankless-water-heater-repair/leak-repair" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA["leak-repair"]}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Emergency 24/7 Repair", href: "/tankless-water-heater-repair/emergency" },
        { title: "Flow Sensor Repair", href: "/tankless-water-heater-repair/flow-sensor" },
        { title: "Freezing Weather Condensate Protection", href: "/blog/preventing-frozen-condensate-lines-winter" },
        { title: "Tankless Replacement Options", href: "/tankless-water-heater-installation/replacement" },
        { title: "Annual Descaling & Flush", href: "/tankless-water-heater-maintenance/descaling" },
      ]}
    />
  );
}
