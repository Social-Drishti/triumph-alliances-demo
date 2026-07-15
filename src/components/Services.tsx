import React, { useState } from "react";
import { TrendingUp, Palette, Users, Briefcase, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../data";

interface ServicesProps {
  openConsultation: () => void;
}

export default function Services({ openConsultation }: ServicesProps) {
  const [activeService, setActiveService] = useState<string>("sales-strategy");

  return (
    <div className="w-full bg-white text-left">
      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/real_estate_sales_office.jpg')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10 space-y-6">
          <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">
            Our Service Suites
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-sans font-light tracking-tight leading-[0.95]">
            Complete Solutions for Real Estate Developers
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-sans font-light leading-relaxed max-w-4xl">
            Eliminating fragmented agencies. We integrate sales advisory, high-intent lead acquisition, channel broker networks, and on-site closing manpower.
          </p>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-24 max-w-none px-4 sm:px-8 lg:px-16">
        {/* Section Header — left-aligned split */}
        <div className="max-w-none flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">
              Capabilities Deep-Dive
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight">
              Explore Our Comprehensive Mandate Modules
            </h2>
          </div>
          <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed max-w-xl lg:text-right">
            Click on any module tab below to review our exact execution scope, core deliverables, and strategic focus area.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-100 pb-6">
          {services.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveService(s.id)}
              className={`px-8 py-4 rounded-none font-accent font-light text-base sm:text-lg tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer flex items-center space-x-3 ${
                activeService === s.id
                  ? "bg-brand-navy text-white"
                  : "bg-brand-offwhite text-gray-600 hover:bg-gray-200"
              }`}
            >
              <div className="shrink-0">
                {idx === 0 && <TrendingUp className="w-5 h-5" />}
                {idx === 1 && <Palette className="w-5 h-5" />}
                {idx === 2 && <Users className="w-5 h-5" />}
                {idx === 3 && <Briefcase className="w-5 h-5" />}
              </div>
              <span>{s.title.split("&")[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {services.map((s) => {
            if (s.id !== activeService) return null;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              >
                {/* Details Column Left */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <span className="text-lg sm:text-xl font-accent font-medium text-brand-gold uppercase tracking-[0.25em] block">
                      {s.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-sans font-light text-brand-navy tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 font-sans font-light leading-relaxed text-xl sm:text-2xl">
                      {s.description}
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <div className="space-y-6 pt-6 border-t border-gray-100">
                    <h4 className="font-accent font-medium text-base sm:text-lg text-brand-navy uppercase tracking-[0.25em]">
                      What is Included in Our Mandate:
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {s.details.map((detail, idx) => {
                        const parts = detail.split(":");
                        const title = parts[0];
                        const body = parts.slice(1).join(":");
                        return (
                          <div key={idx} className="flex items-start space-x-4">
                            <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0 mt-0.5" />
                            <span className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans font-light">
                              <span className="text-brand-navy font-medium">{title}:</span> {body}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Graphics / Highlights Right — clean sidebar */}
                <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
                  <h4 className="font-accent font-medium text-sm sm:text-base text-brand-navy uppercase tracking-[0.25em]">
                    Core Deliverables & Perks
                  </h4>
                  <ul className="space-y-5">
                    {s.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
                          <span className="text-sm font-medium font-accent">{i + 1}</span>
                        </div>
                        <span className="text-base sm:text-lg text-gray-600 font-sans font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-gray-100 space-y-6">
                    <p className="text-sm sm:text-base text-gray-500 font-sans font-light leading-relaxed">
                      All Triumph Alliances mandate modules integrate our proprietary marketing technology stacks. We supply weekly live reports directly to developers.
                    </p>
                    <button
                      onClick={openConsultation}
                      className="w-full px-12 py-5 text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none bg-brand-navy hover:bg-brand-navy/95 text-white transition-all duration-300 cursor-pointer flex items-center justify-center"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="ml-3 w-5 h-5 text-brand-gold" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>

      {/* Why We Avoid Fragmented Retainers */}
      <section className="bg-brand-offwhite py-24 border-t border-gray-100">
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
          {/* Section Header — left-aligned split */}
          <div className="max-w-none flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="space-y-4 max-w-2xl">
              <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">
                Unified Model
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight">
                Why We Avoid Fragmented Retainers
              </h2>
            </div>
            <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed max-w-xl lg:text-right">
              Managing three or four independent creative and sales agencies creates immediate informational friction, resulting in high CPL and slow absorption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-left">
              <div className="w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
                <span className="font-accent font-light text-2xl">01</span>
              </div>
              <h3 className="font-accent font-light text-xl sm:text-2xl text-brand-navy">Single-Point Accountability</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans font-light">
                At Triumph, there are no excuses. We own the creative briefing, the digital performance leads, the channel partners orientation, and the on-site client closures. If a project isn't hitting velocity, we self-correct immediately without administrative finger-pointing.
              </p>
            </div>

            <div className="space-y-6 text-left">
              <div className="w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
                <span className="font-accent font-light text-2xl">02</span>
              </div>
              <h3 className="font-accent font-light text-xl sm:text-2xl text-brand-navy">Interests Perfectly Aligned</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans font-light">
                Standard digital agencies get paid based on raw lead volume, so they optimize for cheap, low-intent clicks. Traditional broker networks only showcase what's easiest. We align completely with developer milestones: our reward structures are linked directly with closed booking registrations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
