import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service and contractor referral disclaimer for Tankless Water Heater Repair in Colorado Springs.",
};

export default function TermsPage() {
  const breadcrumbs = [{ name: "Terms of Service", url: "/terms" }];

  return (
    <div className="bg-white">
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-heading font-extrabold text-navy-950 mb-6">
          Terms of Service & Referral Disclaimer
        </h1>
        <p className="text-xs text-slate-500 mb-8">Last Updated: November 2026</p>

        <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6">
          <h2 className="text-lg font-bold text-navy-950">1. Referral Service Notice</h2>
          <p>
            {SITE_CONFIG.brandName} operates as a referral and technical dispatch matching service. We are not a direct plumbing or mechanical contracting company. We connect homeowners seeking tankless water heater repair, installation, and maintenance with independent, licensed, and insured local service professionals.
          </p>

          <h2 className="text-lg font-bold text-navy-950">2. Independent Contractor Relationship</h2>
          <p>
            All contractors in our referral network are independent business entities. Each independent contractor sets their own diagnostic rates, parts pricing, and service warranties. Any agreement, contract, or warranty for work performed is solely between the homeowner and the independent contractor dispatched to the property.
          </p>

          <h2 className="text-lg font-bold text-navy-950">3. Emergency Situations</h2>
          <p>
            If you smell natural gas or suspect a hazardous gas leak, immediately evacuate the premises and contact your local gas utility provider (Colorado Springs Utilities at 719-448-4800) or dial 911 from a safe location. Do not rely on telephone dispatch services for life-threatening gas leaks or fire emergencies.
          </p>

          <h2 className="text-lg font-bold text-navy-950">4. Limitation of Liability</h2>
          <p>
            {SITE_CONFIG.brandName} makes reasonable efforts to verify that contractors in our network hold current state licenses and liability insurance. However, we do not warrant or guarantee the work, products, or conduct of any independent contractor.
          </p>
        </div>
      </div>
    </div>
  );
}
