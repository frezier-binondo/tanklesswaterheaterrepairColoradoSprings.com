import React from "react";
import Link from "next/link";
import { HelpCircle, Phone, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";
import PhoneCallerCard from "@/components/PhoneCallerCard";
import { FAQSchema } from "@/components/SchemaOrg";
import { FAQ_DATA } from "@/data/faqData";

export const metadata = {
  title: "Tankless Water Heater FAQ | 10 Homeowner Answers for Colorado Springs",
  description:
    "Got questions about tankless water heater repair costs, altitude sizing, maintenance intervals, or noise in Colorado Springs? Read our 10 comprehensive answers.",
};

export default function FAQPage() {
  const breadcrumbs = [{ name: "FAQ", url: "/faq" }];

  return (
    <div className="bg-white">
      {/* Schema.org FAQPage structured data */}
      <FAQSchema faqs={FAQ_DATA} />

      {/* Breadcrumb Header */}
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Homeowner Support & Troubleshooting Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            Frequently Asked Questions: Tankless Water Heaters
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
            Clear, honest answers to the 10 most common questions Colorado Springs homeowners ask regarding repair costs, same-day scheduling, mineral descaling, winter freeze hazards, and high-altitude sizing.
          </p>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950">
              Top 10 Homeowner Questions Answered
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Click any question below to expand detailed diagnostic explanations
            </p>
          </div>

          {/* Accordion Component with all 10 FAQs */}
          <div className="mb-14">
            <Accordion items={FAQ_DATA} />
          </div>

          {/* Internal Links Block (At least 5 as required) */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 mb-12">
            <h3 className="text-sm font-heading font-bold text-navy-950 uppercase tracking-wider mb-3">
              Explore Related Services & Local Hubs:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link href="/tankless-water-heater-repair" className="in-content-link flex items-center justify-between">
                <span>Tankless Water Heater Repair Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-repair/emergency" className="in-content-link flex items-center justify-between text-red-600">
                <span>Emergency 24/7 Priority Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-maintenance/descaling" className="in-content-link flex items-center justify-between">
                <span>Annual Chemical Descaling & Flush</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-installation" className="in-content-link flex items-center justify-between">
                <span>High-Altitude Tankless Installation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/locations" className="in-content-link flex items-center justify-between">
                <span>Regional Coverage Map (Monument to Fountain)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
              <span>External Authority Reference: </span>
              <a
                href="https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters"
                target="_blank"
                rel="noopener noreferrer"
                className="in-content-link inline-flex items-center gap-1"
              >
                <span>U.S. Department of Energy (DOE) Tankless Water Heating Guide</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Phone-Only Conversion Card */}
          <PhoneCallerCard
            title="Have a Question Not Listed Here?"
            subtitle="Give our technical dispatch team a call. Describe your situation and we will connect you directly with a local specialist."
          />

        </div>
      </section>
    </div>
  );
}
