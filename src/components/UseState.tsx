import { useEffect, useState } from "react";

function Counter() {
  const [age, setAge] = useState(0);

  const increment = () => setAge(age + 1);
  const decrement = () => setAge(age - 1);
  const reset = () => setAge(0);

  return (
    <>
      <div className="border border-gray-100 p-5">
        <p>Age: {age}</p>
        <button
          onClick={decrement}
          className="border rounded-2xl p-2 m-2 cursor-pointer"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="border rounded-2xl p-2 m-2 cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="border rounded-2xl p-2 m-2 cursor-pointer"
        >
          Increase
        </button>
      </div>
    </>
  );
}

function Counter2() {
  const [name, setName] = useState("Guest");

  const change = () => {
    setName("Itadori");
  };
  return (
    <>
      <div className="border border-gray-100 p-5">
        <p>Name: {name}</p>
        <button
          onClick={change}
          className="border rounded-2xl p-2 m-2 cursor-pointer"
        >
          Change
        </button>
      </div>
    </>
  );
}

function LiveTextDisplay() {
  let [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="border border-gray-100 p-5">
        <h1>Exercise 2: Live Text Display</h1>
        <input
          onChange={handleChange}
          className="border p-2"
          type="text"
          placeholder="Type Something"
        />
        <p>You typed: {text}</p>
        <p>Character count: {text.length}</p>
      </div>
    </>
  );
}

function ToggleVisibility() {
  const message = document.getElementById("messaage");
  const [isVisible, setIsVisible] = useState(true);

  const Visibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="border border-gray-100 p-5">
        <h1>Exercise 3: Toggle Visibility</h1>
        <button
          onClick={Visibility}
          className="border rounded-2xl p-2 m-2 cursor-pointer"
        >
          {isVisible ? "Hide" : "Show"} Message
        </button>
        {isVisible ? (
          <div className="bg-gray-100 p-5">This message can be toggled!</div>
        ) : (
          " "
        )}
      </div>
    </>
  );
}

function ColorChanger() {
  const [color, setColor] = useState("");

  const green = () => {
    setColor("#00FF00");
  };

  const red = () => {
    setColor("#FF0000");
  };

  const yellow = () => {
    setColor("#FFFF00");
  };

  return (
    <>
      <div
        className="border border-gray-100 p-5"
        style={{ backgroundColor: color }}
      >
        <h1>Exercise 4: Background color changer</h1>
        <button
          className="border rounded-2xl p-2 m-2 cursor-pointer"
          onClick={green}
        >
          Green
        </button>
        <button
          className="border rounded-2xl p-2 m-2 cursor-pointer"
          onClick={red}
        >
          Red
        </button>
        <button
          className="border rounded-2xl p-2 m-2 cursor-pointer"
          onClick={yellow}
        >
          Yellow
        </button>
        <h2>Current color: {color}</h2>
      </div>
    </>
  );
}

export { Counter, Counter2, LiveTextDisplay, ToggleVisibility, ColorChanger };
