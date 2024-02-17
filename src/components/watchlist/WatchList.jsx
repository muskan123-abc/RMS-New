import React, { useState } from "react";
import WatchListCards from "./WatchListCards";
import { WatchListBigIcon } from "../common/Icons";
import CustomInput from "../../components/common/fields/CustomInput";
import { watchListCardData } from "./Helper";

const WatchList = () => {
  const [heartClicked, setHeartClicked] = useState([]);

  return (
    <>
      {/* Background */}
      <div className="bg-[url('/src/assets/images/webp/homepage_hero_bg_img.webp')] bg-no-repeat bg-center bg-cover relative z-10 pt-28 md:pt-20 pb-12 xl:py-0">
        <div className="mx-auto container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto max-[1439px]:mx-auto min-h-screen flex flex-col py-[100px]">
          <div className="flex justify-between sm:items-center pb-8 w-full sm:flex-row flex-col gap-4">
            {/* Title and Search Input */}
            <h2 className="font-medium text-white text-xxl flex items-center gap-[11px]">
              <WatchListBigIcon />
              Watchlist
            </h2>
            <CustomInput
              placeholder="Search"
              customStyles="md:w-[435px] sm:w-[300px] w-full"
              customStylesInput="w-full !pr-14"
              isButtonVisible={true}
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap w-100 gap-3 lg:gap-5 sm:mt-6">
            {/* MAP CODE START HERE */}
            {watchListCardData.map((item, index) => {
              const isLiked = heartClicked.includes(index);
              return (
                <WatchListCards
                  key={item.id}
                  index={index}
                  isLiked={isLiked}
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  heartClicked={heartClicked}
                  setHeartClicked={setHeartClicked}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchList;
