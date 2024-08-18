"use client";

import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { Card } from "./styles";

const techStack = [
  {
    icon: <DiMongodb size={30} />,
    color: "#4DB33D",
  },
  {
    icon: <SiExpress size={30} />,
    color: "#ffffff",
  },
  {
    icon: <FaReact size={30} />,
    color: "#61DBFB",
  },
  {
    icon: <FaNodeJs size={30} />,
    color: "#68A063",
  },
];

type Props = {};

const TechStack = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-1/2">
      <p className="uppercase">Tech stack</p>
      <div className="flex gap-4">
        {techStack.map((stack, index) => (
          <Card
            key={index}
            className="h-12 w-12"
            style={{ color: stack.color }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "orange")}
            onMouseLeave={(e) => (e.currentTarget.style.color = stack.color)}
          >
            {stack.icon}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
