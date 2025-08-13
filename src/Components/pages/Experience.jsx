import React from "react";
import { techs } from "../constants/experience";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b bg-white text-black dark:bg-black dark:text-white  w-full py-20 relative overflow-hidden"
    >
      {/* 3D background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 z-0 animate-rotate3d"></div>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white relative z-10">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 pt-12 inline mt-8 ">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4"> {title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
