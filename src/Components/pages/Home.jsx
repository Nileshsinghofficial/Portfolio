import React, { useEffect, useState } from "react";
import heroImage from "../../assets/heroimage.jpg"; // Replace with your actual image path

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const phrases = [
    "Frontend Developer",
    "UI Enthusiast",
    "Creative Coder",
    "Web Designer",
    "JavaScript Developer",
    "React Specialist",
  ];

  useEffect(() => {
    let currentPhrase = 0;
    let isDeleting = false;
    let charIndex = 0;
    let typingSpeed = 100;
    let timeout;

    function type() {
      const currentText = phrases[currentPhrase];

      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        charIndex--;
        typingSpeed = 70;
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typingSpeed = 500;
      }

      timeout = setTimeout(type, typingSpeed);
    }

    type();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      name="home"
      className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-transparent to-blue-100/20 dark:from-cyan-900/10 dark:to-blue-900/10" />

      <div className="container  mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 z-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-center lg:pl-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="text-cyan-500 dark:text-cyan-400">Nilesh Singh</span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white h-12 overflow-hidden min-w-[300px]">
            <p className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-cyan-500 animate-blink">
              {displayText}
            </p>
          </div>

          <div className="mt-8">
            <a href="#Contact">
              <button className="group relative overflow-hidden px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105">
                <span className="relative flex items-center">
                  <span className="mr-2">Hire Me</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-[250px] h-[250px] md:w-[340px] md:h-[340px]">
            {/* Animated Circles */}
            <div className="animated-circle top-0 left-0 w-full h-full"></div>
            <div className="animated-circle top-[8%] left-[8%] w-[84%] h-[84%]"></div>
            <div className="animated-circle top-[15%] left-[15%] w-[70%] h-[70%]"></div>

            {/* Glowing Image */}
            <div className="w-full h-full rounded-full border-4 border-cyan-500/30 dark:border-cyan-600/30 flex items-center justify-center glowing-image">
              <img
                src={heroImage}
                alt="Nilesh Singh Profile"
                className="w-[100%] h-[100%] rounded-full object-cover shadow-xl object-[center_TOP]"
              />
            </div>

            {/* Extra Glow Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-400/10 rounded-full filter blur-lg animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-400/10 rounded-full filter blur-lg animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Inline styles for animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { border-color: transparent }
          50% { border-color: #06b6d4 }
        }
        .animate-blink {
          animation: blink 0.75s step-end infinite;
        }
        @keyframes circular-float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        .animated-circle {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(6, 182, 212, 0.5);
          animation: circular-float 8s linear infinite;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.5); }
          50% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.8); }
          100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.5); }
        }
        .glowing-image {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
