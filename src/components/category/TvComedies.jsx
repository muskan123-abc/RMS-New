import React from "react";
import CommonCardSlider from "../common/slider/CommonCardSlider";
import { comedieSlider } from "./Halper";
import image from "../../assets/images/webp/footer-bg-reel-img-3.webp";

const TvComedies = () => {
  return (
    <>
      <div className="relative pb-20 sm:py-20 z-10">
        <img
          className="absolute left-[-40px] sm:top-[30px] top-[120px] lg:max-w-[130px] xl:max-w-[202px] md:max-w-[150px] max-w-[100px] hidden lg:block"
          src={image}
          loading="lazy"
          alt="reel"
        />
        <h2 className="secondry_heading pb-8 sm:pb-14">
          TV <span>Comedies</span>
        </h2>
        <CommonCardSlider contentArr={comedieSlider} />
      </div>
    </>
  );
};

export default TvComedies;
