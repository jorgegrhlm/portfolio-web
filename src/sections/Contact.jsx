import "../styles/contact.css";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";


function Contact() {
  const [copyMessage, setCopyMessage] = useState("");
  const copyToClipboard = async (text, message) => {
  try {
    await navigator.clipboard.writeText(text);

    setCopyMessage(message);

    setTimeout(() => {
      setCopyMessage("");
    }, 2000);

  } catch (error) {
    console.error("Error al copiar:", error);
  }
};
  return (
    <FadeInSection>
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2 className="contact-title">
          Contacto
        </h2>

        <p className="contact-description">
          Gracias por visitar mi portfolio. Si consideras que mi perfil puede aportar
          valor a tu equipo o proyecto, puedes contactar conmigo a través de
          cualquiera de los siguientes medios.
        </p>

        <div className="contact-card">

              <div
                    className="contact-item"
                    onClick={() =>
                      copyToClipboard(
                        "jorgejgomezramirez@gmail.com",
                        "Correo copiado al portapapeles"
                      )
                    }
                  >
                    <FaEnvelope className="contact-icon" />

                    <div>
                      <h3>Email</h3>
                      <p>jorgejgomezramirez@gmail.com</p>
                    </div>
              </div>

            <div
              className="contact-item"
              onClick={() =>
                copyToClipboard(
                  "+34 641 74 70 41",
                  "Teléfono copiado al portapapeles"
                )
              }
            >
              <FaPhoneAlt className="contact-icon" />

              <div>
                <h3>Teléfono</h3>
                <p>+34 641 74 70 41</p>
              </div>
            </div>

          <a
            href="https://www.linkedin.com/in/jorge-gomez-1660a128a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin className="contact-icon" />

            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/jorge-gomez-1660a128a</p>
            </div>
          </a>

          <a
            href="https://github.com/jorgegrhlm"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub className="contact-icon" />

            <div>
              <h3>GitHub</h3>
              <p>github.com/jorgegrhlm</p>
            </div>
          </a>

          </div>
            {copyMessage && (
            <p className="copy-message">
              ✓ {copyMessage}
            </p>
          )}

      </div>
    </section>
    </FadeInSection>
  );
}

export default Contact;