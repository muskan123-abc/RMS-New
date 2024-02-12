import React from "react";
import CustomButton from "./fields/button/CustomButton";

const Header = () => {
  return (
    <div>
      Header
      <div className="flex gap-3 flex-wrap">
        {" "}
        <CustomButton
          title="Lorem"
          isGradient={true}
          varient="button"
          url="//##/"
          isVisible={true}
          customStyles=""
        />
        <CustomButton
          title="Ipsum doller sit ammit"
          isGradient={false}
          varient="link"
          url="//##/"
          isVisible={true}
          customStyles=""
        />
      </div>
    </div>
  );
};

export default Header;
