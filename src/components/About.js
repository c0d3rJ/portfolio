// src/components/About.js
import React from "react";
import avatar from "../components/avatar.svg"
import Typical from 'react-typical'

import {ArrowRightIcon} from "@heroicons/react/solid";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 pb-40 lg:pt-40 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6 p-10 md:p-1 lg:p-10">
                    <img
                        className="object-cover object-center rounded-full p-4 sm:p-0 lg:p-4"
                        alt="hero"
                        src={avatar}
                    />
                </div>
                <div className="lg:flex-grow md:w-2/3 lg:pl-8 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="text-4xl md:text-7xl sm:text-7xl mb-1 font-mono dark:text-white">
                        <Typical
                            steps={[2000, 'Hello visitor', 1500, 'My name is Jonathan', 15000]}
                            wrapper="p"
                            loop={2}
                        />
                    </p>
                    <p className="mt-2 sm:text-2xl text-2xl">
                        <Typical
                            steps={[
                                9000, 'I am a junior front-end developer, an avid reader and a linux enthusiast.', 500,
                            ]}
                            wrapper="p"
                        />
                    </p>
                    <h3 className="text-4xl">
                        <br className="hidden lg:inline-block" />
                    </h3>
                    <p className="mb-8 leading-relaxed">
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex dark:text-gray-400 dark:bg-gray-800 bg-gray-300 rounded dark:border-transparent border border-gray-700  py-2 px-6 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-400 rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}