import React from 'react'
import antsImage from '../../assets/images/antlanding.jpg'


export default function AntsProblemsComp() {

    const antProblem = {
        name: "Ants",
        type:"ants",
        pestimage: antsImage,
        description: "Ants are social insects that can cause various problems when they invade homes. They search for food and can be a nuisance due to their numbers and persistence.",
        solutions: [
          "We identify the ant species and find the source of the infestation.",
          "We use safe and effective treatment methods to eliminate the ants.",
          "We provide prevention plans to keep ants from returning.",
          "We ensure that your home remains ant-free with regular inspections."
        ]
      }

    

   
  return (
    <>
    <div className="problems-container max-w-screen-2xl mx-auto ">
      <img src={antProblem.pestimage} />
      <div className="problem-main-content px-12 my-10 ">
        <p className="text-slate-700 text-xl">
          {antProblem.description}
        </p>
      </div>

      <div className="my-4 bg-[#f3f5f6] md:px-12 p-4 max-w-screen-2xl mx-auto">
        <div className="my-10">
          <h1 className="md:text-4xl text-2xl text-center font-semibold">
            Pest Control {antProblem.type} Treatment
          </h1>

          <div className="problem-service-content">
            <p className="text-slate-700 text-xl">
              PestControl team of termite specialists ensures the protection
              of you and your property from termite damage. Here are some
              reasons to choose our Post Construction Termite Treatment:
            </p>
            <ul className=" list-disc pl-5 text-left text-slate-700 text-xl marker:text-black">

              {antProblem.solutions.map((solution, id)=>(

              
                   
                      <li key={id}>{solution}</li>

              
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>

  )
}
