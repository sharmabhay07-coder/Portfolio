import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" onClick={() => { navigate("/") }} />

      {/* Hamburger Icon */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <div className={`home ${isMenuOpen ? 'mobile-open' : ''}`}>
        <div className="home-a" onClick={closeMenu}> <Link to="/">Home</Link> </div>
        <div className="home-a" onClick={closeMenu}><a href="#service">Services</a></div>
        <div className="home-a" onClick={closeMenu}><a href="#project">Projects</a></div>
        <div className="home-a" onClick={closeMenu}><a href="#skills">Skills</a></div>
        <div className="home-a" onClick={closeMenu}><Link to="/about">About</Link></div>
        
        <div className="home-a mobile-only" onClick={closeMenu}>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Desktop Contact Button */}
      <div className="contact desktop-only">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}