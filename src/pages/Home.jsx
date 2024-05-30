import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import useFetch from "../hooks/useFetch";

import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";

const Home = () => {
  const trending = useSelector((state) => state.movieoData.bannerData);

  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: populatTVshowsData } = useFetch("/tv/popular");
  const { data: onAirShow } = useFetch("/tv/on_the_air");
  console.log(nowPlayingData);

  return (
    <div>
      <BannerHome />

      <HorizontalScrollCard
        data={trending}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={topRatedData}
        heading={"Top Rated Movies"}
        media_type={"movie"}
      />

      <HorizontalScrollCard
        data={populatTVshowsData}
        heading={"Popular TV shows"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={onAirShow}
        heading={"On Air Show"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
