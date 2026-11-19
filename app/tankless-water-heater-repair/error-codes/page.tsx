import React from "react";
import { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { SERVICES_DATA } from "@/data/servicesData";

export const metadata: Metadata = {
  title: SERVICES_DATA["error-codes"].metaTitle,
  description: SERVICES_DATA["error-codes"].metaDescription,
};

export default function ErrorCodesPage() {
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Repair", url: "/tankless-water-heater-repair" },
    { name: "Error Codes", url: "/tankless-water-heater-repair/error-codes" },
  ];

  return (
    <ServiceDetailLayout
      service={SERVICES_DATA["error-codes"]}
      breadcrumbs={breadcrumbs}
      relatedServices={[
        { title: "Not Producing Hot Water", href: "/tankless-water-heater-repair/not-producing-hot-water" },
        { title: "Ignition Problem Diagnosis", href: "/tankless-water-heater-repair/ignition-problems" },
        { title: "Navien Error Code Guide", href: "/blog/navien-error-code-003-012-colorado-springs" },
        { title: "Rinnai Error Code Guide", href: "/blog/rinnai-error-codes-10-11-12-troubleshooting" },
        { title: "Emergency Tankless Repair", href: "/tankless-water-heater-repair/emergency" },
      ]}
    />
  );
}
