import "./skillCard.css";

function SkillCard({ icon: Icon, name }) {
  return (
    <article className="skill-card">
      <Icon className="skill-card-icon" />

      <h3 className="skill-card-name">
        {name}
      </h3>
    </article>
  );
}

export default SkillCard;