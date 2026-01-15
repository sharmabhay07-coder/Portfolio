import { Routes, Route } from "react-router-dom"
import Hero from "./Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
