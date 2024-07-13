import React, { useState } from "react";

export default function TabComponent({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto border-2 my-6">
        <div className="flex">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`p-4 cursor-pointer border-b-2 flex-1 text-xl ${
                index === activeTab
                  ? "border-white text-white bg-secondary font-semibold"
                  : "border-transparent text-black bg-[#f3f5f6]"
              }`}
              onClick={() => handleClick(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 pl-4">
              <h2 className="text-xl text-black font-bold">
                {tabs[activeTab].title}
              </h2>

              <p className="mt-2 text-slate-700 text-xl">
                {tabs[activeTab].text}
              </p>
              {tabs[activeTab].points.map((point, index) => (
                <div
                  key={index}
                  className="text-slate-700 text-xl bg-gray-300 border-4 border-white p-2"
                  onClick={() => handleClick(index)}
                >
                  {point}
                </div>
              ))}
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
