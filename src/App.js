

import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



function App() {
  return (
    <main className="text-gray-500 bg-gradient-to-b from-gray-900 to-gray-600 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </main>
  );
}

export default App;
