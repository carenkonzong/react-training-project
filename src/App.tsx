import Card_parent from "./Birth declaration components/Card_parent";
import Dashboard_navbar from "./Birth declaration components/Dashboard_banner";
import Declaration_Card from "./Birth declaration components/Declaration_Card";

function App() {
  return (
    <>
      <Dashboard_navbar />
      <Card_parent />
      <Declaration_Card
        id="JKW4URKN4"
        firstName="Emma"
        lastName="Doe"
        birthDate="1/15/2024"
        status="Submitted"
      />
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
