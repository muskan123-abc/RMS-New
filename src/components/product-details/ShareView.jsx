import React, { useState } from "react";
import { CrossIcon } from "../common/Icons";
import { Link } from "react-router-dom";
import { CopyLink, ShareList } from "./Helper";
import CustomInput from "../common/fields/CustomInput";
const ShareView = ({ setPopupVisibility }) => {
  const [inputValue, setInputValue] = useState(
    "https:://rms.comvrnb;jb;bnfkjlbkjlfndbkjrenbrkj?ebner.kjb=erklj"
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCopyClick = () => {
    // Check if the input value is not empty
    if (inputValue) {
      // Create a temporary textarea element to perform the copy command
      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = inputValue;
      document.body.appendChild(tempTextarea);

      // Select the text inside the textarea
      tempTextarea.select();

      // Execute the copy command
      document.execCommand("copy");

      // Remove the temporary textarea
      document.body.removeChild(tempTextarea);

      // Optionally, you can give user feedback (e.g., show a tooltip, change icon color)
      alert("Copied to clipboard!");
    } else {
      // Optionally, handle the case where the input value is empty
      alert("Input value is empty!");
    }
  };
  return (
    <>
      <div className="w-full  max-w-[852px]  rounded-[10px] flex flex-col items-center justify-center mx-auto bg-common-bg-image placeholder: bg-fixed bg-cover bg-black py-10 md:py-24 lg:py-32 px-8 md:px-12 relative z-[100]">
        <span
          className="absolute top-3 sm:top-5 end-3 sm:end-5 cursor-pointer "
          onClick={() => setPopupVisibility(false)}
        >
          <CrossIcon />
        </span>
        <div className="flex flex-wrap justify-center gap-[22px]">
          {ShareList.map((obj, index) => {
            return (
              <div className="w-[73px] flex flex-col items-center" key={index}>
                <Link className="shareview_icon_hover" to={obj.link}>
                  {obj.icon}
                </Link>
                <p className="font-poppins text-sm text-center pt-2.5 text-white/70">
                  {obj.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 w-full max-w-[642px]">
          <CustomInput
            buttonIcon={<CopyLink />}
            isButtonVisible={true}
            customStylesInput="!w-full text-white/70 placeholder:font-poppins"
            customStyles="pe-14"
            isBgGradientHidden={true}
            customClick={handleCopyClick}
            customStylesButton="me-2"
            handleInputChange={handleInputChange}
            value={inputValue}
            disabledInput={true}
          />
        </div>
      </div>
    </>
  );
};
export default ShareView;
