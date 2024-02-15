import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import Secondary from "./Secondary";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={` fixed min-[1350px]:hidden inset-0 min-h-full z-20 backdrop-blur-[6px] cursor-pointer w-[100%]  ${showSidebar ? "block" : "hidden"
          }`}
        onClick={() => setShowSidebar(false)}
      ></div>
      {/* Sidebar Content */}
      <div
        className={`${showSidebar ? "w-full" : "w-0"
          } max-w-[414px] flex overflow-hidden items-center justify-center  duration-300 min-[1350px]:left-0 top-[80px] z-30 h-[calc(100vh-80px)] bg-black fixed min-[1350px]:relative`}
      >
        {/* <button className="bg-red-800 p-4" onClick={() => setShowSidebar(false)}>
          sign out
        </button> */}
        <ProfileSidebar setShowSidebar={setShowSidebar} />
        <Secondary />
      </div>
    </>
  );
};

export default Sidebar;
