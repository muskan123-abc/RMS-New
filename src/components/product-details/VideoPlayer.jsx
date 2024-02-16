import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../../assets/images/profile/jhoe-deo-profile.webp";
import pIcon from "../../assets/images/svg/p-icon.svg";
import { formatNumber } from "../../utils/CommonFunction";
import {
  CommentBoxIcon,
  CommentBoxProfileIcon,
  DisLikeIcon,
  DownloadIcon,
  PlayBtnIcon,
  SendIcon,
  ShareIcon,
  SortIcon,
} from "../common/Icons";
import Comments from "./Comments";
import {
  BellIcon,
  LikeIcon,
  defaultPorductDiscription,
  relatedItemComments,
} from "./Helper";

const VideoPlayer = () => {
  // SAVE DATA IN LOCALSTORAGE
  const currentMovie = JSON.parse(localStorage.getItem("current-movie"));
  // TARGET IMAGE
  var image = currentMovie.image;
  var title = currentMovie.title;
  //FOR GETTING PATH
  const loaction = useLocation();
  //IMPORT STATE FROM PROVIDER
  const [likesAndDislikes, setLikesAndDislikes] = useState({
    item1: { likes: 0, dislikes: 0, liked: false },
  });
  const [getInput, setGetInput] = useState(""); //FOR GET INPUT DATA OF COMMENT INPUT
  const [discription] = useState(false); // FOR ADDING/REMOVING TEXT IN DECRIPTION BOX
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); //FOR VIDEO PLAY AND PAUSE BUTTON
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [commentArray, setCommentArray] = useState([relatedItemComments]); //GET ARREY OF COMMENT SECTION

  // Handle click to show/hide the "Read more" section
  const handleReadMoreClick = (index) => {
    if (selectedIndexes.includes(index)) {
      const data = selectedIndexes.filter((obj) => obj !== index);
      setSelectedIndexes(data);
    } else {
      setSelectedIndexes((prev) => [...prev, index]);
    }
  };

  // Handle play button click
  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  // Function to add a like
  const AddLike = (itemName) => {
    setLikesAndDislikes((prevLikesAndDislikes) => {
      const currentItem = prevLikesAndDislikes[itemName];
      const isLiked = !currentItem.liked;

      return {
        ...prevLikesAndDislikes,
        [itemName]: {
          ...currentItem,
          likes: isLiked ? currentItem.likes + 1 : currentItem.likes - 1,
          liked: isLiked,
        },
      };
    });
  };

  // Function to add a dislike
  const AddDisLIke = (itemName) => {
    setLikesAndDislikes((prevLikesAndDislikes) => {
      const currentItem = prevLikesAndDislikes[itemName];
      const isDisliked = !currentItem.disliked;
      return {
        ...prevLikesAndDislikes,
        [itemName]: {
          ...currentItem,
          dislikes: isDisliked
            ? currentItem.dislikes + 1
            : currentItem.dislikes - 1,
          disliked: isDisliked,
        },
      };
    });
  };

  // Handle click to post a comment
  const clickHandler = (e) => {
    e.preventDefault();
    setGetInput("");

    // Get current year, month, and date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    // Array to convert month number to month name
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

    // Create a new array with the new comment added
    commentArray[0].unshift(data);
    setCommentArray([...commentArray]);
  };

  return (
    <div className=" flex flex-col">
      <div className="custom_dark_card_bg   p-[10px] rounded-xl group">
        <div className="relative overflow-hidden rounded-md h-full xl:h-[467px] lg:min-h-[400px] md:min-h-[100px] sm:min-h-[250px] min-h-[287px] w-full">
          {isVideoPlaying ? (
            <iframe
              className="h-full xl:min-h-[467px] lg:min-h-[400px] md:h-[300px] sm:min-h-[250px] min-h-[287px] w-full"
              src="https://www.youtube.com/embed/fLeJJPxua3E?si=4vtEVLDJnTpFOXci"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          ) : (
            <img
              className="group-hover:scale-110 duration-300 object-top h-[300px] md:h-[400px] xl:h-[100%] xl:min-h-[448px] lg:min-h-[254.7px] md:min-h-[182.9px] sm:min-h-[250px] min-h-[287px] object-cover w-full"
              src={image ? image : currentMovie.image}
              alt="video-thumbnail"
              loading="lazy"
            />
          )}
          {isVideoPlaying ? (
            ""
          ) : (
            <button
              className="absolute top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2"
              onClick={() => handlePlayButtonClick()}>
              <PlayBtnIcon />
            </button>
          )}
        </div>
      </div>
      <div className=" relative">
        <h3 className="font-poppins font-semibold text-white text-xl pt-[16px] pb-[5px] opacity-90">
          {title ? title : currentMovie.title}
        </h3>
        <div className="flex flex-nowrap sm:items-center sm:gap-7 gap-5 pt-0.5 flex-col sm:flex-row overflow-hidden">
          <div className="flex justify-between md:justify-normal gap-9 pt-2 2sm:pt-0">
            <div className="flex gap-3 w-[160px] 2sm:w-[155px] cursor-pointer">
              <img
                className="rounded-full object-cover w-10 h-10"
                src={pIcon}
                alt="suggest"
              />
              <div className="flex items-center 2sm:items-start 2sm:flex-col justify-center">
                <h3 className="font-poppins font-medium text-sm text-white opacity-90 leading-5 mb-0.5">
                  TV Movies
                </h3>
                <p className="font-poppins font-normal text-xs text-white opacity-70 hidden 2sm:flex">
                  {formatNumber(929000)} Subscribers
                </p>
                <p className="font-poppins font-normal text-xs text-white opacity-70 2sm:hidden ps-2">
                  {formatNumber(929000)}
                </p>
              </div>
            </div>
            {/* SUBSCRIBE BUTTON  */}
            <Link
              href="#"
              className="bell_icon flex gap-1 sm:gap-2 ff_inter font-semibold text-base h-fit text-white bg-gradient border py-[10px] px-2 sm:px-[14px] rounded overflow-hidden  border-solid border-[#f2cd75] hover:border  border-transparent  after:bg-black  z-10  relative duration-300 ease-linear after:absolute after:w-full after:h-0 after:top-0 after:left-0 after:z-[-1] after:duration-300 after:ease-linear hover:after:h-full hover:after:bottom-0">
              <span className="notification_hover_animation"></span>
              <BellIcon /> Subscribe
            </Link>
          </div>
          {/* LIKE, DISLIKE AND DOWNLOAD,SHARE BUTTON */}
          <div className="overflow-auto flex justify-start">
            <div className="sm:gap-2.5 gap-2 flex justify-start min-[1200px]:items-center min-[1200px]:justify-center">
              <span
                onClick={() => AddLike("item1")}
                className="common-bg-liner-button bg-[#211E1A] items-center justify-center flex gap-1
                  ff_inter font-semibold text-xs text-white border-0 cursor-pointer
                  py-[10px]  px-2  rounded hover:bg-[#ffffff2a] hover:card_backdrop_filter min-w-[70px] duration-300">
                <span>
                  <LikeIcon isliked={likesAndDislikes.item1.likes} />
                </span>

                {likesAndDislikes.item1.likes}
              </span>
              <span
                onClick={() => AddDisLIke("item1")}
                className="common-bg-liner-button bg-[#211E1A] items-center justify-center flex gap-1
                  ff_inter font-semibold text-xs text-white border-0 cursor-pointer
                  py-[10px] px-2 sm:px-2.5  rounded-md  hover:bg-[#ffffff2a] hover:card_backdrop_filter min-w-[70px] duration-300">
                <span>
                  <DisLikeIcon disliked={likesAndDislikes.item1.dislikes} />
                </span>
                {likesAndDislikes.item1.dislikes}
              </span>
              <span
                className="common-bg-liner-button bg-[#211E1A] items-center justify-center flex gap-1
                  ff_inter font-semibold text-xs text-white border-0 cursor-pointer
                  py-[10px]  px-2 sm:px-2.5  rounded-md  hover:bg-[#ffffff2a] hover:card_backdrop_filter duration-300">
                <span>
                  <ShareIcon />
                </span>
                Share
              </span>
              <span
                className="common-bg-liner-button bg-[#211E1A] items-center justify-center flex gap-1
                  ff_inter font-semibold text-xs text-white border-0 cursor-pointer
                  py-[10px]  px-2 sm:px-2.5  rounded-md  hover:bg-[#ffffff2a] hover:card_backdrop_filter duration-300">
                <span>
                  <DownloadIcon />
                </span>
                Download
              </span>

              <div
                // SELECT DROPDOWN
                className=" items-center justify-center flex gap-1">
                <Menu>
                  <Menu.Button className="flex items-center justify-between common-bg-liner-button bg-[#211E1A]  ff_inter font-semibold text-xs text-white border-0 cursor-pointer py-[10px]  px-3  rounded-md  hover:bg-[#ffffff2a] hover:card_backdrop_filter duration-300 ">
                    ...
                  </Menu.Button>
                  <Menu.Items className="absolute right-[10px] 2xl:right-[60px] mt-2 top-[190px] min-[461px]:top-[90px] max-[480px]:right-10 max-[640px]:end-[40px] max-[640px]:!top-[155px] z-20 rounded-lg origin-top-right bg-[#353535dc] focus:outline-none flex flex-col">
                    <Menu.Item className="ps-4 w-full pr-10 py-2 border-0 p-2">
                      {({ active }) => (
                        <Link
                          aria-label="blog"
                          to="/blog"
                          className={` border-0 font-poppins text-[#BDBCBA] hover:text-white ${
                            active && "bg-primary text-white"
                          } ${
                            loaction.pathname === "/blog"
                              ? "bg-primary text-white"
                              : ""
                          }`}>
                          Blogs
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="ps-4 w-full pr-10 py-2 border-0 p-2">
                      {({ active }) => (
                        <Link
                          aria-label="fact"
                          to="/fact"
                          className={` border-0 font-poppins text-[#BDBCBA] hover:text-white ${
                            active && "bg-primary text-white"
                          } ${
                            loaction.pathname === "/fact"
                              ? "bg-primary text-white"
                              : ""
                          }`}>
                          Facts
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item className="ps-4 w-full pr-10 py-2 border-0 p-2">
                      {({ active }) => (
                        <Link
                          aria-label="about us"
                          to="/about-us"
                          className={` border-0 font-poppins text-[#BDBCBA] hover:text-white ${
                            active && "bg-primary text-white"
                          } ${
                            loaction.pathname === "/about-us"
                              ? "bg-primary text-white"
                              : ""
                          }`}>
                          About us
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        {/* DISCRIPTION  */}
        <div
          className={`bg-[#FFFFFF14] card_backdrop_filter rounded-md mt-6 p-2.5 ${
            discription
              ? "min-h-[80px] overflow-auto !transition-all !duration-300 "
              : " min-h-[70px] !transition-all !duration-300 "
          }`}>
          <p className="font-poppins inline font-normal text-sm text-[#FFFFFFB2] opacity-70 leading-[22.4px] mb-0.5">
            Elit eu maecenas augue lorem &nbsp;
            <span className="font-semibold text-white !opacity-100">
              malesuada
            </span>
            &nbsp; amet mattis risus. Luctus hac at pharetra erat vivamus fusce
            sit nec. Interdum ornare velit consectetur et purus ultricies
            egiquet &nbsp;
            <span className="font-semibold text-white !opacity-100">
              udipiscings
            </span>
            <div className="hidden 2xs:content-evenly">
              &nbsp; volutpat.&nbsp;
            </div>
            <span className="2xs:hidden">&nbsp;volutpat.&nbsp;</span>
          </p>
          {/* MAP FOR READ MORE ADD READ LESS BORRON */}
          {defaultPorductDiscription.map((item, index) => (
            <p
              key={index}
              className="font-poppins inline font-normal text-sm text-[#FFFFFFB2] opacity-70 leading-[22.4px]">
              <span>
                {selectedIndexes.includes(index) ? item.description : ""}
              </span>
              {selectedIndexes.includes(index) ? (
                <span>{item.description}</span>
              ) : (
                <span>&nbsp;{item.threedots}</span>
              )}
              {item.description.length < 0 ? (
                ""
              ) : (
                <button
                  className="cursor-pointer position-relative z-4  text-white"
                  onClick={() => handleReadMoreClick(index)}>
                  {selectedIndexes.includes(index) ? "Read less" : "more"}
                </button>
              )}
            </p>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-col">
          <div className="flex items-center gap-5 mt-6 md:mt-10 mb-4 md:mb-[30px]">
            <p className="font-poppins font-semibold text-sm text-white opacity-70 mb-0 leading-[22.4px] cursor-pointer">
              {commentArray[0].length} Comments
            </p>
            {/* SORT DROPDOWN  */}
            <div className="font-poppins font-semibold text-sm text-[#FFFFFFB2] opacity-70 mb-0 leading-[22.4px] flex gap-2.5 cursor-pointer relative">
              <Menu>
                <Menu.Button className="flex items-center justify-between">
                  <span className="textx-white opacity-100 me-2.5">
                    <SortIcon />
                  </span>
                  Sort by
                </Menu.Button>
                <Menu.Items className="absolute right-[-10px] mt-2 top-[15px] !z-[100] rounded-lg origin-top-right bg-[#414141dc] focus:outline-none flex flex-col">
                  <Menu.Item className="ps-4 w-full pr-10 py-2 border-0 p-2">
                    {({ active }) => (
                      <Link
                        aria-label="blog"
                        to="/blog"
                        className={` border-0 font-poppins text-[#BDBCBA] hover:text-white ${
                          active && "bg-primary text-white"
                        } ${
                          loaction.pathname === "/blog"
                            ? "bg-primary text-white"
                            : ""
                        }`}>
                        Blogs
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item className="ps-4 w-full pr-10 py-2 border-0 p-2">
                    {({ active }) => (
                      <Link
                        aria-label="fact"
                        to="/fact"
                        className={` border-0 font-poppins text-[#BDBCBA] hover:text-white ${
                          active && "bg-primary text-white"
                        } ${
                          loaction.pathname === "/fact"
                            ? "bg-primary text-white"
                            : ""
                        }`}>
                        Facts
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
          {/* COMMENT INPUT  */}
          <form
            onSubmit={(e) => clickHandler(e)}
            className="border border-solid border-[#82817F] ps-5 rounded-[127px] flex items-center justify-between w-full">
            <CommentBoxIcon />
            <input
              onChange={(e) => setGetInput(e.target.value)}
              className=" font-poppins text-sm font-normal text-white bg-transparent px-2 py-3 w-11/12 outline-none"
              type="text"
              placeholder="Add a comment lorem"
              value={getInput}
            />
            <button
              type="submit"
              className="sm:w-[50px] w-[60px] h-[50px] rounded-full flex items-center justify-center bg-gradient cursor-pointer">
              {getInput.length > 0 ? <SendIcon /> : <CommentBoxProfileIcon />}
            </button>
          </form>
        </div>

        <div className={`mt-6 flex-col gap-2.5 hidden lg:flex `}>
          {/* .COMMENT SECTION  */}
          {/* <relatedItemComments /> */}
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
