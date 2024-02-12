import React from "react";

const CustomButton = ({
  title,
  isGradient,
  varient,
  url,
  customStyles,
  isVisible,
}) => {
  return (
    <div className="inline-flex items-center">
      {isVisible && (
        <>
          {varient === "button" ? (
            <button
              className={`font-inter font-semibold text-base w-full py-[10px] px-6 rounded overflow-hidden border border-solid border-light-yellow
relative duration-300 ease-linear after:absolute after:w-full after:h-0 after:top-0 after:left-0 after:z-[-1] after:duration-300 after:ease-linear hover:after:h-full hover:after:bottom-0 leading-140 inline-block z-10
        ${
          isGradient
            ? " bg-gradient text-white hover:border border-transparent after:bg-black   "
            : " text-white opacity-90  bg-black hover:border-transparent after:bg-gradient"
        } ${customStyles && customStyles}`}>
              {title}
            </button>
          ) : (
            <a
              href={`${url}`}
              aria-label=" botton for link or path"
              className={`font-inter font-semibold text-base w-full py-[10px] px-6 rounded overflow-hidden border border-solid border-light-yellow
relative duration-300 ease-linear after:absolute after:w-full after:h-0 after:top-0 after:left-0 after:z-[-1] after:duration-300 after:ease-linear hover:after:h-full hover:after:bottom-0 leading-140 inline-block z-10
        ${
          isGradient
            ? " bg-gradient  text-white hover:border border-transparent after:bg-black   "
            : " text-white opacity-90  bg-black hover:border-transparent after:bg-gradient"
        } ${customStyles && customStyles}`}>
              {title}
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default CustomButton;
