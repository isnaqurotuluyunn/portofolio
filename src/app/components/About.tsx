import React from "react";
import { motion } from "motion/react";
import { Briefcase, Paintbrush, Code2, LineChart, Camera, MonitorSmartphone } from "lucide-react";

export const About: React.FC = () => {
  const skills = [
    {
      category: "Administrative & Management",
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      items: [
        { name: "Finance Management", level: 85 },
        { name: "Social Media Handling", level: 85 },
      ]
    },
    {
      category: "Creative",
      icon: <Paintbrush className="w-6 h-6 text-purple-500" />,
      items: [
        { name: "Graphic Design", level: 80 },
        { name: "Photography", level: 85 },
      ]
    },
    {
      category: "Technical",
      icon: <Code2 className="w-6 h-6 text-cyan-500" />,
      items: [
        { name: "Web Development (Junior)", level: 60 },
        { name: "Frontend (HTML, CSS, React)", level: 75 },
      ]
    }
  ];

  return (
    <section id="tentang" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-slate-900 dark:text-white mb-4">
            Tentang Saya
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Saya merupakan individu kreatif dan adaptif yang memiliki kombinasi kemampuan di bidang administrasi keuangan, social media management, desain grafis, fotografi, dan web development. Berfokus pada detail, estetika, serta pengalaman pengguna untuk menciptakan karya digital yang modern, interaktif, dan memiliki nilai fungsional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/60 dark:bg-slate-700/60 rounded-xl shadow-sm">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-6">
                {skillGroup.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.name}</span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
