import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Category from "../components/category/Category";
import Header from "../components/common/Header";
import Home from "../components/home/Home";
import ProductDetails from "../components/product-details/ProductDetails";
import Sidebar from "../components/common/sidebar/Sidebar";
import MoviesRatedCard from "../components/common/card/MoviesRatedCard";
import Notification from "../components/notification/Notification";
import BackToTop from "../components/common/BackToTop";
import Community from "../components/community/Community";
import WatchList from "../components/watchlist/WatchList";
import AccountDetail from "../components/myAccount/MyAccount";
import Hero from "../components/reviews/Hero";
import Trending from "../components/trending/Trending";
import Library from "../components/library/Library";
import Subscription from "../components/subscription/Subscription";
import VideoPlayer from "../components/product-details/VideoPlayer";
import ItemDetails from "../components/product-details/ItemDetails";
import History from "../components/history/History";
import NotFound from "../components/common/NotFound";

const Router = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  function scrollToTop() {
    // Assuming you are scrolling a div with the ID 'scrollParent'
    const scrollableDiv = document.getElementById("scrollParent");

    if (scrollableDiv) {
      scrollableDiv.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  const handleScroll = () => {
    // Assuming you are tracking the scroll position of the div with the ID 'scrollParent'
    const scrollableDiv = document.getElementById("scrollParent");

    if (scrollableDiv) {
      const position = scrollableDiv.scrollTop;
      setScrollPosition(position);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={`h-screen flex relative `}>
      <BackToTop scrollToTop={scrollToTop} scrollPosition={scrollPosition} />
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        scrollToTop={scrollToTop}
      />
      <div
        className="w-full overflow-y-auto overflow-x-hidden"
        id="scrollParent"
      >
        <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        <Routes>
          <Route
            path="/"
            element={
              <Home scrollToTop={scrollToTop} showSidebar={showSidebar} />
            }
          />
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
          <Route path="/subscription" element={<Subscription />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
