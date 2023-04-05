import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemId: '1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemId: '2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemId: '3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload: { itemId, title, author } }) => {
      state.books.push({ itemId, title, author });
    },
    removeBook: (state, { payload: { itemId } }) => ({
      ...state,
      books: state.books.filter((book) => book.itemId !== itemId),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
