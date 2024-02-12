import React from "react";
import CustomButton from "./fields/button/CustomButton";
import CustomInput from "./fields/CustomInput";
import { SearchIcon } from "./Icons";

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
      <CustomInput
        id=""
        type="password" // set input type like  password/email/text by default it is  text
        placeholder="passsword *****" // set  input placeholder by  default it is  search
        buttonIcon={<SearchIcon />} // add custom icon for  button and default have search icon
        customStyles="!w-full " //style input parent
        customStylesInput=" " //style input
        customStylesButton=" " // style  input button
        isButtonVisible={true} // handle  button visibility
        onChange="" // add  onchange event
      />
    </div>
  );
};

export default Header;
