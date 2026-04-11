import { assets } from "@/assets/assets";
import React, { useState } from "react";
import "./../../assets/styles/Hero.scss";
import "./../../assets/styles/Animation.scss";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Offset for fixed navbar
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      // Manually set active section
      setActiveSection(`#${id}`);
    }
  };
  return (
    <div className="wrapper-home-section">
      <div className="content flex flex-col items-center justify-center text-center mt-20">
        <img
          src={assets.heroImg}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg animation-fadeindown"
        />
        <h1 className="namehead text-4xl font-bold mt-4 animation-fadeindown">
          Bishal Kumar Nath
        </h1>
        <h3 className="designation">Web Developer</h3>
        <p className="intropara font-medium mt-2 w-1/2 animation-fadeinup">
          As a passionate full stack web developer, with expertise in frontend
          and backend technologies, I thrive on building dynamic, scalable
          applications and creating seamless user experiences that drive
          real-world impact.
        </p>
        <Button
          variant="outline"
          size="secondary"
          className="mt-8 cursor-pointer animation-fadeinup"
        >
          <Link
            to="/#contact"
            onClick={() => handleScrollToSection("contact")}
            className={activeSection === "#contact" ? "active" : ""}
          >
            Contact-Me
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
