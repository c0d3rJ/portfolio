// src/components/Projects.js
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";


export default function Projects() {
    return (
        <section id="projects" className="dark:text-gray-400 dark:bg-gray-900 bg-gray-300 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
                        Projects I've Completed
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Here you can check out some of my github projects.
                    </p>
                </div>
                <div className="flex flex-wrap m-4">
                    {projects.map((project) => (
                        <a
                            href={project.live}
                            /*key={project.image}*/
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <div className="px-8 py-10 relative z-5 w-full rounded border border-gray-700 dark:bg-gray-900 bg-gray-200">
                                    <h1 className="title-font text-lg font-medium dark:text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}