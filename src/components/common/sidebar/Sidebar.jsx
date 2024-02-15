import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import Secondary from "./Secondary";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`${showSidebar ? "w-full" : "w-0"
        } max-w-[414px] flex overflow-hidden items-center justify-center  duration-300 min-[1350px]:left-0 -bottom-[80px] z-40 h-[calc(100vh-80px)] bg-black fixed min-[1350px]:relative`}
    >
      {/* <button className="bg-red-800 p-4" onClick={() => setShowSidebar(false)}>
        sign out
      </button> */}
      <ProfileSidebar setShowSidebar={setShowSidebar} />
      <Secondary />
    </div>
  );
};

export default Sidebar;
