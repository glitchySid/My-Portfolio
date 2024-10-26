import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Aboutme from "./pages/aboutme";
import ContactMe from "./pages/contactme";
import Projects from "./pages/projects";
import Button from "./Ui/Button";

function MainPage() {
  const [activeTab, setActiveTab] = useState("aboutme");

  return (
    <div className="container mx-auto p-4">
      <div className="flex sm:flex-row gap-2 mb-4 bg-gray-400 rounded-full p-1 h-10">
        <Button
          name="About Me"
          lable="aboutme"
          setActiveTab={setActiveTab}
          activeTab="aboutme"
        />

        <Button
          name="Contact Me"
          lable="contact"
          setActiveTab={setActiveTab}
          activeTab="aboutme"
        />

        <Button
          name="Projects"
          lable="projects"
          setActiveTab={setActiveTab}
          activeTab="aboutme"
        />
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
