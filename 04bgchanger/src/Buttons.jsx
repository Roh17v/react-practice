import React, { useState } from "react";

function Buttons() {
  const [color,setColor] = useState("olive");
  return ( 
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="flex flex-wrap fixed bottom-12 justify-center inset-x-0 px-2 gap-3 ">
        <div className="flex flex-wrap justify-center bg-white rounded-3xl px-3 py-2 gap-3">
          <button className=" text-white rounded-3xl px-4 my-1 outline-none shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>red</button>
          <button className=" text-white rounded-3xl px-4 my-1 outline-none shadow-lg" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>green</button>
          <button className=" text-white rounded-3xl px-4 my-1 outline-none shadow-lg" style={{backgroundColor: "blue"}}onClick={() => setColor("blue")}>blue</button>
          <button className=" text-white rounded-3xl px-4 my-1 outline-none shadow-lg" style={{backgroundColor: "grey"}}onClick={() => setColor("grey")}>grey</button>
          <button className=" text-white rounded-3xl px-4 my-1 outline-none shadow-lg" style={{backgroundColor: "olive"}}onClick={() => setColor("olive")}>olive</button>
        </div>
      </div>
    </div>
   );
}

export default Buttons;