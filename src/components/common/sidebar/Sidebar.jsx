import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import DropDownSidebar from "./Secondary";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`${
        showSidebar ? "  w-[414px] " : " w-0"
      } flex overflow-hidden flex-col gap-10 items-center justify-center  duration-300 min-[1350px]:left-0 top-0 z-40 h-screen bg-black absolute min-[1350px]:relative`}>
      <button className="bg-red-800 p-4" onClick={() => setShowSidebar(false)}>
        sign out
      </button>
      <ProfileSidebar />
      <DropDownSidebar />
    </div>
  );
};

export default Sidebar;
