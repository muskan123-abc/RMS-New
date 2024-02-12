import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../home/Home";
import Sidebar from "../commonSidebar/Sidebar";
import Header from "../Header";
import ProductDetails from "../../product-details/ProductDetails";

const Router = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
