import "../styles/footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

function Footer() {
  return (
    <FadeInSection>
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-name">
          Jorge Gómez
        </h2>

        <p className="footer-role">
          Software Developer
        </p>

        <p className="footer-description">
          Desarrollador de software especializado en Java, Python y tecnologías
          Full Stack.
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/jorgegrhlm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jorge-gomez-1660a128a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:jorgejgomezramirez@gmail.com"
            aria-label="Correo electrónico"
          >
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-divider"></div>

        <p className="footer-copy">
          © 2026 Jorge Gómez. Desarrollado con React + Vite.
        </p>

      </div>

    </footer>
    </FadeInSection>
  );
}

export default Footer;