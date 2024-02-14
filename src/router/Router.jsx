import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/category/Category";
import Header from "../components/common/Header";
import Home from "../components/home/Home";
import ProductDetails from "../components/product-details/ProductDetails";
import Sidebar from "../components/common/sidebar/Sidebar";
import MoviesRatedCard from "../components/common/card/MoviesRatedCard";

const Router = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={`h-screen flex relative `}>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="w-full overflow-y-auto overflow-x-hidden">
        <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        <Routes>
          <Route path="/" element={<Home showSidebar={showSidebar} />} />
          <Route path="product-details/:slug" element={<ProductDetails />} />
          <Route path="/category" element={<Category />} />
        </Routes>
        {/* <MoviesRatedCard/> */}
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
