import React,{useState} from "react";
import rodentsImage from "../../assets/images/rodentslanding.jpg";

export default function RodentsProblemsComp() {
  const rodentProblem = {
    name: "Rodents",
    type: "rodents",
    pestimage: rodentsImage,
    description:
      "Rats in the home can pose significant health risks and cause extensive damage. They are carriers of diseases such as leptospirosis, hantavirus, and salmonella, and their droppings and urine can contaminate food and surfaces, posing serious health hazards. Rats also chew on wires, wood, and insulation, potentially leading to structural damage and electrical fires. Additionally, they can create unpleasant odors from their waste and deceased bodies, and their nocturnal activity often results in disruptive noise. Rapid breeders, rats can quickly turn a minor issue into a major infestation,",
    consequences_of_rat_problems: [
      "Health Risks:Spread of diseases like salmonella and hantavirus through droppings and urine",
      "Structural Damage:Chewing on wires, insulation, and wood, leading to costly repairs.Increased risk of electrical fires.",
      "Food Contamination:Contaminating food products, especially in businesses related to food and Potential for health code violations.",
      "Reputation Damage (for businesses):Loss of inventory and damage to your reputation.",
      "Unpleasant Environment:Unpleasant odors from droppings and urine and Noise from rats moving and nesting.",
      "Rapid Infestation Growth:Rapid breeding can turn a small problem into a major infestation quickly.",
    ],
    solutions: [
      "Our service technicians provide specialized treatments to tackle rat problems and offer advice on preventing future infestations.",
      "Our quick and safe call-out service ensures your home remains pest-free",
      "Prioritizing the safety of your family and pets.",
    ],
  };




  return (
    <>
      <div className="problems-container max-w-screen-2xl mx-auto ">
        <img src={rodentProblem.pestimage} />
        <div className="problem-main-content px-12 my-10 ">
          <p className="text-slate-700 text-xl">{rodentProblem.description}</p>
        </div>

        <div className="my-4 bg-[#f3f5f6] md:px-12 p-4 max-w-screen-2xl mx-auto">
          <div className="my-10">
            <div className="consequences">
              <h1 className="md:text-4xl text-2xl text-center font-semibold my-4">
                Consequences of Rats on your Home, Businesses
              </h1>
              <ul>
                {rodentProblem.consequences_of_rat_problems.map(
                  (item, index) => {
                    const [title, description] = item.split(":");
                    return (
                      <li key={index} className="mb-2 text-slate-700 text-xl">
                        <span className="font-bold text-black">{title}:</span>{" "}
                        {description}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="solutions md:px-12 p-4 max-w-screen-2xl mx-auto">
          <h1 className="md:text-4xl text-2xl text-center font-semibold my-4">
            Why Choose Us ?
          </h1>

          <div className="problem-service-content">
            <p className="text-slate-700 text-xl">
              Our team of Rat specialists ensures the protection of you and your
              property from Rat damage. Here are some reasons to choose our Post
              Construction Rat Treatment:
            </p>

            <ul className=" list-disc pl-5 text-left text-slate-700 text-xl marker:text-black">
              {rodentProblem.solutions.map((solution, id) => (
                <li key={id}>{solution}</li>
              ))}
            </ul>
          </div>

          
        </div>
      </div>
    </>
  );
}
