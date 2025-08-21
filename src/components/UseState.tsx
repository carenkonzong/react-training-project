import { useState } from "react";

function Counter() {
  const [age, setAge] = useState(0);

  const increment = () => setAge(age + 1);
  const decrement = () => setAge(age - 1);
  const reset = () => setAge(0);

  return (
    <>
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
      <p>Name: {name}</p>
      <button
        onClick={change}
        className="border rounded-2xl p-2 m-2 cursor-pointer"
      >
        Change
      </button>
    </>
  );
}

function LiveTextDisplay() {
  let [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text.length + 1);
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

export { Counter, Counter2, LiveTextDisplay };
