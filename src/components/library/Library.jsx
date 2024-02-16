import React from "react";
import MostRanked from "./MostRanked";
import Playlists from "./Playlists";
import LikedVideos from "./LikedVideos";
import Faqs from "../common/Faqs";
import Footer from "../common/Footer";

const Library = () => {
  return (
    <>
      <MostRanked />
      <Playlists />
      <LikedVideos />
      <Faqs />
      <Footer />
    </>
  );
};

export default Library;
