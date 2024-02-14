import React from "react";
import Hero from "./Hero";
import MostPopular from "./MostPopular";
import Footer from "../common/Footer";
import Faqs from "../common/Faqs";
import IndianTvShows from "./IndianTvShows";
import TvActionAdventure from "./TvActionAdventure";
import RomanceTvShow from "./RomanceTvShow";
const Category = () => {
  return (
    <>
      <Hero />
      <MostPopular />
      <IndianTvShows />
      <TvActionAdventure />
      <RomanceTvShow/>
      <Faqs />
      <Footer />
    </>
  );
};

export default Category;
