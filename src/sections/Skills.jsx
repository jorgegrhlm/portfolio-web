import "../styles/skills.css";
import SkillCard from "../components/SkillCard";
import skills from "../data/skills";
import FadeInSection from "../components/FadeInSection";

const categories = [
  "Lenguajes",
  "Frontend",
  "Backend",
  "Bases de datos",
  "DevOps",
  "Herramientas",
];

function Skills() {
  return (
    <FadeInSection>
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Tecnologías</h2>

        <p className="skills-subtitle">
          Tecnologías y herramientas con las que he trabajado durante mi
          formación y experiencia profesional.
        </p>

        {categories.map((category) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>

            <div className="skills-grid">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillCard
                    key={skill.id}
                    icon={skill.icon}
                    name={skill.name}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </FadeInSection>
  );
}

export default Skills;