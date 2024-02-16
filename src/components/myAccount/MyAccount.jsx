import React, { useState, useEffect } from "react";
import adventureSliderImg1 from "../../assets/images/adventureSliderImages/adventure-slider-img1.webp";
import { UsersIcon } from "../common/icons/sidebar/SideBar";
import CustomInput from "../common/fields/CustomInput";
import CustomButton from "../common/fields/button/CustomButton";

const AccountDetail = ({ showSidebar }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  const [name, setname] = useState("Floyd Miles");
  const [userName, setUserName] = useState("Designer");

  const steticData = {
    Name: "",
    username: "",
    address: "",
    city: "",
    dob: "",
    contact: "",
    phone: "",
    password: "",
  };
  const [formData, setFormData] = useState(steticData);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formData, " <========= formData");
    if (formData.Name === !"" && formData.username !== "") {
      setFormData(steticData);
    }
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  return (
    <>
      <div className="bg-my_account_bg bg-cover relative min-h-screen">
        <div
          className={`container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] min-[2200px]:mx-auto me-auto ms-0 max-[1439px]:mx-auto xl:pt-[100px] px-[26px] pt-4 ${
            showSidebar ? "ms-0" : "ms-auto"
          }`}>
          <div className="flex items-center gap-[11px] mb-[30px]">
            <UsersIcon />
            <span className="font-medium font-poppins text-[22px] text-white">
              My account
            </span>
          </div>
          <div className="flex gap-5 mb-[30px]">
            <img
              src={image ? URL.createObjectURL(image) : adventureSliderImg1}
              alt="profile img"
              className="max-w-[126px] w-full h-[126px] object-cover rounded-md"
            />
            <div>
              <p className="font-poppins font-medium sm:text-2xl text-xl text-white">
                {name}
              </p>
              <p className="font-poppins font-normal text-sm text-white opacity-70 mb-[25px]">
                {userName}
              </p>
              <input
                type="file"
                name="image"
                id="image"
                className="hidden"
                accept=".png,.jpg,.jpeg"
                onChange={handleImageChange}
              />
              <label
                htmlFor="image"
                className="common-border-button cursor-pointer  font-semibold text-sm sm:text-base text-white opacity-90 w-full py-2.5 px-3 rounded overflow-hidden border border-solid border-[#F2CD75] bg-black hover:border-transparent after:bg-[#A97424] z-10 flex justify-center relative duration-300 ease-linear after:absolute
               after:w-full after:h-0 after:top-0 after:left-0 after:z-[-1] after:duration-300 after:ease-linear hover:after:h-full hover:after:bottom-0">
                Change Profile image
              </label>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-4">
              <CustomInput
                placeholder="Display Name"
                width="w-full"
                handleInputChange={(value) =>
                  setFormData({
                    ...formData,
                    Name: value.target.value,
                  })
                }
                on
                value={formData.Name}
              />
              <CustomInput
                placeholder="Username"
                width="w-full"
                handleInputChange={(value) =>
                  setFormData({
                    ...formData,
                    username: value.target.value,
                  })
                }
                value={formData.username}
              />
              <CustomInput
                placeholder="Address"
                width="w-full"
                handleInputChange={(value) =>
                  setFormData({
                    ...formData,
                    address: value.target.value,
                  })
                }
                value={formData.address}
              />
              <CustomInput
                placeholder="City"
                width="w-full"
                handleInputChange={(value) =>
                  setFormData({
                    ...formData,
                    city: value.target.value,
                  })
                }
                value={formData.city}
              />
              <CustomInput
                placeholder="Date of Birth"
                type={formData.dob === "" ? "text" : "date"}
                width="w-full"
                handleInputChange={(value) =>
                  setFormData({
                    ...formData,
                    dob: value.target.value,
                  })
                }
                value={formData.dob}
              />
              <CustomInput
                placeholder="Contact"
                inputType="number"
                width="w-full"
                type="number"
                handleInputChange={(value) =>
                  setFormData({
                    ...formData,
                    contact: value.target.value,
                  })
                }
                value={formData.contact}
              />
              <CustomInput
                placeholder="Phone Number"
                type="number"
                inputType="number"
                width="w-full"
                handleInputChange={(value) =>
                  setFormData({
                    ...formData,
                    phone: value.target.value,
                  })
                }
                value={formData.phone}
              />
              <CustomInput
                inputType="password"
                placeholder="Password"
                type="password"
                width="w-full"
                handleInputChange={(value) =>
                  setFormData({
                    ...formData,
                    password: value.target.value,
                  })
                }
                value={formData.password}
              />
            </div>
            <p className="font-medium font-poppins text-sm sm:text-base text-white mb-[6px] mt-5">
              Your Account
            </p>
            <p className="font-normal font-poppins text-xs sm:text-sm text-white mb-[6px] opacity-70">
              You sign in to RMS with your Google Account
            </p>
            <p className="font-medium font-poppins text-sm sm:text-base text-white mb-[6px] mt-5">
              Choose how you appear and what you see on RMS
            </p>
            <p className="font-normal font-poppins text-xs sm:text-sm text-white mb-[6px] opacity-70">
              Signed in as Floydmiles@gmail.com
            </p>
            <div className="flex justify-end gap-6 items-center pb-[23px] mt-[30px]">
              <CustomButton
                title="Cancel" //set button title
                isGradient={false} // is grident is  visible // controle  btn types
                varient="button" // set button type like  Link and  Button
                isVisible={true} // handle  button visibility
                customStyles="text-center flex items-center justify-center" // add custom styles  \\ use custom styles with importent
              />
              <CustomButton
                title="Save Changes" //set button title
                isGradient={true} // is grident is  visible // controle  btn types
                varient="button" // set button type like  Link and  Button
                isVisible={true} // handle  button visibility
                customStyles="text-center flex items-center justify-center" // add custom styles  \\ use custom styles with importent
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountDetail;
