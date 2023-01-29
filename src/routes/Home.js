import React from "react";
import Footer from "../components/Footer";
import Front from "../components/front";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./skills";

const Home = () => {
  return <div>
    <Front/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>

  </div>;
};

export default Home;
