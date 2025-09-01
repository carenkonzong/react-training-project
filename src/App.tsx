import Hero_section from "./Portfolio components/Hero_section";
import My_projects from "./Portfolio components/My_projects";
import Navbar from "./Portfolio components/Navbar";
import Skill_section from "./Portfolio components/Skill_section";

function App() {
  return (
    <>
      <Navbar />
      <Hero_section />
      <Skill_section />
      <My_projects />
    </>
  );
}

export default App;

{
  /* import {
  Counter,
  Counter2,
  LiveTextDisplay,
  ToggleVisibility,
  ColorChanger,
} from "./components/UseState";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"; */
}

/* 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter2" element={<Counter2 />} />
        <Route path="/LiveTextDisplay" element={<LiveTextDisplay />} />
        <Route path="/ToggleVisibility" element={<ToggleVisibility />} />
        <Route path="/ColorChanger" element={<ColorChanger />} />
      </Routes>
      */
