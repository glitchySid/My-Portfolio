import { useState } from "react";
import Aboutme from "./pages/aboutme";
import ContactMe from "./pages/contactme";
import Projects from "./pages/projects";

function MainPage() {
  const [activeTab, setActiveTab] = useState("aboutme");

  return (
    <div className="container mx-auto p-4">
      <div className="flex sm:flex-row gap-4 mb-4 bg-gray-400 rounded-full p-2">
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "aboutme" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("aboutme")}
        >
          About Me
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "contact" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          Contact Me
        </button>

        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "projects" ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "aboutme" && <Aboutme />}
        {activeTab === "contact" && <ContactMe />}
        {activeTab === "projects" && <Projects />}
      </div>
    </div>
  );
}

export default MainPage;
