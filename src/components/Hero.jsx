import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250] mx-auto mb-8 md:mb-32 mt-14">
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-6xl text-3xl tracking-tight">
          HEY, I AM <br />
          <span className="text-blue-200">AKAMAN</span> <br />
          <TypeAnimation
            sequence={[
              "Developer",
              1000,
              "Web Designer",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>

        <h2 className="text-gray-300">With 2+ Years of experience</h2>

        <div className="flex flex-row gap-4 mb-4 md:mb-0">
          <button className="z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl ">
            Download CV
          </button>

          <button className="z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl ">
            View Work
          </button>
        </div>
      </div>

      <img src={profilepic} className="w-[300px] md:w-[500px]" />
    </div>
  );
};

export default Hero;
