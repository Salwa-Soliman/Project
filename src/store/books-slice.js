import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, update, search, get } from "../BooksAPI";

export const shelves = ["Currently Reading", "Want To Read", "Read"];

export const getAllBooks = createAsyncThunk(
  "books/getAllBooks",
  async (payload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await getAll();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBookById = createAsyncThunk(
  "books/getBookById",
  async (payload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await get(payload.id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBookShelf = createAsyncThunk(
  "books/updateBookShelf",
  async (payload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await update(payload.book, payload.shelf);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchBooks = createAsyncThunk(
  "books/searchBooks",

  async (payload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await search(payload.query);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  allBooks: [],
  searchResultBooks: [],
  noMatch: false,
  viewedBook: {},
  searchQuery: "",
  isLoading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      if (action.payload === "") {
        state.searchResultBooks = [];
      }
    },
    resetSearchQuery: (state) => {
      state.searchQuery = "";
      state.searchResultBooks = [];
    },
    clearBookDetails: (state) => {
      state.viewedBook = {};
    },
  },

  extraReducers: {
    [getAllBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      console.log(action);
    },

    [getAllBooks.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.allBooks = action.payload;

      console.log(action);
    },

    [getAllBooks.rejected]: (state, action) => {
      state.isLoading = false;

      state.error = action.payload;

      console.log(action);
    },

    [getBookById.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      console.log(action);
    },

    [getBookById.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.viewedBook = action.payload;

      console.log(action);
    },

    [getBookById.rejected]: (state, action) => {
      state.isLoading = false;

      state.error = action.payload;

      console.log("err", action);
    },

    [updateBookShelf.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      console.log(action);
    },

    [updateBookShelf.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { book, shelf } = action.meta.arg;
      // update allBooks[]
      const index = state.allBooks.findIndex(
        (existingBook) => existingBook.id === book.id
      );

      if (index === -1) {
        // new element => push to allBooks
        state.allBooks.push({ ...book, shelf });
        // update book in search results
        state.searchResultBooks.find(
          (resultBook) => resultBook.id === book.id
        ).shelf = shelf;
      } else {
        //element exists within allBooks
        state.allBooks[index].shelf = shelf;
      }

      // const resultIndex = console.log(action);
    },

    [updateBookShelf.rejected]: (state, action) => {
      // state.isLoading = false;
      state.error = action.payload;

      console.log(action);
    },

    [searchBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.noMatch = false;
      console.log(action);
    },

    [searchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;

      if (action.payload.error) {
        state.searchResultBooks = [];
        state.noMatch = true;
      } else {
        state.searchResultBooks = action.payload.map((book) => {
          // check if book already exists in my shelves
          const existingBook = state.allBooks.find((b) => b.id === book.id);
          // if exists => UPDATE SHELF PROPERTY
          if (existingBook) {
            book.shelf = existingBook.shelf;
          } else {
            book.shelf = "none";
          }
          return book;
        });
      }

      console.log(action);
    },

    [searchBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action);
    },
  },
});

export const {
  updateFetchedBooks,
  setSearchQuery,
  resetSearchQuery,
  clearBookDetails,
} = booksSlice.actions;
export default booksSlice;
