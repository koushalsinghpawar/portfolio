import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Skils from "./Components/Skils";
import Projects from "./Components/Projects";
import Contects from "./Components/Contects";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skils />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contects" element={<Contects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
