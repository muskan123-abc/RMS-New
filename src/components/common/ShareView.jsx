import React from "react";
import { CopyLink, CrossIcon } from "../common/Icons";
import { Link } from "react-router-dom";
import {ShareList } from "./Helper";
import CustomInput from "../common/fields/CustomInput";
const ShareView = () => {
  return (
    <>
      <div className="max-w-[852px] h-[440px] rounded-[10px] flex flex-col items-center justify-center mx-auto bg-common-bg-image placeholder: bg-fixed bg-cover bg-black py-12 px-12 relative">
        <span className="absolute top-5 end-5 cursor-pointer ">
          <CrossIcon />
        </span>
        <div className="flex gap-[22px]">
          {ShareList.map((obj, index) => {
            return (
              <div className="flex flex-col items-center " key={index}>
                <Link to={obj.link}>{obj.icon}</Link>
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