import "./projectCard.css";

function ProjectCard({
  title,
  image,
  description,
  technologies,
  github,
  demo,
}) {
  return (
    <article className="project-card">
      <div className="project-card-image-container">
          <img
            src={image}
            alt={title}
            className="project-card-image"
          />
      </div>

      <h3 className="project-card-title">{title}</h3>

      <p className="project-card-description">
        {description}
      </p>

      <div className="project-card-technologies">
        {technologies.map((tech) => (
          <span key={tech} className="project-card-tech">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-card-links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="project-card-button"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="project-card-button"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;