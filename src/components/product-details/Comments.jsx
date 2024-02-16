import React, { useState } from "react";
import {
  CommentBoxIcon,
  DisLikeIcon,
  FaqArrowIcon,
  LikeVideoIcon,
} from "../common/Icons";
import { relatedItemComments } from "./Helper";

const Comments = () => {
  // State variables to track comment display and like/dislike status
  const [showAll2, setShowAll2] = useState(false); // SHOW MORE COMMENT BUTTON
  const [like, setlike] = useState([]); // ARRAY TO TRACK LIKE COMMENT
  const [dislike, setdisLike] = useState([]); // ARRAY TO TRACK DISLIKE COMMENT

  // Function to add or remove likes
  const addLIke = (item) => {
    if (like.includes(item)) {
      const UpdateLike = like.filter((value) => value !== item);
      setlike(UpdateLike);
    } else {
      setlike([...like, item]);
    }
  };

  // Function to add or remove dislikes
  const disLike = (items) => {
    if (dislike.includes(items)) {
      const UpdateDisLike = dislike.filter((value) => value !== items);
      setdisLike(UpdateDisLike);
    } else {
      setdisLike([...dislike, items]);
    }
  };

  // Determine which comments to display based on showAll2 state
  const visibleItem = showAll2
    ? relatedItemComments
    : relatedItemComments.slice(0, 10);

  return (
    <>
      {visibleItem.map((item, index) => {
        const isliked = like.includes(index); // Check if comment is liked
        const disliked = dislike.includes(index); // Check if comment is disliked
        return (
          <div
            key={index}
            className="flex gap-2 items-start bg-[#FFFFFF0D] card_backdrop_filter rounded-md py-2.5 ps-2.5 pe-[14px]">
            <img
              className="rounded-md"
              width="40"
              height="40"
              loading="lazy"
              src={item.image}
              alt="profile-pic"
            />
            <div className="w-full">
              <div className="flex justify-between w-full">
                <h3 className="font-poppins font-medium text-sm text-white opacity-90 leading-5 mb-0.5">
                  {item.name}
                </h3>
                <p className="font-poppins font-normal text-xs text-white opacity-70 ">
                  {item.date}
                </p>
              </div>
              <p className="font-poppins font-normal text-xs text-white opacity-70 mb-0.5">
                {item.comment}
              </p>
              <div className="flex icon pt-1">
                <span
                  onClick={() => addLIke(index)}
                  className={`ff_inter font-normal text-xs text-white opacity-70 mb-0 flex gap-0.5 cursor-pointer like_svg_size ${
                    isliked ? "liked" : ""
                  }`}>
                  <LikeVideoIcon isliked={isliked} />
                  {isliked ? item.like + 1 : item.like}
                </span>
                <span
                  onClick={() => disLike(index)}
                  className="ms-4 ff_inter font-normal text-xs text-white opacity-70 mb-0 flex gap-0.5 cursor-pointer">
                  <DisLikeIcon disliked={disliked} />
                  {disliked ? item.dislike + 1 : item.dislike}
                </span>
                <span className="ms-4 ff_inter font-normal text-xs text-white opacity-70 mb-0 flex gap-0.5 cursor-pointer">
                  <CommentBoxIcon /> {item.reply}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      {/* SHOW MORE BUTTON  */}
      {!showAll2 && relatedItemComments.length > 7 && (
        <button
          onClick={() => setShowAll2(true)}
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

export default Comments;
