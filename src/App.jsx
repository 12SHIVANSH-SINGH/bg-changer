import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bg, setBg] = useState("bg-black");

  const bgChange  = (color="bg-black") => {
    setBg(color);
  }
  return (
    <>
      <div className={`h-screen w-screen ${bg}`}>
        <button className="bg-red-500 p-2 m-3 rounded-xl text-amber-50 w-30 hover:m-4 hover:border-amber-500 hover:border-4 cursor-pointer active:bg-amber-500" onClick={()=> bgChange("bg-red-500")}>
          Red
        </button>
        <button className="bg-black p-2 m-3 rounded-xl text-amber-50 w-30 hover:m-4 hover:border-amber-500 hover:border-4 cursor-pointer active:bg-amber-500 " onClick={()=> bgChange("bg-black")}>
          Black
        </button>
        <button className="bg-green-500 p-2 m-3 rounded-xl text-amber-50 w-30 hover:m-4 hover:border-amber-500 hover:border-4 cursor-pointer active:bg-amber-500 " onClick={()=> bgChange("bg-green-500")}>
          Green
        </button>
        <button className="bg-blue-500 p-2 m-3 rounded-xl text-amber-50 w-30 hover:m-4 hover:border-amber-500 hover:border-4 cursor-pointer active:bg-amber-500 " onClick={()=> bgChange("bg-blue-500")}>
          Blue
        </button>
        <button className="bg-yellow-500 p-2 m-3 rounded-xl text-amber-50 w-30 hover:m-4 hover:border-amber-500 hover:border-4 cursor-pointer active:bg-amber-500 " onClick={()=> bgChange("bg-yellow-500")}>
          Yellow
        </button>
        <button className="bg-white p-2 m-3 rounded-xl text-black border-black border-1 w-30 hover:m-4 hover:border-amber-500 hover:border-4 cursor-pointer active:bg-amber-500 " onClick={()=> bgChange("bg-white")}>
          White
        </button>
      </div>
    </>
  );
}

export default App;
