const Footer = () => {
    return (
      <>
        <div className="relative overflow-hidden bg-gradient-to-b bg-white text-black dark:bg-black dark:text-white  w-full">
          {/* 3D animated background */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 z-0 animate-rotate3d"></div>
  
          <div className="px-12 lg:px-8 py-3 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-32 relative z-10">
            <div className="flex flex-col items-center">
              <p className="mt-4 text-blue-600 dark:text-white text-xs sm:text-sm font-semibold">
                &copy; 2024 Nilesh Singh all rights reserved
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default Footer;
