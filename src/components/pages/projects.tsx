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
          className="flex flex-col md:flex-row gap-8 mb-12 items-center border border-[#242424] p-4 rounded-lg hover:border-[#A1A1A1]"
        >
          {/* Image Container - Left side */}
          <div className="w-full md:w-1/2 ">
            <a href={project.anchor}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300"
              />
            </a>
          </div>

          {/* Content Container - Right side */}
          <div className="w-full md:w-1/2 space-y-4 border-[#242424]">
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
