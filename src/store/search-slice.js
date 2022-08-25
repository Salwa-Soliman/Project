import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchOpened: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    openSearch: (state) => {
      state.isSearchOpened = true;
    },
    closeSearch: (state) => {
      state.isSearchOpened = false;
    },
  },

  extraReducers: {},
});

export default searchSlice;

export const { openSearch, closeSearch } = searchSlice.actions;
