import React from "react";
import { motion } from "motion/react";
import { Terminal, Play } from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";

export const TechStack: React.FC = () => {
  const codeSnippet = `
function Portfolio() {
  const skills = ['React', 'Laravel', 'Tailwind', 'Motion'];
  const passion = 'Building digital experiences';
  
  return (
    <div className="modern-glass">
      <Hero />
      <Stack techs={skills} />
      <DesignSystem variant="glassmorphism" />
    </div>
  );
}

// "Bridging creativity and technical execution."
export default Portfolio;
  `.trim();

  const technologies = [
  { name: "HTML", color: "text-orange-500", icon: FaHtml5 },
  { name: "CSS", color: "text-blue-500", icon: FaCss3Alt },
  { name: "JavaScript", color: "text-yellow-400", icon: FaJs },
  { name: "React", color: "text-cyan-400", icon: FaReact },
  { name: "Laravel", color: "text-red-500", icon: FaLaravel },
  { name: "Tailwind CSS", color: "text-teal-400", icon: RiTailwindCssFill },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-cyan-400 text-sm font-medium mb-6">
            <Terminal size={16} /> Dev Focus
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] mb-4">
            Tech Stack & Code
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            Menggabungkan teknologi modern dan kreativitas untuk menciptakan pengalaman web yang interaktif, elegan, dan fungsional.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Tech Logos */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technologies.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 hover:border-slate-500 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group transition-all duration-300 hover:bg-slate-700/40"
                >
                  <tech.icon
                    size={40}
                    className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}/>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Code Preview UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:w-1/2"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-cyan-900/20 border border-slate-700/50 bg-[#0d1117] backdrop-blur-xl group hover:shadow-cyan-500/10 transition-shadow duration-500">
              
              {/* Fake Mac Header */}
              <div className="bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono">Portfolio.tsx</div>
                <div className="flex items-center gap-2">
                  <Play size={14} className="text-slate-400 hover:text-green-400 cursor-pointer" />
                </div>
              </div>

              {/* Code Area */}
              <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
                <pre>
                  <code>
                    <span className="text-purple-400">import</span> <span className="text-cyan-300">React</span> <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;<br/>
                    <br/>
                    <span className="text-blue-400">function</span> <span className="text-yellow-200">Portfolio</span>() {'{'}<br/>
                    {'  '}<span className="text-purple-400">const</span> skills = [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Laravel'</span>, <span className="text-green-300">'Tailwind'</span>];<br/>
                    {'  '}<span className="text-purple-400">const</span> passion = <span className="text-green-300">'Building digital experiences'</span>;<br/>
                    <br/>
                    {'  '}<span className="text-purple-400">return</span> (<br/>
                    {'    '}&lt;<span className="text-red-400">div</span> <span className="text-yellow-300">className</span>=<span className="text-green-300">"modern-glass"</span>&gt;<br/>
                    {'      '}&lt;<span className="text-yellow-200">Hero</span> /&gt;<br/>
                    {'      '}&lt;<span className="text-yellow-200">Stack</span> <span className="text-yellow-300">techs</span>={'{'}skills{'}'} /&gt;<br/>
                    {'    '}&lt;/<span className="text-red-400">div</span>&gt;<br/>
                    {'  '});<br/>
                    {'}'}<br/>
                    <br/>
                    <span className="text-slate-500 italic">// "Bridging creativity and technical execution."</span><br/>
                    <span className="text-purple-400">export default</span> Portfolio;
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
