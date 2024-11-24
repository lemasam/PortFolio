"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdMenu } from "react-icons/md";
import { Card } from "./common/styles";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

type Props = {};

const contentStyle = { background: "#1b1b1c" };
const overlayStyle = { background: "#1b1b1c" };
const arrowStyle = { color: "#1b1b1c" };

const menus = [
  {
    title: "Home",
    link: "/",
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
    link: "#portfolio",
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
    link: "#blog",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const Navbar = (props: Props) => {
  return (
    <div className="flex flex-row w-full items-center justify-between px-5 tablet:px-8 py-4 bg-bg-dark border-b-2 border-bg-gray">
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
        <div className="tablet:hidden">
          <Popup
            trigger={(open) => (
              <button className="button">
                <MdMenu size={30} className="cursor-pointer" />
              </button>
            )}
            position="left top"
            closeOnDocumentClick
            on={["hover", "focus"]}
            {...{
              contentStyle,
              overlayStyle,
              arrowStyle,
            }}
          >
            <div className="flex flex-col gap-8 text-sm text-white p-3">
              {menus.map((menu, index) => (
                <Link
                  href={menu.link}
                  key={index}
                  className={`hover:text-orange  ${
                    menu.title === "Home"
                      ? "text-orange font-bold"
                      : "hover:text-orange"
                  }`}
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          </Popup>
        </div>
        <MdMenu size={30} className="cursor-pointer hidden tablet:flex" />
      </Card>
    </div>
  );
};

export default Navbar;
