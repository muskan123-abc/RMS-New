import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import Secondary from "./Secondary";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={` fixed custom-2xl:hidden inset-0 min-h-full z-20 backdrop-blur-[6px] cursor-pointer w-[100%]  ${
          showSidebar ? "block" : "hidden"
        }`}
        onClick={() => setShowSidebar(false)}></div>
      {/* Sidebar Content */}
      <div
        className={`${
          showSidebar ? "w-full" : "w-0"
        } max-w-[414px] transition-all  duration-200 flex overflow-hidden items-center justify-center   custom-2xl:left-0 top-[80px] z-30 h-[calc(100vh-80px)] bg-black fixed custom-2xl:relative`}>
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
