import React from "react";
import { CrossIcon } from "../common/Icons";
import { Link } from "react-router-dom";
import { CopyLink, ShareList } from "./Helper";
import CustomInput from "../common/fields/CustomInput";
const ShareView = ({ setPopupVisibility }) => {
  return (
    <>
      <div className="w-full  max-w-[852px]  rounded-[10px] flex flex-col items-center justify-center mx-auto bg-common-bg-image placeholder: bg-fixed bg-cover bg-black py-10 md:py-24 lg:py-32 px-8 md:px-12 relative z-[100]">
        <span
          className="absolute top-3 sm:top-5 end-3 sm:end-5 cursor-pointer "
          onClick={() => setPopupVisibility(false)}>
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
            placeholder="https:://rms.comvrnb;jb;bnfkjlbkjlfndbkjrenbrkj?ebner.kjb=erklj"
            buttonIcon={<CopyLink />}
            isButtonVisible={true}
            customStylesInput="!w-full placeholder:text-white/70 placeholder:font-poppins"
            customStyles="pe-14"
            isBgGradientHidden={true}
            customStylesButton="me-2"
          />
        </div>
      </div>
    </>
  );
};
export default ShareView;
