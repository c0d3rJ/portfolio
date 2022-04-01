// src/components/Projects.js
import {ArrowRightIcon, CodeIcon} from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import {BsGithub} from "react-icons/all";
//import {CgWebsite, BsInfo, BsInfoLg, Md1K} from "react-icons/all";
import {MdLaunch} from "react-icons/all";

export default function Projects() {
    return (
        <section id="projects" className="dark:text-gray-400 dark:bg-gray-900 bg-gray-300 body-font">
            <div className="container px-5 py-10 mx-auto  lg:px-40">
                <div className="flex flex-col w-full mb-20 text-center">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white">
                        Projects I've Worked On
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Here you can check out some of my github projects.
                    </p>
                </div>
                <div className="flex flex-wrap m-4 h-84">
                    {projects.map((project) => (
                        <div
                            /*href={project.live}*/
                            /*key={project.image}*/
                            className="sm:w-1/2 w-100 p-4 max-w-md h-84 ">
                            <div className="flex relative">
                                <div className="px-8 pt-10 pb-5 relative z-5 w-full rounded border border-gray-700 dark:bg-gray-900 bg-gray-200 h-full">
                                    <h1 className="title-font text-lg font-medium dark:text-white mb-3 text-center">
                                        {project.title}
                                    </h1>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <p className="leading-relaxed self-start overflow-y-auto min-h-full h-28">{project.description}</p>
                                    <div className="flex flex-wrap my-2 overflow-x-auto">
                                        {project.techs.map((tech)=> (
                                            <div className='py-1 pr-2'>
                                                <div className="inline-flex text-black text-sm rounded border border-gray-700 bg-green-400  py-1 px-4">
                                                    {tech.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap  pt-4 pb-2">
                                        { project.live ?
                                        <div className="">
                                            <a
                                                href={project.live}
                                                className="inline-flex hover:dark:text-white dark:text-white rounded-full border border-gray-700 hover:bg-blue-700 text-black py-2 px-2">

                                                <MdLaunch className="w-6 h-6 self-center"/>
                                            </a>
                                        </div>
                                          :
                                          <div className={" pt-0 pb-0"}></div>
                                        }
                                        { project.live ?
                                        <div className="pl-5">
                                            <a
                                                href={project.source}
                                                className="inline-flex hover:dark:text-white dark:text-white rounded-full border border-gray-700 hover:bg-blue-700 text-black py-2 px-2">

                                                <BsGithub className="w-6 h-6 self-center"/>
                                            </a>
                                        </div>
                                          :
                                          <div>
                                              <a
                                                href={project.source}
                                                className="inline-flex hover:dark:text-white dark:text-white rounded-full border border-gray-700 hover:bg-blue-700 text-black py-2 px-2">

                                                  <BsGithub className="w-6 h-6 self-center"/>
                                              </a>
                                          </div>
                                        }
                                        {/*<div className="pl-5">
                                            <a
                                                href={project.source}
                                                className="inline-flex hover:dark:text-white dark:text-white rounded-full border border-gray-700 hover:bg-blue-700 text-black py-2 px-2">

                                                <BsInfoLg className="w-6 h-6 self-center"/>
                                            </a>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}