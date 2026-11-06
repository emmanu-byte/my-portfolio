function Contact() {

  return (
    <section className="content-section contact-section">

      <p className="welcome">LET'S CONNECT</p>

      <h1>Contact <span>Me</span></h1>

      <p className="section-description">
        Have a project, collaboration or opportunity?
        I would be happy to hear from you.
      </p>

      <div className="contact-card">

        <div className="contact-item">

          <span>📧</span>

          <div>
            <h3>Email</h3>
            <p>benitoteezy@gmail.com</p>
          </div>

        </div>

        <a
          href="mailto:benitoteezy@gmail.com"
          className="btn primary"
        >
          Send Me an Email
        </a>

      </div>

    </section>
  );
}

export default Contact;
