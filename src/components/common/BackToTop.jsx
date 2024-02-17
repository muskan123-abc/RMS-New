import { BackToTopIcon } from "./Icons";

const BackToTop = ({ scrollPosition, scrollToTop }) => {
  return (
    <>
      {/* // IF PAGE SCROLL VALUE GRATER THAN 500 THEN SHOW BACK TO TOP BUTTON */}

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
