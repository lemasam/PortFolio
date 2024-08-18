"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
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

type Props = {};

const SocialIcons = (props: Props) => {
  return (
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
  );
};

export default SocialIcons;
