import React from "react";
import ProfileImg from "../../../assets/images/sidebar/profile_img.png";
import { sideList, sideTopList } from "../../../utils/Helper";
import { Link, useLocation } from "react-router-dom";

const ProfileSidebar = ({ setShowSidebar, scrollToTop }) => {
  const location = useLocation();
  const handleSideBar = () => {
    if (window.innerWidth < 1350) {
      setShowSidebar(false);
    }
  };
  return (
    <>
      <div className="w-full custom-xxs:max-w-[150px] custom-xs:max-w-[173px] h-full bg-[#373022] pb-4 overflow-y-auto custom_Scroll_none relative">
        <div className="pt-5 custom-4xl:pt-[52px] pb-[10px] flex justify-center">
          <img className="w-14 h-[57px]" src={ProfileImg} alt="profile-img" />
        </div>
        <h2 className="font-poppins custom-xxs:text-base custom-xs:text-lg leading-[156%] text-white  text-center mb-5">
          Floyd Miles
        </h2>
        {sideTopList.map((obj, index) => (
          <div key={index}>
            <div className="flex items-center justify-between custom-xxs:mx-2 custom-xs:mx-[10px] py-[10px] border-b border-[#59554C]">
              <h2 className="font-poppins leading-[118.75%] custom-xxs:text-xs custom-xs:text-sm text-white/80 whitespace-nowrap">
                {obj.title}
              </h2>
              <p className="font-poppins leading-[118.75%] custom-xxs:text-xs custom-xs:text-sm text-white/80 whitespace-nowrap">
                {obj.rank}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-6">
          {sideList.map((obj, index) => {
            const isActive = location.pathname === obj.url;
            return (
              <div
                key={index}
                className={`custom-xxs:ps-3 custom-xs:ps-4 mb-[10px] opacity-80 hover:opacity-100 hover:border-l-2 border-l-2 border-transparent hover:border-white/25 hover:bg-gradient-to-r from-white/10 to-white/10 cursor-pointer duration-300 ${isActive
                  ? "border-white/25 bg-gradient-to-r from-white/10 to-white/10"
                  : ""
                  }`}>
                {obj.title === "Sign out" ? (
                  <button
                    className="py-[10px] flex items-center gap-2"
                    onClick={() => { setShowSidebar(false); scrollToTop(); }}>
                    <span>{obj.image}</span>
                    <h2
                      className={`font-poppins leading-[137%] custom-xxs:text-sm custom-xs:text-base text-white whitespace-nowrap ${isActive ? "" : ""
                        }`}>
                      {obj.title}
                    </h2>
                  </button>
                ) : (
                  <Link
                    to={obj.url}
                    onClick={() => {
                      scrollToTop();
                      handleSideBar();
                    }}
                    className="py-[10px] flex items-center gap-2">
                    <span>{obj.image}</span>
                    <h2
                      className={`font-poppins leading-[137%] custom-xxs:text-sm custom-xs:text-base text-white whitespace-nowrap ${isActive ? "" : ""
                        }`}>
                      {obj.title}
                    </h2>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
