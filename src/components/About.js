// src/components/About.js
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mb-28 max-w-[45rem] mx-auto text-center leading-8 md:mb-40 px-6 scroll-mt-20"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-8">About Me</h2>

      {/* Paragraphs */}
      <p className="mb-3">
        Ex ReactJS Developer at Walking Dreamz Technology with a Bachelor of Technology degree in{" "}
        <span className="font-medium">Computer Science and Data Science</span> from
        Oriental college of Technology Bhopal. I am skilled in{" "}
        <span className="font-medium">
          full-stack web development and problem solving
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          C++, JavaScript, React, Node.js, and MongoDB
        </span>
        .I am always looking to learn new technologies and enhance my skills in 
        software development.
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing Cricket, watching movies, and going to the gym. I also enjoy{" "}
      </p>
    </section>
  );
}
