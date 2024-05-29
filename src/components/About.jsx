import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project7.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiMongodb,
  DiBootstrap,
  DiGitBranch,
} from "react-icons/di";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
        <DiHtml5 className="text-orange-600" />
        <DiCss3 className="text-blue-600" />
        <DiSass className="text-pink-600" />
        <DiBootstrap className="text-purple-600" />
        <DiJavascript1 className="text-yellow-500" />
        <DiReact className="text-blue-500" />
        <DiNodejsSmall className="text-green-500" />
      </div>

      <div className="relative group">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={project1}
            alt="project1"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
