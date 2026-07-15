import React, { useState, useEffect } from "react";
import { ArrowRight, Building2, TrendingUp, Users, Award, ShieldCheck, Star, ChevronLeft, ChevronRight, Play, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { stats, services, caseStudies, testimonials, blogArticles } from "../data";

// Simple animated counter component
function Counter({ value, duration = 1500 }: { value: string; duration?: number }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericValue));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [numericValue, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

interface HomeProps {
  setCurrentPage: (page: string) => void;
  openConsultation: () => void;
}

export default function Home({ setCurrentPage, openConsultation }: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative">
      {/* 3D-Like Floating Background Hexagons */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-brand-teal/5 clip-hexagon animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />
      <div className="absolute top-[800px] right-20 w-64 h-64 bg-brand-gold/5 clip-hexagon animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[400px] left-1/4 w-32 h-32 bg-brand-navy/5 clip-hexagon animate-pulse pointer-events-none" style={{ animationDuration: '5s' }} />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center py-16 lg:py-24 overflow-hidden bg-black text-white">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/banner_video.mp4" type="video/mp4" />
        </video>

        {/* Overlay: Left side dark gradient, right side completely clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10 pointer-events-none" />

        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content - Text is on the left, right side of the video is clear */}
            <div className="lg:col-span-8 space-y-10 text-left">
              
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-4xl sm:text-4xl lg:text-[4.5rem] font-accent font-light tracking-tight leading-[1] text-white"
                >
                  Mumbai's Fastest-Rising <span className="text-white font-light block sm:inline">Strategy House for Developers</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl sm:text-2xl lg:text-3xl text-gray-200 max-w-4xl font-sans font-light tracking-wide leading-relaxed pt-2"
                >
                  Zero cost upfront. We transform delayed, disrupted, and difficult developments into celebrated sell-outs.
                </motion.p>
              </div>

              {/* CTAs - Sleeker buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-6 pt-8"
              >
                <button
                  onClick={openConsultation}
                  className="relative inline-flex items-center justify-center px-12 py-5 bg-brand-gold hover:bg-white text-white border border-brand-gold hover:border-white text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[8px_8px_0px_0px_rgba(212,163,89,0.35)] cursor-pointer"
                >
                  Get Consultation
                  <ArrowRight className="ml-3 w-5 h-5 text-white animate-pulse" />
                </button>
                <button
                  onClick={() => setCurrentPage("services")}
                  className="relative inline-flex items-center justify-center px-12 py-5 bg-transparent hover:bg-white text-white hover:text-brand-navy border border-white/30 hover:border-white text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] cursor-pointer"
                >
                  Explore Services
                </button>
              </motion.div>
            </div>

            {/* Right-side is left empty so video is clear */}
            <div className="hidden lg:block lg:col-span-4" />
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-brand-navy py-16 text-white relative overflow-hidden">
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="bg-transparent border border-white/10 rounded-lg p-8 text-center hover:bg-white/5 transition-all duration-300 relative group"
              >
                {/* Floating hexagon outline */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-brand-gold/10 clip-hexagon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h3 className="text-6xl sm:text-7xl lg:text-6xl font-accent font-light text-white tracking-tight mb-3">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-2xl sm:text-3xl font-medium text-white mb-2 tracking-wide">{stat.label}</p>
                <p className="text-lg sm:text-xl text-gray-200 font-sans font-light leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE HIGHLIGHTS */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle geometric background overlay */}
        <div 
          className="absolute inset-0 bg-[url('/stock_buildings.jpg')] bg-cover bg-center opacity-[0.01] mix-blend-overlay pointer-events-none"
        />

        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10">
          {/* Split High-Impact Header like Accumin Reference 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">Our Capabilities</span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-accent font-light text-brand-navy tracking-tight leading-[1.1] max-w-2xl">
                Making the right choices in real estate strategy
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-sans font-light">
                We replace multiple chaotic agencies with a single high-performing sales, strategy, and creative engine. Zero setup cost, complete intelligence.
              </p>
            </div>
          </div>

          {/* Borderless side-by-side vertical visual columns like Reference 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "service-1",
                title: "Direct Sales Mandates",
                subtitle: "Revive Stalled Inventory",
                desc: "Complete ownership of your project sales. We deploy dedicated experts to convert every visitor.",
                imageUrl: "/stock_buildings.jpg"
              },
              {
                id: "service-2",
                title: "Digital Lead Studio",
                subtitle: "High-intent lead generation",
                desc: "Our in-house digital engine runs high-converting campaigns to capture qualified buyers.",
                imageUrl: "/stock_buildings (2).jpg"
              },
              {
                id: "service-3",
                title: "Channel Broker Network",
                subtitle: "Mobilize 3,500+ active brokers",
                desc: "Direct access to Mumbai's top brokers. We align, train, and reward partners to drive velocity.",
                imageUrl: "/stock_buildings (3).jpg"
              },
              {
                id: "service-4",
                title: "Elite Closure Force",
                subtitle: "Maximum walk-in conversion",
                desc: "Skilled closing specialists who understand micromarkets and schemes to lock bookings.",
                imageUrl: "/stock_buildings (4).jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col justify-between"
              >
                {/* Visual Image Block - Borderless, clean */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-md mb-6 bg-gray-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 w-9 h-9 bg-white/95 text-brand-navy rounded-full flex items-center justify-center text-base font-mono font-light">
                    0{index + 1}
                  </div>
                </div>

                {/* Caption Detail block */}
                <div className="text-left space-y-3">
                  <h3 className="font-accent font-light text-2xl sm:text-3xl text-brand-navy group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg font-accent font-light text-brand-gold uppercase tracking-widest">
                    {service.subtitle}
                  </p>
                  <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-sans font-light">
                    {service.desc}
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={() => setCurrentPage("services")}
                      className="inline-flex items-center text-sm sm:text-base font-light text-brand-navy hover:text-brand-teal tracking-[0.18em] uppercase transition-all duration-300 border-b border-brand-navy/20 hover:border-brand-teal pb-1 cursor-pointer"
                    >
                      Explore Suite <ArrowRight className="ml-2 w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION SPLIT */}
      <section className="bg-brand-offwhite py-24 relative overflow-hidden">
        {/* Subtle background overlay */}
        <div 
          className="absolute inset-0 bg-[url('/real_estate_sales_office.jpg')] bg-cover bg-center opacity-[0.01] mix-blend-overlay pointer-events-none"
        />

        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-md overflow-hidden aspect-[4/3] relative bg-gray-100">
                <img
                    src="/real_estate_sales_office.jpg"
                    alt="Modern Mumbai high-rise office setup"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply" />
              </div>
              
              {/* Flat, borderless typographic statistics instead of bulky shadow card overlay */}
              <div className="mt-8 grid grid-cols-2 gap-8 text-left">
                <div>
                  <span className="font-accent font-light text-6xl sm:text-7xl text-brand-teal">3,500+</span>
                  <p className="text-base sm:text-lg text-gray-400 uppercase tracking-widest font-medium mt-1.5">Active Brokers</p>
                  <p className="text-base sm:text-lg text-gray-500 mt-2 leading-relaxed font-light">Channel partners mobilized across Mumbai micromarkets.</p>
                </div>
                <div className="border-l border-gray-200/60 pl-6">
                  <span className="font-accent font-light text-6xl sm:text-7xl text-brand-gold">Zero</span>
                  <p className="text-base sm:text-lg text-gray-400 uppercase tracking-widest font-medium mt-1.5">Upfront Costs</p>
                  <p className="text-base sm:text-lg text-gray-500 mt-2 leading-relaxed font-light">We invest agency capital to run target campaigns.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8 text-left">
              <h2 className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">The Zero-Setup Advantage</h2>
              <p className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-wide leading-tight">
                We Invest Capital to Drive Your Sales
              </p>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-sans font-light">
                Traditional firms charge upfront retainer fees. <strong>Triumph operates differently.</strong>
              </p>
              <div className="space-y-6 pt-2">
                {[
                  { title: "No Upfront Setups", desc: "Our in-house digital studio launches social ads, videos, and campaigns free of charge." },
                  { title: "Stalled Project Revivals", desc: "We step in as exclusive strategy house and kickstart sales transactions in 30 days." },
                  { title: "Elite Closure Force", desc: "Dedicated, trained relationship experts reside on-site to lock prospective client bookings." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-brand-teal/5 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-sm sm:text-base text-brand-teal font-medium">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-accent font-light text-brand-navy text-xl sm:text-2xl tracking-wide">{item.title}</h4>
                      <p className="text-base sm:text-lg text-gray-500 mt-1 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <button
                  onClick={openConsultation}
                  className="relative inline-flex items-center justify-center px-12 py-5 bg-brand-navy hover:bg-brand-teal text-white border border-brand-navy hover:border-brand-teal text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,0.15)] cursor-pointer"
                >
                  Request Case Briefing
                  <ArrowRight className="ml-3 w-5 h-5 text-brand-gold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDIES PREVIEW */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle geometric overlay */}
        <div 
          className="absolute inset-0 bg-[url('/stock_buildings (5).jpg')] bg-cover bg-center opacity-[0.01] mix-blend-overlay pointer-events-none"
        />

        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="space-y-4 text-left">
              <h2 className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">Success Blueprints</h2>
              <p className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-wide">
                Proven Liquidations Across Mumbai
              </p>
            </div>
            <div>
              <button
                onClick={() => setCurrentPage("case-studies")}
                className="relative inline-flex items-center justify-center px-12 py-5 bg-transparent hover:bg-brand-navy text-brand-navy hover:text-white border border-brand-navy/30 hover:border-brand-navy text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] cursor-pointer"
              >
                View Case Studies
                <ArrowRight className="ml-3 w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-transparent flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-brand-navy shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-sm text-sm sm:text-base font-accent font-medium tracking-widest uppercase text-brand-navy shadow-xs">
                    {project.category}
                  </div>
                </div>

                <div className="py-5 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <span className="text-sm sm:text-base font-medium text-brand-teal uppercase tracking-widest">{project.location}</span>
                    <h3 className="font-accent font-light text-2xl sm:text-3xl text-brand-navy mt-1.5 mb-2 group-hover:text-brand-teal transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-500 font-sans font-light leading-relaxed mb-4">
                      {project.subtitle}
                    </p>

                    {/* Metric row */}
                    <div className="grid grid-cols-2 gap-4 py-3 border-y border-gray-150 mb-5">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i}>
                          <p className="text-brand-navy font-accent font-light text-2xl sm:text-3xl lg:text-4xl tracking-tight">{m.value}</p>
                          <p className="text-sm sm:text-base text-gray-400 font-sans uppercase tracking-widest font-medium mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setCurrentPage("case-studies")}
                      className="inline-flex items-center text-sm sm:text-base font-light text-brand-navy hover:text-brand-teal tracking-[0.18em] uppercase transition-all duration-300 border-b border-brand-navy/20 hover:border-brand-teal pb-1 cursor-pointer"
                    >
                      Read Blueprint
                      <ArrowRight className="ml-2 w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER SECTION */}
      <section className="bg-brand-navy text-white py-24 relative overflow-hidden border-y border-brand-gold/10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-teal/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-lg sm:text-xl text-white font-accent font-medium tracking-[0.25em] uppercase mb-4">Client Testimonials</h2>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-sans font-light text-white mb-12 tracking-wide">
            What Leading Mumbai Developers Say
          </p>

          <div className="relative min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl italic leading-relaxed text-gray-100 font-sans font-light max-w-4xl mx-auto">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="flex items-center justify-center space-x-4 pt-4">
                  <img
                    src={testimonials[activeTestimonial].avatarUrl}
                    alt={testimonials[activeTestimonial].author}
                    className="w-16 h-16 rounded-full border-2 border-white object-cover"
                  />
                  <div className="text-left">
                    <p className="font-accent font-medium text-xl sm:text-2xl text-white tracking-wide">{testimonials[activeTestimonial].author}</p>
                    <p className="text-base sm:text-lg text-gray-300 font-sans font-light">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === activeTestimonial ? "bg-white w-8" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/5 border border-white/10 hover:border-white hover:bg-white/10 rounded-full transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. LATEST INSIGHTS / BLOG PREVIEW */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle architectural skyline backdrop */}
        <div 
          className="absolute inset-0 bg-[url('/stock_buildings.jpg')] bg-cover bg-center opacity-[0.01] mix-blend-overlay pointer-events-none"
        />

        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="space-y-4 text-left">
              <h2 className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">Market Intelligence</h2>
              <p className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-wide">
                Latest Real Estate Strategy & Insights
              </p>
            </div>
            <div>
              <button
                onClick={() => setCurrentPage("blog")}
                className="relative inline-flex items-center justify-center px-12 py-5 bg-transparent hover:bg-brand-navy text-brand-navy hover:text-white border border-brand-navy/30 hover:border-brand-navy text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] cursor-pointer"
              >
                Browse All Insights
                <ArrowRight className="ml-3 w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <motion.div
                key={article.id}
                whileHover={{ y: -4 }}
                className="bg-transparent flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-brand-navy">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute bottom-3 left-3 bg-brand-navy text-white px-4 py-2 rounded-sm text-sm sm:text-base font-accent font-medium tracking-widest uppercase">
                      {article.category}
                    </div>
                  </div>

                  <div className="py-5">
                    <p className="text-sm sm:text-base text-gray-400 font-mono font-light">{article.date} • {article.readTime}</p>
                    <h3 className="font-accent font-light text-2xl sm:text-3xl text-brand-navy mt-2.5 mb-2 group-hover:text-brand-teal transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-500 font-sans font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setCurrentPage("blog")}
                    className="inline-flex items-center text-sm sm:text-base font-light text-brand-navy hover:text-brand-teal tracking-[0.18em] uppercase transition-all duration-300 border-b border-brand-navy/20 hover:border-brand-teal pb-1 cursor-pointer"
                  >
                    Read Article <ArrowRight className="ml-2 w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GLOBAL BOTTOM CTA BANNER */}
      <section className="bg-brand-offwhite py-24 relative overflow-hidden border-t border-gray-100">
        <div 
          className="absolute inset-0 bg-[url('/stock_buildings (2).jpg')] bg-cover bg-center mix-blend-overlay opacity-5" />
        
        <div className="max-w-none px-4 sm:px-8 lg:px-16 text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-wide max-w-4xl mx-auto leading-tight">
            Accelerate Your Project Bookings
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light max-w-3xl mx-auto leading-relaxed">
            Let's build a customized sales acceleration plan for your Mumbai project. Zero upfront cost for developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <button
              onClick={openConsultation}
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-12 py-5 bg-brand-navy hover:bg-brand-teal text-white text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,0.15)] cursor-pointer"
            >
              Get Consultation
              <ArrowRight className="ml-3 w-5 h-5 text-brand-gold animate-pulse" />
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="w-full sm:w-auto relative inline-flex items-center justify-center px-12 py-5 bg-transparent hover:bg-brand-navy text-brand-navy hover:text-white border border-brand-navy hover:border-brand-navy text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none transition-all duration-500 hover:scale-[1.03] hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] cursor-pointer text-center"
            >
              Contact Mumbai Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
