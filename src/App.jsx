import './App.css'
import Navbar from "./components/Navbar";

import Hero from './sections/Hero'
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />


    </>
  )
}

export default App