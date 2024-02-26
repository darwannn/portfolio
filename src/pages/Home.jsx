import React from "react";

import Jumbotron from "../components/Jumbotron";
import About from "../pages/About";
import Projects from "../pages/Projects";

import Contact from "../pages/Contact";


function Home() {
  return (
    <>
      <Jumbotron  />
      <About standalone={false} />
      <Projects standalone={false} />
      <Contact />
    </>
  );
}

export default Home;
