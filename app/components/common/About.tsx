import React from "react";
import { Button, Profile } from "./styles";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-auto flex gap-10">
        <Profile className="h-36 w-36">
          <Image
            src="/profile.jpg"
            width={150}
            height={150}
            className="rounded-full"
            alt={"profile picture"}
          />
        </Profile>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-3xl pb-3">Catherine Vuthi</h3>
          <p>Full Stack Software Engineer</p>
          <div className="flex w-full gap-28">
            <div className="flex flex-col gap-5 mt-4">
              <div className="flex gap-2 items-center">
                <CiLocationOn className="text-orange" />
                <p className="text-xs">Nairobi, Kenya</p>
              </div>
              <div className="flex gap-2 items-center">
                <MdOutlineMailOutline className="text-orange" />
                <p className="text-xs">catherine.codes@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <CgWebsite className="text-orange" />
                <p className="text-xs">www.catherine.com</p>
              </div>
            </div>
            <div className="flex gap-5 flex-col mt-3">
              <p className="flex gap-2 items-center text-sm">
                <span className="text-orange text-sm font-semibold gap-3">
                  5+
                </span>
                Projects
              </p>
              <p className="flex gap-2 items-center text-xs">
                <span className="text-orange text-sm font-semibold">2+</span>
                Years of Experience
              </p>
            </div>
          </div>
          <div className="w-2/5 mt-6">
            <Button className="py-3 text-sm">Download Resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
