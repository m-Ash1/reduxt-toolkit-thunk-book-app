const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getBooks = createAsyncThunk(
  "book/getBook",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3006/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (bookData, thunkAPI) => {
    try {
      const { getState } = thunkAPI;
      const res = await fetch("http://localhost:3006/books", {
        method: "POST",
        body: JSON.stringify({ ...bookData, createdBy: getState().auth.name }),
        headers: { "content-type": "application/json" },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id, thunkAPI) => {
    try {
      await fetch(`http://localhost:3006/books/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBook = createAsyncThunk(
  "books/getBook",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3006/books/${id}`, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: null,
    isLoading: false,
    error: null,
    currentBook: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(insertBook.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(insertBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getBook.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentBook = action.payload;
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
