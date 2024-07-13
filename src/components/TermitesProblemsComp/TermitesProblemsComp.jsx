import React from "react";
import termites from '../../assets/images/termite-landing.jpg'

export default function TermitesProblemsComp() {

    



    const termiteProblem = 
      {
        name: "Termites",
        type: "termites",
        pestimage: termites,
        description: "Termites are insects that primarily consume dead plant matter and can digest cellulose. Subterranean termites, known as the most destructive wood pests globally, establish their colonies in the soil and typically move above ground to access wood or other  cellulose sources. These termites forage from below ground into homes, reaching up to the highest points of the roof thrust. Over time, the damage they cause can be substantial, affecting door frames, kitchen cabinets, staircases, and wooden flooring.",
        solutions: [
          "We use advanced surveying and treatment techniques to deliver the best services.",
          "Our treatment methods are both safe and approved.",
          "We provide long-term protection plans customized to your requirements.",
          "We take great care to safeguard your assets."
        ]
      }
    

  return (
    <>
      <div className="problems-container max-w-screen-2xl mx-auto ">
        <img src={termiteProblem.pestimage} />
        <div className="problem-main-content px-12 my-10 ">
          <p className="text-slate-700 text-xl">
            {termiteProblem.description}
          </p>
        </div>

        <div className="my-4 bg-[#f3f5f6] md:px-12 p-4 max-w-screen-2xl mx-auto">
          <div className="my-10">
            <h1 className="md:text-4xl text-2xl text-center font-semibold">
              Pest Control {termiteProblem.type} Treatment
            </h1>

            <div className="problem-service-content">
              <p className="text-slate-700 text-xl">
                PestControl team of termite specialists ensures the protection
                of you and your property from termite damage. Here are some
                reasons to choose our Post Construction Termite Treatment:
              </p>
              <ul className=" list-disc pl-5 text-left text-slate-700 text-xl marker:text-black">

                {termiteProblem.solutions.map((solution, id)=>(

                
                     
                        <li key={id}>{solution}</li>

                
                ))}
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
