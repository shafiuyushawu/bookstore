import { useSelector } from 'react-redux';
import BookList from './BookList';

const Books = () => {
  const books = useSelector((state) => state.book.books);
  return (
    <div>
      {books.map((book) => (
        <BookList key={book.itemId} book={book} />
      ))}
    </div>
  );
};

export default Books;
