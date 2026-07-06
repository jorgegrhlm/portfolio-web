import '../styles/hero.css'
import Button from "../components/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

function Hero() {
  return (
    <FadeInSection>
    <section id="hero">
      <div className="hero-content">
            <h1>Jorge Gómez</h1>

            <h2>Desarrollador de Software | Backend & Full Stack Developer</h2>

            <p>
                Desarrollador de Aplicaciones Multiplataforma (DAM) con experiencia
                desarrollando aplicaciones web y backend utilizando Java, Python,
                React, Django REST, Docker, SQL y AWS. Me interesa crear software
                escalable, mantener buenas prácticas y seguir aprendiendo nuevas
                tecnologías.
            </p>

            <div className="hero-buttons">
                <Button text="Ver proyectos" href="#projects" />
                <Button text="Contactar" href="#contact" />
            </div>

            <div className="hero-socials">
              <a
                    href="https://github.com/jorgegrhlm"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                    GitHub
              </a>

              <a
                    href="https://www.linkedin.com/in/jorge-gomez-1660a128a/"
                    target="_blank"
                    rel="noreferrer"
                >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
        </div>
    </section>
    </FadeInSection>
  );
}

export default Hero;