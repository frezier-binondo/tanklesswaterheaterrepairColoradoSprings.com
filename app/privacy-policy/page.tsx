import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Tankless Water Heater Repair in Colorado Springs phone referral service.",
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ name: "Privacy Policy", url: "/privacy-policy" }];

  return (
    <div className="bg-white">
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-heading font-extrabold text-navy-950 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mb-8">Last Updated: November 2026</p>

        <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6">
          <p>
            <strong>{SITE_CONFIG.brandName}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates a phone-only technical matching and referral service connecting homeowners in Colorado Springs and surrounding areas with independent licensed plumbing and heating contractors.
          </p>

          <h2 className="text-lg font-bold text-navy-950">1. Information We Collect</h2>
          <p>
            Because we do not operate online lead capture forms, we collect information solely when you initiate a telephone call to our service number ({SITE_CONFIG.phoneDisplay}). Information collected verbally may include your name, telephone number, service address, water heater brand, model number, and descriptions of the malfunction or error code.
          </p>

          <h2 className="text-lg font-bold text-navy-950">2. How We Use Your Information</h2>
          <p>
            We use the information you provide over the telephone exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Connect you with an available, licensed independent contractor in your local area.</li>
            <li>Coordinate service appointment windows and confirm technician arrival.</li>
            <li>Maintain internal call dispatch records for quality assurance.</li>
          </ul>

          <h2 className="text-lg font-bold text-navy-950">3. Information Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information to third-party marketing companies. We share your contact details and service request details only with the independent service professional assigned to diagnose and service your tankless water heater.
          </p>

          <h2 className="text-lg font-bold text-navy-950">4. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us by phone at{" "}
            <a href={SITE_CONFIG.phoneHref} className="in-content-link">{SITE_CONFIG.phoneDisplay}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
