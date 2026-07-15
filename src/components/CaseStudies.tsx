import React, { useState } from "react";
import { MapPin, ArrowRight, CheckCircle2, ChevronRight, FileSpreadsheet, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { caseStudies } from "../data";

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<string>("vivaan-heights");

  return (
    <div className="w-full bg-white text-left">
      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stock_buildings (5).jpg')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10 space-y-6">
          <span className="text-lg sm:text-xl text-white font-accent font-medium tracking-[0.25em] uppercase">Triumph Proof Sheets</span>
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-sans font-light tracking-tight leading-[0.95]">
            Mumbai Case Studies & Liquidation Metrics
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-sans font-light leading-relaxed max-w-4xl">
            Real challenges, data-driven strategy executions, and verified sales results completed across prime micromarkets in the Mumbai Metropolitan Region.
          </p>
        </div>
      </section>

      {/* Main Layout: Left index menu & Right active case detail */}
      <section className="py-24 max-w-none px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Index Menu Column Left (3-cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">
              Select Case Study
            </h3>
            <div className="space-y-3">
              {caseStudies.map((project) => {
                const active = selectedCase === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => setSelectedCase(project.id)}
                    className={`w-full text-left px-6 py-5 font-sans text-sm transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      active
                        ? "bg-brand-navy text-white"
                        : "text-gray-600 hover:bg-brand-offwhite border-b border-gray-200"
                    }`}
                  >
                    <span className={`${active ? "text-brand-gold" : "text-brand-teal"} text-xs uppercase tracking-wider mb-1`}>
                      {project.category}
                    </span>
                    <span className="text-lg font-sans font-light leading-tight">{project.title}</span>
                    <span className={`text-xs font-light mt-1 ${active ? "text-gray-300" : "text-gray-400"}`}>
                      {project.location.split(",")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sidebar CTA */}
            <div className="bg-brand-navy text-white px-6 py-8 relative overflow-hidden mt-8">
              <Sparkles className="w-8 h-8 text-white mb-4" />
              <h4 className="font-sans font-light text-xl text-white mb-2">Have an Active Inventory?</h4>
              <p className="text-sm text-gray-300 font-sans font-light leading-relaxed mb-6">
                Get a customized market research and target lead absorption strategy brief prepared specifically for your Mumbai project site.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center text-sm font-accent font-light text-white hover:text-white transition-colors tracking-[0.22em] uppercase"
              >
                Request Proposal Brief <ChevronRight className="w-4 h-4 ml-1 text-white" />
              </a>
            </div>
          </div>

          {/* Details Column Right (8-cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {caseStudies.map((project) => {
                if (project.id !== selectedCase) return null;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-12"
                  >
                    {/* Cover image & location */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-brand-navy">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
                      <div className="absolute bottom-8 left-8 text-white space-y-2">
                        <div className="flex items-center space-x-2 text-sm font-accent font-light text-white uppercase tracking-widest">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>{project.location}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light tracking-tight">
                          {project.title}
                        </h2>
                        <p className="text-sm text-gray-300 font-sans font-light">{project.subtitle}</p>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="py-8 px-4 border-b border-gray-200 text-center">
                          <p className="font-accent font-light text-3xl sm:text-4xl lg:text-5xl text-brand-navy tracking-tight leading-none">
                            {m.value}
                          </p>
                          <p className="text-xs text-gray-500 font-sans uppercase tracking-wider font-light mt-2 leading-tight">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Narrative Splits (Challenge & Solution) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-200">
                      <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl text-brand-navy font-accent font-medium tracking-[0.25em] uppercase flex items-center">
                          <span className="w-1.5 h-5 bg-brand-teal mr-3" />
                          The Challenge
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-sans font-light">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg sm:text-xl text-brand-navy font-accent font-medium tracking-[0.25em] uppercase flex items-center">
                          <span className="w-1.5 h-5 bg-brand-gold mr-3" />
                          The Solution
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-sans font-light">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Verified Results */}
                    <div className="py-8 border-t border-gray-200 space-y-6">
                      <h3 className="text-lg sm:text-xl text-brand-navy font-accent font-medium tracking-[0.25em] uppercase">
                        Verified Sales & Liquidation Outcomes
                      </h3>
                      <div className="space-y-4">
                        {project.results.map((result, i) => (
                          <div key={i} className="flex items-start space-x-4">
                            <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0 mt-0.5" />
                            <span className="text-base sm:text-lg text-gray-600 font-sans font-light leading-relaxed">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial block */}
                    {project.testimonial && (
                      <div className="py-8 border-t border-gray-200 relative pl-8">
                        <span className="absolute left-0 top-8 text-brand-gold text-5xl font-serif leading-none">"</span>
                        <p className="text-xl italic leading-relaxed text-gray-600 font-sans font-light mb-6">
                          {project.testimonial.quote}
                        </p>
                        <div className="pt-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-sans font-light text-brand-navy">{project.testimonial.author}</p>
                            <p className="text-xs text-gray-500 font-sans font-light">{project.testimonial.role}, {project.testimonial.company}</p>
                          </div>
                          <span className="text-xs font-accent font-light text-brand-teal uppercase tracking-[0.22em]">
                            Verified Client
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
