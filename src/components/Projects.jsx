"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projects from "../types/projects";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setActiveIndex(
      (current) => (current + newDirection + projects.length) % projects.length
    );
  };

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>

        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
          <AnimatePresence initial={false} custom={1}>
            {projects.map(
              (project, index) =>
                activeIndex === index && (
                  <motion.div
                    key={project.id}
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className="absolute inset-0 w-full"
                  >
                    <div className="relative h-full w-full">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover brightness-75"
                      />

                      {/* Overlay con Información */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-3xl mx-auto"
                          >
                            <h3 className="text-4xl font-bold mb-4">
                              {project.name}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies
                                .split(",")
                                .map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-4 py-1.5 bg-blue-500 rounded-full text-white text-sm font-medium backdrop-blur-sm"
                                  >
                                    {tech.trim()}
                                  </span>
                                ))}
                            </div>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-300 backdrop-blur-sm"
                              >
                                <Github className="w-5 h-5" />
                                <span>Código Fuente</span>
                              </motion.a>
                              {project.demo && (
                                <motion.a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                  <span>Demo en Vivo</span>
                                </motion.a>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 transition-all duration-300 ${
                activeIndex === index
                  ? "w-12 bg-blue-500"
                  : "w-8 bg-gray-600 hover:bg-gray-500"
              } rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
