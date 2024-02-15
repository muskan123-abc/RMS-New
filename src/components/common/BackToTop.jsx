import { useEffect, useState } from "react";
import { BackToTopIcon } from "./Icons";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* // IF PAGE SCROLL VALUE GRATER THAN 500 THEN SHOW BACK TO TOP BUTTON */}

      <div
        className={` fixed  right-[2.2%] flex justify-center items-center bg-gradient z-50 rounded-[100%] cursor-pointer animate-[wiggle_2s_ease-in-out_infinite] hover:shadow-dark-yellow duration-300 sm:w-12 w-8 sm:h-12 h-8 ${
          scrollPosition > 300 ? "bottom-[-40%]" : "bottom-[4%]"
        }`}
        onClick={() => scrollToTop()}>
        <BackToTopIcon />
      </div>
    </>
  );
};

export default BackToTop;
