import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom"
import Hero from "./Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
          <Navbar />
          <Hero />
          
        </>
    }, {
      path: "/about",
      element: <>
        <Navbar />
        <About />
      </>,
    
    }, {
      path: "/contact",
      element: <>
        <Navbar />
        <Contact />
      </>
    }])

  
  return (
    <>
    <RouterProvider router={router}/>
      {/* <Navbar />
      <Hero/>
      <About/>
      
      <Contact/>
      <Footer/> */}

    </>
  );
}

export default App;
