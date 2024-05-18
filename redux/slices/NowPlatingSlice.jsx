import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNowPlaying = createAsyncThunk(
  "getNowPlayingMovies/getNowPlaying",
  async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=1235f752774b75f09525d0d048e824ce"
    );

    const data = await res.data;
    return data;
  }
);

const nowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState: { nowPlaying: null },
  extraReducers: (builder) => {
    builder.addCase(getNowPlaying.fulfilled, (state, action) => {
      state.nowPlaying = action.payload;
    });
    builder.addCase(getNowPlaying.rejected, (state, action) => {
      console.log("error");
    });
  },
});

export default nowPlayingSlice.reducer;
