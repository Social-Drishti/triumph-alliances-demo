import React, { useState } from "react";
import { CreditCard, Sliders, Layers, PhoneCall, Award, Sparkles, ChevronDown, CheckCircle2, Send, Handshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { partnerBenefits, partnerFAQs } from "../data";

export default function ChannelPartners() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    agencyName: "",
    email: "",
    phone: "",
    reraNumber: "",
    experience: "1-3 Years",
    micromarkets: "Western Line",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      setFormData({
        name: "",
        agencyName: "",
        email: "",
        phone: "",
        reraNumber: "",
        experience: "1-3 Years",
        micromarkets: "Western Line",
      });
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const benefitIcons = [CreditCard, Sliders, Layers, PhoneCall, Award, Sparkles];
  const benefitColors = ["text-brand-teal", "text-brand-gold", "text-brand-sky", "text-brand-teal", "text-brand-gold", "text-brand-sky"];

  return (
    <div className="w-full bg-white text-left">
      {/* HERO HEADER */}
      <section className="relative bg-brand-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stock_buildings (2).jpg')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block"
            >
              The Distribution Force
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-7xl lg:text-[6.5rem] font-sans font-light text-white tracking-tight leading-[1] max-w-4xl"
            >
              Join Our 3,500+ Active Channel Partners
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-200 max-w-4xl font-sans font-light tracking-wide leading-relaxed pt-2"
            >
              Gain immediate access to Mumbai's premium pre-launches, digital kits with complete branding, and fast verified broker payout cycles.
            </motion.p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10">
          {/* Split Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">
                Partner Perks
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight leading-[1.1] max-w-2xl">
                Why Brokerages Partner with Triumph Alliances
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-sans font-light">
                We don't just share inventories; we provide you with dedicated closing support, transport, and white-labeled modern branding files.
              </p>
            </div>
          </div>

          {/* Borderless benefit cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, idx) => {
              const Icon = benefitIcons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="text-left space-y-4"
                >
                  <div className="w-12 h-12 bg-brand-offwhite rounded-full flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${benefitColors[idx]}`} />
                  </div>
                  <h3 className="font-accent font-light text-2xl sm:text-3xl text-brand-navy">
                    {benefit.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-500 font-sans font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM & INFO */}
      <section className="py-24 bg-brand-offwhite relative overflow-hidden">
        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left text block */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 text-left">
              <div className="space-y-4">
                <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">
                  Immediate Onboarding
                </span>
                <h2 className="text-4xl sm:text-5xl font-sans font-light text-brand-navy tracking-tight leading-tight">
                  Get RERA-Registered Projects Delivered Instantly
                </h2>
              </div>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-sans font-light">
                By registering with Triumph Alliances, you gain immediate, transparent inventory updates across Andheri, Worli, Thane, and Mulund project sites.
              </p>

              <div className="space-y-5 pt-2">
                {[
                  "No signup fee or hidden memberships",
                  "Verified on-time payout cycles",
                  "Pre-launch exclusive access for elite partners",
                  "Direct luxury chauffeur support for VIP buyer visits",
                ].map((txt, index) => (
                  <div key={index} className="flex items-center space-x-3 text-lg text-gray-700 font-sans font-light">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                    <span>{txt}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white rounded-md flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-offwhite rounded-full flex items-center justify-center shrink-0">
                  <Handshake className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-accent font-medium text-base text-brand-navy leading-none">Instant Verification</h4>
                  <p className="text-sm text-gray-500 mt-1.5 leading-normal font-sans font-light">RERA-registered brokers are typically verified and onboarded in under 4 hours.</p>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 relative overflow-hidden text-left">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold" />

              <h3 className="text-3xl sm:text-4xl font-sans font-light text-brand-navy tracking-tight mb-2">
                Channel Partner Registration
              </h3>
              <p className="text-base text-gray-500 font-sans font-light mb-10">
                Submit your agency details below. Our broker relationships manager will contact you immediately.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-offwhite p-12 text-center space-y-5"
                >
                  <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h4 className="font-accent font-medium text-xl text-brand-navy">Registration Successful!</h4>
                  <p className="text-base text-gray-600 font-sans font-light max-w-md mx-auto leading-relaxed">
                    Thank you for applying. Our Broker Success Team has received your agency application. We will call you within 4 hours to verify your details and share current active project folders.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-wider block">Full Name *</label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-5 py-3.5 bg-brand-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-brand-navy text-base font-sans font-light transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-wider block">Agency Name *</label>
                      <input
                        type="text"
                        required
                        name="agencyName"
                        value={formData.agencyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Kumar Realities"
                        className="w-full px-5 py-3.5 bg-brand-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-brand-navy text-base font-sans font-light transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-wider block">Email Address *</label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. ramesh@kumarrealities.com"
                        className="w-full px-5 py-3.5 bg-brand-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-brand-navy text-base font-sans font-light transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-wider block">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-5 py-3.5 bg-brand-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-brand-navy text-base font-sans font-light transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-wider block">RERA Number</label>
                      <input
                        type="text"
                        name="reraNumber"
                        value={formData.reraNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. A5190000XXXX"
                        className="w-full px-5 py-3.5 bg-brand-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-brand-navy text-base font-sans font-light transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-wider block">Experience Level</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3.5 bg-brand-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-brand-navy text-base font-sans font-light transition-all"
                      >
                        <option>Under 1 Year</option>
                        <option>1-3 Years</option>
                        <option>3-5 Years</option>
                        <option>5+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-wider block">Primary Focus Micromarkets</label>
                    <select
                      name="micromarkets"
                      value={formData.micromarkets}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-brand-offwhite border border-gray-200 rounded-sm focus:outline-none focus:border-brand-navy text-base font-sans font-light transition-all"
                    >
                      <option>Western Line (Andheri, Bandra, Borivali)</option>
                      <option>Central Line (Mulund, Bhandup, Ghatkopar)</option>
                      <option>Thane & Extended Suburbs</option>
                      <option>South Mumbai & Harbor Belt</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-12 py-5 bg-brand-navy hover:bg-brand-teal text-white text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none transition-all duration-500 hover:scale-[1.02] cursor-pointer flex items-center justify-center space-x-3 mt-2"
                  >
                    <span>Register Agency Partner</span>
                    <Send className="w-5 h-5 text-brand-gold" />
                  </button>

                  <p className="text-xs text-gray-400 text-center leading-normal pt-2 font-sans font-light">
                    By submitting, you agree to receive project alerts and RERA-regulated commercial commission guidelines via WhatsApp or Email. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          {/* Split Header */}
          <div className="mb-20 space-y-4">
            <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">
              Answers & Clarities
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight">
              Frequently Asked Partner Queries
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed max-w-3xl">
              Get transparent answers regarding broker incentives, site visitation schedules, and reward bracket structures.
            </p>
          </div>

          <div className="space-y-4">
            {partnerFAQs.map((faq, index) => {
              const active = activeFaq === index;
              return (
                <div key={index} className="border-b border-gray-200/60">
                  <button
                    onClick={() => setActiveFaq(active ? null : index)}
                    className="w-full py-6 text-left flex justify-between items-center group cursor-pointer focus:outline-none"
                  >
                    <span className="text-lg sm:text-xl font-sans font-light text-brand-navy group-hover:text-brand-teal transition-colors pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-300 shrink-0 ${
                      active ? "rotate-180" : ""
                    }`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-base sm:text-lg text-gray-500 leading-relaxed font-sans font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
