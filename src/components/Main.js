import React from "react";
import About from "./About";
import Proyects from "./Proyects";
import Contact from "./Contact";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Presentation />
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
