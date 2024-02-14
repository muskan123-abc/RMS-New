import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/category/Category";
import Header from "../components/common/Header";
import CommonSmallCard from "../components/common/card/CommonSmallCard";
import Home from "../components/home/Home";
import ProductDetails from "../components/product-details/ProductDetails";

const Router = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* <Sidebar /> */}
      <div>
        <Header />
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
