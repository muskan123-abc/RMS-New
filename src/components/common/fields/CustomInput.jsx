import React from "react";
import { SearchIcon } from "../Icons";

const CustomInput = ({
  id,
  type,
  placeholder,
  buttonIcon,
  customStyles,
  customStylesInput,
  customStylesButton,
  isButtonVisible,
  handleInputChange,
  value,
<<<<<<< HEAD
  errTitle,
  errVisible,
  parentWidth,
  isBgGradientHidden,
=======
  isBgGradientHidden,
  parentWidth,
>>>>>>> fcd29879dc89f1e48e83546b5e8a753970b859f2
}) => {
  return (
    <div className={`${parentWidth && parentWidth} flex flex-col`}>
      <label
        htmlFor={id ? id : "defaultId"}
        className={`border border-solid border-white border-opacity-50 rounded-[127px] md:flex items-center justify-between ps-3 relative inline-block py-[2px] ${
          customStyles && customStyles
        }`}>
        <input
          required
          id={id ? id : "defaultId"}
          className={`relative z-10 placeholder:text-white placeholder:text-sm placeholder:font-normal font-poppins text-sm font-normal text-white bg-transparent p-2 px-3 lg:p-3 outline-none ${
            customStylesInput && customStylesInput
          }`}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : "Search"}
          onChange={handleInputChange && handleInputChange}
          value={value}
        />
        {isButtonVisible && (
          <button
            type="submit"
            aria-label="Search"
<<<<<<< HEAD
            className={`w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] rounded-[50%] p-2 flex justify-center items-center cursor-pointer ${
              isBgGradientHidden ? "" : "bg-gradient"
            } absolute top-1/2 right-0 -translate-y-1/2  z-0  ${
=======
            className={`w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] rounded-[50%] p-2 flex justify-center items-center cursor-pointer ${ isBgGradientHidden ?"":"bg-gradient"} absolute top-1/2 right-0 -translate-y-1/2  z-0  ${
>>>>>>> fcd29879dc89f1e48e83546b5e8a753970b859f2
              customStylesButton && customStylesButton
            }`}>
            {buttonIcon ? buttonIcon : <SearchIcon />}
          </button>
        )}
      </label>
    </div>
  );
};

export default CustomInput;
