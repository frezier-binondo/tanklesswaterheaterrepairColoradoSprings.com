"use client";

import React from "react";
import { Phone, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy-950/95 backdrop-blur-md border-t border-navy-800 p-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Techs On Call Now</span>
          </div>
          <span className="text-xs font-semibold text-white">
            Colorado Springs Dispatch
          </span>
        </div>
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex-1 bg-brand-orange hover:bg-brand-orange-hover text-white py-3 px-4 rounded-xl font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/40 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-white animate-bounce" />
          <span>Call {SITE_CONFIG.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}
