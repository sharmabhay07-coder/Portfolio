import useReveal from "../hooks/useReveal";

export default function Services() {
  useReveal();

  return (
    <section id="service" className="service-section reveal">
      <h2 className="section-title">
        My <span>Services</span>
      </h2>

      <div className="service-container">
        <div className="service-card">
          <i className="fa-solid fa-code"></i>
          <h3>Web Development</h3>
          <p>
            I create fast, responsive, and visually appealing websites using
            clean and modern HTML & CSS.
          </p>
        </div>

        <div className="service-card">
          <i className="fa-solid fa-laptop-code"></i>
          <h3>Front-End Styling</h3>
          <p>
            Adding animations, layouts, and styles that make websites look
            professional and modern.
          </p>
        </div>

        <div className="service-card">
          <i className="fa-solid fa-mobile-screen-button"></i>
          <h3>Responsive Layouts</h3>
          <p>
            I create layouts that adapt perfectly to mobile, tablet, and desktop
            devices using modern CSS techniques.
          </p>
        </div>

        <div className="service-card">
          <i className="fa-solid fa-pen-nib"></i>
          <h3>UI / UX Design</h3>
          <p>
            I design clean and visually appealing interfaces focused on
            usability, accessibility, and consistency.
          </p>
        </div>
      </div>
    </section>
  );
}
