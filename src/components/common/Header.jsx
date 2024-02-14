import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../assets/images/png/nav-logo.png";
import { CrossIcon, DownArrow, MenuIcon, NavNotificationIcon } from "./Icons";
import CustomButton from "./fields/button/CustomButton";
import { navDropdown } from "../../utils/Helper";
const Header = ({ showSidebar, toggleSidebar }) => {
  const [moviesDropdown, setMoviesDropdown] = useState(false);
  const [showsDropdown, setShowsDropdown] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="bg-black fixed top-0 left-0 right-0 z-20">
      {moviesDropdown || showsDropdown ? (
        <div
          onClick={() => {
            setMoviesDropdown(false);
            setShowsDropdown(false);
          }}
          className="h-screen w-full fixed bg-black/30 sm:z-30"
        ></div>
      ) : (
        ""
      )}
      <div className="container max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
        <div className="flex items-center justify-between py-2.5">
          <Link to={"/"}>
            <img className="max-w-[103px]" src={navLogo} alt="navLogo" />
          </Link>
          <span
            className="sm:hidden cursor-pointer"
            onClick={() => setMobileNav(true)}
          >
            <MenuIcon />
          </span>
          <div
            className={`flex justify-center flex-col sm:flex-row items-center gap-6 absolute sm:relative bg-black sm:bg-none h-screen sm:h-auto w-full sm:w-auto left-0 z-40 duration-300 ${
              mobileNav ? "top-0" : "top-[-100vh] sm:top-0"
            }`}
          >
            <span
              className="absolute top-3 right-3 sm:hidden cursor-pointer"
              onClick={() => setMobileNav(false)}
            >
              <CrossIcon />
            </span>
            <div
              onClick={() => setShowsDropdown(!showsDropdown)}
              className="cursor-pointer text-base sm:text-sm font-normal text-white/70 hover:text-white flex gap-[2px] duration-300 items-center relative"
            >
              {showsDropdown ? (
                <div className="py-1 bg-[rgba(255,_255,_255,_0.100)] backdrop-blur-[136.5px] shadow-[0px_5.86667px_17.6px_0px_rgba(0,_0,_0,_0.10)] rounded-md w-[150px] absolute z-30 top-7 right-0 flex flex-col gap-2">
                  {navDropdown.map((obj, index) => {
                    return (
                      <Link
                        key={index}
                        className="font-normal text-sm text-white w-full block p-3 duration-300 hover:bg-[#282525] border-l border-transparent hover:border-white/70"
                        to={obj.url}
                      >
                        {obj.title}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              MOVIES <DownArrow moviesDropdown={showsDropdown} />
            </div>
            <div
              className="cursor-pointer text-base sm:text-sm font-normal text-white/70 hover:text-white flex gap-[2px] duration-300 items-center relative"
              onClick={() => setMoviesDropdown(!moviesDropdown)}
            >
              {moviesDropdown ? (
                <div className="py-1 bg-[rgba(255,_255,_255,_0.100)] backdrop-blur-[136.5px] shadow-[0px_5.86667px_17.6px_0px_rgba(0,_0,_0,_0.10)] rounded-md w-[150px] absolute z-30 top-7 right-0 flex flex-col gap-2">
                  {navDropdown.map((obj, index) => {
                    return (
                      <Link
                        key={index}
                        className="font-normal text-sm text-white w-full block p-3 duration-300 hover:bg-[#282525] border-l border-transparent hover:border-white/70"
                        to={obj.url}
                      >
                        {obj.title}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              SHOWS <DownArrow moviesDropdown={moviesDropdown} />
            </div>
            {showSidebar ? (
              ""
            ) : (
              <div onClick={() => toggleSidebar(false)}>
                <CustomButton
                  title="Sign In" //set button title
                  isGradient={true} // is grident is  visible // controle  btn types
                  varient="button" // set button type like  Link and  Button
                  isVisible={true} // handle  button visibility
                  customStyles="text-center flex items-center justify-center" // add custom styles  \\ use custom styles with importent
                />
              </div>
            )}

            <Link to={"/notifications"}>
              <NavNotificationIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
