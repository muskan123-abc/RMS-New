import React, { useState } from "react";
import noNotificationIcon from "../../assets/images/notifications/disable-notification-icon.png";
import { NotificationBellIcon } from "./Icons,";
import NotificationsBar from "./NotificationBar";
import { NotificationData, NotificationData2 } from "./Helper";

const Notification = ({ showSidebar }) => {
  const [notificationRead, setNotificationRead] = useState(false);

  return (
    <div className="bg-common-bg-image bg-cover relative pt-[100px] z-10 pb-20 min-h-screen">
      <div
        className={`px-3 sm:px-6 container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto me-auto max-[1439px]:mx-auto font-poppins text-white ${
          showSidebar ? "ms-0" : "ms-auto"
        }`}>
        <div className="flex items-center justify-between mb-4 font-medium">
          <h4 className="sm:text-xl text-base flex items-center gap-2 sm:gap-3 mb-0">
            <NotificationBellIcon />
            Notifications
          </h4>
          <button
            className={`sm:text-base text-sm mb-0 cursor-pointer  duration-300 ${
              notificationRead
                ? "text-light-yellow hover:text-white"
                : "hover:text-light-yellow"
            }`}
            onClick={() => {
              setNotificationRead(!notificationRead);
            }}>
            {notificationRead ? "Mark all as Unread" : "Mark all as Read"}
          </button>
        </div>

        <p className="font-normal sm:text-base text-sm mb-0">
          <span className="opacity-70">You have</span>&nbsp;
          <span className="font-medium">{notificationRead ? "0" : "29"}</span>
          &nbsp;
          <span className="opacity-70">notifications to go through</span>
        </p>
        {notificationRead ? (
          <div className="h-[85vh] flex items-center justify-center">
            <img
              className="w-full max-w-[100px] sm:max-w-[150px] object-contain"
              src={noNotificationIcon}
              alt="no notification bell icon"
            />
          </div>
        ) : (
          <>
            {/* NOTIFICATIONS BARS */}
            {/* 1. */}
            <div className="mt-8">
              {NotificationData.map((obj, index) => (
                <NotificationsBar
                  key={index}
                  day={obj.day}
                  user={obj.image}
                  description={obj.description}
                  time={obj.time}
                  title={obj.title}
                />
              ))}
            </div>
            {/* 2. */}
            <div className="mt-8">
              {NotificationData2.map((obj, index) => (
                <NotificationsBar
                  key={index}
                  day={obj.day}
                  user={obj.image}
                  description={obj.description}
                  time={obj.time}
                  title={obj.title}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Notification;
