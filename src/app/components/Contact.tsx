import React from "react";
import { motion } from "motion/react";
import { Send, Instagram, Linkedin, Github, Mail, MapPin } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="kontak" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-slate-900 dark:text-white mb-6">
              Let's Work Together!
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
             Terbuka untuk kolaborasi dalam pengembangan desain kreatif, media digital, dan aplikasi web modern dengan pendekatan profesional dan inovatif.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-blue-100 dark:bg-slate-800 rounded-full text-blue-600 dark:text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:isnaqurottuluyun@gmail.com" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">isnaqurottuluyun@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-purple-100 dark:bg-slate-800 rounded-full text-purple-600 dark:text-purple-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>Surabaya, Indonesia</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect on Socials</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/isnaauyun?igsh=MTd6M2ZsNmR5dXRiYw==" className="p-3 bg-white/50 dark:bg-slate-800/50 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 rounded-full text-slate-700 dark:text-slate-300 transition-all shadow-sm">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-white/50 dark:bg-slate-800/50 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 rounded-full text-slate-700 dark:text-slate-300 transition-all shadow-sm">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-white/50 dark:bg-slate-800/50 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-900 rounded-full text-slate-700 dark:text-slate-300 transition-all shadow-sm">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-xl mx-auto lg:mx-0"
          >
            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-cyan-500/50 text-slate-900 dark:text-white transition-all"
                    placeholder="Isna Uyun"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-cyan-500/50 text-slate-900 dark:text-white transition-all"
                    placeholder="isna@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-cyan-500/50 text-slate-900 dark:text-white transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-cyan-500 dark:to-blue-500 dark:hover:from-cyan-400 dark:hover:to-blue-400 text-white font-bold text-lg shadow-lg shadow-blue-500/30 dark:shadow-cyan-500/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
