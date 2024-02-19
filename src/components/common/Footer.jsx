import React, { useEffect } from "react";
import footer_logo from "../../assets/images/webp/footer-logo.webp";
import footer_position_reel_img from "../../assets/images/webp/footer-bg-reel-img.webp";
import { Link, useLocation } from "react-router-dom";
import {
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterLinkedinIcon,
} from "./Icons";
import { footerList } from "./Helper";

const Footer = () => {
  //FOR GETTING CURRENT DATE
  const today = new Date();
  //FOR GETTING CURRENT YEAR
  const year = today.getFullYear();
  //FOR GETTING PATH
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  return (
    <>
      <section className="relative pt-[10px] pb-5 sm:pt-20 py-[60px]">
        <div className=" bg-gradient  max-w-[200px] h-[200px] rounded-[326px] blur-[150px] z-10 absolute start-0 bottom-0 w-full hidden sm:block"></div>
        <div className=" bg-gradient  max-w-[200px] h-[200px] rounded-[326px] blur-[150px] z-10 absolute end-0 bottom-0 w-full"></div>
        <img
          className="absolute end-0 bottom-[18px] w-[124px] hidden sm:block z-0"
          src={footer_position_reel_img}
          alt="footer_position_reel_img"
        />
        <div className="container max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto z-10 relative">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-4/12 lg:w-3/12 md:pe-6 lg:pe-0">
              <Link
                to={"/"}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <img
                  className="w-[100px] md:w-[136px] md:h-[74px] h-[54px] cursor-pointer inline-block"
                  src={footer_logo}
                  alt="footer_logo"
                />
              </Link>
              <p className="mt-4 md:mt-5 text-[#B7B6B5] font-normal  text-sm mb-0 max-w-[298px]">
                Duis vel lacus nulla dapibus auctor arcu viverra eget sed.
              </p>
              <div className="flex gap-[10px] mt-5 md:mt-[30px]">
                <span className="cursor-pointer hover:-translate-y-1 duration-300">
                  <Link
                    aria-label="Go to Instagram"
                    to={"https://www.instagram.com/"}
                    target="_blank"
                  >
                    <FooterInstagramIcon />
                  </Link>
                </span>
                <span className="cursor-pointer hover:-translate-y-1 duration-300">
                  <Link
                    aria-label="Go to Facebook"
                    to={"https://www.facebook.com/"}
                    target="_blank"
                  >
                    <FooterFacebookIcon />
                  </Link>
                </span>
                <span className="cursor-pointer hover:-translate-y-1 duration-300">
                  <Link
                    aria-label="Go to Linkedin"
                    to={"https://in.linkedin.com"}
                    target="_blank"
                  >
                    <FooterLinkedinIcon />
                  </Link>
                </span>
              </div>
            </div>
            <div className="w-full lg:w-8/12 xl:w-7/12">
              <div className="flex flex-wrap mt-2 justify-between">
                {footerList.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className=" max-[576px]:w-5/12 min-[576px]:w-3/12 min-[576px]:pe-6 sm:w-3/12 sm:pe-0 mt-8 lg:mt-0"
                    >
                      <p className="  font-medium text-sm text-white mb-0">
                        {val.title}
                      </p>
                      <ul>
                        <li className="pt-1">
                          {val &&
                            val.footerLinks.map((obj, index) => {
                              return (
                                <div key={index} className="mt-2">
                                  <Link
                                    aria-label={val.footerLinks}
                                    to={obj.url}
                                    className=" font-normal text-sm text-white opacity-70 cursor-pointer hover:text-white duration-200"
                                  >
                                    {obj.link}
                                  </Link>
                                </div>
                              );
                            })}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className=" text-center w-full mt-[67px] text-white opacity-70  font-normal text-base mb-0">
              © {year} RMS. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
