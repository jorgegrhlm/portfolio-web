import "../styles/about.css";
import FadeInSection from "../components/FadeInSection";

function About() {
    return (
        <FadeInSection>
        <section id="about" className="about">

            <h2>Sobre mí</h2>

            <div className="about-grid">

                <div className="about-card">
                    <h3>🎓 Formación</h3>
                    <p>
                        Técnico Superior en Desarrollo de Aplicaciones
                        Multiplataforma (DAM), IES Islas Filipinas.
                    </p>
                </div>

                <div className="about-card">
                    <h3>💼 Experiencia</h3>
                    <p>
                        Desarrollo de aplicaciones web utilizando Java,
                        Python, React, Django REST, Docker, SQL y AWS.
                    </p>
                </div>

                <div className="about-card">
                    <h3>🛠 Tecnologías</h3>
                    <p>
                        Java · Python · React · Django REST · Docker · SQL · AWS · Git · Odoo
                    </p>
                </div>

                <div className="about-card">
                    <h3>🌍 Idiomas</h3>
                    <p>
                        Español (Nativo) · Inglés (B1 - Intermediated)
                    </p>
                </div>

            </div>

        </section>
        </FadeInSection>
    );
}

export default About;