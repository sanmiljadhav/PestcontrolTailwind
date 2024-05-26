import React from "react";

export default function Numbering() {
  return (
    <div className="my-4 bg-[#f3f5f6] md:px-12 p-4 max-w-screen-2xl mx-auto">
      <div className="icons-div md:flex flex-wrap justify-evenly ">
        <div className="card w-46 flex flex-col items-center custom-icon-border-width  border-white hover:border-[#9A7AF1] rounded-full bottom-3 p-4 hover:cursor-pointer my-6">
          <h1 className="text-6xl font-bold hover:text-secondary">20+</h1>
          <p className="text-xl font-semibold hover:text-secondary ">
            Years of Experience
          </p>
        </div>

        <div className="card w-46 flex flex-col items-center custom-icon-border-width border-white bottom-3 hover:border-[#9A7AF1] rounded-full p-4 hover:cursor-pointer my-6">
        <h1 className="text-6xl font-bold hover:text-secondary">300+</h1>
          <p className="text-xl font-semibold hover:text-secondary ">
            Happy Customers
          </p>
        </div>

        <div className="card w-46 flex flex-col items-center custom-icon-border-width border-white bottom-3 hover:border-[#9A7AF1] rounded-full p-4 hover:cursor-pointer my-6">
        <h1 className="text-6xl font-bold hover:text-secondary">100+</h1>
          <p className="text-xl font-semibold hover:text-secondary ">
            Projects completed
          </p>
        </div>

        
      </div>
    </div>
  );
}
