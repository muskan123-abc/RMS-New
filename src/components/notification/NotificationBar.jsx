import React from "react";

const NotificationsBar = ({ day, user, description, time, title }) => {
  return (
    <>
      {day && (
        <p className="font-medium sm:text-base text-sm mb-0 opacity-70">
          {day}
        </p>
      )}
      <div className="flex items-center px-3 sm:px-5 py-2 bg-light-white rounded-[12px] text-white mt-4 sm:mt-5 gap-4">
        <img className="w-[46px] h-[46px]" src={user} alt="user" />
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <p className="text-xs sm:text-sm font-medium mb-0 opacity-90 line-clamp-1 sm:line-clamp-2 max-w-[400px]">
                {description}
              </p>
              <p className="text-xs font-normal mb-0 opacity-70 whitespace-nowrap">
                {time}
              </p>
            </div>
            <p className="text-xs font-normal mb-0 opacity-70">{title}</p>
          </div>
          <button className="text-xs sm:text-sm font-medium mb-0 cursor-pointer duration-300 hover:text-light-yellow">
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationsBar;
