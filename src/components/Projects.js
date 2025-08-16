// src/components/Projects.js
import React from "react";
import { projectsData } from "../data/data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 md:mb-28">Projects</h2>

      <div className="space-y-6">
        {projectsData.map((project, index) => {
          const { title, description, tags, imageUrl, linkToProject } = project;

          return (
            <div
              key={index}
              className="group mb-3 sm:mb-20  max-w-[55rem] mx-auto bg-gray-100 rounded-lg border p-6 hover:bg-gray-200 transition
                         flex flex-col lg:flex-row items-center lg:items-start gap-6"
            >
              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-2xl font-semibold lg:pt-20 text-start">{title}</h3>

                {/* Description */}
                <p className="mt-2 leading-relaxed text-gray-700 text-start">{description}</p>

                {/* Tags */}
                {tags && (
                  <ul className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                    {tags.map((tag, i) => (
                      <li
                        key={i}
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image */}
              <a
                href={linkToProject}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 w-full lg:w-1/2 h-72 sm:h-[25rem] relative block rounded-lg overflow-hidden"
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="object-cover object-top w-full h-full shadow-2xl transition group-hover:scale-[1.04]"
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
