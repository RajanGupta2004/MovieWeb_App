import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const fetchData = async () => {
    try {
      const res = await axios.get(`discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => [...prev, ...res.data.results]);
      // console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(data);

  const handleScroll = () => {
    // console.log(
    //   window.innerHeight,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.scrollTop
    // );

    if (
      window.innerHeight + document.documentElement.scrollTop + 300 >=
      document.documentElement.scrollHeight
    ) {
      setPageNo((prev) => prev + 1);
      console.log("test");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setData([]);
    setPageNo(1);
  }, [params.explore]);

  useEffect(() => {
    fetchData();
  }, [pageNo]);
  return (
    <div className="pt-16">
      <div className="container mx-auto px-3 ">
        <h1 className="text-xl font-bold my-4 capitalize ">
          Popular {params.explore} shows
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4">
          {data?.map((exploreData, index) => {
            return (
              <Card
                data={exploreData}
                key={exploreData.id + "exploreSection" + index}
                media_type={params.explore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
