import useReveal from "../hooks/useReveal";
import Footer from "./Footer";

export default function Contact() {
  useReveal();

  return (
    <> 
    <section id="contact" className="contact-section reveal">
      <h2 className="contact-heading">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <p><strong>Mobile:</strong> 7876796381</p>
          <p><strong>Email:</strong> sharmabhay07@gmail.com</p>

          <p className="contact-note">
            Feel free to reach out for projects, collaborations, or any web
            development help!
          </p>

          <div className="contact-icons">
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            className="email-input"
          />

          <button className="contact-btn">Request Offer</button>

          <p className="contact-small-text">
            Read my <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </section>
     <Footer/>
     </>
  );
}
