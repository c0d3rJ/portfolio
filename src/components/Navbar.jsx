// src/components/Navbar.jsx
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import avatar from "../components/avatar.svg";


export default function Navbar() {
    return (
        <header className="dark:bg-gray-800 bg-gray-200 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-large ">
                <div className="title-font font-medium text-white mb-4 md:mb-0">

                    <a href="#about" className=" text-2xl">
                        <img
                            className="rounded-full"
                            src={avatar}
                            alt="c0d3rJ"
                            style={{ maxWidth: "100px" }}
                        />
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-700 flex flex-wrap items-center text-base md:justify-center md:text-xl">
                    <a href="#projects" className="mr-5 hover:dark:text-white hover:text-gray-500">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:dark:text-white hover:text-gray-500">
                        Skills
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center dark:bg-gray-800 bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:dark:bg-gray-700 hover:bg-gray-200 hover:shadow-lg hover:border-gray-300 rounded text-base mt-4 md:mt-0 md:text-xl">
                    Contact Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}