import React, { useState } from "react";
import { FaqArrowIcon } from "./Icons";
import xml from "../../assets/images/svg/tap-recorder-icon.svg";
import { faqList } from "./Helper";

const Faqs = ({ showSidebar }) => {
  // State to track the active accordion index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to toggle accordion based on index
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div
        className=" relative pb-20 sm:py-20 z-[10] overflow-hidden"
        id="faqs-list"
      >
        <span className=" bg-gradient w-[181px] h-[181px] rounded-[343px] blur-[131px] absolute right-[-50px] top-[40%] z-10"></span>
        {/* Right-top icon */}
        <span className=" absolute right-0 top-0 pe-14 hidden lg:block movieIcon_animation">
          <img src={xml} alt="xml take shoot" />
        </span>
        {/* Left-bottom icon */}
        <span className=" absolute left-0 bottom-0 ps-10 hidden lg:block z-[2] movieIcon_animation !delay-900">
          <img src={xml} alt="xml take shoot" />
        </span>
        <div className="container  max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto relative z-10">
          {/* FAQ Section Title */}
          <h2 className="font-poppins font-semibold text-3xl text-white mb-0 text-center pb-4 sm:pb-12">
            FAQ<span className="common-text-gradient">s</span>
          </h2>
          <div className="flex  justify-center flex-wrap">
            <div
              className={`md:w-9/12  ${
                showSidebar ? " lg:w-10/12" : " lg:w-8/12"
              }`}
            >
              {/* FAQ Items */}
              {faqList.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className="faq-wrapper text-white transition ease-in-out duration-300  my-3 md:my-2 py-2 sm:py-3 lg:py-2 bg-transparent mb-0 cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    {/* FAQ Item Header */}
                    <div className="flex justify-between items-center">
                      <h3
                        className={`${
                          activeIndex === index ? "common-text-gradient" : ""
                        } font-poppins flex items-start md:items-center transition ease-in-out duration-300 justify-between text-[15px] sm:text-base xl:text-2xl text-white font-semibold cursor-pointer `}
                      >
                        {obj.title}
                      </h3>
                      {/* FAQ Item Arrow Icon */}
                      <span
                        className={` transform transition-all ease-in-out duration-300 ${
                          activeIndex === index ? "rotate-180 transform " : " "
                        }`}
                      >
                        <FaqArrowIcon />
                      </span>
                    </div>
                    {/* FAQ Item Description */}
                    <div
                      className={`overflow-hidden transition-height transition-all ease-in-out duration-200 ${
                        activeIndex === index ? "h-[60px]" : "h-0"
                      }`}
                    >
                      <p className="text-[13px] md:text-base font-normal font-poppins text-gray pt-1 lg:pt-3 xs:pr-5 xl:pr-20">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
