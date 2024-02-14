import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/category/Category";
import Header from "../components/common/Header";
import CommonSmallCard from "../components/common/card/CommonSmallCard";
import Home from "../components/home/Home";
import ProductDetails from "../components/product-details/ProductDetails";
import Sidebar from "../components/common/sidebar/Sidebar";

const Router = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="h-screen flex relative">
      {showSidebar ? <Sidebar setShowSidebar={setShowSidebar} /> : ""}
      <div className="w-full overflow-y-auto overflow-x-hidden">
        <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-details/:slug" element={<ProductDetails />} />
          <Route path="/category" element={<Category />} />
        </Routes>
        {/* <CommonBigCard /> */}
        {/* <CommonSmallCard /> */}
        {/* <Card /> */}
        {/* <CommonCardSlider /> */}
        {/* <CommonSmallCardSlider cardContent={FanFavoriteContent} />
        <CommonVideoSlider />
        <CommonBigCardSlider />
        <RatingAndReview />
        <FeaturedToday />
        <Faqs />
        <Footer /> */}
      </div>
    </div>
  );
};

export default Router;
