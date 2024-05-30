import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {
  const imageURl = useSelector((state) => state.movieoData.imageURl);
  const mediaType = data.media_type ?? media_type;
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[220px] max-w-[220px]  h-80 rounded overflow-hidden relative hover:scale-105 transition-all"
    >
      {imageURl + data.poster_path ? (
        <img className="" src={imageURl + data.poster_path} alt="img" />
      ) : (
        <div className="text-xl font-bold text-white">No Image Found</div>
      )}

      <div className="absolute  top-2">
        {trending && (
          <div className="bg-neutral-500 mx-2 rounded px-1">
            {index + 1}# trending
          </div>
        )}
      </div>

      <div className="absolute bottom-0 backdrop-blur-lg bg-black/70 w-full p-2">
        <h1>{data?.title || data?.name}</h1>
        <div className="flex items-center justify-between">
          <p>{data?.release_date}</p>
          <span className="bg-neutral-900 backdrop-blur-xl rounded-lg px-1">
            Rating {data?.vote_average?.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
