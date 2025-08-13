import React from "react";

const About = () => {
    return(
        <div name="about" className="w-full  bg-gradient-to-b bg-white text-black dark:bg-black dark:text-white  py-20 relative overflow-hidden">
            {/* 3D background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 z-0 animate-rotate3d"></div>

            <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full relative z-10">
                <div className="pb-8">
                    <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
                        About me
                    </p>
                </div>

                <p className="text-xl mt-20 text-white">
                    I'm Nilesh Singh, a Passionate Student Pursuing a Bachelor of Technology (B.Tech) Degree in Information Technology from Chaudhary Charan Singh University Meerut.
                    I have a Deep Interest in Exploring the Fascinating World Of Technology and Its Applications.<br /><br />
                    I am Constantly Driven to Enhance my Skills and Knowledge in Programming, Algorithms, and Software development.
                </p>

                <br />

                <p className="text-xl">
                    Looking for opportunities to collaborate, intern, or contribute to real-world projects — let’s build something awesome together!
                </p>
            </div>
        </div>
    );
}

export default About;
