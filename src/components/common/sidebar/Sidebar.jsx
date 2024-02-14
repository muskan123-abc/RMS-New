import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import DropDownSidebar from "./Secondary";

const Sidebar = ({  setShowSidebar }) => {
  return (
    <div className="w-[414px] flex flex-col gap-10 items-center justify-center absolute min-[1350px]:sticky duration-300 min-[1350px]:left-0 top-0 z-40 h-screen bg-black">
      <button className="bg-red-800 p-4" onClick={() => setShowSidebar(false)}>
        sign out
      </button>
      <ProfileSidebar />
      <DropDownSidebar />
    </div>
  );
};

export default Sidebar;
