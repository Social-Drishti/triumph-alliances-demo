import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight, Shield, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8 relative overflow-hidden border-t border-white/20">
      {/* Background skyline stock image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/image_for_footer.jpg')] bg-cover bg-center mix-blend-multiply opacity-25"
      />
      <div className="absolute inset-0 bg-brand-navy/90 backdrop-blur-xs pointer-events-none" />

      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick("home")}>
              <img
                src="/triumph_logo.png"
                alt="Triumph Alliances"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans font-light">
              Mumbai's premier real estate sales and marketing strategy house. We partner with developers to revive stagnant projects, deploy high-converting digital campaigns, and activate over 3,500+ channel partners with zero setup cost.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-accent font-medium text-lg sm:text-xl text-white tracking-widest uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-base sm:text-lg text-gray-400 font-light">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Services" },
                { id: "case-studies", label: "Case Studies" },
                { id: "partners", label: "Channel Partners" },
                { id: "careers", label: "Careers" },
                { id: "blog", label: "Insights Blog" },
                { id: "contact", label: "Contact Us" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-white transition-colors duration-200 cursor-pointer flex items-center text-left"
                  >
                    <span className="mr-2 text-white/40">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-6">
            <h3 className="font-accent font-medium text-lg sm:text-xl text-white tracking-widest uppercase mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5 text-base sm:text-lg text-gray-400 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong>Mumbai HQ:</strong>
                  <br />
                  804, Signature Business Park, Near Andheri Metro Station, Andheri East, Mumbai, Maharashtra 400069
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href="mailto:info@triumphalliances.com" className="hover:text-white transition-colors">
                  info@triumphalliances.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="space-y-6">
            <h3 className="font-accent font-medium text-lg sm:text-xl text-white tracking-widest uppercase mb-6">
              Subscribe for Insights
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans font-light">
              Receive the latest Mumbai real estate micromarket analysis, performance marketing guides, and developer strategies.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white text-base font-light transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-4 bg-brand-teal hover:bg-brand-teal/80 text-white rounded-md flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2.5 text-white text-base font-light"
                >
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Subscribed successfully! Thank you.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Credential Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-gray-400 font-sans space-y-4 md:space-y-0">
          <div>
            <p>© {new Date().getFullYear()} Triumph Alliances. All rights reserved.</p>
            <p className="mt-1 flex items-center">
              <Shield className="w-3.5 h-3.5 mr-1" /> Licensed Real Estate Marketing Strategy House • Mumbai, India.
            </p>
          </div>
          <div className="flex space-x-6 font-light">
            <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors cursor-pointer">
              Our Milestones
            </button>
            <button onClick={() => handleNavClick("partners")} className="hover:text-white transition-colors cursor-pointer">
              Channel Partners Network
            </button>
            <button onClick={() => handleNavClick("contact")} className="hover:text-white transition-colors cursor-pointer">
              Contact HQ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
