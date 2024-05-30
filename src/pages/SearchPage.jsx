import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const query = location.search.slice(3);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`/search/multi`, {
        params: {
          query: location.search.slice(3),
          page: 1,
        },
      });
      setData((prev) => [...prev, ...res.data.results]);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
      setData([]);
    }
  }, [location.search]);
  // console.log(data);
  return (
    <div className="pt-16  ">
      <div className="lg:hidden mx-1 my-2 z-30 sticky top-[70px]">
        <input
          type="text"
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          placeholder="Search movie..."
          className="py-1 text-lg w-full bg-white text-neutral-900 mx-2 rounded-full px-4"
        />
      </div>
      <div className="container mx-auto">
        <div>
          {isloading && <div className="text-xl font-bold">Loading...</div>}
        </div>
        <h1 className="text-xl font-bold mx-5 my-5">Search Results</h1>
        {data.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start">
            {data?.map((searchData, index) => {
              return (
                <Card
                  data={searchData}
                  key={searchData.id + "search" + index}
                  media_type={searchData.explore}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-xl font-bold">No Search Result found</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
