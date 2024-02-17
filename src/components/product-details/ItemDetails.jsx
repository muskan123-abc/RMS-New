import React, { useState } from "react";
import profile from "../../assets/images/profile/jhoe-deo-profile.webp";
import { Menu } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import {
  CommentBoxIcon,
  CommentBoxProfileIcon,
  SendIcon,
  SortIcon,
} from "../common/Icons";
import Comments from "./Comments";
import { relatedItemComments } from "./Helper";
import Suggestion from "./Suggestion";
import Trailer from "./Trailer";

const ItemDetails = ({ setVideoClick }) => {
  // GET THE CURRENT LOCATION
  const location = useLocation();

  // STATE FOR COMMENT INPUT AND ARRAY
  const [getInput, setGetInput] = useState("");
  const [commentArray, setCommentArray] = useState([relatedItemComments]);

  // STATE FOR ACTIVE TAB AND SHOW COMMENTS
  const [activeTab, setActiveTab] = useState("All");
  const [showComments, setShowComments] = useState(true);

  // FUNCTION TO HANDLE COMMENT SUBMISSION
  const clickHandler = (e) => {
    e.preventDefault();
    setGetInput("");

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Octr",
      "Nov",
      "Dec",
    ];
    const fullDate = `${date}${"-"}${monthNames[month]}${"-"}${year}`;
    const data = {
      comment: getInput,
      date: fullDate,
      dislike: "0",
      like: "0",
      name: "Wade Warren",
      image: profile,
      reply: "Reply",
    };
    // Update commentArray with new comment
    commentArray[0].unshift(data);
    setCommentArray([...commentArray]);
  };

  // Show comments when a new comment is added
  const commentHandler = () => {
    setShowComments(true);
  };

  return (
    <>
      {/* HEADER SECTION */}
      <div className="flex lg:hidden  items-center gap-5 mt-6 md:mt-10 mb-4 md:mb-[30px]">
        {/* Number of Comments */}
        <p className="font-poppins font-semibold text-sm text-white opacity-70 mb-0 leading-[22.4px] cursor-pointer">
          {commentArray[0].length} Comments
        </p>
        {/* Sort Button */}
        <div className="cursor-pointer relative sort_hover">
          <Menu>
            <Menu.Button className="flex items-center justify-between">
              <SortIcon />
              <p className="ms-2.5 font-poppins font-semibold text-sm text-white opacity-70 leading-[160%] duration-300">
                Sort by
              </p>
            </Menu.Button>
            {/* Sort Options */}
            <Menu.Items className="absolute right-[-10px] mt-2 top-[15px] !z-[100] rounded-lg origin-top-right bg-shadow-gray-two focus:outline-none flex flex-col">
              <Menu.Item className="ps-4 w-full pr-10 py-2 border-0 p-2">
                {({ active }) => (
                  <Link
                    aria-label="blog"
                    to="/blog"
                    className={` font-poppins font-semibold text-sm text-white opacity-70 hover:opacity-100 duration-300 border-0 font-proximanovaregular ${
                      active && "bg-primary text-white opacity-100"
                    } ${location.pathname === "/blog" ? "opacity-100" : ""}`}
                  >
                    Blogs
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item className="ps-4 w-full pr-10 py-2 border-0 p-2">
                {({ active }) => (
                  <Link
                    aria-label="blog"
                    to="/blog"
                    className={` font-poppins font-semibold text-sm text-white opacity-70 hover:opacity-100 duration-300 border-0 font-proximanovaregular ${
                      active && "bg-primary text-white opacity-100"
                    } ${location.pathname === "/blog" ? "opacity-100" : ""}`}
                  >
                    Facts
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      {/* COMMENT BOX */}
      <form
        className="border lg:hidden  border-solid border-battleship-gray ps-5 rounded-[127px] flex items-center justify-between w-full"
        onSubmit={(e) => clickHandler(e)}
      >
        <CommentBoxIcon />
        <input
          onClick={() => {
            commentHandler();
          }}
          onChange={(e) => setGetInput(e.target.value)}
          className=" font-poppins text-sm font-normal text-white bg-transparent px-2 py-3 w-11/12 outline-none"
          type="text"
          placeholder="Add a comment"
          value={getInput}
        />
        <button
          type="submit"
          className="sm:w-[50px] w-[60px] h-[50px] rounded-full flex items-center justify-center bg-gradient cursor-pointer"
        >
          {getInput.length > 0 ? <SendIcon /> : <CommentBoxProfileIcon />}
        </button>
      </form>
      {/* COMMENT SECTION */}
      {showComments && (
        <div
          className={`lg:mt-6 flex-col gap-2.5 z-[-1] relative flex lg:hidden rounded-md transition-all duration-300 my-8 `}
        >
          <Comments />
        </div>
      )}
      {/* TABS */}
      <div className="max-[370px]:min-w-[200px] min-w-[343px] overflow-x-auto lg:hidden mt-12 mb-8 ">
        <div className=" gap-4  flex">
          {/* All Tab */}
          <span
            onClick={() => setActiveTab("All")}
            className={`p-[4px_12px] 2xs:p-[8px_16px] sm:p-[8px_15px] text-center cursor-pointer first_btn font-semibold  ff_inter text-white  rounded-md whitespace-nowrap ${
              activeTab === "All"
                ? "common-bg-liner-button bg-gradient  border border-transparent"
                : "bg-graphite-gray-two border border-solid border-white/40"
            }`}
          >
            All
          </span>
          {/* Trailer Tab */}
          <span
            onClick={() => setActiveTab("Trailer")}
            className={`p-[4px_12px] 2xs:p-[8px_16px] sm:p-[8px_15px] text-center cursor-pointer first_btn font-semibold ff_inter text-white  rounded-md whitespace-nowrap ${
              activeTab === "Trailer"
                ? "common-bg-liner-button bg-gradient border border-transparent"
                : "bg-graphite-gray-two border border-solid border-white/40"
            }`}
          >
            Trailer
          </span>
          {/* Comedy Tab */}
          <span
            onClick={() => setActiveTab("Comedy")}
            className={`p-[4px_12px] 2xs:p-[8px_16px] sm:p-[8px_15px] text-center cursor-pointer first_btn font-semibold ff_inter text-white  rounded-md whitespace-nowrap ${
              activeTab === "Comedy"
                ? "common-bg-liner-button bg-gradient border border-transparent"
                : "bg-graphite-gray-two border border-solid border-white/40"
            }`}
          >
            Comedy
          </span>
          {/* Related Tab */}
          <span
            onClick={() => setActiveTab("Related")}
            className={`p-[4px_12px] 2xs:p-[8px_16px] sm:p-[8px_15px] text-center cursor-pointer first_btn font-semibold ff_inter text-white  rounded-md whitespace-nowrap ${
              activeTab === "Related"
                ? "common-bg-liner-button bg-gradient border border-transparent"
                : "bg-graphite-gray-two border border-solid border-white/40"
            }`}
          >
            Related
          </span>
        </div>
      </div>
      {/* TAB CONTENT */}
      <div className=" hidden lg:flex w-full">
        <div className=" gap-2 w-[500px] overflow-x-scroll flex">
          {/* All Tab Content */}
          <span
            onClick={() => setActiveTab("All")}
            className={`p-[4px_12px] 2xs:p-[8px_16px] sm:p-[8px_15px] lg:px-[14px] xl:p-[8px_18px] 2xl:px-[20px] text-center first_btn cursor-pointer font-normal text-sm ff_inter text-white  rounded-md whitespace-nowrap ${
              activeTab === "All"
                ? "common-bg-liner-button bg-gradient  border border-transparent"
                : "bg-graphite-gray-two border border-solid border-white/40"
            }`}
          >
            All
          </span>
          {/* Trailer Tab Content */}
          <span
            onClick={() => setActiveTab("Trailer")}
            className={`p-[4px_12px] 2xs:p-[8px_16px] sm:p-[8px_15px] lg:px-[14px] xl:p-[8px_18px] 2xl:px-[20px] text-center first_btn cursor-pointer font-normal text-sm ff_inter text-white  rounded-md whitespace-nowrap ${
              activeTab === "Trailer"
                ? "common-bg-liner-button bg-gradient border border-transparent"
                : "bg-graphite-gray-two border border-solid border-white/40"
            }`}
          >
            Trailer
          </span>
          {/* Comedy Tab Content */}
          <span
            onClick={() => setActiveTab("Comedy")}
            className={`p-[4px_12px] 2xs:p-[8px_16px] sm:p-[8px_15px] lg:px-[14px] xl:p-[8px_18px] 2xl:px-[20px] text-center first_btn cursor-pointer font-normal text-sm ff_inter text-white  rounded-md whitespace-nowrap ${
              activeTab === "Comedy"
                ? "common-bg-liner-button bg-gradient border border-transparent"
                : "bg-graphite-gray-two border border-solid border-white/40"
            }`}
          >
            Comedy
          </span>
          {/* Related Tab Content */}
          <span
            onClick={() => setActiveTab("Related")}
            className={`p-[4px_12px] 2xs:p-[8px_16px] sm:p-[8px_15px] lg:px-[14px] xl:p-[8px_18px] 2xl:px-[20px] text-center first_btn cursor-pointer font-normal text-sm ff_inter text-white  rounded-md whitespace-nowrap ${
              activeTab === "Related"
                ? "common-bg-liner-button bg-gradient border border-transparent"
                : "bg-graphite-gray-two border border-solid border-white/40"
            }`}
          >
            Related
          </span>
        </div>
      </div>
      {/* SUGGESTED ITEMS */}
      <div className="lg:mt-5 flex flex-col gap-2.5">
        {activeTab === "All" && <Suggestion setVideoClick={setVideoClick} />}
        {activeTab === "Trailer" && <Trailer setVideoClick={setVideoClick} />}
        {activeTab === "Comedy" && <Suggestion setVideoClick={setVideoClick} />}
        {activeTab === "Related" && <Trailer setVideoClick={setVideoClick} />}
      </div>
    </>
  );
};

export default ItemDetails;
