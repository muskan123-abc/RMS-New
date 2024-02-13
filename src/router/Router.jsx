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
import RatingAndReview from "../components/home/RatingAndReview";
import Footer from "../components/common/Footer";
import Faqs from "../components/common/Faqs";
import Header from "../components/common/Header";
import CommonCardSlider from "../components/common/slider/CommonCardSlider";
import FeaturedToday from "../components/home/FeaturedToday";

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
        <CommonSmallCard />
        {/* <Card /> */}
        {/* <CommonCardSlider /> */}
        <CommonSmallCardSlider cardContent={FanFavoriteContent} />
        <CommonVideoSlider />
        <CommonBigCardSlider />
        <RatingAndReview />
        <FeaturedToday />
        <Faqs />
        <Footer />
      </div>
    </div>
  );
};

export default Router;
