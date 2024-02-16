import React from "react";
import MostRanked from "./MostRanked";
import Playlists from "./Playlists";
import LikedVideos from "./LikedVideos";
import Faqs from "../common/Faqs";
import Footer from "../common/Footer";
import AccountSlider from "./AccountSlider";
import {
  LikeVideoIcon,
  PlaylistIcon,
  RecentlyWatchingIcon,
} from "../common/Icons";
import {
  likeVideoLibrary,
  mostRankedLibrary,
  playlistLibrary,
} from "../library/Helper";
const Library = ({ showSidebar }) => {
  return (
    <>
      {/* <MostRanked />
      <Playlists />
      <LikedVideos /> */}
      <div className="bg-my_account_bg bg_attachment_fixed  bg-cover relative pt-4 min-[1440px]:pt-[100px]">
        <div className="bottom_blur_hero w-full h-[50px] absolute bottom-0 left-0"></div>
        {/* 
        <img
          className="absolute left-4 min-[1440px]:hidden top-[117px] max-w-[70px] z-0 xl:block hidden"
          src={action_bg_deco}
          alt="hero-deco"
        />
        <img
          className="absolute right-0 top-[230px] max-w-[170px] md:block hidden"
          src={accountreelimg}
          alt="reel"
        /> */}
        <div
          className={`container max-w-full  xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto me-auto ms-0 max-[1439px]:mx-auto  sm:pb-[144px] pb-16 sm:px-4 xl:px-0 px-0 relative min-h-[50vh] ${
            showSidebar ? "ms-0" : "ms-auto"
          }`}
        >
          <div className="tab_data  w-full">
            <div>
              {/* MOST RANKED LIBRARY SLIDER   */}
              <AccountSlider
                icon={<RecentlyWatchingIcon />}
                heading={"Most ranked/Suggested videos"}
                sliderArrowHidden={"hidden"}
                accountSliderData={mostRankedLibrary}
                sliderParant="pb-6"
              />
              {/* PLAYLIST LIBRARY SLIDER   */}

              <AccountSlider
                icon={<PlaylistIcon />}
                heading={"Playlists"}
                accountSliderData={playlistLibrary}
                mostRankedSliderArrow={"hidden"}
                sliderParant="pb-6"
              />
              {/* LIKED LIBRARY SLIDER   */}

              <AccountSlider
                icon={<LikeVideoIcon />}
                heading={"Liked Videos"}
                accountSliderData={likeVideoLibrary}
                mostRankedSliderArrow={"hidden"}
                sliderParant="pb-0"
              />
            </div>
          </div>
        </div>
      </div>
      <Faqs />
      <Footer />
    </>
  );
};

export default Library;
