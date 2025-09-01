import logo from "../logo/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-row justify-around mt-5">
        <div>
          <img src={logo} alt="logo" className="w-10" />
        </div>
        <button className="text-4xl font-mono">My Mini Projects</button>
        <button className="border px-5 rounded-4xl bg-black text-white">
          Get Started
        </button>
      </div>
      <div className="flex justify-center mt-15">
        <div className="w-75 flex flex-col p-5 ">
          <Link to="/Counter" className="p-2.5 border text-center">
            Counter
          </Link>
          <Link to="/Counter2" className="p-2.5 border text-center">
            Counter 2
          </Link>
          <Link to="/LiveTextDisplay" className="p-2.5 border text-center">
            LiveTextDisplay
          </Link>
          <Link to="/ToggleVisibility" className="p-2.5 border text-center">
            ToggleVisibility
          </Link>
          <Link to="/ColorChanger" className="p-2.5 border text-center">
            ColorChanger
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
