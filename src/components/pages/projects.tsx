import { projects } from "../data/project";

function Projects() {
  return (
    <div className="flex justify-center">
      {projects.map((project, index) => (
        <a href={project.anchor} key={index}>
          <img src={project.img} alt={project.title} />
        </a>
      ))}
    </div>
  );
}

export default Projects;
