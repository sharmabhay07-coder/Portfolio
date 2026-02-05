export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-about">
          <h3>Abhay Sharma</h3>
          <p>
            Web Developer | Designer | Tech Learner
            <br />
           Open to internships & Junior Front-end roles.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#service">Services</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: sharmabhay07@gmail.com</p>
          <p>Location: India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Abhay Sharma — All Rights Reserved.
      </div>
    </footer>
  );
}
