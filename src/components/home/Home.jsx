import React from "react";
import Faqs from "../common/Faqs";
import Footer from "../common/Footer";
import FanFavorite from "./FanFavorite";
import FeaturedToday from "./FeaturedToday";
import Hero from "./Hero";
import MostRatedMovies from "./MostRatedMovies";
import RatingAndReview from "./RatingAndReview";
import RecentlyViewed from "./RecentlyViewed";
import WatchVideos from "./WatchVideos";

const Home = ({ showSidebar,scrollToTop }) => {
  return (
    <>
      <Hero showSidebar={showSidebar} />
      <WatchVideos showSidebar={showSidebar} />
      <FanFavorite showSidebar={showSidebar} />
      <MostRatedMovies showSidebar={showSidebar} />
      <FeaturedToday showSidebar={showSidebar} />
      <RatingAndReview showSidebar={showSidebar} />
      <RecentlyViewed showSidebar={showSidebar} />
      <Faqs showSidebar={showSidebar} />
      <Footer showSidebar={showSidebar} scrollToTop={scrollToTop} />
    </>
  );
};

export default Home;
