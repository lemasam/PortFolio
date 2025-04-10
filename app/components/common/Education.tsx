import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWebsite } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3>My Education</h3>
      </div>
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1b1b1c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1b1b1c" }}
          date="Februry 2024 - November 2024"
          iconStyle={{ background: "#fe930e", color: "#fff" }}
          icon={<FaLaptopCode />}
          visible={true}
        >
          <h4 className="vertical-timeline-element-title text-white">
            Full Stack Software Engineer
          </h4>
          <p className="vertical-timeline-element-subtitle">Moringa School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1b1b1c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1b1b1c" }}
          date="September 2015 - December 2017"
          iconStyle={{ background: "#fe930e", color: "#fff" }}
          icon={<FaGraduationCap />}
          visible={true}
        >
          <h4 className="vertical-timeline-element-title">
            Diploma in Information Technology
          </h4>
          <p>Meru University of Science & Technology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
