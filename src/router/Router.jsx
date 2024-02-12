import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Sidebar from "../components/common/sidebar/Sidebar";
import Header from "../components/common/Header";
import ProductDetails from "../components/product-details/ProductDetails";

const Router = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-details/:slug" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
