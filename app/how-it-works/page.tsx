import React from "react";
import Link from "next/link";
import { Phone, CheckCircle, Clock, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneCallerCard from "@/components/PhoneCallerCard";

export const metadata = {
  title: "How Our Referral Service Works",
  description:
    "Learn how our phone-based technician referral service quickly connects Colorado Springs homeowners with vetted, licensed tankless water heater pros.",
};

export default function HowItWorksPage() {
  const breadcrumbs = [{ name: "How It Works", url: "/how-it-works" }];

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
            <Clock className="w-3.5 h-3.5" />
            <span>Transparent 4-Step Referral Process</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
            How Our Technician Matching Service Works
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
            We are a phone-only technical matching service designed to get a qualified, vetted tankless water heater professional to your home as fast as possible.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-brand-orange text-white font-black text-lg flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h2 className="text-xl font-heading font-extrabold text-navy-950 mb-1">
                  Step 1: You Call Our Colorado Springs Dispatch Line
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Call <a href={SITE_CONFIG.phoneHref} className="font-bold text-navy-950 hover:text-brand-orange">{SITE_CONFIG.phoneDisplay}</a>. Tell us what is happening: is the water completely cold, is there an active leak, or is your digital display flashing an error code like E003 or Code 11? Share your tankless brand and physical neighborhood.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white font-black text-lg flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h2 className="text-xl font-heading font-extrabold text-navy-950 mb-1">
                  Step 2: We Match You With a Screened, Local Specialist
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Instead of dispatching an inexperienced generalist, we identify an on-call, licensed contractor who has specific experience with your brand (Navien, Rinnai, Noritz) and carries the right parts on their truck in your area (<Link href="/locations/monument" className="in-content-link">Monument</Link>, <Link href="/locations/fountain" className="in-content-link">Fountain</Link>, <Link href="/locations/woodland-park" className="in-content-link">Woodland Park</Link>, or Colorado Springs).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white font-black text-lg flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h2 className="text-xl font-heading font-extrabold text-navy-950 mb-1">
                  Step 3: In-Home Diagnostic & Upfront Clear Quote
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your technician arrives promptly within the confirmed window, performs a multi-point diagnostic check (testing gas working pressure, flow sensor rotation, igniter gap, and venting resistance), and presents a clear, transparent quote before any work starts. No hidden fees or surprise upcharges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h2 className="text-xl font-heading font-extrabold text-navy-950 mb-1">
                  Step 4: Repair & Performance Verification
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The repair is performed using OEM-approved replacement parts. The technician tests the flame under full hot water load at multiple fixtures, verifies clean combustion, and ensures your home has endless, reliable hot water once again.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-heading font-bold text-navy-950 uppercase tracking-wider mb-3">
              Explore Our Core Service Silos:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link href="/tankless-water-heater-repair" className="in-content-link flex items-center justify-between">
                <span>Tankless Water Heater Repair Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-repair/emergency" className="in-content-link flex items-center justify-between text-red-600">
                <span>Emergency 24/7 Priority Hotline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/tankless-water-heater-installation" className="in-content-link flex items-center justify-between">
                <span>Tankless Installation & Conversions</span>
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
            </div>
          </div>

          <PhoneCallerCard />

          <div className="text-center text-xs text-slate-500 pt-4">
            Learn more about high-efficiency water heating standards at the{" "}
            <a
              href="https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters"
              target="_blank"
              rel="noopener noreferrer"
              className="in-content-link"
            >
              U.S. Department of Energy (DOE)
            </a>
            .
          </div>

        </div>
      </section>
    </div>
  );
}
