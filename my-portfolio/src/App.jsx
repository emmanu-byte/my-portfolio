import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/contacts";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((previous) =>
      previous === "dark" ? "light" : "dark"
    );
  }

  return (
    <BrowserRouter>
      <div className="page">

        {/* Navigation Bar */}

        <header className="nav">

          <NavLink to="/" className="logo">
            Emmanuel<span>.</span>
          </NavLink>

          <nav className="nav-links">

            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/skills">
              Skills
            </NavLink>

            <NavLink to="/projects">
              Projects
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>

          </nav>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

        </header>

        {/* Main Pages */}

        <main>

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />

          </Routes>

        </main>

        {/* Footer */}

        <footer className="footer">

          <p>
            © {new Date().getFullYear()} Emmanuel Bentil.
            All Rights Reserved.
          </p>

          <p>Designed and developed with React.</p>

        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
