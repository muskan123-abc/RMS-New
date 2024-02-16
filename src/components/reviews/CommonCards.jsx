import React from "react";
import { reviewRatingCardsList } from "./Helper";
import { ratingStars } from "../../utils/CommonFunction";

const CommonCards = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-16 -mx-3 xl:mx-0 sm:justify-between justify-center gap-y-5">
        {reviewRatingCardsList.map((data, index) => {
          return (
            <div
              key={index}
              className={`w-full  mb-5 sm:mb-0  lg:!w-[calc(33.3%_-_13px)] sm:!w-[calc(50%_-_13px)] !w-fill !px-0`}>
              <div className=" border border-[#404040] rounded-xl py-5 sm:py-0 sm:pt-5 sm:pb-[42px] ps-4  pe-5 h-full hover:border-[#E1B862] duration-200">
                <h5 className=" font-poppins font-semibold text-base text-white mb-0">
                  {data.title}
                </h5>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className=" font-poppins font-normal text-sm text-white opacity-70 mb-0">
                    {data.date}
                  </p>
                  <span className="flex gap-1">{ratingStars(data.rating)}</span>
                </div>
                <p className=" font-poppins font-normal text-sm text-white opacity-70 mb-0 mt-6 leading-[22px]">
                  {data.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonCards;
