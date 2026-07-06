import "./timelineItem.css";

function TimelineItem({
  position,
  company,
  location,
  period,
  description,
  technologies,
}) {
  return (
    <article className="timeline-item">
      <div className="timeline-marker"></div>

      <div className="timeline-content">
        <span className="timeline-period">
          {period}
        </span>

        <h3 className="timeline-position">
          {position}
        </h3>

        <h4 className="timeline-company">
          {company}
        </h4>

        <p className="timeline-location">
          {location}
        </p>

        <p className="timeline-description">
          {description}
        </p>

        <div className="timeline-technologies">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="timeline-tech"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default TimelineItem;