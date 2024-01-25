import React from "react";
import Navbar from "../../components/Landing/Navbar";
import Home from "../../components/Landing/Home";
import About from "../../components/Landing/About";
import Courses from "../../components/Landing/Courses";
import Reviews from "../../components/Landing/Reviews";
import Contact from "../../components/Landing/Contact";
import Footer from "../../components/Landing/Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="service">
          <Courses />
        </div>

        <div id="librarian">
          <Reviews />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
