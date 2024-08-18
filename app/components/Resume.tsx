"use client";

import React from "react";
import { Card } from "./common/styles";

type Props = {};

const Resume = (props: Props) => {
  return (
    <div
      className="bg-bg-dark py-10 tablet:py-28 px-5 tablet:px-16 flex flex-col gap-12"
      id="resume"
    >
      <div className="flex flex-col gap-4 w-full">
        <h6>Resume</h6>
        <div>
          <h1 className="capitalize">Why hire me?</h1>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 flex flex-col gap-8">
          <Card className="w-3/4 px-4 py-3">About Me</Card>
          <Card className="w-3/4 px-4 py-3 text-left">Education</Card>
          <Card className="w-3/4 px-4 py-3">Experience</Card>
          <Card className="w-3/4 px-4 py-3">Professional Skills</Card>
        </div>
        <div>Right</div>
      </div>
    </div>
  );
};

export default Resume;
