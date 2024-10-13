"use client";

import React, { useState } from "react";
import { Card } from "./common/styles";
import Education from "./common/Education";
import Experience from "./common/Experience";
import ProfessionalSkills from "./common/ProfessionalSkills";

type Props = {};

const Resume = (props: Props) => {
  const [activeSection, setActiveSection] = useState("skills");

  const renderContent = () => {
    switch (activeSection) {
      case "skills":
        return <ProfessionalSkills />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
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
              activeSection === "skills" ? "bg-orange" : ""
            }`}
            onClick={() => setActiveSection("skills")}
          >
            Professional Skills
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
        </div>
        <div className="w-3/4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Resume;
