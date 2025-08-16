import React from "react";
import { skillsData } from "../data/data"; // import your skills array
import { Element } from "react-scroll"; // for smooth scrolling to section

export default function Skills() {
  return (
    <Element
      name="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center md:mb-28 mx-auto px-4 pb-20"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>

      {/* Skills List */}
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 hover:bg-gray-100 transition-colors duration-200 cursor-default"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Element>
  );
}
