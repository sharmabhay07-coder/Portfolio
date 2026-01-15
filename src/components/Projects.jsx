import useReveal from "../hooks/useReveal";

export default function Projects() {
  useReveal();

  return (
    <section id="project" className="project-section reveal">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="project-container">
        {/* Project 1 */}
        <div className="project-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPd8r_wImVXYsPCr20z52MbV1OGUPuj7RRrQ&s" alt="Portfolio Project" />
          <div className="project-info">
            <h3>Portfolio Website</h3>
            <p>
              A clean and modern personal portfolio built using HTML and CSS
              showcasing my skills and work.
            </p>
            <a href="#" className="project-btn">
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src="https://media.designrush.com/inspiration_images/136768/conversions/_1524503075_233_Amazon-Website-Design-Homepage-desktop.jpg"
            alt="Landing Page"
          />
          <div className="project-info">
            <h3>Landing Page</h3>
            <p>
              Responsive landing page with smooth layout, gradients, and
              interactive UI components.
            </p>
            <a href="#" className="project-btn">
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img
            src="https://repository-images.githubusercontent.com/587606503/2e0422ac-0946-4ff1-a4b4-373f691463ae"
            alt="Netflix Clone"
          />
          <div className="project-info">
            <h3>Netflix Page</h3>
            <p>
              Created a Netflix page using HTML and CSS showcasing my skills and
              work.
            </p>
            <a href="#" className="project-btn">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
