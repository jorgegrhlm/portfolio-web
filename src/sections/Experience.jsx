import "../styles/experience.css";
import TimelineItem from "../components/TimelineItem";
import experience from "../data/experience";
import FadeInSection from "../components/FadeInSection";

function Experience() {
  return (
    <FadeInSection>
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">
          Experiencia Profesional
        </h2>

        <p className="experience-subtitle">
          Mi experiencia desarrollando software en un entorno profesional y los
          proyectos en los que he participado.
        </p>

        <div className="experience-timeline">
          {experience.map((job) => (
            <TimelineItem
              key={job.id}
              position={job.position}
              company={job.company}
              location={job.location}
              period={job.period}
              description={job.description}
              technologies={job.technologies}
            />
          ))}
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}

export default Experience;