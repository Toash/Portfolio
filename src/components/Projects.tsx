//import React from "react";
import { projects } from "../data";
import { Divider } from "@mui/material";


export default function Projects() {
  return (
    <section id="projects" className="text-gray-400  body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects that I have built.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex-col bg-slate-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">

                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>

                <Divider></Divider>

                <h2 className="tracking-widest  font-medium text-white mb-1">
                  {project.subtitle}
                </h2>
                <p className="leading-relaxed">{project.description}</p>


              </div>
            </a>
          ))}
        </div>

        <Divider></Divider>

        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white mt-16">
          Other Noteworthy Projects
        </h1>
      </div>
    </section>
  );
}
