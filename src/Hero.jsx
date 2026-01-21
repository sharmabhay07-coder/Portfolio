import useReveal from "./hooks/useReveal";
import heroimg from "./assets/one.jpg"
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";

export default function Hero() {
  useReveal();

  return (
    <>
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
          <p>
            Hi, I'm Abhay Sharma — a passionate web developer who loves turning
            ideas into clean, functional, and visually appealing digital experiences.
            I focus on writing simple, neat code and creating user-friendly designs that work smoothly across all
            devices.
          </p>
        </div>

        <div className="image">
          <img src={heroimg} alt="Hero"/>
        </div>
      </div>
      <Skills/>
      <Services/>
      <Projects/>
      <Footer/>
      
    </>
  );
}
