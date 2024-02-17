import React from "react";
import Faqs from "../common/Faqs";
import Footer from "../common/Footer";
import xml from "../../assets/images/svg/tap-recorder-icon.svg";
import reelImage from "../../assets/images/webp/footer-bg-reel-img-2.webp";
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
import LibrarySliderCards from "./LibrarySliderCards";
const Library = ({ showSidebar }) => {
  return (
    <>
      <div className="bg-common-bg-image bg_attachment_fixed bg-cover relative pt-28 lg:pt-24">
        <div className="bottom_blur_hero w-full h-[50px] absolute bottom-0 left-0"></div>
        <img
          className="absolute left-4 min-[1440px]:hidden top-[117px] max-w-[70px] z-0 xl:block hidden"
          src={xml}
          alt="tap-recorder-icon"
        />
        <img
          className="absolute right-0 top-[230px] max-w-[170px] md:block hidden"
          src={reelImage}
          alt="reel"
        />
        <div
          className={`container max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto me-auto ms-0 max-[1439px]:mx-auto pb-16 sm:px-4 xl:px-0 px-0 relative min-h-[50vh] ${
            showSidebar ? "ms-0" : "ms-auto"
          }`}
        >
          <div className="w-full">
            <div>
              {/* MOST RANKED LIBRARY SLIDER   */}
              <LibrarySliderCards
                icon={<RecentlyWatchingIcon />}
                heading={"Most ranked/Suggested videos"}
                sliderArrowHidden={"hidden"}
                librarySliderData={mostRankedLibrary}
                sliderParent="pb-6"
              />
              {/* PLAYLIST LIBRARY SLIDER   */}
              <LibrarySliderCards
                icon={<PlaylistIcon />}
                heading={"Playlists"}
                librarySliderData={playlistLibrary}
                mostRankedSliderArrow={"hidden"}
                sliderParent="pb-6"
              />
              {/* LIKED LIBRARY SLIDER   */}
              <LibrarySliderCards
                icon={<LikeVideoIcon />}
                heading={"Liked Videos"}
                librarySliderData={likeVideoLibrary}
                mostRankedSliderArrow={"hidden"}
                sliderParent="pb-0"
              />
            </div>
          </div>
        </div>
        <Faqs />
      </div>
      <Footer />
    </>
  );
};

export default Library;
