import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageURl: "",
};

export const movieoSlice = createSlice({
  name: "movieo",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },

    setImageURL: (state, action) => {
      state.imageURl = action.payload;
    },
  },
});

// console.log(initialState.bannerData, 17);

export const { setBannerData, setImageURL } = movieoSlice.actions;

export default movieoSlice.reducer;
