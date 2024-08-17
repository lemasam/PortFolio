import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="W-full h-3/4 flex flex-col tablet:flex-row items-center gap-12 justify-center">
      <div className="flex flex-col gap-5 w-2/5">
        <div className="flex flex-col gap-2">
          <p>Hello! I'm</p>
          <h2 className="text-orange">Catherine Vuthi</h2>
        </div>
        <h1>Full Stack Software Engineer</h1>
        <p>
          I specialize in creating visually stunning user experiences that
          prioritize both beauty and accessibility. My web products are designed
          with all users in mind, ensuring a seamless and inclusive experience
          for everyone.
        </p>
      </div>
      <div>
        {" "}
        <Image src="/bgimg.png" width={500} height={500} alt="icon" />
      </div>
    </div>
  );
};

export default Hero;
