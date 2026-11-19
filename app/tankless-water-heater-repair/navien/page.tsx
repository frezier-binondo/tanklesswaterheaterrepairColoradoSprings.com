import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA.navien.metaTitle,
  description: SERVICES_DATA.navien.metaDescription,
};

export default function NavienRepairPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Navien Tankless Repair", url: "/tankless-water-heater-repair/navien" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA.navien}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Rinnai Tankless Repair", href: "/tankless-water-heater-repair/rinnai" },
        { title: "Noritz Tankless Repair", href: "/tankless-water-heater-repair/noritz" },
        { title: "Navien E003 vs E012 Guide", href: "/blog/navien-error-code-003-012-colorado-springs" },
        { title: "Error Codes Directory", href: "/tankless-water-heater-repair/error-codes" },
        { title: "Annual Descaling & Flush", href: "/tankless-water-heater-maintenance/descaling" },
      ]}
      externalLink={{
        title: "Navien Inc. Official Technical Support",
        url: "https://www.navieninc.com",
      }}
    />
  );
}
