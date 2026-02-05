import useReveal from "./hooks/useReveal";
import heroimg from "./assets/one.jpg"
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Publiclayout from "./components/Publiclayout";

export default function Hero() {
  useReveal();

  return (
    <>
      <Publiclayout>
        <div className="main" id="home">
          <div className="icons">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" />
            <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" />
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" />
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" />
          </div>

          <div className="text">
            <h2>
              Hi, I am <span className="highlight">Abhay Sharma</span>
            </h2>

            <h3 style={{ color: "#bec3ea", marginBottom: "15px" }}>
              Frontend / React Developer
            </h3>

            <p>
              I build clean, responsive, and user-focused web interfaces using
              HTML, CSS, JavaScript, and React.
              I enjoy turning ideas into real, working products and continuously
              improving my frontend skills through hands-on projects.
            </p>

            <a href="#project" className="project-btn">
              View My Projects
            </a>
          </div>

          <div className="image">
            <img src={heroimg} alt="Hero" />
          </div>
        </div>
        <Skills />
        <Services />
        <Projects />
      </Publiclayout>

    </>
  );
}
