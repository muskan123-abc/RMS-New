import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import DropDownSidebar from "./DropDownSidebar";

const Sidebar = () => {
  return (
    <div className="w-[414px]">
      <ProfileSidebar />
      <DropDownSidebar />
    </div>
  );
};

export default Sidebar;
