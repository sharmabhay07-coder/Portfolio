import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo"/>

      <div className="home">
        <div className="home-a"> <Link to="/">Home</Link> </div>
        <div className="home-a"><a href="#service">Services</a></div>
        <div className="home-a"><a href="#project">Projects</a></div>
        <div className="home-a"><a href="#skills">Skills</a></div>
        <div className="home-a"><Link to="/about">About</Link></div>
      </div>

      <div className="contact">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
