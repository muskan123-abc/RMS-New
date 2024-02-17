import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../utils/CommonFunction";
import { FaqArrowIcon } from "../common/Icons";
import { trailerMap } from "./Helper";

const Trailer = ({ setVideoClick }) => {
  // FOR NAVIGATE PATH
  const navigate = useNavigate();
  // IMPORT STATE VALUE FROM PROVIDER
  const [showAll, setShowAll] = useState(false);

  // Function to handle the click event on a card
  const handleCardClick = (value) => {
    localStorage.setItem("current-movie", JSON.stringify(value));
    setVideoClick(value);
    const formattedTitle = value.title.replace(/\s+/g, "-");
    navigate(`?title=${formattedTitle}`);
  };

  // Determine the visible items based on the showAll card
  const visibleItem = showAll ? trailerMap : trailerMap.slice(0, 15);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      {visibleItem.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              handleCardClick(item);
              scrollToTop();
            }}
            className="flex gap-3 cursor-pointer bg-[#2D281F] rounded-md border border-solid border-white/40 p-[6px]">
            <img width="88" height="88" src={item.image} alt="suggest-cover" />
            <div>
              <h3 className="font-poppins font-medium text-sm text-white opacity-90 leading-5 mb-0.5">
                {item.title}
              </h3>
              <p className="font-poppins font-normal text-xs text-white opacity-70 mb-0.5">
                {item.trailer}
              </p>
              <p className="font-poppins font-normal text-xs text-white opacity-70 mb-0">
                {formatNumber(item.views)} views
                <span className="ms-4 before:content-[''] before:w-[3px] before:h-[3px] before:rounded-md before:absolute before:top-1/2 before:start-[-5px] before:bg-white before:-translate-x-1/2 relative">
                  {item.outTime}
                </span>
              </p>
            </div>
          </div>
        );
      })}
      {!showAll && trailerMap.length > 10 && (
        <button
          onClick={() => setShowAll(true)}
          className="text-white ff_inter font-semibold mx-auto mt-4 bg-transparent border-0 flex items-center gap-2">
          Show More
          <span>
            <FaqArrowIcon />
          </span>
        </button>
      )}
    </>
  );
};

export default Trailer;
