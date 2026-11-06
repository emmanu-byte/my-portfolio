function Skills() {

  const skills = [
    {
      name: "HTML5",
      level: "Web Structure",
      icon: "🌐"
    },
    {
      name: "CSS3",
      level: "Web Styling",
      icon: "🎨"
    },
    {
      name: "JavaScript",
      level: "Programming",
      icon: "⚡"
    },
    {
      name: "React",
      level: "Frontend Development",
      icon: "⚛️"
    },
    {
      name: "Python",
      level: "Programming",
      icon: "🐍"
    },
    {
      name: "C++",
      level: "Programming",
      icon: "💻"
    },
    {
      name: "Git & GitHub",
      level: "Version Control",
      icon: "🔧"
    },
    {
      name: "Vite",
      level: "Development Tool",
      icon: "🚀"
    }
  ];

  return (
    <section className="content-section">

      <p className="welcome">WHAT I WORK WITH</p>

      <h1>My <span>Skills</span></h1>

      <p className="section-description">
        Technologies and tools I am learning and
        using to build modern applications.
      </p>

      <div className="skills-grid">

        {skills.map((skill) => (

          <div className="skill-card" key={skill.name}>

            <span className="skill-icon">
              {skill.icon}
            </span>

            <h2>{skill.name}</h2>

            <p>{skill.level}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;
