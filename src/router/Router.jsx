import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/category/Category";
import Header from "../components/common/Header";
import Home from "../components/home/Home";
import ProductDetails from "../components/product-details/ProductDetails";
import Sidebar from "../components/common/sidebar/Sidebar";
import MoviesRatedCard from "../components/common/card/MoviesRatedCard";
import Notification from "../components/notification/Notification";
import BackToTop from "../components/common/BackToTop";
import Community from "../components/community/Community";
import AccountDetail from "../components/myAccount/MyAccount";
import Hero from "../components/reviews/Hero";

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
          <Route
            path="/category"
            element={<Category showSidebar={showSidebar} />}
          />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/community" element={<Community />} />
          <Route path="/my-account" element={<AccountDetail />} />
          <Route path="/review" element={<Hero />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
