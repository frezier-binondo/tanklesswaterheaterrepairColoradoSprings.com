import React from "react";
import Link from "next/link";
import { ShieldCheck, Wrench, Award, CheckCircle, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";

export const metadata = {
  title: "About Our Service",
  description:
    "Learn how we connect Colorado Springs homeowners with vetted, licensed, and insured tankless water heater technicians. Call (456) 789-0123.",
};

export default function AboutPage() {
  const breadcrumbs = [{ name: "About", url: "/about" }];

  return (
    <div className="bg-white">
      <div className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-14 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Local Contractor Referral Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            About Tankless Water Heater Repair in Colorado Springs
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
            We were founded on a simple principle: modern tankless water heaters are high-tech combustion appliances that require specialized technicians—not general handymen.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950">
              Who We Are & What We Do
            </h2>
            <p>
              <strong>Tankless Water Heater Repair in Colorado Springs</strong> is a dedicated technical referral and emergency dispatch service built specifically around on-demand water heating systems. Instead of calling three different general plumbers who might only see a tankless unit once a month, you call our central dispatch hotline. We match your specific brand (Navien, Rinnai, Noritz, Rheem) and geographic area with a vetted, licensed local technician who works on these systems every single day.
            </p>
            <p>
              Our network covers all of Colorado Springs as well as surrounding communities including <Link href="/locations/monument" className="in-content-link">Monument</Link>, <Link href="/locations/fountain" className="in-content-link">Fountain</Link>, <Link href="/locations/manitou-springs" className="in-content-link">Manitou Springs</Link>, <Link href="/locations/woodland-park" className="in-content-link">Woodland Park</Link>, and <Link href="/locations/falcon" className="in-content-link">Falcon</Link>.
            </p>

            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950 pt-4">
              Our Vetting & Technician Screening Standards
            </h2>
            <p>
              We know inviting a service technician into your home requires trust. Every contractor in our technical network is screened for:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Active State Licensing:</strong> Verified Colorado Master Plumber or Journeyman credentials.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Full Liability & Workers Comp Insurance:</strong> Protecting your home and property against accidental damages.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>PPRBD Code Compliance:</strong> Familiarity with Pikes Peak Regional Building Department mechanical and plumbing regulations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Upfront Pricing Guarantee:</strong> You receive a clear, itemized quote before any repair work commences.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-heading font-bold text-navy-950 uppercase tracking-wider mb-3">
              Explore Our Core Service Silos:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link href="/tankless-water-heater-repair" className="in-content-link flex items-center justify-between">
                <span>Tankless Water Heater Repair</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-installation" className="in-content-link flex items-center justify-between">
                <span>Tankless Installation & Replacement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-maintenance" className="in-content-link flex items-center justify-between">
                <span>Annual Maintenance & Descaling</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/faq" className="in-content-link flex items-center justify-between">
                <span>Frequently Asked Questions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/locations" className="in-content-link flex items-center justify-between">
                <span>Locations & Service Areas Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <PhoneCallerCard
            title="Ready to Connect With a Screened Local Professional?"
            subtitle="Give our dispatch team a call at (456) 789-0123. Describe your problem and we will route a local technician to your door."
          />

          <div className="text-center text-xs text-slate-500 pt-4">
            Building department requirements:{" "}
            <a
              href="https://www.pprbd.org"
              target="_blank"
              rel="noopener noreferrer"
              className="in-content-link"
            >
              Pikes Peak Regional Building Department (PPRBD)
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
