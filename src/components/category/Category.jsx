import React from "react";
import Hero from "./Hero";
import MostPopular from "./MostPopular";
import Footer from "../common/Footer";
import Faqs from "../common/Faqs";
import IndianTvShows from "./IndianTvShows";
import TvActionAdventure from "./TvActionAdventure";
import RomanceTvShow from "./RomanceTvShow";
import TvComedies from "./TvComedies";
import CategoryBigCard from "./CategoryBigCard";
const Category = ({ showSidebar }) => {
  return (
    <>
      <Hero showSidebar={showSidebar} />
      <MostPopular showSidebar={showSidebar} />
      <IndianTvShows showSidebar={showSidebar} />
      <TvActionAdventure showSidebar={showSidebar} />
      <CategoryBigCard showSidebar={showSidebar} />
      <RomanceTvShow showSidebar={showSidebar} />
      <TvComedies showSidebar={showSidebar} />
      <Faqs showSidebar={showSidebar} />
      <Footer showSidebar={showSidebar} />
    </>
  );
};

export default Category;
