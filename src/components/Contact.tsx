import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    developerName: "",
    message: "",
    serviceNeeded: "Sales Strategy Execution",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        developerName: "",
        message: "",
        serviceNeeded: "Sales Strategy Execution",
      });
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white text-left">
      {/* Page Header */}
      <section className="relative bg-brand-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stock_buildings.jpg')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10 space-y-4">
          <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">Contact HQ</span>
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-sans font-light tracking-tight">Initiate a Strategic Consultation</h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-sans font-light leading-relaxed max-w-3xl">
            Reach our Mumbai boardroom. Let's build a customized, high-velocity liquidation plan for your residential or commercial inventory.
          </p>
        </div>
      </section>

      {/* Main Info Split & Form */}
      <section className="py-24 max-w-none px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Office Coordinates & Business Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase">Triumph Headquarters</span>
              <h2 className="text-4xl sm:text-5xl font-sans font-light text-brand-navy tracking-tight leading-tight">
                Get Direct Support from Our Strategy Leads
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans font-light">
                Our central office is located at Auris Galleria in Malad West, offering convenient connectivity for developers and investors across Mumbai.
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-accent font-medium text-lg text-brand-navy leading-none">Office Address</h4>
                  <p className="text-base sm:text-lg text-gray-500 mt-2 font-light leading-relaxed">
                    307, Auris Galleria, Link Road, Malad West, Mumbai
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-accent font-medium text-lg text-brand-navy leading-none">Phone Coordinates</h4>
                  <p className="text-base sm:text-lg text-gray-500 mt-2 font-light leading-relaxed">
                    Main: <a href="tel:+919004643308" className="hover:text-brand-teal transition-colors font-medium">+91 90046 43308</a>
                    <br />
                    Sales: <a href="tel:+919372156733" className="hover:text-brand-teal transition-colors font-medium">+91 93721 56733</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-accent font-medium text-lg text-brand-navy leading-none">Email Coordinates</h4>
                  <p className="text-base sm:text-lg text-gray-500 mt-2 font-light leading-relaxed">
                    <a href="mailto:contact@triumphalliances.com" className="hover:text-brand-teal transition-colors font-medium">contact@triumphalliances.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-accent font-medium text-lg text-brand-navy leading-none">Business Hours</h4>
                  <p className="text-base sm:text-lg text-gray-500 mt-2 font-light leading-relaxed">
                    Monday to Saturday: 10:00 AM – 7:00 PM IST
                    <br />
                    Site Support Services: 24/7 Operations
                  </p>
                </div>
              </div>
            </div>

            {/* Quick trust banner */}
            <div className="p-6 bg-brand-offwhite flex items-center space-x-4">
              <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0" />
              <div>
                <h5 className="font-accent font-medium text-base text-brand-navy uppercase tracking-wider">NDA Assured Partnerships</h5>
                <p className="text-sm text-gray-500 mt-1 leading-normal font-sans font-light">
                  All design blueprints and project financial pricing discussions are safeguarded under complete client-advisor confidentiality agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-gray-100 relative text-left">
            <h3 className="text-3xl sm:text-4xl font-sans font-light text-brand-navy tracking-tight mb-2">
              Developer Consultation Booking
            </h3>
            <p className="text-base text-gray-500 font-sans font-light mb-8">
              Submit your project layout details below. Our strategy partners will call you to arrange an exclusive NDA boardroom meet.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-teal/5 p-8 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-brand-teal/15 text-brand-teal rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-accent font-medium text-lg text-brand-navy">Consultation Scheduled!</h4>
                <p className="text-sm text-gray-600 font-sans font-light max-w-md mx-auto leading-relaxed">
                  Thank you for booking. Your inquiry details have been received by our strategy team. We will contact you within 2 hours to confirm calendar availability.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm sm:text-base font-accent font-medium text-brand-navy uppercase tracking-wider block">Full Name *</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Mehta"
                      className="w-full px-5 py-4 bg-white border border-gray-200 focus:outline-none focus:border-brand-navy text-base transition-all font-sans font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm sm:text-base font-accent font-medium text-brand-navy uppercase tracking-wider block">Company / Developer Name</label>
                    <input
                      type="text"
                      name="developerName"
                      value={formData.developerName}
                      onChange={handleInputChange}
                      placeholder="e.g. Your Developer Company"
                      className="w-full px-5 py-4 bg-white border border-gray-200 focus:outline-none focus:border-brand-navy text-base transition-all font-sans font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm sm:text-base font-accent font-medium text-brand-navy uppercase tracking-wider block">Email Address *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@yourcompany.com"
                      className="w-full px-5 py-4 bg-white border border-gray-200 focus:outline-none focus:border-brand-navy text-base transition-all font-sans font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm sm:text-base font-accent font-medium text-brand-navy uppercase tracking-wider block">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 9000000000"
                      className="w-full px-5 py-4 bg-white border border-gray-200 focus:outline-none focus:border-brand-navy text-base transition-all font-sans font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm sm:text-base font-accent font-medium text-brand-navy uppercase tracking-wider block">Service Required</label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-white border border-gray-200 focus:outline-none focus:border-brand-navy text-base transition-all font-sans font-light"
                  >
                    <option>End-to-End Sales Management</option>
                    <option>In-House Creative & Digital Marketing</option>
                    <option>Channel Partner Activation (3,500+ Brokers)</option>
                    <option>Manpower & Site Support</option>
                    <option>General Corporate Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm sm:text-base font-accent font-medium text-brand-navy uppercase tracking-wider block">Tell Us About Your Project (Location, Size, Stagnant Status) *</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide details like: Project location, number of units, current status..."
                    className="w-full px-5 py-4 bg-white border border-gray-200 focus:outline-none focus:border-brand-navy text-base transition-all font-sans font-light"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-12 py-5 bg-brand-navy hover:bg-brand-navy/95 text-white font-accent font-light text-sm sm:text-base tracking-[0.22em] uppercase rounded-none transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Book Strategy Consult</span>
                  <Send className="w-4 h-4 text-brand-gold" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Location Map */}
      <section className="h-96 w-full relative bg-gray-100 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2!2d72.8401!3d19.1868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f5e5d5e5d%3A0x1234567890abcdef!2sMalad%20West!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Triumph Alliances Office Map Location"
          className="grayscale opacity-80"
        />
        {/* Floating Address Overlay */}
        <div className="absolute bottom-6 left-6 bg-brand-navy text-white p-5 max-w-sm hidden md:block text-left">
          <p className="font-accent font-medium text-sm text-white uppercase tracking-wider">Triumph Boardroom</p>
          <p className="text-xs text-gray-300 mt-2 font-sans font-light leading-relaxed">
            Auris Galleria, Level 3, Link Road, Malad West, Mumbai
          </p>
        </div>
      </section>
    </div>
  );
}
