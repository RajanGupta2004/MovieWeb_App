import React, { useState } from "react";
import { useParams } from "react-router-dom";
import usefetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import VideoPlay from "../components/VideoPlay";

const DetailsPage = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");
  const params = useParams();
  const imageURL = useSelector((state) => state.movieoData.imageURl);
  const { data } = usefetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = usefetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const { data: similarData } = usefetchDetails(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: reccomemdedData } = usefetchDetails(
    `/${params?.explore}/${params?.id}/recommendations`
  );

  const handlePlayVideo = (id) => {
    console.log(id);
    setPlayVideoId(id);
    setPlayVideo(true);
  };
  // console.log("similarData", similarData.results);
  // console.log("reccomemdedData", reccomemdedData.results);
  // console.log(playVideoId);
  return (
    <div>
      <div className="w-full h-[400px] relative hidden lg:block ">
        <div className="w-full h-full">
          <img
            className="h-full object-cover w-full"
            src={imageURL + data.backdrop_path}
            alt="img"
          />
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 py-20 lg:py-0 flex  flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="lg:-mt-28 lg:mx-0 relative mx-auto w-fit">
          <img
            className="h-80  lg:min-w-[15rem] object-cover w-60 rounded"
            src={imageURL + data.poster_path}
            alt="img"
          />
          <button
            onClick={() => handlePlayVideo(data.id)}
            className="mt-3 text-xl py-3 px-4 w-full bg-white text-black rounded cursor-default font-bold hover:bg-gradient-to-l from-red-400 to-orange-600 hover:scale-105 transition-all"
          >
            Play Now
          </button>
        </div>
        <div className="my-3">
          <h2 className="text-lg lg:text-3xl font-bold">
            {data?.title || data.name}
          </h2>
          <p className="text-neutral-400 my-3">{data?.tagline}</p>
          <hr />
          <div className="flex items-center my-3 px-1 gap-2">
            <p>Rating: {Number(data?.vote_average).toFixed(1)} +</p>
            <span>|</span>
            <p>Views :{data?.vote_count}</p>
            <span>|</span>
            <p>Duration : {(Number(data?.runtime) / 60).toFixed(1)}</p>
          </div>
          <hr />
          <div>
            <h1 className="text-2xl font-bold my-3">OverViews</h1>
            <p className="my-3">{data?.overview}</p>
            <hr />
            <div className="flex items-center gap-2 my-3 text-center">
              <p>Status: {data?.status}</p>
              <span>|</span>
              <p>Release Date :{data?.release_date}</p>
              <span>|</span>
              <p>Revenu: {data?.revenue}</p>
            </div>
            <hr />
          </div>

          <div className="">
            {/* <p>
              <span className="">Director :</span>
              {castData?.cast[0]?.original_name}
            </p> */}
          </div>
          <div className="container mx-auto px-3">
            <h2 className="text-2xl font-bold my-3">Star Casts: </h2>
            <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-6">
              {castData?.cast
                ?.filter((ele) => ele.profile_path)
                .map((starCast, index) => {
                  return (
                    <div key={starCast.id + "starCast" + index} className="">
                      <div className="">
                        <img
                          className="w-24 h-24 rounded-full object-cover"
                          src={imageURL + starCast?.profile_path}
                          alt="img"
                        />
                      </div>
                      <p className="text-center text-sm text-neutral-400">
                        {starCast?.name}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <HorizontalScrollCard
          data={similarData.results}
          heading={"Similar " + params?.explore}
          media_type={params?.explore}
        />
      </div>
      <div>
        <HorizontalScrollCard
          data={reccomemdedData.results}
          heading={"Recommended  " + params?.explore}
          media_type={params?.explore}
        />
      </div>
      {playVideo && (
        <VideoPlay
          data={playVideoId}
          close={() => setPlayVideo(false)}
          media_type={params?.explore}
        />
      )}
    </div>
  );
};

export default DetailsPage;
