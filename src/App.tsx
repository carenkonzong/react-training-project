import Card_parent from "./Birth declaration components/Card_parent";
import Dashboard_navbar from "./Birth declaration components/Dashboard_banner";
import All_declarations from "./Birth declaration components/All_declarations";
import Sidebar from "./Birth declaration components/sidebar";

function App() {
  return (
    <>
      <Sidebar />

      <Card_parent />
      <All_declarations />
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
