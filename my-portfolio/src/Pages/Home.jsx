import { Link } from "react-router-dom";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./contacts";

function Home() {
  return (
    <>
      {/* HOME SECTION */}

      <section className="home-section">

        <div className="home-content">

          <div className="home-text">

            <p className="welcome">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              Hello, I'm <span>Emmanuel Bentil</span>
            </h1>

            <h2>Frontend Developer</h2>

            <p className="description">
              I build clean, modern and responsive web
              applications using React, JavaScript,
              HTML and CSS.

              Currently completing the ERA AXIS STEM
              bootcamp and expanding my programming skills.
            </p>

            <div className="home-buttons">

              <Link to="/projects" className="btn primary">
                Explore My Work
              </Link>

              <Link to="/contact" className="btn secondary">
                Contact Me
              </Link>

            </div>

          </div>

          <div className="home-image">

            <img
              src="/pic.jpg"
              alt="Emmanuel Bentil"
            />

          </div>

        </div>

        <div className="scroll-text">
          Explore my portfolio ↓
        </div>

      </section>


      {/* ABOUT SECTION */}

      <About />


      {/* SKILLS SECTION */}

      <Skills />


      {/* PROJECTS SECTION */}

      <Projects />


      {/* CONTACT SECTION */}

      <Contact />

    </>
  );
}

export default Home;