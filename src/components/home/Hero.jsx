import React, { useEffect } from "react";
import Typed from "typed.js";
import { homeHeroLeftSlider, homeHeroRightSlider } from "../../utils/Helper";
import image from "../../assets/images/svg/tap-recorder-icon.svg";
import CustomInput from "../common/fields/CustomInput";

const Hero = ({ showSidebar }) => {
  // useEffect hook to handle side effects, runs once after the initial render
  useEffect(() => {
    // Typed.js initialization for text animation
    const typing = new Typed(".text", {
      strings: [
        "ustomer <span style='background: var(--Liner, linear-gradient(135deg, #F2CD75 0%, #A97424 100%)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>Review</span> sites movies",
      ],
      backDelay: 2000,
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
    // Cleanup function to destroy Typed instance when the component unmounts
    return () => {
      typing.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once
  return (
    <>
      {/* Hero section with background image */}
      <section
        className={`overflow-hidden min-h-screen grow relative w-full bg-homepage-hero-bg bg-cover bg-no-repeat bg-center py-20 sm:py-24 md:py-0 flex items-center `}>
        {/* Bottom blur effect */}
        <div className="bottom_blur_hero h-12 md:h-[80px] absolute bottom-0 xl:bottom-[-30px] left-0 w-full z-10 hidden md:block"></div>
        {/* Movie icon at the top-left corner */}
        <span className=" absolute left-0 top-20 ps-5 md:pt-5 pt-10 hidden lg:block movieIcon_animation">
          <img src={image} alt=" icon-cut" />
        </span>
        <div
          className={`container max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto me-auto max-[1439px]:mx-auto pt-sm-5 mt-5 md:mt-0 md:pt-0 px-3 ${
            showSidebar ? "ms-0  px-6 " : "ms-auto"
          }`}>
          <div className="md:hidden mb-10">
            <CustomInput
              placeholder="Search"
              customStyles="w-full sm:w-[75%] flex md:mx-auto"
              customStylesInput="w-full"
              isButtonVisible={true}
            />
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-between md:items-center lg:min-h-screen">
            <div className=" md:w-6/12 custom-2xl:w-5/12 custom-3xl:w-[52%] 2xl:w-[55%] min-[1920px]:w-6/12 pe-3 lg:pe-0">
              <h1
                className={`h-[75px] sm:h-[45px] md:h-[70px] lg:h-[100px] custom-2xl:h-[100px] custom-3xl:h-[140px] font-poppins font-bold max-[400px]:textapp-[29px] text-[31px] lg:text-3xl xl:text-3xl min-[1440px]:text-[55px] text-[#F9F5ED] leading-[142%] max-[375px]:max-w-[100%] min-[375px]:max-w-[85%] min-[425px]:max-w-[75%] sm:max-w-[90%] lg:max-w-[75%] min-[1440px]:max-w-[95%] 2xl:max-w-[85%] md:mb-6 mb-3 ${
                  showSidebar && " custom-2xl:!max-w-full"
                }`}>
                C<span className="text"></span>
              </h1>
              <p className=" font-poppins text-sm xl:text-base font-semibold text-[#E5E2DE] pt-2 mb-0">
                Csras lectus nunc venenatis incidunt id quis malesuada
              </p>
              <p className=" font-poppins text-sm xl:text-base font-normal text-[#B5B5B5] pt-2 leading-[160%] mb-10">
                Amet suscipit risus nulla libero porta purus id rhoncus emper
                faucibus risus cursus dibero ipsum tempus rhoncus dignissi massa
                cursus tortor.
              </p>
              <div className="hidden md:block">
                <CustomInput
                  placeholder="Search"
                  customStyles="w-full max-w-[343px]"
                  customStylesInput="w-full"
                  isButtonVisible={true}
                />
              </div>
            </div>

            <div className="relative mt-10 sm:mt-12 md:mt-0  md:w-6/12 min-[1440px]:w-[45%] min-[1920px]:w-6/12 min-h-[370px] md:min-h-[86vh] min-[1440px]:mr-[-150px] min-[1920px]:mr-0 ">
              <div className="md:w-6/12">
                <div className="flex md:flex-col gap-5 hero_slider md:py-3 absolute md:px-0 w-[180px]  lg:w-[240px] xl:w-[270px] md:end-[199px] lg:end-[260px] xl:end-[290px] custom-2xl:end-[250px]">
                  {homeHeroLeftSlider.map((obj, index) => {
                    return (
                      <img
                        key={index}
                        loading="lazy"
                        width={208}
                        height={161}
                        className=" w-full border-2 border-[#645E56] rounded-[8px]"
                        src={obj.image}
                        alt="hero_img_slider"
                      />
                    );
                  })}
                </div>
                <div className="flex md:flex-col gap-5 hero_slider2 md:py-3 absolute md:px-0 w-[180px] lg:w-[240px] xl:w-[270px] md:end-[199px] lg:end-[260px] xl:end-[290px] custom-2xl:end-[250px]">
                  {homeHeroLeftSlider.map((obj, index) => {
                    return (
                      <img
                        key={index}
                        width={208}
                        height={161}
                        className=" w-full border-2 border-[#645E56] rounded-[8px]"
                        src={obj.image}
                        alt="hero_img_slider"
                        loading="lazy"
                      />
                    );
                  })}
                </div>
              </div>
              <div className="md:w-6/12 mt-[200px] md:mt-0">
                <div className="flex md:flex-col gap-5 hero_slider3 md:py-3 absolute md:px-0 w-[180px]  lg:w-[240px] xl:w-[270px] md:right-0 custom-2xl:end-[-40px]">
                  {homeHeroRightSlider.map((obj, index) => {
                    return (
                      <img
                        key={index}
                        width={208}
                        height={161}
                        className=" w-full border-2 border-[#645E56] rounded-[8px]"
                        src={obj.image}
                        alt="hero_img_slider"
                        loading="lazy"
                      />
                    );
                  })}
                </div>
                <div className="flex md:flex-col gap-5 hero_slider4 md:py-3 absolute md:px-0 w-[180px]  lg:w-[240px] xl:w-[270px] md:right-0 custom-2xl:end-[-40px]">
                  {homeHeroRightSlider.map((obj, index) => {
                    return (
                      <img
                        key={index}
                        width={208}
                        height={161}
                        className=" w-full border-2 border-[#645E56] rounded-[8px]"
                        src={obj.image}
                        loading="lazy"
                        alt="hero_img_slider"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
