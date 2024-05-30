import React from "react";
import { IoClose } from "react-icons/io5";
import usefetchDetails from "../hooks/useFetchDetails";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoPlayData } = usefetchDetails(
    `/${media_type}/${data}/videos`
  );
  const key = videoPlayData?.results?.[0]?.key;
  //   console.log(videoPlayData?.results[0]?.key);
  console.log(key);
  return (
    <section className="fixed top-10 left-0 right-0 bottom-0 bg-opacity-50 bg-neutral-500 flex items-center justify-center z-50 ">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded  relative">
        <button
          onClick={close}
          className="text-3xl absolute -right-7 -top-6 z-50"
        >
          <IoClose />
        </button>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${key}`}
        />
      </div>
    </section>
  );
};

export default VideoPlay;
