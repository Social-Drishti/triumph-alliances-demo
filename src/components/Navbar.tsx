import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  openConsultation: () => void;
}

const offeringsItems = [
  { id: "services", label: "Services" },
  { id: "partners", label: "Channel Partners" },
  { id: "case-studies", label: "Case Studies" },
  { id: "blog", label: "Insights" },
];

const companyItems = [
  { id: "about", label: "About Us" },
  { id: "careers", label: "Careers" },
];

export default function Navbar({ currentPage, setCurrentPage, openConsultation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (currentPage !== "home") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 88);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    setMobileOfferingsOpen(false);
    setMobileCompanyOpen(false);
    setHoveredMenu(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isOfferingsActive = offeringsItems.some(item => item.id === currentPage);
  const isCompanyActive = companyItems.some(item => item.id === currentPage);

  const isSolid = isScrolled || isOpen || currentPage !== "home";
  const showSlideDown = isSolid && currentPage === "home";
  const isHomeTop = currentPage === "home" && !isScrolled;

  return (
    <>
      {/* Slide-down solid navbar - appears when scrolling past hero */}
      <AnimatePresence>
        {showSlideDown && (
          <motion.header
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          >
            <div className="max-w-none px-4 sm:px-8 lg:px-16">
              <div className="flex justify-between items-center h-22">
                <Logo handleNavClick={handleNavClick} solid />
                <DesktopNav currentPage={currentPage} handleNavClick={handleNavClick} solid openConsultation={openConsultation} />
                <MobileToggle isOpen={isOpen} setIsOpen={setIsOpen} solid />
              </div>
            </div>
            <MobileMenu
              isOpen={isOpen}
              currentPage={currentPage}
              handleNavClick={handleNavClick}
              openConsultation={openConsultation}
              isOfferingsActive={isOfferingsActive}
              isCompanyActive={isCompanyActive}
              mobileOfferingsOpen={mobileOfferingsOpen}
              setMobileOfferingsOpen={setMobileOfferingsOpen}
              mobileCompanyOpen={mobileCompanyOpen}
              setMobileCompanyOpen={setMobileCompanyOpen}
            />
          </motion.header>
        )}
      </AnimatePresence>

      {/* Overlay navbar - absolute over hero on home top, fixed on scroll/other pages */}
      <header
        className={`${
          isHomeTop ? "absolute" : "fixed"
        } top-0 left-0 w-full z-40 transition-all duration-500 ${
          isSolid
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "border-b border-white/10"
        }`}
        style={!isSolid ? { backgroundColor: "transparent" } : undefined}
      >
        <div className="max-w-none px-4 sm:px-8 lg:px-16">
          <div className="flex justify-between items-center h-22">
            <Logo handleNavClick={handleNavClick} solid={isSolid} />
            <DesktopNav currentPage={currentPage} handleNavClick={handleNavClick} solid={isSolid} openConsultation={openConsultation} />
            <MobileToggle isOpen={isOpen} setIsOpen={setIsOpen} solid={isSolid} />
          </div>
        </div>
        <MobileMenu
          isOpen={isOpen && (isSolid || !isHomeTop)}
          currentPage={currentPage}
          handleNavClick={handleNavClick}
          openConsultation={openConsultation}
          isOfferingsActive={isOfferingsActive}
          isCompanyActive={isCompanyActive}
          mobileOfferingsOpen={mobileOfferingsOpen}
          setMobileOfferingsOpen={setMobileOfferingsOpen}
          mobileCompanyOpen={mobileCompanyOpen}
          setMobileCompanyOpen={setMobileCompanyOpen}
        />
      </header>
    </>
  );
}

function Logo({ handleNavClick, solid }: { handleNavClick: (id: string) => void; solid: boolean }) {
  return (
    <div
      className="flex items-center cursor-pointer group"
      onClick={() => handleNavClick("home")}
    >
      <img
        src="/triumph_logo.png"
        alt="Triumph Alliances"
        className={`h-14 sm:h-16 w-auto object-contain transition-all duration-300 ${solid ? "brightness-0" : ""}`}
      />
    </div>
  );
}

function DesktopNav({ currentPage, handleNavClick, solid, openConsultation }: {
  currentPage: string;
  handleNavClick: (id: string) => void;
  solid: boolean;
  openConsultation: () => void;
}) {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const isOfferingsActive = offeringsItems.some(item => item.id === currentPage);
  const isCompanyActive = companyItems.some(item => item.id === currentPage);

  return (
    <>
      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
        <button
          onClick={() => handleNavClick("home")}
          className={`relative py-3 px-1 text-[20px] sm:text-[22px] font-sans font-light tracking-wide transition-all duration-300 cursor-pointer ${
            currentPage === "home"
              ? solid ? "text-brand-navy font-medium" : "text-white font-medium"
              : solid ? "text-gray-500 hover:text-black" : "text-white/80 hover:text-white"
          }`}
        >
          Home
          {currentPage === "home" && (
            <motion.div
              layoutId="navActiveUnderline"
              className={`absolute bottom-0 left-0 right-0 h-[2px] ${solid ? "bg-brand-navy/80" : "bg-white"}`}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          </button>

        <div
          className="relative py-3"
          onMouseEnter={() => setHoveredMenu("offerings")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <button
            className={`flex items-center space-x-1 px-1 text-[20px] sm:text-[22px] font-sans font-light tracking-wide transition-all duration-300 cursor-pointer ${
              isOfferingsActive
                ? solid ? "text-brand-navy font-medium" : "text-white font-medium"
                : solid ? "text-gray-500 hover:text-black" : "text-white/80 hover:text-white"
            }`}
          >
            <span>Offerings</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${hoveredMenu === "offerings" ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {hoveredMenu === "offerings" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-64 bg-white border border-gray-100 shadow-xl py-3 rounded-md z-50 text-left"
              >
                {offeringsItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-5 py-3 text-[18px] font-sans font-light transition-all hover:bg-gray-50 ${
                      currentPage === item.id
                        ? "text-brand-teal font-medium bg-brand-teal/5"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="relative py-3"
          onMouseEnter={() => setHoveredMenu("company")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <button
            className={`flex items-center space-x-1 px-1 text-[20px] sm:text-[22px] font-sans font-light tracking-wide transition-all duration-300 cursor-pointer ${
              isCompanyActive
                ? solid ? "text-brand-navy font-medium" : "text-white font-medium"
                : solid ? "text-gray-500 hover:text-black" : "text-white/80 hover:text-white"
            }`}
          >
            <span>Company</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${hoveredMenu === "company" ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {hoveredMenu === "company" && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-white border border-gray-100 shadow-xl py-3 rounded-md z-50 text-left"
              >
                {companyItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-5 py-3 text-[18px] font-sans font-light transition-all hover:bg-gray-50 ${
                      currentPage === item.id
                        ? "text-brand-teal font-medium bg-brand-teal/5"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => handleNavClick("contact")}
          className={`relative py-3 px-1 text-[20px] sm:text-[22px] font-sans font-light tracking-wide transition-all duration-300 cursor-pointer ${
            currentPage === "contact"
              ? solid ? "text-brand-navy font-medium" : "text-white font-medium"
              : solid ? "text-gray-500 hover:text-black" : "text-white/80 hover:text-white"
          }`}
        >
          Contact
          {currentPage === "contact" && (
            <motion.div
              layoutId="navActiveUnderline"
              className={`absolute bottom-0 left-0 right-0 h-[2px] ${solid ? "bg-brand-navy/80" : "bg-white"}`}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          </button>
      </nav>

      <div className="hidden lg:block">
        <button
          onClick={openConsultation}
          className={`inline-flex items-center justify-center px-7 py-3 border rounded-full transition-all duration-300 cursor-pointer text-[16px] sm:text-[18px] font-accent font-light tracking-widest uppercase ${
            solid
              ? "border-brand-navy/30 hover:border-brand-navy bg-transparent hover:bg-brand-navy text-brand-navy hover:text-white"
              : "border-white/30 hover:border-white bg-transparent hover:bg-white text-white hover:text-brand-navy"
          }`}
        >
          Get Consultation
          <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 opacity-70" />
        </button>
      </div>
    </>
  );
}

function MobileToggle({ isOpen, setIsOpen, solid }: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  solid: boolean;
}) {
  return (
    <div className="flex items-center lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 focus:outline-none transition-colors ${
          solid ? "text-brand-navy hover:text-brand-teal" : "text-white hover:text-white"
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>
    </div>
  );
}

function MobileMenu({ isOpen, currentPage, handleNavClick, openConsultation, isOfferingsActive, isCompanyActive, mobileOfferingsOpen, setMobileOfferingsOpen, mobileCompanyOpen, setMobileCompanyOpen }: {
  isOpen: boolean;
  currentPage: string;
  handleNavClick: (id: string) => void;
  openConsultation: () => void;
  isOfferingsActive: boolean;
  isCompanyActive: boolean;
  mobileOfferingsOpen: boolean;
  setMobileOfferingsOpen: (v: boolean) => void;
  mobileCompanyOpen: boolean;
  setMobileCompanyOpen: (v: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            <button
              onClick={() => handleNavClick("home")}
              className={`block w-full text-left px-5 py-4 rounded-md text-xl font-light transition-all ${
                currentPage === "home"
                  ? "bg-brand-navy/5 text-brand-navy font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Home
            </button>

            <div>
              <button
                onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                className={`flex justify-between items-center w-full text-left px-5 py-4 rounded-md text-xl font-light transition-all ${
                  isOfferingsActive
                    ? "bg-brand-navy/5 text-brand-navy font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span>Offerings</span>
                {mobileOfferingsOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>

              <AnimatePresence>
                {mobileOfferingsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-6 bg-gray-50/50 rounded-b-md"
                  >
                    {offeringsItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`block w-full text-left px-5 py-3 text-lg font-light transition-all ${
                          currentPage === item.id
                            ? "text-brand-teal font-medium"
                            : "text-gray-600 hover:text-black"
                        }`}
                      >
                        • {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div>
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className={`flex justify-between items-center w-full text-left px-5 py-4 rounded-md text-xl font-light transition-all ${
                  isCompanyActive
                    ? "bg-brand-navy/5 text-brand-navy font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span>Company</span>
                {mobileCompanyOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>

              <AnimatePresence>
                {mobileCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-6 bg-gray-50/50 rounded-b-md"
                  >
                    {companyItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`block w-full text-left px-5 py-3 text-lg font-light transition-all ${
                          currentPage === item.id
                            ? "text-brand-teal font-medium"
                            : "text-gray-600 hover:text-black"
                        }`}
                      >
                        • {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              className={`block w-full text-left px-5 py-4 rounded-md text-xl font-light transition-all ${
                currentPage === "contact"
                  ? "bg-brand-navy/5 text-brand-navy font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Contact
            </button>

            <div className="pt-4 px-4">
              <button
                onClick={() => {
                  handleNavClick("contact");
                  openConsultation();
                }}
                className="w-full inline-flex items-center justify-center px-6 py-4 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-accent font-light text-lg tracking-wider uppercase rounded-full transition-all"
              >
                Get Consultation
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
