import useReveal from "../hooks/useReveal";
import aboutimg from "../assets/two.jpg"

export default function About() {
  useReveal();

  return (
    <section id="about" className="about-section reveal">
      <h2 className="about-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">
        <div className="about-image">
          <img
            src={aboutimg}
            alt="About"
          />
        </div>

        <div className="about-text">
          <p>
            I am a passionate front-end developer who loves creating visually
            appealing, user-friendly, and responsive websites. I focus on clean
            UI, smooth design, and modern layouts that provide a great user
            experience.
          </p>

          <p>
            I enjoy learning new technologies and improving my skills every day.
            My goal is to grow as a developer and build meaningful digital
            products that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
}
