
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">

      {/* Navigation */}
      <nav>
        <h2>My Website</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero-section">
        <div>
          <h1>Hello, I'm Emmanuel</h1>

          <h2>Welcome to My Website</h2>

          <p>
            I am a student learning programming and web development.
            This is my personal website created with React.
          </p>

          <button onClick={() => setCount(count + 1)}>
            You clicked me {count} times
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          My name is Emmanuel. I am interested in programming,
          software development and technology. I am currently
          improving my skills in React, JavaScript, Python and C++.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>My Skills</h2>

        <div className="skills">
          <div className="card">
            <h3>HTML</h3>
            <p>Creating the structure of websites.</p>
          </div>

          <div className="card">
            <h3>CSS</h3>
            <p>Designing and styling websites.</p>
          </div>

          <div className="card">
            <h3>JavaScript</h3>
            <p>Adding functionality to websites.</p>
          </div>

          <div className="card">
            <h3>React</h3>
            <p>Building modern web applications.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <p>Email: benitoteezy@gmail.com</p>
        <p>Phone: +233 556004920</p>

        <button onClick={() => alert('Thank you for contacting me!')}>
          Contact Me
        </button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 My Website. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App

