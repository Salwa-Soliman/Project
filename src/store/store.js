import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./books-slice";
import searchSlice from "./search-slice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    books: booksSlice.reducer,
  },
});
