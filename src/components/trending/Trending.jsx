import React from "react";
import { CommonLeftArrowIcon, CommonRightArrowIcon } from "../common/Icons";

const Trending = () => {
  return (
    <>
      <section>
        <div className="py-12 sm:pb-28 md:pb-32 lg:pb-36 relative min-[1440px]:pl-4">
          <div className="flex justify-between sm:pb-[30px] pb-4 pt-[26px] px-3 sm:px-0">
            <div className="flex ps-3 items-center gap-[10px]">
              adsf
              <h3 className="font-poppins font-medium text-white text-xxl">
                Trading
              </h3>
            </div>
            {/* SLIDER ARROWS  */}
            <div className="justify-center gap-10 xl:gap-0 pt-10 xl:pt-0 flex">
              <button
                aria-label="Slider Arrow"
                // onClick={handleLeftArrow}
                className={`common-arrow left-arrow w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:translate-y-1/2 xl:absolute top-1/2 left-[-5%] `}
              >
                <CommonLeftArrowIcon />
              </button>
              <button
                aria-label="Slider Arrow"
                // onClick={handleRightArrow}
                className={`common-arrow right-arrow  w-10 h-10 rounded-[50%] duration-300 ease-in-out border border-solid border-[#f2cd75] hover:border-transparent xl:translate-y-1/2 xl:absolute top-1/2 right-[-5%] `}
              >
                <CommonRightArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
