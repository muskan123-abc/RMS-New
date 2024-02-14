import React from "react";
import CommonBigCard from "../common/card/CommonBigCard";
import { ratingStars } from "../../utils/CommonFunction";
import image from "../../assets/images/webp/footer-bg-reel-img-3.webp";

const CategoryBigCard = () => {
  return (
    <>
      <div className="pb-20 sm:py-20 px-6 relative">
        <img
          className="absolute right-0 sm:top-[-10px] lg:max-w-[130px] xl:max-w-[202px] md:max-w-[150px] max-w-[100px] hidden lg:block"
          src={image}
          loading="lazy"
          alt="reel"
        />
        <CommonBigCard
          title="There’s even more to watch."
          ratingStar={ratingStars(4)}
          description="Vitae congue aliquam malesuada nec malesuada faucibus elit netus. Donec vestibulum velit laoreet ornare fermentum et. Aliquet ut adipiscing volutpat fermentum nisl massa. Cras cras amet nisl id adipiscing vel vitae euismod nunc. Platea tincidunt vulputate etiam massa porta at ipsum maecenas. Convallis sed ac egestas non odio. Mus pellentesque."
          btnText="Join Now"
        />
      </div>
    </>
  );
};

export default CategoryBigCard;
