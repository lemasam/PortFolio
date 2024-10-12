import React from "react";
import { Card } from "./styles";
import { frontend, backend, otherTools } from "../../lib/hero-data";

type Props = {};

const ProfessionalSkills = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3>My Skills</h3>
      </div>
      <div className="flex gap-4 justify-between w-full">
        <div className="w-full bg-bg-gray rounded-lg p-4">
          <div className="flex gap-4 justify-center flex-wrap">
            {frontend.map((stack, index) => (
              <Card
                key={index}
                className="h-16 w-16"
                style={{ color: stack.color }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "orange")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = stack.color)
                }
              >
                {stack.icon}
              </Card>
            ))}
          </div>
        </div>
        <div className="w-full bg-bg-gray rounded-lg p-4">
          <div className="flex gap-4 justify-center flex-wrap">
            {backend.map((stack, index) => (
              <Card
                key={index}
                className="h-16 w-16"
                style={{ color: stack.color }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "orange")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = stack.color)
                }
              >
                {stack.icon}
              </Card>
            ))}
          </div>
        </div>
        <div className="w-full bg-bg-gray rounded-lg p-4">
          <div className="flex gap-4 justify-center flex-wrap">
            {otherTools.map((stack, index) => (
              <Card
                key={index}
                className="h-16 w-16"
                style={{ color: stack.color }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "orange")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = stack.color)
                }
              >
                {stack.icon}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
