import React, { useEffect, useState } from "react";
import { SubscriptionIcon } from "../common/icons/sidebar/SideBar";
import CustomInput from "../common/fields/CustomInput";
import Faqs from "../common/Faqs";
import SubscriptionChannels from "./SubscriptionChannels";
import SubscribedVideos from "./SubscribedVideos";
import Footer from "../common/Footer";
const Subscription = ({ showSidebar ,scrollToTop}) => {
  const [showData, setShowData] = useState(); //OPEN SIDEBAR

  // OVERFLOW HIDDEN WHEN SIDEBAR OPEN
  useEffect(() => {
    if (showData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showData]);
  // OVERLAY BEHIND SIDEBAR
  const overLayHidden = () => {
    setShowData(!showData);
  };
  return (
    <>
      <div className="bg-common-bg-image bg-fixed  bg-cover relative pt-20 ">
        <div className="w-full h-[50px] absolute bottom-0 left-0"></div>
        <div
          className={`container mx-auto pb-16 px-4 md:px-6 pt-5 ${showSidebar
              ? " custom-2xl:max-w-[790px] custom-3xl:max-w-[870px]"
              : "max-w-[1140px] 2xl:max-w-[1320px]"
            }`}>
          <div className="flex justify-between sm:items-center pb-5 md:pb-8 w-full sm:flex-row flex-col gap-4">
            <h2 className="font-poppins font-medium text-white text-xxl flex items-center gap-3 SubscriptionIcon_size">
              <SubscriptionIcon /> Subscription
            </h2>
            <CustomInput
              placeholder="Search"
              customStyles="w-full pe-14"
              customStylesInput="w-full  max-w-[435px]"
              isButtonVisible={true}
              parentWidth="w-full sm:max-w-[435px]"
            />
          </div>
          <SubscriptionChannels />
          <SubscribedVideos scrollToTop={scrollToTop} />
        </div>
        <div
          onClick={overLayHidden}
          className={` fixed inset-0 min-h-full z-[99] backdrop-blur-[6px] cursor-pointer ${showData ? "w-[100%] " : "hidden"
            }`}></div>
        <div className="sm:pt-[60px] pt-5">
          <Faqs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Subscription;
