import React from "react";
import category_hero_reel_img from "../../assets/images/png/category_hero_reel_img.png";
import category_hero_img from "../../assets/images/webp/category_hero_img.webp";
import { CommonXmildIcon } from "../common/Icons";
import CustomInput from "../common/fields/CustomInput";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen bg-[url('/src/assets/images/webp/homepage_hero_bg_img.webp')] bg-cover bg-no-repeat bg-center relative z-[9] flex pt-[76px] items-center">
        <div className="bottom_blur_hero w-full h-[50px] absolute bottom-0 left-0 z-50"></div>
        <span className="absolute left-0 top-[74px] ps-5 md:pt-5 pt-10 hidden lg:block movieIcon_animation">
          <CommonXmildIcon />
        </span>
        <img
          className="w-[240px] h-[381px] object-cover absolute end-0 bottom-[110px] 2xl:bottom-[5%] xl:bottom-[20%] -z-0  hidden xl:block"
          src={category_hero_reel_img}
          alt="popular_reel_position_img"
        />
        <div className="container max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto flex-grow flex justify-center items-center h-full">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
            <div className="w-full sm:w-[75%] md:w-1/2 lg:w-[39%] pt-10 md:pt-0 pb-3 md:pb-0">
              <h2 className="font-poppins font-bold text-[35px] lg:text-3xl xl:text-[55px] text-white leading-[142%]">
                TV <span className="common-text-gradient">Shows</span>
              </h2>
              <p className=" font-poppins text-base font-normal opacity-70 text-white pt-3 leading-[160%] mb-10">
                Sit volutpat purus semper metus laoreet amet justo suscipit
                posuere vestibulum eget erat aliquet quam donec donec
                suspendisse.
              </p>
              <div className="hidden md:flex">
                <CustomInput
                  placeholder="Search"
                  customStyles="w-full md:w-[80%]"
                  isButtonVisible={true}
                />
              </div>
            </div>
            <div className=" w-full sm:w-[70%] md:w-[45%] ">
              <div className="md:hidden my-10">
                <CustomInput
                  placeholder="Search"
                  customStyles="w-full md:w-[80%]"
                  isButtonVisible={true}
                />
              </div>
              <div className="border-2 border-solid border-[#FFFFFF4D] rounded-lg z-50 relative overflow-hidden">
                <img
                  height={523}
                  width={523}
                  className="w-full h-full hover:scale-110 duration-300 z-20"
                  src={category_hero_img}
                  alt="hero-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
