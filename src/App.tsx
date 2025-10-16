import Nd_element from "./Birth declaration components/Nd_element";
import Input from "./Birth declaration components/UI Components/Input";
import Select from "./Birth declaration components/UI Components/Select";

function App() {
  return (
    <>
      <Nd_element
        head="Child Information"
        subhead="Basic details about the child"
      >
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" attribute="First Name *" />
          <Input type="text" attribute="First Name *" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Input type="date" attribute="Date of Birth *" />
          <Select option1="Male" option2="Female" type="Gender *" />
        </div>
        <div>
          <Input
            type="text"
            attribute="Place of Birth *"
            placeholder="Hospital name or location"
          />
        </div>
      </Nd_element>

      <Nd_element head="Father Information" subhead="Details about the Father">
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" attribute="First Name *" />
          <Input type="text" attribute="First Name *" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" attribute="ID Number *" />
          <Input type="text" attribute="Occupation" placeholder="Optional" />
        </div>
      </Nd_element>

      <Nd_element head="Mother Information" subhead="Details about the Mother">
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" attribute="First Name *" />
          <Input type="text" attribute="First Name *" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" attribute="ID Number *" />
          <Input type="text" attribute="Occupation" placeholder="Optional" />
        </div>
      </Nd_element>

      <Nd_element
        head="Informant Information"
        subhead="Details about the person making this declaration"
      >
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" attribute="First Name *" />
          <Input type="text" attribute="First Name *" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Input
            type="text"
            attribute="Relationship to Child *"
            placeholder="e.g., Father, Mother, Guardian"
          />
          <Input
            type="text"
            attribute="Contact Information *"
            placeholder="Phone number or email"
          />
        </div>
        <Input
          type="text"
          attribute="Additional information"
          placeholder="Any additional information (optional)"
        />
      </Nd_element>

      {/* <Top_bar />
      <Card_parent />
      <All_declarations /> */}
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
