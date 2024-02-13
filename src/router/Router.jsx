import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/category/Category";
import Header from "../components/common/Header";
import CommonBigCard from "../components/common/card/CommonBigCard";
import Home from "../components/home/Home";
import ProductDetails from "../components/product-details/ProductDetails";
import CommonSmallCard from "../components/common/card/CommonSmallCard";
import Card from "../components/common/card/Card";

const Router = () => {
  return (
    <div className="h-screen">
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
      </div>
    </div>
  );
};

export default Router;
