function Projects() {
  return (
    <section className="content-section projects-section">

      <div className="section-heading">
        <p className="welcome">MY WORK</p>

        <h2>
          My <span>Projects</span>
        </h2>

        <p>
          Here are some of the projects I have worked on using
          different programming languages and technologies.
        </p>
      </div>

      <div className="projects-grid">

        {/* PROJECT 1: NUMBER GUESSING GAME */}

        <div className="project-card">

          <div className="project-number">01</div>

          <img
            src="/guessing-game.png"
            alt="Java Number Guessing Game"
            className="project-image"
          />

          <div className="project-details">

            <span className="project-category">
              JAVA DESKTOP APPLICATION
            </span>

            <h3>Number Guessing Game</h3>

            <p>
              An interactive desktop game developed using Java Swing.
              The application generates a random number between 1 and
              100 and challenges users to guess the correct number.
            </p>

            <p>
              It provides instant feedback when a guess is too high
              or too low, validates user input, counts attempts and
              allows users to restart the game.
            </p>

            <div className="project-technologies">
              <span>Java</span>
              <span>Java Swing</span>
              <span>AWT</span>
              <span>GUI</span>
            </div>

            <a
              href="https://github.com/emmanu-byte/Number-guessing-game"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              View on GitHub ↗
            </a>

          </div>
        </div>


        {/* PROJECT 2: PERSONAL PORTFOLIO */}

        <div className="project-card">

          <div className="project-number">02</div>

          <div className="portfolio-preview">

            <div className="preview-content">

              <span>MY PERSONAL WEBSITE</span>

              <h3>
                EMMANUEL<span>.</span>
              </h3>

              <p>Frontend Developer Portfolio</p>

              <div className="preview-line"></div>

              <div className="preview-buttons">
                <span>ABOUT</span>
                <span>PROJECTS</span>
                <span>CONTACT</span>
              </div>

            </div>
          </div>

          <div className="project-details">

            <span className="project-category">
              WEB DEVELOPMENT
            </span>

            <h3>Personal Portfolio Website</h3>

            <p>
              A responsive personal portfolio website developed
              to introduce myself, showcase my technical skills
              and present the projects I have worked on.
            </p>

            <p>
              The website uses React components and modern CSS
              styling to create an interactive and user-friendly
              experience.
            </p>

            <div className="project-technologies">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <span className="project-current">
              Currently viewing this project
            </span>

          </div>
        </div>


        {/* PROJECT 3: COMING SOON */}

        <div className="project-card coming-soon-card">

          <div className="project-number">03</div>

          <div className="coming-soon-preview">

            <div className="coming-soon-icon">＋</div>

            <h3>Something New</h3>

            <p>Another project is on the way.</p>

          </div>

          <div className="project-details">

            <span className="project-category">
              IN DEVELOPMENT
            </span>

            <h3>More Projects Coming Soon</h3>

            <p>
              I am continuously learning and improving my
              programming skills. More exciting projects will
              be added here as I develop new applications.
            </p>

            <div className="project-technologies">
              <span>Learning</span>
              <span>Building</span>
              <span>Improving</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;