import React, { useState } from "react";
import { Briefcase, MapPin, Calendar, CheckCircle, ArrowRight, UserCheck, Heart, Shield, Award, Send, FileText, UploadCloud, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { openPositions } from "../data";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applicationPosition, setApplicationPosition] = useState("");
  
  // Form States
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOpenApply = (posTitle: string) => {
    setApplicationPosition(posTitle);
    setApplyModalOpen(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantEmail) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setApplyModalOpen(false);
        setApplicantName("");
        setApplicantEmail("");
        setResumeText("");
        setCoverNote("");
      }, 5000);
    }
  };

  return (
    <div className="w-full bg-white text-left relative">
      {/* Hero Header */}
      <section className="relative bg-brand-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/real_estate_sales_office.jpg')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="max-w-none px-4 sm:px-8 lg:px-16 relative z-10 space-y-6">
          <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">
            Grow With Triumph
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-sans font-light tracking-tight leading-[0.95]">
            Build Your Real Estate Career
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-sans font-light leading-relaxed max-w-4xl">
            Join a high-performance, collaborative team where speed, innovation, and meritocracy are celebrated every day.
          </p>
        </div>
      </section>

      {/* 1. CULTURE & VALUES SECTION */}
      <section className="py-24 max-w-none px-4 sm:px-8 lg:px-16">
        {/* Section Header — left-aligned split */}
        <div className="max-w-none flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">
              Our DNA
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight">
              The Values That Drive Us
            </h2>
          </div>
          <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed max-w-xl lg:text-right">
            At Triumph Alliances, we work hard, execute with extreme precision, and reward results. No corporate politics, just absolute clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "Speed & Action", desc: "We favor massive speed of execution. A fast decision is almost always better than a delayed committee consensus.", icon: Sparkles },
            { title: "Radical Trust", desc: "We maintain extreme transparency with our developer partners, our active channel brokers, and our team members.", icon: Shield },
            { title: "Collaborative Play", desc: "No siloed departments. Sales, performance marketing, and client relationships sit together to solve problems.", icon: Heart },
            { title: "High Meritocracy", desc: "We don't care about tenure. Performance, client satisfaction, and inventory liquidation velocity dictate growth.", icon: Award }
          ].map((item, i) => (
            <div key={i} className="space-y-6 text-left">
              <div className="w-14 h-14 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-accent font-light text-2xl sm:text-3xl text-brand-navy">{item.title}</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. OPEN POSITIONS GRID */}
      <section className="py-24 bg-brand-offwhite border-t border-gray-100">
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
          {/* Section Header — left-aligned split */}
          <div className="max-w-none flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="space-y-4 max-w-2xl">
              <span className="text-lg sm:text-xl text-brand-teal font-accent font-medium tracking-[0.25em] uppercase block">
                Join the Team
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-light text-brand-navy tracking-tight">
                Current Open Positions
              </h2>
            </div>
            <p className="text-xl sm:text-2xl text-gray-600 font-sans font-light leading-relaxed max-w-xl lg:text-right">
              We are actively hiring elite professionals to lead our expanding sales mandates across Mulund, Thane, and South Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {openPositions.map((job) => {
              const expanded = selectedJob === job.id;
              return (
                <div 
                  key={job.id}
                  className="bg-white p-8 text-left flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block px-3 py-1.5 bg-brand-navy/5 text-brand-navy font-accent font-light text-xs uppercase tracking-[0.2em]">
                          {job.department}
                        </span>
                        <h3 className="font-accent font-light text-2xl sm:text-3xl text-brand-navy mt-3 leading-snug">
                          {job.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-5 text-sm text-gray-500 font-sans font-light mt-4 py-4 border-y border-gray-100 mb-5">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-brand-teal" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-brand-gold" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-brand-sky" />
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-gray-600 font-sans font-light leading-relaxed mb-5">
                      {job.description}
                    </p>

                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden space-y-4 border-t border-gray-100 pt-5 mt-5"
                        >
                          <h4 className="font-accent font-medium text-sm text-brand-navy uppercase tracking-[0.2em]">
                            Role Requirements:
                          </h4>
                          <ul className="space-y-3 text-base sm:text-lg text-gray-600 font-sans font-light">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <span className="text-brand-teal font-medium shrink-0 mt-0.5">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-5 flex items-center space-x-4 border-t border-gray-50 mt-5">
                    <button
                      onClick={() => handleOpenApply(job.title)}
                      className="px-12 py-5 text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none bg-brand-navy hover:bg-brand-navy/95 text-white transition-all duration-300 cursor-pointer flex items-center justify-center"
                    >
                      <span>Apply Instantly</span>
                      <ArrowRight className="ml-3 w-5 h-5 text-brand-gold" />
                    </button>
                    <button
                      onClick={() => setSelectedJob(expanded ? null : job.id)}
                      className="px-8 py-4 border border-brand-navy/30 text-brand-navy font-accent font-light text-sm tracking-[0.15em] uppercase rounded-none hover:bg-brand-navy/5 transition-colors cursor-pointer"
                    >
                      {expanded ? "Hide Requirements" : "View Requirements"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. IN-PAGE APPLICATION MODAL */}
      <AnimatePresence>
        {applyModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white max-w-lg w-full overflow-hidden relative"
            >
              {/* Highlight header */}
              <div className="bg-brand-navy p-8 text-white flex justify-between items-center">
                <div>
                  <span className="text-brand-teal text-sm font-accent font-medium uppercase tracking-[0.25em] block mb-1">
                    Join the Team
                  </span>
                  <h3 className="font-accent font-light text-xl sm:text-2xl leading-tight">
                    Applying for: {applicationPosition}
                  </h3>
                </div>
                <button 
                  onClick={() => setApplyModalOpen(false)}
                  className="text-white hover:text-white focus:outline-none cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center space-y-5 py-10">
                    <div className="w-18 h-18 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-9 h-9" />
                    </div>
                    <h4 className="font-accent font-light text-xl text-brand-navy">Application Submitted!</h4>
                    <p className="text-base text-gray-500 font-sans font-light leading-relaxed max-w-sm mx-auto">
                      Thank you for submitting your profile. Our Talent Acquisition team will review your resume and call you within 3 business days for a brief telephonic screening.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-[0.2em] block">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. Anand Kulkarni"
                        className="w-full px-5 py-4 bg-brand-offwhite border border-gray-200 text-base focus:outline-none focus:border-brand-navy font-sans font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-[0.2em] block">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="e.g. anand@gmail.com"
                        className="w-full px-5 py-4 bg-brand-offwhite border border-gray-200 text-base focus:outline-none focus:border-brand-navy font-sans font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-[0.2em] block">Resume Link / Paste Qualifications *</label>
                      <textarea
                        required
                        rows={4}
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        placeholder="Paste your LinkedIn URL, Google Drive resume path, or a brief summary of your qualifications..."
                        className="w-full px-5 py-4 bg-brand-offwhite border border-gray-200 text-base focus:outline-none focus:border-brand-navy font-sans font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-accent font-medium text-brand-navy uppercase tracking-[0.2em] block">Brief Cover Note (Optional)</label>
                      <textarea
                        rows={3}
                        value={coverNote}
                        onChange={(e) => setCoverNote(e.target.value)}
                        placeholder="Tell us why you are a good fit for Triumph Alliances..."
                        className="w-full px-5 py-4 bg-brand-offwhite border border-gray-200 text-base focus:outline-none focus:border-brand-navy font-sans font-light"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-12 py-5 text-sm sm:text-base font-accent font-light tracking-[0.22em] uppercase rounded-none bg-brand-navy hover:bg-brand-navy/95 text-white transition-all duration-300 cursor-pointer flex items-center justify-center"
                    >
                      <span>Submit Profile Details</span>
                      <Send className="w-5 h-5 text-brand-gold ml-3" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
