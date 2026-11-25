"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Flame, Wrench, MapPin, ChevronDown, Menu, X, ShieldAlert, Clock, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Emergency / Dispatch Notification Bar */}
      <div className="bg-navy-950 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              24/7 Dispatch
            </span>
            <span className="hidden md:inline text-slate-300">
              Emergency & Same-Day Tankless Water Heater Repair in Colorado Springs & El Paso County
            </span>
            <span className="md:hidden text-slate-300 text-xs">
              Colorado Springs & Pikes Peak Region
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>Available 24/7/365</span>
            </div>
            <a
              href={SITE_CONFIG.phoneHref}
              className="text-white hover:text-brand-orange font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>Direct Tech Line: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 text-white flex items-center justify-center shadow-md border border-navy-700 group-hover:border-brand-orange transition-colors">
              <div className="relative">
                <Wrench className="w-6 h-6 text-white" />
                <Flame className="w-3.5 h-3.5 text-brand-orange absolute -top-1 -right-1 fill-brand-orange animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-navy-950 text-base sm:text-lg leading-tight tracking-tight group-hover:text-brand-orange transition-colors">
                Tankless Water Heater Repair
              </span>
              <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                in Colorado Springs
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-lg transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-orange" />
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-3 px-2 grid gap-1 z-50">
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Repair Silo
                  </div>
                  <Link
                    href="/services/water-heater-repair"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <Flame className="w-4 h-4 text-brand-orange" />
                    <span>Water Heater Repair</span>
                  </Link>
                  <Link
                    href="/tankless-water-heater-repair"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-brand-orange" />
                    <span>Tankless Water Heater Repair</span>
                  </Link>
                  <Link
                    href="/tankless-water-heater-repair/emergency"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span>Emergency 24/7 Repair</span>
                  </Link>
                  <Link
                    href="/tankless-water-heater-repair/same-day"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>Same-Day Service</span>
                  </Link>
                  <Link
                    href="/tankless-water-heater-repair/gas"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <Flame className="w-4 h-4 text-brand-orange" />
                    <span>Gas Tankless Repair</span>
                  </Link>
                  <Link
                    href="/tankless-water-heater-repair/electric"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Electric Tankless Repair</span>
                  </Link>

                  <div className="border-t border-slate-100 my-1"></div>
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Installation & Maintenance
                  </div>
                  <Link
                    href="/tankless-water-heater-installation"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <Wrench className="w-4 h-4 text-navy-700" />
                    <span>Installation & Upgrades</span>
                  </Link>
                  <Link
                    href="/tankless-water-heater-maintenance"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Maintenance & Descaling</span>
                  </Link>
                  <Link
                    href="/tankless-water-heater-repair/error-codes"
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <ShieldAlert className="w-4 h-4 text-slate-500" />
                    <span>Error Code Diagnostics</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <Link
                href="/locations"
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1"
              >
                <span>Locations</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {locationsOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-3 px-2 grid gap-1 z-50">
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Nearby Service Markets
                  </div>
                  <Link
                    href="/locations/monument"
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <span>Monument, CO</span>
                    <span className="text-xs text-slate-400">6,900 ft</span>
                  </Link>
                  <Link
                    href="/locations/fountain"
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <span>Fountain, CO</span>
                    <span className="text-xs text-slate-400">5,500 ft</span>
                  </Link>
                  <Link
                    href="/locations/manitou-springs"
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <span>Manitou Springs, CO</span>
                    <span className="text-xs text-slate-400">6,400 ft</span>
                  </Link>
                  <Link
                    href="/locations/woodland-park"
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <span>Woodland Park, CO</span>
                    <span className="text-xs text-slate-400">8,500 ft</span>
                  </Link>
                  <Link
                    href="/locations/falcon"
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-orange rounded-lg transition-colors"
                  >
                    <span>Falcon, CO</span>
                    <span className="text-xs text-slate-400">7,200 ft</span>
                  </Link>
                  <div className="border-t border-slate-100 my-1"></div>
                  <Link
                    href="/locations"
                    className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-navy-800 hover:text-brand-orange rounded-lg"
                  >
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>View All El Paso County Areas</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-lg transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-lg transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right Phone CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Speak With A Tech Now
              </span>
              <a
                href={SITE_CONFIG.phoneHref}
                className="text-lg font-heading font-extrabold text-navy-950 hover:text-brand-orange transition-colors flex items-center justify-end gap-1.5"
              >
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
            <a
              href={SITE_CONFIG.phoneHref}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-brand-orange/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={SITE_CONFIG.phoneHref}
              className="bg-brand-orange text-white p-2.5 rounded-lg flex items-center justify-center shadow"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <div className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Services
              </div>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-navy-900 hover:text-brand-orange"
              >
                All Services Overview
              </Link>
              <Link
                href="/services/water-heater-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-sm font-medium text-slate-800 hover:text-brand-orange"
              >
                Water Heater Repair
              </Link>
              <Link
                href="/tankless-water-heater-repair"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-orange"
              >
                Tankless Repair (Colorado Springs)
              </Link>
              <Link
                href="/tankless-water-heater-repair/emergency"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-700"
              >
                Emergency 24/7 Repair
              </Link>
              <Link
                href="/tankless-water-heater-installation"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-orange"
              >
                Installation & Replacement
              </Link>
              <Link
                href="/tankless-water-heater-maintenance"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-orange"
              >
                Maintenance & Descaling
              </Link>
              <Link
                href="/tankless-water-heater-repair/error-codes"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-brand-orange"
              >
                Error Code Guide
              </Link>
            </div>

            <div className="pt-2 pb-1 border-t border-slate-100">
              <div className="px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Locations Covered
              </div>
              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-navy-900 hover:text-brand-orange"
              >
                All Service Areas (Map)
              </Link>
              <div className="grid grid-cols-2 gap-1 px-3">
                <Link
                  href="/locations/monument"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm text-slate-600 hover:text-brand-orange"
                >
                  Monument
                </Link>
                <Link
                  href="/locations/fountain"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm text-slate-600 hover:text-brand-orange"
                >
                  Fountain
                </Link>
                <Link
                  href="/locations/manitou-springs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm text-slate-600 hover:text-brand-orange"
                >
                  Manitou Springs
                </Link>
                <Link
                  href="/locations/woodland-park"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm text-slate-600 hover:text-brand-orange"
                >
                  Woodland Park
                </Link>
                <Link
                  href="/locations/falcon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm text-slate-600 hover:text-brand-orange"
                >
                  Falcon
                </Link>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Blog (10 Expert Guides)
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200">
            <a
              href={SITE_CONFIG.phoneHref}
              className="w-full bg-brand-orange text-white py-3.5 px-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Call Technician: {SITE_CONFIG.phoneDisplay}</span>
            </a>
            <p className="text-center text-xs text-slate-500 mt-2">
              Phone-Only Service • No Forms • Direct Local Tech Dispatch
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
