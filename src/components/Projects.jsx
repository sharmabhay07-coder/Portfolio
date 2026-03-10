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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPd8r_wImVXYsPCr20z52MbV1OGUPuj7RRrQ&s"
            alt="Portfolio Website"
          />
          <div className="project-info">
            <h3>Portfolio Website</h3>
            <p>
              Personal portfolio website designed and developed to showcase my
              skills, projects, and learning journey. Built with a focus on
              clean UI, responsive layouts, and smooth user experience.
            </p>
            <p><strong>Tech Used:</strong> React,CSS,JS</p>
            <a href="https://meek-cendol-65b827.netlify.app/" className="project-btn">View Project</a>
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
            <a href="https://dazzling-scone-f21033.netlify.app/" className="project-btn">View Project</a>
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

            <a href="https://hasty-ai-chat.netlify.app/" className="project-btn">View Project</a>
          </div>
        </div>


      </div>
    </section>
  );
}