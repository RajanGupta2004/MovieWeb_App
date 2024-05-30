import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieoSlice";

function App() {
  const dispatch = useDispatch();
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response.data.results));
      // console.log(response.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchImageURL = async () => {
    try {
      const imageURL = await axios.get("/configuration");
      dispatch(setImageURL(imageURL.data.images.secure_base_url + "original"));
      // console.log(imageURL.data.images.secure_base_url + "original", 26);
    } catch (error) {
      console.log("erroe", error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchImageURL();
  }, []);
  return (
    <>
      <main className="pb-14 lg:pb-0">
        <Header />
        <div className="">
          <Outlet />
        </div>

        <Footer />
        <MobileNavigation />
      </main>
    </>
  );
}

export default App;
