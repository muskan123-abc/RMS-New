import React from "react";
import CustomButton from "./fields/button/CustomButton";
import CustomInput from "./fields/CustomInput";
import { DownloadIcon, SearchIcon } from "./Icons";

const Header = () => {
  return (
    <div>
      Header
      <div className="flex gap-3 flex-wrap">
        {" "}
        <CustomButton
          title="DownLoad" //set button title
          isGradient={true} // is grident is  visible // controle  btn types
          varient="button" // set button type like  Link and  Button
          url="" // set url when button type  is link
          isVisible={true} // handle  button visibility
          customStyles="" // add custom styles  \\ use custom styles with importent
          icon={<DownloadIcon />} // add icon //
        />
        <CustomButton
          title="Lorem" //set button title
          isGradient={true} // is grident is  visible // controle  btn types
          varient="button" // set button type like  Link and  Button
          url="" // set url when button type  is link
          isVisible={true} // handle  button visibility
          customStyles="" // add custom styles  \\ use custom styles with importent
        />
      </div>
      <CustomInput
        id=""
        type="password" // set input type like  password/email/text by default it is  text
        placeholder="passsword*****" // set  input placeholder by  default it is  search
        buttonIcon={<SearchIcon />} // add custom icon for  button and default have search icon
        customStyles=" " //style input parent \\use custom styles with importent
        customStylesInput="" //style input \\use custom styles with importent
        customStylesButton="" // style  input button \\use custom styles with importent
        isButtonVisible={true} // handle button visibility
        onChange={""} // add  onchange event
      />
    </div>
  );
};

export default Header;
