import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUpComing = createAsyncThunk(
  "getUpComingMovies/getUpComing",
  async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=1235f752774b75f09525d0d048e824ce"
    );

    const data = await res.data;
    console.log("here");
    // console.log(data);
    return data;
  }
);
const upComingSlice = createSlice({
  name: "upComing",
  initialState: { upComing: null },
  extraReducers: (builder) => {
    builder.addCase(getUpComing.fulfilled, (state, action) => {
      state.upComing = action.payload;
    });
  },
});

export default upComingSlice.reducer;
