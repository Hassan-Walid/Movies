import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favList",
  initialState: { favList: [] },
  reducers: {
    getFav: (state, action) => {
      return state.favList;
    },
    addFav: (state, action) => {
      state.favList = [...state.favList, action.payload];
    },
    removeFav: (state, action) => {
      state.favList = state.favList.filter((m) => m.id !== action.payload);
    },
  },
});

export const { getFav } = favSlice.actions;
export const { addFav } = favSlice.actions;
export const { removeFav } = favSlice.actions;
export default favSlice.reducer;
