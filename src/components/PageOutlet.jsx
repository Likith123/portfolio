import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Navbar from "./Navbar";

function PageOutlet() {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  pathname = pathname.slice(1);

  // function scrollToSection(sectionId) {
  useEffect(() => {
    if (pathname) {
      navigate(`${pathname}`); // Update URL with section ID
      const element = document.getElementById(pathname);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", duration: 500 });
      }
    } else {
      window.scroll({
        top: 0,
        behavior: "smooth",
        duration: 500,
      });
    }
  }, [navigate, pathname]);

  return (
    <>
      <Navbar />
      <main className="bg-primary-100 px-32">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default PageOutlet;
