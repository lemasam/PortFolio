import React from "react";
import { Card } from "./styles";
import { frontend, backend, otherTools } from "../../lib/hero-data";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

type Props = {};
const contentStyle = { width: "auto" };

const ProfessionalSkills = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3>My Skills</h3>
      </div>
      <div className="flex flex-col laptop:flex-row gap-4 justify-between w-full">
        {/* Frontend skills */}
        <div className="w-full bg-bg-gray rounded-lg p-4">
          <div className="flex gap-4 justify-center flex-wrap">
            {frontend.map((stack) => (
              <Popup
                key={stack.id}
                trigger={(open) => (
                  <Card
                    className="h-16 w-16"
                    style={{ color: stack.color }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "orange")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = stack.color)
                    }
                  >
                    {stack.icon}
                  </Card>
                )}
                position="top center"
                closeOnDocumentClick
                on={["hover", "focus"]}
                {...{ contentStyle }}
              >
                <span className="text-bg-dark text-sm">{stack.title}</span>
              </Popup>
            ))}
          </div>
        </div>

        {/* Backend skills */}
        <div className="w-full bg-bg-gray rounded-lg p-4">
          <div className="flex gap-4 justify-center flex-wrap">
            {backend.map((stack) => (
              <Popup
                key={stack.id}
                trigger={(open) => (
                  <Card
                    className="h-16 w-16"
                    style={{ color: stack.color }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "orange")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = stack.color)
                    }
                  >
                    {stack.icon}
                  </Card>
                )}
                position="top center"
                closeOnDocumentClick
                on={["hover", "focus"]}
                {...{ contentStyle }}
              >
                <span className="text-bg-dark text-sm">{stack.title}</span>
              </Popup>
            ))}
          </div>
        </div>

        {/* Other tools */}
        <div className="w-full bg-bg-gray rounded-lg p-4">
          <div className="flex gap-4 justify-center flex-wrap">
            {otherTools.map((stack) => (
              <Popup
                key={stack.id}
                trigger={(open) => (
                  <Card
                    className="h-16 w-16"
                    style={{ color: stack.color }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "orange")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = stack.color)
                    }
                  >
                    {stack.icon}
                  </Card>
                )}
                position="top center"
                closeOnDocumentClick
                on={["hover", "focus"]}
                {...{ contentStyle }}
              >
                <span className="text-bg-dark text-sm">{stack.title}</span>
              </Popup>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;
