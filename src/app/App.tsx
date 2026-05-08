import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for the cool neon glow
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading skeleton / initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Sync dark mode with body class for Tailwind
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 font-['Inter'] transition-colors duration-500 selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-100`}>
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-cyan-500 animate-spin"></div>
              <div className="text-cyan-500 font-['Poppins'] font-medium tracking-widest uppercase text-sm animate-pulse">LOADING</div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            
            <main>
              <Hero />
              <About />
              <Portfolio />
              <TechStack />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
