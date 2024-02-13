import React from "react";
import image from "../../../assets/images/png/dummy-file.png";
import { ChennalIcon, ShareIcon } from "../Icons";
import { ratingStars } from "../../../utils/CommonFunction";
import CustomButton from "../fields/button/CustomButton";

const CommonSmallCard = () => {
  return (
    <div>
      {/* slider type -1  */}
      {/* <div className="group rounded-xl cursor-pointer card_backdrop_filter border border-solid border-[#474643] p-2  mb-2 mx-auto w-[98%] sm:max-w-[280px]">
        <div
          className={`flex bg-cover bg-no-repeat rounded-xl bg-center h-[530px] relative p-2`}
          style={{
            backgroundImage: `url(${image})`,
          }}>
          <div className=" flex  flex-col flex-grow justify-end">
            <h5 className="font-poppins text-[16px]  font-semibold text-white opacity-90  mb-2">
              In elit nullam sit quam
            </h5>
            <span className="flex items-center text-2xl text-white">
              <ChennalIcon />+
            </span>
            <div className=" flex  items-center gap-2 mb-1">
              <p className="font-poppins text-sm font-normal text-white opacity-70 mb-0">
                Your rating: 5/5
              </p>
              <span className="flex gap-1">{ratingStars(3)}</span>
            </div>
            <div className="flex gap-3 pt-3">
              <CustomButton
                title="Watchlist" //set button title
                isGradient={true} // is grident is  visible // controle  btn types
                varient="button" // set button type like  Link and  Button
                url="" // set url when button type  is link
                isVisible={true} // handle  button visibility
                customStyles="" // add custom styles  \\ use custom styles with importent
              />
              <CustomButton
                title="Trailer" //set button title
                isGradient={false} // is grident is  visible // controle  btn types
                varient="button" // set button type like  Link and  Button
                url="" // set url when button type  is link
                isVisible={true} // handle  button visibility
                customStyles="" // add custom styles  \\ use custom styles with importent
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="sm:max-w-[270px] group rounded-xl card_backdrop_filter border cursor-pointer border-solid border-[#474643] p-2 bg-[#1A1917] mx-2 mb-2">
        <div className={`flex rounded-xl w-full flex-col `}>
          {" "}
          <img src={image} alt=" lorem" />
          <p className=" font-poppins text-sm text-white font-medium opacity-90 my-2">
            Sed atvelrra lobotis
          </p>
          <span className="flex items-center text-2xl text-white">
            <ChennalIcon />+
          </span>
          <p className=" font-poppins text-xs text-white font-normal opacity-70 my-2">
            YM Movie Trailer
          </p>
          <p className=" font-poppins text-xs text-white font-normal opacity-70  lfex gap-x-3">
            <span className=" inline-block">5.3M views</span>
            <span className=" inline-block">2 month ago</span>
          </p>
          <div className="flex gap-1 items-center my-3">
            <span className="flex gap-1">{ratingStars(3)}</span>
          </div>
          <div className="flex flex-col">
            <CustomButton
              title="Add a Watchlist" //set button title
              isGradient={true} // is grident is  visible // controle  btn types
              varient="button" // set button type like  Link and  Button
              isVisible={true} // handle  button visibility
              customStyles="text-center flex items-center justify-center" // add custom styles  \\ use custom styles with importent
            />
            <CustomButton
              title="Share" //set button title
              isGradient={true} // is grident is  visible // controle  btn types
              varient="button" // set button type like  Link and  Button
              isVisible={true} // handle  button visibility
              customStyles="mt-3 text-center flex  items-center justify-center" // add custom styles  \\ use custom styles with importent
              icon={<ShareIcon />} // add icon //
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonSmallCard;
