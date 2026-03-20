import useReveal from "../hooks/useReveal";
import img from "../assets/progress.png"

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
          <img
            src="https://png.pngtree.com/png-vector/20250205/ourlarge/pngtree-portfolio-background-images-hd-pictures-for-free-vectors-download-png-image_15372310.png"
            alt="Background Remover Tool"
          />
          <div className="project-info">
            <h3>Background Remover Tool</h3>
            <p>
              A web-based image editing tool that allows users to instantly remove backgrounds and customize images with solid colors or custom backgrounds.
              Built with a focus on smooth user experience, fast processing, and real-time preview.
            </p>
            <p><strong>Tech Used:</strong> React, JavaScript, CSS, API Integration</p>
            <a href="https://background-remover-phi-two.vercel.app/" className="project-btn">View Project</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src={img}
            alt="Progress Simulator"
          />
          <div className="project-info">
            <h3>Progress Simulator</h3>
            <p>
              A progress simulator web app that estimates how much a user can
              improve in a skill based on the time they plan to invest.
              Built to practice DOM manipulation, user input handling,
              and dynamic progress visualization.
            </p>
            <p><strong>Tech Used:</strong> HTML, CSS, JavaScript</p>
            <a href="https://progresssimulator.netlify.app/" className="project-btn">View Project</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img
            src="https://chatgen.ai/wp-content/uploads/2023/04/AI-chat-5.png"
            alt="Ai ChatBot"
          />
          <div className="project-info">
            <h3>AI Chatbot (Hasty)</h3>
            <p>
              An AI-powered chatbot that allows users to ask questions and receive
              real-time responses. Features a clean chat interface, typing animation,
              emoji support, and theme switching.
            </p>
            <p><strong>Tech Used:</strong> React, JavaScript, Groq API, CSS</p>

            <a href="https://hastyaibot.netlify.app/ " className="project-btn">View Project</a>
          </div>
        </div>


      </div>
    </section>
  );
}