import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const client = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
});

export const addBook = createAsyncThunk(
  'book/addBook',
  async (bookData, thunkAPI) => {
    try {
      const response = await client.post('/apps/4v1hffdFqLXYffLZXELX/books', bookData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Something went wrong' });
    }
  },
);

export const getAllBooks = createAsyncThunk(
  'book/getAllBooks',
  async (_, thunkAPI) => {
    try {
      const response = await client.get('/apps/4v1hffdFqLXYffLZXELX/books');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Something went wrong' });
    }
  },
);

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (bookId, thunkAPI) => {
    try {
      await client.delete(`apps/4v1hffdFqLXYffLZXELX/books/${bookId}`);
      return bookId;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Something went wrong' });
    }
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: [...state.books, action.meta.arg],
      }))
      .addCase(addBook.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload.error,
      }))
      .addCase(getAllBooks.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(getAllBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: Object.entries(action.payload).map(([key, arr]) => arr.map((item) => {
          const itemCopy = { ...item };
          itemCopy.id = key;
          return itemCopy;
          // flatten the resulting array of arrays into a single array.
        })).flat(),
      }))
      .addCase(getAllBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload.error,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(deleteBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: state.books.filter((book) => book.id !== action.payload),
      }))
      .addCase(deleteBook.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload.error,
      }));
  },
});

export default bookSlice.reducer;
