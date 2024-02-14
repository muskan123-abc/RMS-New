import React from "react";
import Hero from "./Hero";
import WatchVideos from "./WatchVideos";
import FanFavorite from "./FanFavorite";
import MostRatedMovies from "./MostRatedMovies";
import FeaturedToday from "./FeaturedToday";
import RatingAndReview from "./RatingAndReview";
import RecentlyViewed from "./RecentlyViewed";
import Faqs from "../common/Faqs";
import Footer from "../common/Footer";

const Home = ({ showSidebar }) => {
  return (
    <>
      <Hero showSidebar={showSidebar} />
      <WatchVideos />
      <FanFavorite />
      <MostRatedMovies />
      <FeaturedToday />
      <RatingAndReview />
      <RecentlyViewed />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
