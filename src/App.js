

import React from "react";
import Typical from 'react-typical'

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <main className="text-gray-400 bg-gradient-to-b from-gray-900 to-gray-600 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </main>
  );
}

export default App;
