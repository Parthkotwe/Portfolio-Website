import React, { useEffect, useState } from "react";
import { personalData } from "../data/data";
import { Link } from "react-scroll";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  // Word flipping effect
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % personalData.role.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="pt-80 mb-60 md:pt-0 md:mb-10 lg:pt-10  h-screen  flex flex-col justify-center items-center text-center px-6"
    >
      {/* Profile Pic */}
      <div className="relative">
        <img
          src={personalData.profilePic}
          alt="Profile"
          className="h-28 w-28 object-cover shadow-xl rounded-full border-[6px] border-white"
        />
        <span className="absolute bottom-0 right-0 text-3xl">👋</span>
      </div>

      {/* Heading */}
      <div className="mt-6 text-2xl sm:text-4xl font-medium leading-relaxed space-y-2">
        <p>
          <span className="font-bold">
            Hello, I&apos;m {personalData.name}.
          </span>{" "}
          I&apos;m an{" "}
          <span className="font-bold text-black">
            {personalData.role[wordIndex]}
          </span>
        </p>
        <p>
          with <span className="font-bold">{personalData.experience}</span> of
          experience. I enjoy building
        </p>
        <p>
          <span className="italic">websites</span>. My focus is{" "}
          <span className="underline">{personalData.focus}</span>.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer hover:scale-105 hover:bg-gray-950 transition"
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href={personalData.resume}
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full border border-black/10 hover:scale-105 hover:bg-gray-200 transition"
        >
          Download CV <HiDownload className="opacity-60" />
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex gap-4 justify-center">
        <a
          href={personalData.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group bg-white p-3 rounded-full border border-black/10 hover:scale-110 hover:bg-gray-200 transition"
        >
          <BsLinkedin className="text-2xl text-blue-600" />
        </a>

        <a
          href={personalData.github}
          target="_blank"
          rel="noreferrer"
          className="group bg-white p-3 rounded-full border border-black/10 hover:scale-110 hover:bg-gray-200 transition"
        >
          <FaGithubSquare className="text-2xl text-gray-800" />
        </a>
      </div>
    </section>
  );
}
