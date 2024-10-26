import { projects } from "../data/project";

function Projects() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4 p-4 items-center justify-center">
      {projects.map((project, index) => (
        <a href={project.anchor} key={index}>
          <img
            src={project.img}
            alt={project.title}
            className="transition-transform duration-300 hover:scale-105"
          />
        </a>
      ))}
    </div>
  );
}

export default Projects;
