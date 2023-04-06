import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const client = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
});

export const addBook = createAsyncThunk(
  'book/postBook',
  async (name, thunkAPI) => {
    try {
      const response = await client.post('PzX3g8pOsFuhp8v5Da2x/books', { name });
      return response.data;
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
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export default bookSlice.reducer;
