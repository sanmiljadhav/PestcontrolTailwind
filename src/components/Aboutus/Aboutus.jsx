import React from "react";
import manCleaning from '../../assets/images/man-cleaning.png'
import './aboutus.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Aboutus() {
  return (
    <>
      <div className="mt-28 md:px-12 p-4 max-w-screen-2xl mx-auto">
        <div className="rounded-xl md:p-9 px-4 py-9">
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8 ">

            <div className="text-div flex-1 ">

            
            <h1 className="md:text-6xl text-4xl font-bold text-primary mb-2 leading-relaxed custom-underline-about-us">About Us</h1>
            
            <p className="text-primary-200 text-xl mb-8 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitati ullamco laboris nisi
              ut aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit in voluptat velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit.
            </p>
            <div className="border-2 border-red-500 md:flex space-x-8 ">
                <div className="contact-div md:flex">
                <FaPhoneAlt className="text-2xl mr-2"/>
                <span className="text-xl font-semibold">Contact: 9309849433</span>
                </div>

                <div className="email-div  md:flex">
                <MdEmail className="text-2xl mr-2"/>
                <span className="text-xl font-semibold">Email: sanmil.jadhav0402@gmail.com</span>

                </div>
                
                
                
            </div>
            </div>

            <div className="image-div flex-1 items-center">
                <img src={manCleaning} alt="" className="h-60 w-60 md:w-80"/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
