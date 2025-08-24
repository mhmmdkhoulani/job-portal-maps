import React from "react";
import "./style.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import Vacancies from "./components/Vacancies";
import Positions from "./components/Positions";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vacancies />
      <Positions />
    </>
  );
}

export default App;
