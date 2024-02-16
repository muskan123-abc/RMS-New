import React, { useState } from "react";
import { reviewButtons } from "./Helper";

const CommonButtons = () => {
  const [reviewButtonActive, setReviewButtonActive] = useState(0);
  return (
    <div className="flex gap-2 sm:gap-[13px] flex-wrap pb-[30px]">
      {reviewButtons.map((value, index) => {
        return (
          <button
            onClick={() => setReviewButtonActive(index)}
            key={index}
            className={`px-4 sm:px-5 transition-all duration-300 py-2.5 border rounded-md border-white border-opacity-25 text-xs sm:text-sm text-white font-poppins leading-[19px] bg-white bg-opacity-[8%] ${
              reviewButtonActive === index
                ? " bg-gradient !border-transparent"
                : "bg-transparent"
            }`}>
            {value.title}
          </button>
        );
      })}
    </div>
  );
};

export default CommonButtons;
