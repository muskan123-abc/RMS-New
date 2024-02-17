import React from "react";
import CustomButton from "../fields/button/CustomButton";
import image from "../../../assets/images/webp/robin_hood.webp";
const MoviesRatedCard = ({ title, ratingStar, description, btnText }) => {
  return (
    <>
      <div className="px-5 sm:px-10 py-[30px] bg-light-white backdrop-blur-[130px] w-full flex relative rounded-xl md:flex-row flex-col items-center gap-x-12 max-w-[1140px] mx-auto ">
        <div className="rounded-[12px_0px_12px_0px] h-[14px] min-w-[280px] bg-gradient top-0 left-1/2 absolute -translate-x-[62%] sm:after:absolute after:h-0 after:w-full after:bg-transparent after:-bottom-3 after:translate-x-[57px] after:border-b-4 after:border-dashed after:border-dark-olived-rab"></div>
        <div className="rounded-[0_12px_0_12px] h-[14px] min-w-[280px] bg-gradient bottom-0 right-0 absolute sm:after:absolute after:h-0 after:w-full after:bg-transparent after:-top-3 after:-translate-x-[57px] after:border-b-4 after:border-dashed after:border-dark-olived-rab"></div>
        <div className=" opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[326px] h-[326px] rounded-[326px] blur-[250px] bg-[linear-gradient(135deg,#F2CD75_0%,#A97424_100%)]"></div>
        <div className="min-w-[270px] rounded-lg relative w-[270px] h-[381px]  overflow-hidden border-2 border-solid border-dark-gray common-shaddow max-w-[400px]">
          <img src={image} loading="lazy" alt="common content" />
        </div>
        <div className="mt-6 md:mt-0">
          <div className="lg:flex justify-between">
            <h2 className="tertiary_heading pb-3 lg-pb-0">{title}</h2>
            <CustomButton
              title={btnText} //set button title
              isGradient={true} // is grident is  visible // controle  btn types
              varient="button" // set button type like  Link and  Button
              isVisible={true} // handle  button visibility
            />
          </div>
          <div className="flex gap-1 items-center my-4 sm:my-5">
            <span className="flex gap-1">{ratingStar}</span>
          </div>
          <p className="common_pera sm:mb-4">{description}</p>
        </div>
      </div>
    </>
  );
};

export default MoviesRatedCard;
