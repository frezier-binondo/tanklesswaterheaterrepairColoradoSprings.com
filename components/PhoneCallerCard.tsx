import React from "react";
import { Phone, CheckCircle, Clock, ShieldCheck, AlertCircle, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

interface PhoneCallerCardProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function PhoneCallerCard({
  title = "Ready to Speak Directly With a Colorado Springs Tankless Technician?",
  subtitle = "We operate a 100% phone-based direct dispatch service. No waiting for email replies or filling out lengthy forms.",
  compact = false,
}: PhoneCallerCardProps) {
  return (
    <div className={`drainhaus-card overflow-hidden border-2 border-navy-800 bg-white ${compact ? 'p-6' : 'p-6 sm:p-8'}`}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Direct Phone Dispatch Only • Zero Lead Forms</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-950 tracking-tight">
            {title}
          </h3>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
            {subtitle}
          </p>

          {/* What to have ready checklist */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <FileText className="w-3.5 h-3.5 text-brand-orange" />
              <span>What Callers Should Have Ready For Fast Diagnosis:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Brand & Model:</strong> Printed on front panel (Navien, Rinnai, Noritz, etc.)</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Error Code:</strong> Flashing letters/numbers (e.g. E003, Code 11, 90)</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Fuel Type:</strong> Natural Gas (CSU), Propane (LP tank), or Electric (240V)</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Home Address:</strong> Colorado Springs, Monument, Fountain, or nearby ZIP code</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right CTA Button & Phone */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end justify-center bg-slate-50 p-6 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
            24/7 Priority Hotline
          </span>
          <a
            href={SITE_CONFIG.phoneHref}
            className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-950 hover:text-brand-orange transition-colors flex items-center gap-2 mb-3"
          >
            <span>{SITE_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={SITE_CONFIG.phoneHref}
            className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-heading font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/30 transition-transform transform hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            <Phone className="w-5 h-5 fill-white" />
            <span>Call For Immediate Dispatch</span>
          </a>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Licensed & Insured Local Professionals</span>
          </div>
        </div>
      </div>
    </div>
  );
}
