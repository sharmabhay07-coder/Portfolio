import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom"
import Hero from "./Hero";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
         
          <Hero />
          
        </>
    }, {
      path: "/about",
      element: <>
        <About />
      </>,
    
    }, {
      path: "/contact",
      element: <>
        <Contact />
      </>
    }])

  
  return (
    <>
    <RouterProvider router={router}/>
    

    </>
  );
}

export default App;
