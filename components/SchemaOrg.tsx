import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
}

export function LocalBusinessSchema({
  name = SITE_CONFIG.brandName,
  description = "Emergency, same-day, and routine tankless water heater repair, installation, and maintenance across Colorado Springs and El Paso County.",
  url = SITE_CONFIG.siteUrl,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "@id": `${SITE_CONFIG.siteUrl}/#localbusiness`,
    "name": name,
    "alternateName": SITE_CONFIG.shortBrand,
    "url": url,
    "telephone": "+14567890123",
    "priceRange": "$$",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.city,
      "addressRegion": SITE_CONFIG.address.state,
      "postalCode": SITE_CONFIG.address.zip,
      "addressCountry": SITE_CONFIG.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.geo.latitude,
      "longitude": SITE_CONFIG.geo.longitude,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "areaServed": [
      { "@type": "City", "name": "Colorado Springs" },
      { "@type": "City", "name": "Monument" },
      { "@type": "City", "name": "Fountain" },
      { "@type": "City", "name": "Manitou Springs" },
      { "@type": "City", "name": "Woodland Park" },
      { "@type": "City", "name": "Falcon" },
      { "@type": "County", "name": "El Paso County" },
      { "@type": "County", "name": "Teller County" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tankless Water Heater Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tankless Water Heater Repair",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Tankless Water Heater Repair",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tankless Water Heater Installation",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tankless Water Heater Descaling and Maintenance",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
