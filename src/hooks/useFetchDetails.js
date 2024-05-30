import axios from "axios";
import { useEffect, useState } from "react";

const usefetchDetails = (enpoints) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(enpoints);
      setLoading(false);
      setData(res.data);
    } catch (error) {
      console.log("erroe", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [enpoints]);
  return { data, loading };
};

export default usefetchDetails;
