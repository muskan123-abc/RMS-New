import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/category/Category";
import Header from "../components/common/Header";
import Sidebar from "../components/common/sidebar/Sidebar";
import Home from "../components/home/Home";
import ProductDetails from "../components/product-details/ProductDetails";

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
      </div>
    </div>
  );
};

export default Router;
