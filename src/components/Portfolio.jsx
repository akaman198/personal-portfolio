import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for front end development",
    links: {
      site: "https://github.com/akaman198/",
      github: "https://github.com/akaman198/",
    },
  },
  {
    img: project2,
    title: "Project #2",
    description: "Personal portfolio built with React and Tailwind CSS.",
    links: {
      site: "https://akaman.netlify.app/",
      github: "https://github.com/akaman198/personal-portfolio",
    },
  },
  {
    img: project3,
    title: "Project #3",
    description:
      "A Fully Responsive Financial App Landing Page with Modern UI in React with Tailwind.",
    links: {
      site: "https://zam-drop.netlify.app/",
      github: "https://github.com/akaman198/zam-drop",
    },
  },
  {
    img: project4,
    title: "Project #4",
    description: "An e-commerce platform with various featues ",
    links: {
      site: "#https://github.com/akaman198/",
      github: "#https://github.com/akaman198/",
    },
  },
  {
    img: project5,
    title: "Project #5",
    description: "A company website built using WordPress",
    links: {
      site: "https://katoya-innovations.com/",
      github: "https://github.com/akaman198/",
    },
  },
  {
    img: project6,
    title: "Project #6",
    description: "A company website built using Wordpress",
    links: {
      site: "https://mutakamwa.org/",
      github: "https://github.com/akaman198/",
    },
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className="relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row"
      id="portfolio"
    >
      <div className="glass p-6 w-full border-2 max-w-[600px]">
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <p className="text-gray-200 my-4">
          {projects[currentProject].description}
        </p>

        <div className="flex space-x-4">
          <a
            href={projects[currentProject].links.site}
            className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
          >
            View Site
          </a>
          <a
            href={projects[currentProject].links.github}
            className="px-4 py-2 bg-gray-800 text-gray-200 text2xl rounded-lg hover:bg-gray-600 transition duration-300"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>

      <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${
              currentProject === index ? "bg-slate-900" : ""
            }`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
