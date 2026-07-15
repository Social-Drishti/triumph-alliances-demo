import React from "react";
import { ShieldCheck, Compass, Users, Sparkles, TrendingUp, Award, Calendar, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const milestones = [
  {
    year: "2022",
    title: "Founding & First Mandate",
    description: "Founded in Mumbai with 5 real estate professionals. Closed a 40-Cr residential project in Thane in under 60 days."
  },
  {
    year: "2023",
    title: "Channel Partner Network Launch",
    description: "Launched the first structured broker network program, onboarding 1,200+ local partners with digital toolkits."
  },
  {
    year: "2024",
    title: "In-House Digital Performance Studio",
    description: "Established our in-house studio, reducing cost-per-lead for partner developers by over 40%."
  },
  {
    year: "2025",
    title: "INR 1,000+ Cr Cumulative Sales",
    description: "Crossed INR 1,090+ Cr in cumulative sales across South Mumbai, central belt, and Thane."
  },
  {
    year: "2026",
    title: "The Strategy House Expansion",
    description: "Evolved into Mumbai's premier Comprehensive Strategy House with end-to-end sales, marketing, and broker distributions."
  }
];

const team = [
  {
    name: "Vinay Dangodra",
    role: "Co-Founder & Head of Strategy",
    image: "/stock_buildings.jpg",
    bio: "Over 12 years of real estate strategy and sales closure excellence. Pioneered the zero setup cost model in Mumbai."
  },
  {
    name: "Sneha Nair",
    role: "Creative Director & Digital Lead",
    image: "/stock_buildings (3).jpg",
    bio: "Expert performance marketer with deep experience creating high-converting luxury collateral."
  },
  {
    name: "Rajesh K. Sharma",
    role: "VP - Channel Partner Relations",
    image: "/stock_buildings (4).jpg",
    bio: "Manages our network of 3,500+ brokers, ensuring seamless orientation and rapid payouts."
  },
  {
    name: "Ananya Deshmukh",
    role: "Head of CRM & Site Operations",
    image: "/stock_buildings (5).jpg",
    bio: "Maintains elite conversion ratios on-site and coordinates end-to-end booking documentation."
  }
];

const usps = [
  {
    title: "Zero Setup Cost",
    desc: "We invest our own capital into the digital and collateral kit. You only pay when we close.",
    icon: ShieldCheck
  },
  {
    title: "Unmatched Closing Velocity",
    desc: "Specialized, trained sales closing managers ensure double-digit conversion ratios on site.",
    icon: TrendingUp
  },
  {
    title: "Massive Sourcing Force",
    desc: "Over 3,500 active channel partners mobilized immediately through digitized inventory toolkits.",
    icon: Users
  },
  {
    title: "Single Strategy House",
    desc: "No more fragmented agencies. We handle everything end-to-end in-house.",
    icon: Award
  }
];

export default function About() {
  return (
    <div className="w-full bg-white text-left">
      {/* Page Header */}
      <section className="relative bg-brand-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stock_buildings.jpg')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10 text-left space-y-6">
          <span className="text-lg sm:text-xl text-white font-accent font-medium tracking-[0.25em] uppercase">Inside the Strategy House</span>
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-sans font-light tracking-tight leading-[1]">
            Our Story & Core Philosophy
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl font-sans font-light leading-relaxed pt-2">
            Nurturing developer trust, driving sales speed, and building lasting channel ecosystems across Mumbai.
          </p>
        </div>
      </section>

      {/* 1. MISSION & VISION SPLIT */}
      <section className="py-24 max-w-none px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="overflow-hidden aspect-[4/3] bg-brand-navy relative">
              <img
                src="/real_estate_sales_office.jpg"
                alt="Triumph Strategy Office Mumbai"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">Who We Are</span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight leading-[1.1]">
                Aligning developer goals with absolute execution speed.
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed">
                Founded in 2022, Triumph Alliances recognized a fundamental flaw: developers were navigating a disjointed maze of creative designers, lead generators, and brokers.
              </p>
              <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed">
                We consolidated everything under one roof — becoming Mumbai's first structured Strategy House for Developers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Compass className="w-6 h-6 text-brand-teal" />
                  <h4 className="font-accent font-medium text-xl sm:text-2xl text-brand-navy">Our Mission</h4>
                </div>
                <p className="text-base sm:text-lg text-gray-500 font-sans font-light leading-relaxed">
                  Eliminate developer risk and accelerate inventory absorption through integrated digital assets, elite sales closures, and direct broker networks.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-brand-gold" />
                  <h4 className="font-accent font-medium text-xl sm:text-2xl text-brand-navy">Our Vision</h4>
                </div>
                <p className="text-base sm:text-lg text-gray-500 font-sans font-light leading-relaxed">
                  To be India's most trusted, performance-driven real estate distribution house, respected by builders, investors, and channel brokers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE TRIUMPH (USPS GRID) */}
      <section className="bg-brand-offwhite py-24">
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">The Triumph Edge</span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight leading-[1.1]">
                Why Real Estate Developers Trust Us
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed">
                Unlike agencies that collect upfront retainers, we link our success entirely with your booking metrics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, idx) => (
              <div key={idx} className="group">
                <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <usp.icon className="w-6 h-6 text-brand-teal group-hover:text-white" />
                </div>
                <h3 className="font-accent font-light text-2xl sm:text-3xl text-brand-navy mb-3">
                  {usp.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-sans font-light">
                  {usp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TIMELINE OF MILESTONES */}
      <section className="py-24">
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">Our Path</span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight leading-[1.1]">
                Timeline of Key Milestones
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed">
                Our evolution from a compact local team into Mumbai's fastest-growing real estate distribution network.
              </p>
            </div>
          </div>

          <div className="relative border-l border-gray-200 max-w-4xl pl-6 sm:pl-10 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-brand-navy group-hover:border-brand-gold transition-colors duration-300" />

                <div className="group-hover:translate-x-1 transition-transform duration-300 relative">
                  <span className="inline-block px-4 py-1.5 bg-brand-gold text-white font-accent font-medium text-sm tracking-wider uppercase mb-4">
                    {m.year}
                  </span>
                  <h3 className="font-accent font-light text-2xl sm:text-3xl text-brand-navy mb-3">
                    {m.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans font-light">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET THE LEADERSHIP */}
      <section className="py-24 bg-brand-offwhite border-t border-gray-100">
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">The Brain Trust</span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight leading-[1.1]">
                Team Highlights & Leadership
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed">
                Specialized operators heading key divisions to maintain extreme precision on all developer campaigns.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-navy mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="font-accent font-light text-xl sm:text-2xl text-brand-navy group-hover:text-brand-teal transition-colors">
                  {t.name}
                </h3>
                <p className="text-sm sm:text-base font-medium text-brand-gold uppercase tracking-wider mt-1 mb-3">
                  {t.role}
                </p>
                <p className="text-base sm:text-lg text-gray-500 font-sans font-light leading-relaxed">
                  {t.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
