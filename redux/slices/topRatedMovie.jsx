import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTopRated = createAsyncThunk(
  "getTopRatedMovies/getTopRated",
  async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=1235f752774b75f09525d0d048e824ce"
    );

    const data = await res.data;
    // console.log(data);
    return data;
  }
);
const topRatedSlice = createSlice({
  name: "topRated",
  initialState: { topRated: null },
  extraReducers: (builder) => {
    builder.addCase(getTopRated.fulfilled, (state, action) => {
      state.topRated = action.payload;
    });
  },
});

export default topRatedSlice.reducer;
