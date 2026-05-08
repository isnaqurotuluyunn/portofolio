import React from "react";
declare module "*.jpeg";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import fotoSaya from "../../assets/foto-saya.jpeg";

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/40 dark:border-slate-700 shadow-sm"
            >
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
                My Personal Portfolio
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-['Poppins'] text-slate-900 dark:text-white leading-tight mb-6">
              Isna Qurrotul Uyun <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 dark:from-cyan-400 dark:via-purple-500 dark:to-blue-400">
                Creative & Junior Web Developer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Seorang profesional multidisiplin yang berfokus pada Administrasi Keuangan, Social Media Management, Graphic Design, Photography, dan Web Development.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#portofolio">
                <button className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-cyan-500/30 transition-all flex items-center gap-2 group">
                  View Portfolio
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#kontak">
                <button className="px-8 py-4 rounded-xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/50 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:bg-white/60 dark:hover:bg-slate-700/60 transition-all shadow-sm flex items-center gap-2">
                  Contact Me
                </button>
              </a>
            </div>
          </motion.div>
          
          {/* Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glass layered background behind photo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-3xl rotate-6 opacity-30 blur-lg animate-pulse"></div>
              <div className="absolute inset-0 bg-white/30 dark:bg-slate-800/50 backdrop-blur-xl border border-white/50 dark:border-slate-600 rounded-3xl -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
              
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={fotoSaya} 
                  alt="Isna Qurrotul Uyun" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/50 dark:border-slate-600"
              >
                <div className="text-xs font-bold text-slate-800 dark:text-white">Junior Developer</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/50 dark:border-slate-600"
              >
                <div className="text-xs font-bold text-slate-800 dark:text-white">Creative Designer</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
