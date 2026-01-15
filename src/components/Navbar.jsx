import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo"/>

      <div className="home">
        <div className="home-a"><a href="#home">Home</a></div>
        <div className="home-a"><a href="#service">Services</a></div>
        <div className="home-a"><a href="#project">Projects</a></div>
        <div className="home-a"><a href="#about">About</a></div>
      </div>

      <div className="contact">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
