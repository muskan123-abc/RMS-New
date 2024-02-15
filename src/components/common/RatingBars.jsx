import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { formatNumber, ratingStars } from "../../utils/CommonFunction";
const RatingBars = (props) => {
  //USR FOR RATING PROGRESSBAR
  const [ref, inView] = useInView({});
  const [showTabs, setShowTabs] = useState("myaccount");

  //IMPORT STATE VALUE FROM PROVIDER
  //   const { setShowTabs } = useStateProvider();

  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  useEffect(() => {
    if (inView) {
      setAnimationsTriggered(true);
    }
  }, [inView]);

  return (
    <div className={`flex flex-col ${props.flexStructure}`}>
      <div className={props.ratingWidth}>
        <h2 className="font-poppins font-bold text-[35px] md:text-[45px] lg:text-[50px] xl:text-[64px] text-white mb-0 pb-[6px]">
          4.3
        </h2>
        <div className="flex gap-1">{ratingStars(4)}</div>
        <p className=" font-poppins font-normal text-base text-[#B3B2B2] mb-0 mt-3">
          {formatNumber(1400)} reviews
        </p>
      </div>
      <div ref={ref} className="lg:me-5 w-full">
        <div
          className={`max-w-[463px] lg:max-w-[100%] ${props.ratingBarsWidth}`}>
          <div className="flex items-center mt-5 w-full justify-between">
            <h6 className="font-poppins font-normal text-base text-[#B3B2B1]">
              01
            </h6>
            <div className="w-full rounded-full h-2 ms-7 bg-[#333333]">
              <div
                className={`${
                  animationsTriggered ? "w-[88%]" : "w-[0]"
                } h-2 rounded-full bg-gradient  transition-all delay-100 duration-500`}></div>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-2 justify-between">
            <h6 className="font-poppins font-normal text-base text-[#B3B2B1]">
              02
            </h6>
            <div className="w-full rounded-full h-2 ms-6 bg-[#333333]">
              <div
                className={`${
                  animationsTriggered ? "w-[63%]" : "w-[0]"
                } h-2 rounded-full bg-gradient transition-all delay-200 duration-[600]`}></div>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-2 justify-between">
            <h6 className="font-poppins font-normal text-base text-[#B3B2B1]">
              03
            </h6>
            <div className="w-full rounded-full h-2 ms-6 bg-[#333333]">
              <div
                className={`${
                  animationsTriggered ? "w-[35%]" : "w-[0]"
                } h-2 rounded-full bg-gradient transition-all delay-300 duration-[700] `}></div>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-2 justify-between">
            <h6 className="font-poppins font-normal text-base text-[#B3B2B1]">
              04
            </h6>
            <div className="w-full rounded-full h-2 ms-6 bg-[#333333]">
              <div
                className={`${
                  animationsTriggered ? "w-[78%]" : "w-[0]"
                } h-2 rounded-full bg-gradient transition-all delay-[400] duration-[800] `}></div>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-2 justify-between">
            <h6 className="font-poppins font-normal text-base text-[#B3B2B1]">
              05
            </h6>
            <div className="w-full rounded-full h-2 ms-6 bg-[#333333]">
              <div
                className={`${
                  animationsTriggered ? "w-[15%]" : "w-[0]"
                } h-2 rounded-full bg-gradient transition-all delay-[600] duration-[900]`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingBars;
