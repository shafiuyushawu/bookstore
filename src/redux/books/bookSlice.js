import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  bookTitle: '',
  bookAuthor: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload: { bookTitle, bookAuthor } }) => {
      state.books.push({ bookTitle, bookAuthor });
    },
    deleteBook: () => { },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
