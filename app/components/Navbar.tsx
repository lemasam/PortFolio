"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdMenu } from "react-icons/md";
import { Card } from "./common/styles";

type Props = {};

const menus = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Resume",
    link: "#resume",
  },
  {
    title: "Portfolio",
    link: "#",
  },
  // {
  //     title: 'Testimonials',
  //     link: '#'
  // },
  // {
  //     title: 'Clients',
  //     link: '#'
  // },
  {
    title: "Blog",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
];

const Navbar = (props: Props) => {
  return (
    <div className="flex flex-row w-full items-center justify-between px-8 py-4 sticky top-0 bg-bg-dark">
      <div>
        <Image src="/icon.png" width={50} height={50} alt="logo" />
      </div>
      <div className="hidden tablet:flex flex-row gap-5 text-sm">
        {menus.map((menu, index) => (
          <Link
            href={menu.link}
            key={index}
            className={`hover:text-orange ${
              menu.title === "Home"
                ? "text-orange font-bold"
                : "hover:text-orange"
            }`}
          >
            {menu.title}
          </Link>
        ))}
      </div>
      <Card className="w-12 h-12 text-orange">
        <MdMenu size={30} className="cursor-pointer" />
      </Card>
    </div>
  );
};

export default Navbar;
