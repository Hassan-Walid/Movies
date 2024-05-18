import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesAction = createAsyncThunk(
  "movies/getAllMovies",
  async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=1235f752774b75f09525d0d048e824ce"
    );
    const data = await res.data;

    return data;
  }
);
const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] },
  extraReducers: (builder) => {
    builder.addCase(moviesAction.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default moviesSlice.reducer;
