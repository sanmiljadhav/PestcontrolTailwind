import React, { useState } from "react";

export default function Numbering() {
  
  const obj = {years:20, customers:300, projects:100}
  const [numbering,setNumbering] = useState(obj);

  // console.log('Years are',years)


  // const handleIncrement = (data) =>{
  //   if(data == "years"){
  //     years+=1;
  //     setState(prevState => ({
  //       ...prevState,
  //       years: years
  //   }));
      

  //   }else if(data == "customers"){

  //   }else{

  //   }

  // }


  return (
    <div className="my-4 bg-[#f3f5f6] md:px-12 p-4 max-w-screen-2xl mx-auto">
      <div className="icons-div md:flex flex-wrap justify-evenly ">
        <div className="card w-46 flex flex-col items-center custom-icon-border-width  border-white hover:border-[#9A7AF1] rounded-full bottom-3 p-4 hover:cursor-pointer my-6">
          <h1 className="text-6xl font-bold hover:text-secondary">{numbering.years}<span>+</span></h1>
          <p className="text-xl font-semibold hover:text-secondary ">
            Years of Experience
          </p>
        </div>

        <div className="card w-46 flex flex-col items-center custom-icon-border-width border-white bottom-3 hover:border-[#9A7AF1] rounded-full p-4 hover:cursor-pointer my-6">
        <h1 className="text-6xl font-bold hover:text-secondary">{numbering.customers}<span>+</span></h1>
          <p className="text-xl font-semibold hover:text-secondary ">
            Happy Customers
          </p>
        </div>

        <div className="card w-46 flex flex-col items-center custom-icon-border-width border-white bottom-3 hover:border-[#9A7AF1] rounded-full p-4 hover:cursor-pointer my-6">
        <h1 className="text-6xl font-bold hover:text-secondary">{numbering.projects}<span>+</span></h1>
          <p className="text-xl font-semibold hover:text-secondary ">
            Projects completed
          </p>
        </div>

        
      </div>
     
    </div>
  );
}
