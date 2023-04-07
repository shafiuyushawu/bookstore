import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../redux/books/bookSlice';
import BookList from './BookList';

function Book() {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {books.map((book) => (
        <BookList key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Book;
