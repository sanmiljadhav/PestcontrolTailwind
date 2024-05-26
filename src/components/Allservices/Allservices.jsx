import React from "react";
import pestControlImgOne from '../../assets/images/pest-clean-services-one.jpg'
import './allservices.css'

export default function Allservices() {
  return (
    <div className="services-container max-w-screen-2xl mx-auto ">
        <img src={pestControlImgOne} className="all-services-main-img"/>
      <div className="text-center my-8">
        <h1 className="md:text-4xl text-2xl text-center font-semibold">
          Our Services
        </h1>
        <p className="text-slate-700 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          illum assumenda laudantium et necessitatibus eum fugit odio enim
          aliquid ipsam!
        </p>
      </div>

      <div className="cards-container grid lg:grid-cols-4 md:grid-cols-2 gap-20 px-[40px] pb-[20px] ">
        <div className="why-choose-us-card text-center shadow-lg hover:bg-secondary hover:text-white rounded-lg cursor-pointer">
          <h1 className="text-2xl font-semibold py-2">General Pest Control</h1>
          <p className="text-slate-700 py-2 text-xl hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nostrum doloribus culpa nihil perspiciatis, velit modi maxime libero
            eos saepe.
          </p>
          <span className="my-6 font-semibold">READ MORE...</span>
        </div>

        <div className="why-choose-us-card text-center shadow-lg hover:bg-secondary hover:text-white rounded-lg cursor-pointer">
          <h1 className="text-2xl font-semibold py-2 hover:bg-secondary rounded-lg  cursor-pointer">
            Treatment for Home
          </h1>
          <p className="text-slate-700 text-xl py-2 hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nostrum doloribus culpa nihil perspiciatis, velit modi maxime libero
            eos saepe.
          </p>
          <span className="my-6 font-semibold">READ MORE...</span>
        </div>

        <div className="why-choose-us-card text-center shadow-lg hover:bg-secondary hover:text-white rounded-lg cursor-pointer">
          <h1 className="text-2xl font-semibold py-2">
            Exclusive Pest Control
          </h1>
          <p className="text-slate-700 py-2 text-xl hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nostrum doloribus culpa nihil perspiciatis, velit modi maxime libero
            eos saepe.
          </p>
          <span className="my-6 font-semibold">READ MORE...</span>
        </div>

        <div className="why-choose-us-card text-center shadow-lg hover:bg-secondary hover:text-white rounded-lg cursor-pointer">
          <h1 className="text-2xl font-semibold py-2">Treatment for Office</h1>
          <p className="text-slate-700 py-2 text-xl hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nostrum doloribus culpa nihil perspiciatis, velit modi maxime libero
            eos saepe.
          </p>
          <span className="my-6 font-semibold">READ MORE...</span>
        </div>
      </div>
    </div>
  );
}
