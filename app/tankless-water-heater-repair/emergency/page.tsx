import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.emergency.metaTitle,
  description: SERVICES_DATA.emergency.metaDescription,
};

export default function EmergencyPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Emergency 24/7 Repair", url: "/tankless-water-heater-repair/emergency" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.emergency}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Same-Day Tankless Repair", href: "/tankless-water-heater-repair/same-day" },
        { title: "Gas Tankless Repair", href: "/tankless-water-heater-repair/gas" },
        { title: "Leak Repair Services", href: "/tankless-water-heater-repair/leak-repair" },
        { title: "Winter Freeze Protection Guide", href: "/blog/preventing-frozen-condensate-lines-winter" },
        { title: "Annual Descaling & Flush", href: "/tankless-water-heater-maintenance/descaling" },
      ]}
    />
  );
}
