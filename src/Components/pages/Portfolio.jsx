import React from "react";
import { ports } from "../constants/portfolio";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b bg-white text-black dark:bg-black dark:text-white py-20 relative overflow-hidden"
    >
      {/* 3D background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 z-0 animate-rotate3d"></div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {ports.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="images"
                className="rounded-md duration-200 hover:scale-105  h-48 w-full object-cover"
              />
              <div className="flex items-center justify-center ">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-cyan-600 text-white rounded-md"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-gray-700 text-white rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
