import useReveal from "../hooks/useReveal";

export default function Skills() {
  useReveal();
  

  return (
    <section id="skills" className="skills-section reveal">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        <div className="skill-card">
          <i className="fa-brands fa-html5"></i>
          <h3>HTML5</h3>
        </div>

        <div className="skill-card">
          <i className="fa-brands fa-css3-alt"></i>
          <h3>CSS3</h3>
        </div>

        <div className="skill-card">
          <i className="fa-brands fa-js"></i>
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <i className="fa-brands fa-react"></i>
          <h3>React</h3>
        </div>

        <div className="skill-card">
          <i className="fa-brands fa-github"></i>
          <h3>Git & GitHub</h3>
        </div>
      </div>
    </section>
  );
}
