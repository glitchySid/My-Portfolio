import { projects } from "../data/project";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      className="container mx-auto p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-8 mb-12 items-center border border-white p-4 rounded-lg hover:border-gray-300 motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"
        >
          {/* Image Container - Left side */}
          <div className="w-full md:w-1/2">
            <a href={project.anchor}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Content Container - Right side */}
          <div className="w-full md:w-1/2 space-y-4 border-white">
            <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
              {project.title}
            </h3>
            <p className="text-white font-mono text-sm sm:text-base">
              {project.content}
            </p>
            {/* Add any additional project details here */}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Projects;
