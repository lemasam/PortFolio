import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineSettings, MdOutlineWork } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3>My Experience</h3>
      </div>
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1b1b1c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1b1b1c" }}
          date="Jan 2022 - Present"
          iconStyle={{ background: "#fe930e", color: "#fff" }}
          icon={<FaCodeBranch />}
          visible={true}
        >
          <h4 className="vertical-timeline-element-title text-white">
            Network Engineer
          </h4>
          <h5 className="vertical-timeline-element-subtitle">- On site</h5>
          <p>Broadband Communication Networks Limited </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1b1b1c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1b1b1c" }}
          date="June 2018  - Dec 2021"
          iconStyle={{ background: "#fe930e", color: "#fff" }}
          icon={<FaCode />}
          visible={true}
        >
          <h4 className="vertical-timeline-element-title">
            Network Operation Center Engineer
          </h4>
          <h5 className="vertical-timeline-element-subtitle">- On Site</h5>
          <p>Broadband Communication Networks Limited</p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1b1b1c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1b1b1c" }}
          date="Oct 2020 - Sep 2021"
          iconStyle={{ background: "#fe930e", color: "#fff" }}
          icon={<MdOutlineSettings />}
          visible={true}
        >
          <h4 className="vertical-timeline-element-title">ICT Officer</h4>
          <h5 className="vertical-timeline-element-subtitle">- On-site</h5>
          <p>Milimani Law Courts - Nairobi, Kenya</p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
