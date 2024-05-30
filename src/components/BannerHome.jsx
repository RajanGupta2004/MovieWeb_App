import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const BannerHome = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageURL = useSelector((state) => state.movieoData.imageURl);

  // console.log(bannerData);

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const time = setInterval(() => {
      setCurrentImage(
        currentImage === bannerData.length - 1 ? 0 : currentImage + 1
      );
    }, 5000);

    return () => {
      clearInterval(time);
    };
  }, [bannerData, imageURL, currentImage]);

  return (
    <section className="h-full w-full ">
      <div className=" flex min-h-full max-h-[95vh] overflow-hidden  ">
        {bannerData?.map((data, index) => {
          return (
            <div
              className="min-w-full min-h-[450px] lg:min-h-full  relative transition-all "
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
              key={data.id + "bannerHome" + index}
            >
              <div className="w-full h-full">
                <img
                  className=" object-cover w-full h-full"
                  src={imageURL + data.backdrop_path}
                  alt="img"
                />
              </div>
              {/* button */}

              <div className="absolute top-0 flex items-center justify-between w-full h-full z-50 ">
                <button className=" text-2xl px-3 cursor-pointer">
                  <FaAngleLeft onClick={handlePrev} />
                </button>
                <button
                  onClick={handleNext}
                  className="text-2xl px-3 cursor-pointer "
                >
                  <FaAngleRight />
                </button>
              </div>

              <div className=" absolute top-0  w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto px-8 ">
                <div className="container mx-auto absolute bottom-7 max-w-md px-3">
                  <h2 className="text-3xl font-bold mb-3">
                    {data?.title || data?.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 ">{data.overview}</p>
                  <div className="flex gap-4 my-3 items-center">
                    <p>Rating: {data.vote_average}</p>
                    <span>|</span>
                    <p>View: {data.vote_count}</p>
                  </div>
                  <button className="text-black bg-white px-4 py-1 text-md my-3 font-bold rounded cursor-pointer hover:bg-slate-300">
                    Play
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
