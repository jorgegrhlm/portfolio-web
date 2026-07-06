import "../styles/projects.css";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import FadeInSection from "../components/FadeInSection";

function Projects() {
  return (
    <FadeInSection>
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Proyectos</h2>

        <p className="projects-subtitle">
          Algunos de los proyectos en los que he trabajado durante mi formación
          y experiencia profesional.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}

export default Projects;