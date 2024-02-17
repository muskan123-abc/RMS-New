import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/category/Category";
import Header from "../components/common/Header";
import Home from "../components/home/Home";
import ProductDetails from "../components/product-details/ProductDetails";
import Sidebar from "../components/common/sidebar/Sidebar";
import Notification from "../components/notification/Notification";
import Community from "../components/community/Community";
import WatchList from "../components/watchlist/WatchList";
import AccountDetail from "../components/myAccount/MyAccount";
import Hero from "../components/reviews/Hero";
import Trending from "../components/trending/Trending";
import Library from "../components/library/Library";
import Subscription from "../components/subscription/Subscription";
import History from "../components/history/History";

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
          <Route
            path="/watchlist"
            element={<WatchList showSidebar={showSidebar} />}
          />
          <Route path="/my-account" element={<AccountDetail />} />
          <Route path="/my-review" element={<Hero />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/history" element={<History />} />
          <Route
            path="/library"
            element={<Library showSidebar={showSidebar} />}
          />
          <Route path="/subscription" element={<Subscription scrollToTop={scrollToTop} />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
