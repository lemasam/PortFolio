import React from "react";

type Props = {};

const ProfessionalSkills = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3>My Skills</h3>
      </div>
      <div className="flex gap-4 justify-between w-full">
        <div className="w-full bg-bg-gray rounded-lg h-60">
        </div>
        <div className="w-full bg-bg-gray rounded-lg h-60">
        </div>
        <div className="w-full bg-bg-gray rounded-lg h-60">
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
