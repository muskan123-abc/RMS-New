import React, { useState } from "react";
import WatchListCards from "./WatchListCards";
import { WatchlistIcon } from "../common/Icons";
import CustomInput from "../../components/common/fields/CustomInput";
import { WatchlistData } from "./Helper";
import Footer from "../common/Footer";
const WatchList = () => {
  const [heartClicked, setHeartClicked] = useState([]);

  return (
    <>
      <div className="bg-[url('/src/assets/images/webp/homepage_hero_bg_img.webp')] bg-no-repeat bg-center bg-cover relative pt-28 min-[1280px]:pt-[100px] z-10 pb-20">
        <div className="mx-auto container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto max-[1439px]:mx-auto">
          <div className="flex justify-between sm:items-center pb-8 w-full sm:flex-row flex-col gap-4">
            <h2 className="font-medium text-white text-xxl flex items-center gap-[11px]">
              <WatchlistIcon />
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
            {WatchlistData.map((item, index) => {
              const isLiked = heartClicked.includes(index);
              return (
                <>
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
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WatchList;
