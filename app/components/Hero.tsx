import Image from "next/image";
import React from "react";
import SocialIcons from "./common/SocialIcons";
import TechStack from "./common/TechStack";
import { LinearGradient } from "react-text-gradients";
import { FaArrowDown } from "react-icons/fa";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col px-5 tablet:px-16 py-3 laptop:py-20">
      <div className="w-full h-full laptop:h-5/6 flex flex-col laptop:flex-row justify-center items-center">
        <div className="flex flex-col gap-5 w-full laptop:w-1/2">
          <div className="flex flex-col gap-1">
            <p>Hello! I'm Catherine,</p>
          </div>
          <h1 className="uppercase text-xl tablet:text-3xl">
            <LinearGradient
              gradient={["to right", "#fe930e , #fdba74, #ffffff"]}
            >
              Software Engineer
            </LinearGradient>
          </h1>
          <p className="text-xs tablet:pr-6">
            I specialize in creating visually stunning user experiences that
            prioritize both beauty and accessibility.
          </p>
          <div className="mt-6 flex flex-col laptop:flex-row w-full gap-y-4">
            <SocialIcons />
            <TechStack />
          </div>
        </div>
        <div className="hidden laptop:flex">
          <Image src="/bgimg.png" width={600} height={450} alt="icon" />
        </div>
      </div>
      <div className="h-20 w-10 border-2 border-white mt-20 m-auto rounded-full flex justify-center items-center animate-bounce">
        <FaArrowDown className="text-orange" />
      </div>
    </div>
  );
};

export default Hero;
