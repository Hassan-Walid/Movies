import { createAction, createSlice } from "@reduxjs/toolkit";

export const moviesAction = createAction("movies/getAllMovies", async () => {
  // const res =
});
const moviesSlice = createSlice({
  name: "movies",
  initialState: { movies: {} },
});
