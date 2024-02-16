import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import userImg2 from "../../assets/images/notifications/image-2.png";
import userImg from "../../assets/images/notifications/image.png";
import { CommunityIcon, EmojiIcon, SendArrow, UploadImgIcon } from "./Icons";
const Community = ({ showSidebar }) => {
  const [senderMessages] = useState([
    "Congue porta volutpat dignissim commodo.",
    "Congue porta volutpat dignissim commodo.",
    "Congue porta volutpat dignissim commodo.",
    "Congue porta volutpat dignissim commodo.",
  ]);
  const [myMessages, setMyMessages] = useState([
    "Congue porta volutpat dignissim commodo.",
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const latestValueRef = useRef(null);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  const currentTime = getCurrentTime();
  const currentDate = getCurrentDate();

  const InputHandler = (event) => {
    setCurrentMessage(event.target.value);
  };

  const EmojiSelectHandler = (chosenEmoji) => {
    setChosenEmoji(chosenEmoji.emoji);
    setCurrentMessage((prevMessage) => prevMessage + chosenEmoji.emoji);
  };

  const SendHandler = () => {
    if (currentMessage.trim() !== "") {
      const newMessage = currentMessage;
      setMyMessages([...myMessages, newMessage]);
      setCurrentMessage("");
      setChosenEmoji(null); // Close the emoji picker
    }
  };

  const KeyPressHandler = (event) => {
    if (event.key === "Enter") {
      SendHandler();
    }
  };

  useEffect(() => {
    if (latestValueRef.current) {
      latestValueRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [myMessages]);

  const [setImage] = useState(null);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="min-h-screen bg-white pt-[106px] bg-common-bg-image bg-cover relative font-poppins">
      <div
        className={`container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto me-auto ms-0 max-[1439px]:mx-auto px-3 md:px-6 relative h-[calc(100vh-106px)] ${
          showSidebar ? "ms-0" : "ms-auto"
        }`}>
        <div className="h-[calc(100vh-200px)] overflow-auto ">
          <h4 className="sm:text-xl text-base flex items-center gap-3 text-white font-semibold mb-[30px]">
            <CommunityIcon />
            My communities
          </h4>
          <p className="text-base font-semibold text-white opacity-70 text-center mb-4">
            29/01/2024
          </p>
          {senderMessages.map((obj, index) => (
            <div
              key={index}
              className="sm:flex items-center gap-4 bg-[#FFFFFF0A] py-3 sm:py-2 px-3 sm:px-5 rounded-2xl max-w-[90%] sm:max-w-[70%] mb-5">
              <div className="h-[46px] w-[46px] min-w-[46px] rounded mb-3 sm:mb-0">
                <img className="object-cover" src={userImg} alt="userImg" />
              </div>
              <div>
                <div className="flex gap-[10px] items-center">
                  <p className="text-sm font-semibold text-white opacity-90">
                    Marvin McKinney
                  </p>
                  <p className="hidden sm:block text-xs text-white opacity-70 font-normal">
                    29/01/2024
                  </p>
                  <p className="hidden sm:block text-xs text-white opacity-70 font-normal">
                    3:29 PM
                  </p>
                </div>
                <p className="text-xs text-white opacity-70 font-normal max-w-[528px]">
                  {obj}
                </p>
              </div>
              <p className="block sm:hidden text-xs text-white opacity-70 font-normal mt-3">
                29/01/2024
              </p>
              <p className="block sm:hidden text-xs text-white opacity-70 font-normal">
                3:29 PM
              </p>
            </div>
          ))}
          <p className="text-base font-semibold text-white opacity-70 text-center pt-[10px] mb-4">
            Today
          </p>
          {myMessages.map((obj, index) => (
            <div
              key={index}
              ref={index === myMessages.length - 1 ? latestValueRef : null}
              className="sm:flex items-center gap-4 bg-[#A97424] py-3 sm:py-2 px-3 sm:px-5 rounded-2xl max-w-[90%] sm:max-w-[70%] mb-5 ms-auto">
              <div className="h-[46px] w-[46px] min-w-[46px] rounded mb-3 sm:mb-0">
                <img className="object-cover" src={userImg2} alt="userImg" />
              </div>
              <div>
                <div className="flex gap-[10px] items-center">
                  <p className="text-sm font-semibold text-white opacity-90">
                    Marvin McKinney
                  </p>
                  <p className="hidden sm:block text-xs text-white opacity-70 font-normal">
                    {currentDate}
                  </p>
                  <p className="hidden sm:block text-xs text-white opacity-70 font-normal">
                    {currentTime}
                  </p>
                </div>
                <p className="text-xs text-white opacity-70 font-normal max-w-[528px]">
                  {obj}
                </p>
              </div>
              <p className="block sm:hidden text-xs text-white opacity-70 font-normal mt-3">
                {currentDate}
              </p>
              <p className="block sm:hidden text-xs text-white opacity-70 font-normal">
                {currentTime}
              </p>
            </div>
          ))}
          <div className="absolute bottom-[30px] w-full left-0 flex justify-between items-center px-3 md:px-6">
            <div
              className={`border border-solid border-[#82817F] rounded-[127px] flex items-center justify-between ps-5 relative w-full`}>
              <input
                className="font-poppins text-sm font-normal text-white bg-transparent py-2 lg:py-3 outline-none placeholder:text-white w-full pr-3"
                type="text"
                placeholder="Type Message"
                onKeyPress={KeyPressHandler}
                value={currentMessage}
                onChange={InputHandler}
              />
              <div className="relative">
                {chosenEmoji ? (
                  <div className="absolute left-[-220px] max-[374px]:left-[-171px] bottom-[50px] lg:bottom-[70px]">
                    <EmojiPicker onEmojiClick={EmojiSelectHandler} />
                  </div>
                ) : (
                  ""
                )}
                <div className="flex items-center gap-3 sm:gap-5">
                  <span>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="hidden"
                      accept=".png,.jpg,.jpeg"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="image" className="cursor-pointer">
                      <UploadImgIcon />
                    </label>
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setChosenEmoji(!chosenEmoji)}>
                    <EmojiIcon />
                  </span>
                  <button
                    onClick={SendHandler}
                    className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-[50%] p-2 flex justify-center items-center cursor-pointer bg-gradient">
                    <SendArrow />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
