import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import favoriteSlice from "./slices/favoriteSlice";
import topRatedMovie from "./slices/topRatedMovie";
import nowPlayingMovie from "./slices/NowPlatingSlice";
import popularSlice from "./slices/popularSlice";
import upComingSlice from "./slices/upComingSlice";

const store = configureStore({
  reducer: {
    favList: favoriteSlice,
    movies: moviesSlice,
    topRated: topRatedMovie,
    nowPlaying: nowPlayingMovie,
    popular: popularSlice,
    upComing: upComingSlice,
  },
});

export default store;
