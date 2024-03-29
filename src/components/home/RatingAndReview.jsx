import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CommonXmildIcon } from "../common/Icons";
import { formatNumber, ratingStars } from "../../utils/CommonFunction";
import { reviewList } from "./Halper";
import image from "../../assets/images/svg/XMLID_2_.svg";
import CustomButton from "../common/fields/button/CustomButton";

const RatingAndReview = () => {
  //USR FOR RATING PROGRESSBAR
  const [ref, inView] = useInView({});
  const [showTabs, setShowTabs] = useState("myaccount");

  //IMPORT STATE VALUE FROM PROVIDER
  //   const { setShowTabs } = useStateProvider();

  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationsTriggered && inView) {
        setAnimationsTriggered(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationsTriggered, inView]);

  //   SCROLL TOP FUNCTION
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <section
        className="py-12 sm:pb-28 md:pb-32 lg:pb-36 relative min-[1440px]:pl-4"
        id="reviews">
        <span className="bg-gradient w-[181px] h-[181px] rounded-[343px] blur-[131px] absolute right-0 top-[0px] pointer-events-none z-10"></span>
        <span className=" absolute right-0 top-50 pe-14 hidden lg:block movieIcon_animation">
          <img src={image} alt="" />
        </span>
        <div className="container max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto xl:mt-[52px] ">
          <h2 className=" text-center font-poppins font-semibold text-[30px] md:text-3xl text-white mb-0 leading-[142%]">
            Reviews & <span className="common-text-gradient">Rating</span>
          </h2>
          <div className=" flex flex-wrap justify-between items-center mt-12 lg:mt-[60px]">
            <div className=" w-full lg:w-[38%] xl:w-5/12 min-[1440px]:w-[30%] 3xl:w-5/12">
              <h2 className="font-poppins font-bold text-[35px] md:text-[45px] lg:text-[50px] xl:text-[64px] text-white mb-0 pb-[6px]">
                4.3
              </h2>
              <div className="flex gap-1">{ratingStars(4)}</div>
              <p className=" font-poppins font-normal text-base text-[#B3B2B2] mb-0 mt-5">
                {formatNumber(1400)} reviews
              </p>
              <div ref={ref} className="lg:me-5 w-full">
                <div className=" max-w-[463px] lg:max-w-[100%] ">
                  <div className="flex items-center mt-5 w-full justify-between">
                    <h6 className="font-poppins font-normal text-base text-[#B3B2B1]">
                      01
                    </h6>
                    <div className="w-full rounded-full h-2 ms-7 bg-[#333333]">
                      <div
                        className={`${
                          animationsTriggered ? "w-[88%]" : "w-[0]"
                        } h-2 rounded-full bg-gradient  transition-all delay-500 duration-500`}></div>
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
                        } h-2 rounded-full bg-gradient transition-all delay-[600] duration-[600]`}></div>
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
                        } h-2 rounded-full bg-gradient transition-all delay-700 duration-[700] `}></div>
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
                        } h-2 rounded-full bg-gradient transition-all delay-[800] duration-[800] `}></div>
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
                        } h-2 rounded-full bg-gradient transition-all delay-[900] duration-[900]`}></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Link
                onClick={() => {
                  setShowTabs("review");
                  scrollToTop();
                }}
                aria-label="See reviews"
                to="/my-reviews"
                className="
                 ff_inter font-semibold  w-fit text-base text-white bg-gradient border py-[10px] px-4  mt-10 lg:mt-[59px] rounded overflow-hidden  border-solid border-[#f2cd75] hover:border  border-transparent  after:bg-black  z-10 flex items-center justify-between relative duration-300 ease-linear after:absolute after:w-full after:h-0 after:top-0 after:left-0 after:z-[-1] after:duration-300 after:ease-linear hover:after:h-full hover:after:bottom-0">
                See All Reviews
              </Link> */}
              <CustomButton
                title="See All Reviews" //set button title
                isGradient={false} // is grident is  visible // controle  btn types
                varient="link" // set button type like  Link and  Button
                url="/my-reviews" // set url when button type  is link
                isVisible={true} // handle  button visibility
                customStyles=" mt-[60px]" // add custom styles  \\ use custom styles with importent
              />
            </div>
            <div className="w-full lg:w-7/12 xl:w-6/12 min-[1440px]:w-[65%] 3xl:w-6/12 min-[1440px]:px-3 ">
              <div className="flex flex-wrap mt-16 -mx-3 lg:ps-6 xl:ps-0">
                {reviewList.map((obj, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full sm:w-6/12 mb-5 sm:mb-0 px-3">
                      <div className=" border border-[#404040] rounded-xl py-5 sm:py-0 sm:pt-5 sm:pb-[42px] ps-4  pe-5 h-full hover:border-[#E1B862] duration-200">
                        <h5 className=" font-poppins font-semibold text-base text-white mb-0">
                          {obj.title}
                        </h5>
                        <div className="flex justify-between items-center mt-[10px]">
                          <p className=" font-poppins font-normal text-sm text-[#B2B2B2] mb-0">
                            {obj.date}
                          </p>
                          <span className="flex gap-1">
                            {ratingStars(obj.rating)}
                          </span>
                        </div>
                        <p className=" font-poppins font-normal text-sm text-[#B2B2B2] mb-0 mt-6 leading-[22px]">
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
      </section>
    </div>
  );
};

export default RatingAndReview;
