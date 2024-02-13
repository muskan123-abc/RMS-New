import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/category/Category";
import CommonSmallCard from "../components/common/card/CommonSmallCard";
import CommonSmallCardSlider from "../components/common/slider/CommonSmallCardSlider";
import Home from "../components/home/Home";
import ProductDetails from "../components/product-details/ProductDetails";
import { FanFavoriteContent } from "../components/home/Halper";
import CommonVideoSlider from "../components/common/slider/CommonVideoSlider";
import CommonBigCardSlider from "../components/common/slider/CommonBigCardSlider";

const Router = () => {
  const myarr = [
    {
      title: "lorem",
      content: "",
    },
    {
      title: "ipsum",
      content: "",
    },
    {
      title: "doller",
      content: "",
    },
    {
      title: "sit",
      content: "",
    },
    {
      title: "ammet",
      content: "",
    },
  ];
  return (
    <div className="h-screen">
      {/* <Sidebar /> */}
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-details/:slug" element={<ProductDetails />} />
          <Route path="/category" element={<Category />} />
        </Routes>
        {/* <CommonBigCard /> */}
        <CommonSmallCard />
        {/* <Card /> */}
        {/* <CommonCardSlider contentArr={myarr} />{" "} */}
        <CommonSmallCardSlider cardContent={FanFavoriteContent} />
        <CommonVideoSlider />
        <CommonBigCardSlider />
      </div>
    </div>
  );
};

export default Router;
