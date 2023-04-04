import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './category/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer.reducer,
  },
});
export default store;
