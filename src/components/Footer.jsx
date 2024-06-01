import React from "react";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1040px] mx-auto flex justify-between p-6 md:p-10 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">akaman</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="">
            <FaGithubSquare />
          </a>
          <a href="">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@ 2024 akaman</p>
    </div>
  );
};

export default Footer;
