import { useState, useEffect } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import "./navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [isScrolled, setIsScrolled] = useState(false);
    const closeMenu = (section) => {setIsMenuOpen(false); setActiveSection(section);};

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
    const handleScroll = () => {
        const sections = document.querySelectorAll("section");

        let currentSection = "hero";
        let minDistance = Infinity;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            const distance = Math.abs(rect.top);

            if (distance < minDistance) {
                minDistance = distance;
                currentSection = section.id;
            }
        });

        setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // inicial

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (
        <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">

                <div className="navbar-logo">
                    Jorge Gómez
                </div>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menú de navegación"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <HiXMark /> : <HiBars3 />}
                </button>

                <nav>
                    <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
                        <li><a href="#hero" onClick={() => closeMenu("hero")} className={activeSection === "hero" ? "active" : ""}>Inicio</a></li>
                        <li><a href="#about" onClick={() => closeMenu("about")} className={activeSection === "about" ? "active" : ""}>Sobre mí</a></li>
                        <li><a href="#projects" onClick={() => closeMenu("projects")} className={activeSection === "projects" ? "active" : ""}>Proyectos</a></li>
                        <li><a href="#skills" onClick={() => closeMenu("skills")} className={activeSection === "skills" ? "active" : ""}>Tecnologías</a></li>
                        <li><a href="#experience" onClick={() => closeMenu("experience")} className={activeSection === "experience" ? "active" : ""}>Experiencia</a></li>
                        <li><a href="#contact" onClick={() => closeMenu("contact")} className={activeSection === "contact" ? "active" : ""}>Contacto</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;