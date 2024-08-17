"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { Card } from "./styles";

const socialIcons = [
  {
    icon: <FaLinkedinIn size={25} />,
    url: "https://www.linkedin.com/in/catherine-vuthi-ba18aa179/",
  },
  {
    icon: <FaXTwitter size={25} />,
    url: "https://www.linkedin.com/in/catherine-vuthi-ba18aa179/",
  },
  {
    icon: <MdWhatsapp size={25} />,
    url: "https://www.linkedin.com/in/catherine-vuthi-ba18aa179/",
  },
];

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

const SocialIcons = (props: Props) => {
  return (
    <div className="flex flex-col tablet:flex-row w-full gap-y-4">
      <div className="flex flex-col gap-4 w-1/2">
        <p className="uppercase">Connect with Me</p>
        <div className="flex gap-4">
          {socialIcons.map((social, index) => (
            <Card className="w-12 h-12 text-white" key={index}>
              <Link href={social.url} target="_blank">
                {social.icon}
              </Link>
            </Card>
          ))}
        </div>
      </div>
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
    </div>
  );
};

export default SocialIcons;
