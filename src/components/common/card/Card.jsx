import React from "react";
import { ratingStars } from "../../../utils/CommonFunction";
import image from "../../../assets/images/romanceTvShows/webp/romance-slider-img1.webp";
const Card = ({ myarr }) => {
  return (
    <div>
      <div className="sm:max-w-[360px] group rounded-xl cursor-pointer card_backdrop_filter border border-solid border-[#474643] p-2 bg-[#1A1917] mx-2 mb-2">
        <div className={`flex rounded-xl w-full`}>
          <div>
            <div className="overflow-hidden rounded-md">
              <img
                height={303}
                width={347}
                className="group-hover:scale-110 duration-300 rounded-[6px]"
                src={image}
                alt="img"
                loading="lazy"
              />
            </div>
            <div className=" mt-4 ps-[11px] pb-[11px]">
              <h5 className="font-poppins text-sm xl:text-xl  font-semibold text-white opacity-90 mb-0">
                Magna etiam
              </h5>
              <p className="font-poppins text-base font-normal text-light-gray mt-1 mb-2">
                Your rating:5/5
              </p>
              <span className="flex gap-1">{ratingStars(5)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
