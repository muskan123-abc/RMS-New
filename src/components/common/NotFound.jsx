import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  return (
    <>
      <div className="flex flex-col gap-2 sm:gap-8 2xl:gap-[120px] justify-center items-center h-[200px] sm:h-[300px] lg:h-[400px] 2xl:h-[100vh]">
        <h2 className="capitalize text-[#a97424] font-bold text-2xl sm:text-[60px] 2xl:text-[125px]">
          oops!
        </h2>
        <p className="text-white text-base sm:text-3xl 2xl:text-[80px] uppercase">
          404 - page not found
        </p>
      </div>
    </>
  );
};

export default NotFound;
