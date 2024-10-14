//import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
//import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  //    <main className="text-gray-400 bg-gray-900 body-font  min-h-screen">
  return (
    <main className="text-gray-400 bg-gray-900 body-font  min-h-screen">
      <Navbar />
      <About />
      <Projects />
      <Experience></Experience>
      <Skills />
    </main>
  );
}

export default App;
