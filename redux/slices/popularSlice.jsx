import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopular = createAsyncThunk(
  "getPopularMovies/getPopular",
  async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=1235f752774b75f09525d0d048e824ce"
    );

    const data = await res.data;
    return data;
  }
);

const PopularSlice = createSlice({
  name: "popular",
  initialState: { popular: null },
  extraReducers: (builder) => {
    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.popular = action.payload;
    });
    builder.addCase(getPopular.rejected, (state, action) => {
      console.log("error");
    });
  },
});

export default PopularSlice.reducer;
