"use client";

import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import { Card } from "./styles";

const socialIcons = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/catherine-vuthi-ba18aa179/",
  },
  {
    icon: <FaXTwitter />,
    url: "https://www.linkedin.com/in/catherine-vuthi-ba18aa179/",
  },
  {
    icon: <MdWhatsapp />,
    url: "https://www.linkedin.com/in/catherine-vuthi-ba18aa179/",
  },
];

type Props = {};

const SocialIcons = (props: Props) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4">
        <p className="uppercase">Connect with Me</p>
        <div className="flex gap-4">
        {socialIcons.map((social, index) => (
          <Card className="w-12 h-12" key={index}>
            <Link
              href={social.url}
              target="_blank"
            >
                {social.icon}
            </Link>
          </Card>
        ))}
        </div>
      </div>
      <div>
        <p className="uppercase">Tech stack</p>
      </div>
    </div>
  );
};

export default SocialIcons;
