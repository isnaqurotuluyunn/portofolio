import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import WebCate from "../../assets/catering.jpeg";
import DesignGrap from "../../assets/design.jpeg";
import Baby from "../../assets/baby.jpeg";
import pasangan from "../../assets/couple.jpeg";
import IG from "../../assets/sosmed.jpeg";

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    "All",
    "Web Development",
    "Graphic Design",
    "Photography",
    "Social Media",
  ];

  const projects = [
    {
      id: 1,
      title: "Wedding Catering Website With Recommendation System",
      category: "Web Development",
      image: WebCate,
      description:
        "Modern wedding catering website with a recommendation system built using Laravel and Tailwind CSS.",
    },
    {
      id: 2,
      title: "Poster Design for Instagram Campaign",
      category: "Graphic Design",
      image: DesignGrap,
      description:
        "Modern branding package including logo, typography, and poster design.",
    },
    {
      id: 3,
      title: "Birthday Moments",
      category: "Photography",
      image: Baby,
      description: "Baby's first birthday celebration.",
    },
    {
      id: 4,
      title: "Couple Celebrating Pregnancy",
      category: "Photography",
      image: pasangan,
      description:
        "Photography session capturing a couple during pregnancy.",
    },
    {
      id: 5,
      title: "Instagram Campaign",
      category: "Social Media",
      image: IG,
      description:
        "Cohesive 9-post grid design for a wedding catering business.",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portofolio"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-slate-900 dark:text-white mb-4">
            Portofolio
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md ${
                  activeCategory === cat
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-105"
                    : "bg-white/40 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="mt-12">
          {activeCategory === "Photography" ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="1.5rem">
                <AnimatePresence>
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedImage(project.image)}
                      className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white font-bold text-xl mb-1">
                          {project.title}
                        </h3>

                        <p className="text-slate-200 text-sm">
                          {project.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(project.image)}
                    className="group bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                  >
                    <div className="relative overflow-hidden h-60">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute top-4 left-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};