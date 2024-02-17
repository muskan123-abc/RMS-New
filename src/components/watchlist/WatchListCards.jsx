import React from "react";
import { HeartIcon } from "../common/Icons";
import { ratingStars } from "../../utils/CommonFunction";
import CustomButton from "../common/fields/button/CustomButton";

const WatchListCards = ({
  image,
  title,
  rating,
  index,
  isLiked,
  setHeartClicked,
  heartClicked,
}) => {
  const likeHandler = (value) => {
    if (heartClicked.includes(value)) {
      const updatedHeartClicked = heartClicked.filter((item) => item !== value);
      setHeartClicked(updatedHeartClicked);
    } else {
      setHeartClicked([...heartClicked, value]);
    }
  };
  return (
    <>
      <div className="w-full sm:w-[48%] md:w-6/12 lg:w-4/12 border border-solid border-[#494745] text-white rounded-lg p-2 relative overflow-hidden max-h-[407px]">
        {index >= 0 && (
          <span
            className={`${
              isLiked ? "liked" : ""
            } absolute top-[14px] right-[14px] pt-3 pe-3 cursor-pointer z-20`}
            onClick={() => likeHandler(index)}
          >
            <HeartIcon filled={isLiked} />
          </span>
        )}
        <img className="w-full h-full object-cover" src={image} alt="image" />
        <div className="px-2 absolute bottom-0 w-[95%] mx-auto">
          <p className="text-sm sm:text-base font-semibold mb-2 leading-[160%]">
            {title}
          </p>
          <div className="flex justify-between mb-2 lg:mb-5 w-100">
            <p className="text-sm font-normal leading-[160%] mb-0 text-[#b3b3b3]">
              Your rating: {rating}/5
            </p>
            <span className="flex gap-1">
              {ratingStars(rating ? rating : 4)}
            </span>
          </div>
          <CustomButton
            title="Trailer" //set button title
            varient="button" // set button type like  Link and  Button
            url="" // set url when button type  is link
            isVisible={true} // handle  button visibility
            customStyles=" !px-0 flex justify-center" // add custom styles  \\ use custom styles with importent
            setButtonFull="w-full"
            className="mb-5"
          />
        </div>
      </div>
    </>
  );
};

export default WatchListCards;
