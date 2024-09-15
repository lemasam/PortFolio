"use client";

import React, { useState } from "react";
import { Card } from "./common/styles";
import About from "./common/About";
// Import other components like Education, Experience, ProfessionalSkills
import Education from "./common/Education";
import Experience from "./common/Experience";
import ProfessionalSkills from "./common/ProfessionalSkills";

type Props = {};

const Resume = (props: Props) => {
  const [activeSection, setActiveSection] = useState("about");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "skills":
        return <ProfessionalSkills />;
      default:
        return null;
    }
  };

  return (
    <div
      className="bg-bg-dark py-10 tablet:py-28 px-5 tablet:px-16 flex flex-col gap-4"
      id="resume"
    >
      <div className="flex flex-colw-full">
        <h6>Resume</h6>
      </div>
      <div className="flex">
        <div className="w-1/4 flex flex-col gap-8">
          <div>
            <h1 className="capitalize">Why hire me?</h1>
          </div>
          <Card
            className={`w-3/4 px-4 py-3 ${
              activeSection === "about" ? "bg-orange" : ""
            }`}
            onClick={() => setActiveSection("about")}
          >
            About Me
          </Card>
          <Card
            className={`w-3/4 px-4 py-3 ${
              activeSection === "education" ? "bg-orange" : ""
            }`}
            onClick={() => setActiveSection("education")}
          >
            Education
          </Card>
          <Card
            className={`w-3/4 px-4 py-3 ${
              activeSection === "experience" ? "bg-orange" : ""
            }`}
            onClick={() => setActiveSection("experience")}
          >
            Experience
          </Card>
          <Card
            className={`w-3/4 px-4 py-3 ${
              activeSection === "skills" ? "bg-orange" : ""
            }`}
            onClick={() => setActiveSection("skills")}
          >
            Professional Skills
          </Card>
        </div>
        <div className="w-2/3">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Resume;
