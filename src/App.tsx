import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2, ChevronRight, PhoneCall } from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import ChannelPartners from "./components/ChannelPartners";
import Careers from "./components/Careers";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  // Modal Form State
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalProject, setModalProject] = useState("");
  const [modalService, setModalService] = useState("End-to-End Sales Management (Zero Setup)");

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalName && modalPhone) {
      setModalSubmitted(true);
      setTimeout(() => {
        setModalSubmitted(false);
        setConsultationOpen(false);
        setModalName("");
        setModalEmail("");
        setModalPhone("");
        setModalProject("");
      }, 5000);
    }
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} openConsultation={() => setConsultationOpen(true)} />;
      case "about":
        return <About />;
      case "services":
        return <Services openConsultation={() => setConsultationOpen(true)} />;
      case "case-studies":
        return <CaseStudies />;
      case "partners":
        return <ChannelPartners />;
      case "careers":
        return <Careers />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} openConsultation={() => setConsultationOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg select-none antialiased text-gray-800">
      {/* 2. Fixed Header / Navbar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        openConsultation={() => setConsultationOpen(true)} 
      />

      {/* 3. Main Page Content Frame with Framer Motion Page Transition */}
      <main className={`flex-grow ${currentPage === "home" ? "pt-0" : "pt-[88px]"}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* 5. GLOBAL CONSULTATION POP-UP MODAL */}
      <AnimatePresence>
        {consultationOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100 text-left"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gold" />

              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-brand-teal text-[10px] font-accent font-extrabold uppercase tracking-widest block">Triumph Alliances</span>
                    <h3 className="text-2xl font-sans font-extrabold text-brand-navy tracking-tight leading-tight mt-0.5">
                      Book a Free Consultation
                    </h3>
                  </div>
                  <button 
                    onClick={() => setConsultationOpen(false)}
                    className="p-1 text-gray-400 hover:text-brand-navy rounded-full transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {modalSubmitted ? (
                  <div className="text-center space-y-4 py-8">
                    <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-accent font-bold text-lg text-brand-navy">Consultation Request Received!</h4>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-sm mx-auto">
                      Thank you. Your consultation request has been logged successfully. Our relationship managers will call you within 2 hours to organize your executive briefing.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleModalSubmit} className="space-y-4 font-sans text-sm">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-accent font-bold text-brand-navy uppercase tracking-wider block">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={modalName}
                        onChange={(e) => setModalName(e.target.value)}
                        placeholder="e.g. Anand Mehta"
                        className="w-full px-4 py-2.5 bg-brand-offwhite border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-navy"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-accent font-bold text-brand-navy uppercase tracking-wider block">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={modalEmail}
                        onChange={(e) => setModalEmail(e.target.value)}
                        placeholder="e.g. anand@mehtagroup.com"
                        className="w-full px-4 py-2.5 bg-brand-offwhite border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-navy"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-accent font-bold text-brand-navy uppercase tracking-wider block">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={modalPhone}
                        onChange={(e) => setModalPhone(e.target.value)}
                        placeholder="e.g. +91 9000000000"
                        className="w-full px-4 py-2.5 bg-brand-offwhite border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-navy"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-accent font-bold text-brand-navy uppercase tracking-wider block">Brief Project details</label>
                      <input
                        type="text"
                        value={modalProject}
                        onChange={(e) => setModalProject(e.target.value)}
                        placeholder="e.g. Worli Tower, 80 units remaining"
                        className="w-full px-4 py-2.5 bg-brand-offwhite border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-navy"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-accent font-bold text-brand-navy uppercase tracking-wider block">Preferred Service Suite</label>
                      <select
                        value={modalService}
                        onChange={(e) => setModalService(e.target.value)}
                        className="w-full px-4 py-2.5 bg-brand-offwhite border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-navy"
                      >
                        <option>End-to-End Sales Management (Zero Setup)</option>
                        <option>In-House Creative & Digital Marketing</option>
                        <option>Channel Partner Activation (3,500+ Brokers)</option>
                        <option>Manpower & Site Support</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-navy hover:bg-brand-navy/95 text-white font-accent font-bold text-sm rounded shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <span>Schedule Calendar Briefing</span>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                    
                    <div className="flex items-center justify-center space-x-1.5 text-xs text-gray-500 pt-2 font-medium">
                      <PhoneCall className="w-3.5 h-3.5 text-brand-teal" />
                      <span>Confidential hotline: +91 90046 43308</span>
                    </div>
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
