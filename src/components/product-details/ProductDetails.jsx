import React from "react";
import reel_img from "../../assets/images/png/right-side-position-music-reel-img.png";
import Faqs from "../common/Faqs";
import Hero from "./Hero";
import Footer from "../common/Footer";

const ProductDetails = () => {
  return (
    <>
      <div className="relative">
        {/* REEL POSITION IMAGE */}
        {/* Display the reel image */}
        <img
          className="absolute start-0 top-full max-w-[10%] min-w-[100px] z-0 hidden lg:block"
          src={reel_img}
          alt="reel"
        />

        {/* BOTTOM BLUR */}
        {/* Add a blurred background at the bottom */}
        <div className="bottom_blur_hero h-12 md:h-[80px] absolute bottom-0 left-0 w-full z-10 hidden md:block"></div>

        {/* ITEM PAGE SHADOWS */}
        {/* Add gradient shadows for design effect */}
        <div className=" bg-gradient  max-w-[343px] h-[343px] rounded-[343px] blur-[250px] opacity-80 absolute start-0 top-0 w-full hidden md:block"></div>
        <div className=" bg-gradient  max-w-[343px] h-[343px] rounded-[343px] blur-[250px] opacity-80 absolute start-0 top-1/2 w-full hidden md:block"></div>
        <div className=" bg-gradient  max-w-[343px] h-[343px] rounded-[343px] blur-[250px] opacity-80 absolute end-0 bottom-[10%] w-full hidden md:block"></div>

        {/* Render Hero component */}
        <Hero />
      </div>

      {/* Render Faqs component */}
      <Faqs />
       {/* Render footer component */}
      <Footer/>
    </>
  );
};

export default ProductDetails;
