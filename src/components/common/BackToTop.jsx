import React, { useEffect, useState } from "react";
import { BackToTopIcon } from "./Icons";

const BackToTop = ({ scrollToTop, scrollableRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    if (scrollableRef.current) {
      const position = scrollableRef.current.scrollTop;
      setScrollPosition(position);
    }
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    return () => {
      if (scrollableRef.current) {
        scrollableRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollableRef]);

  return (
    <>
      {/* IF PAGE SCROLL VALUE GRATER THAN 300 THEN SHOW BACK TO TOP BUTTON */}
      <div
        className={`fixed right-[2.2%] flex justify-center items-center bg-gradient z-50 rounded-[100%] cursor-pointer animate-[wiggle_2s_ease-in-out_infinite] hover:shadow-dark-yellow duration-300 sm:w-12 w-8 sm:h-12 h-8 ${
          scrollPosition > 300 ? "bottom-[4%]" : ""
        }`}
        onClick={() => scrollToTop()}
      >
        <BackToTopIcon />
      </div>
    </>
  );
};

export default BackToTop;
