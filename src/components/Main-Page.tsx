import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Aboutme from "./pages/aboutme";
import ContactMe from "./pages/contactme";
import Projects from "./pages/projects";

function MainPage() {
  const [activeTab, setActiveTab] = useState("aboutme");

  return (
    <div className="container mx-auto p-4">
      <div className="flex sm:flex-row gap-2 mb-4 bg-gray-400 rounded-full p-1 h-10">
        <motion.button
          className={`px-3 py-1 rounded-full text-center${
            activeTab === "aboutme" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("aboutme")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          About Me
        </motion.button>
        <motion.button
          className={`px-3 py-1 rounded-full text-center${
            activeTab === "contact" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Contact Me
        </motion.button>
        <motion.button
          className={`px-3 py-1 rounded-full text-center${
            activeTab === "projects" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("projects")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Projects
        </motion.button>
      </div>

      <div className="mt-4 relative">
        <AnimatePresence mode="wait">
          {activeTab === "aboutme" && (
            <motion.div
              key="aboutme"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Aboutme />
            </motion.div>
          )}
          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ContactMe />
            </motion.div>
          )}
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MainPage;
