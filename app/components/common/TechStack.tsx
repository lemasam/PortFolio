"use client";

import React from "react";
import { Card } from "./styles";
import { techStack } from "../../lib/hero-data";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full laptop:w-1/2">
      <p className="uppercase">Tech stack</p>
      <div className="flex gap-4">
        {techStack.map((stack) => (
          <Card
            key={stack.id}
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
