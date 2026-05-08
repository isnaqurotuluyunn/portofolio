import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/20 dark:border-white/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#beranda"
          className="text-2xl font-bold font-['Poppins'] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 tracking-tight"
        >
          My<span className="text-slate-800 dark:text-white">Portofolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 font-medium transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors backdrop-blur-sm"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-indigo-600" />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm"
          >
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-800 dark:text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border-b border-white/20 dark:border-white/10 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
              <a
                 href={link.href}
                  onClick={(e) => {
                    e.preventDefault();

                     setIsMobileMenuOpen(false);

                    setTimeout(() => {
                      const element = document.querySelector(link.href);

                      element?.scrollIntoView({
                       behavior: "smooth",
                      });
                    }, 100);
                  }}
                  className="block text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 font-medium text-lg py-2"
               >
                  {link.name}
               </a>
             </li>
            ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
