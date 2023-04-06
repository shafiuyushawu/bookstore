import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = uuidv4();
    if (title !== '' && author !== '') {
      dispatch(addBook({
        item_id: itemId, title, author, category: '',
      }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="px-10 mx-24 shadow-xl card card-side bg-base-100">
      <div className="card-body">
        <h2 className="card-title">ADD A BOOK</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-10">
          <input
            type="text"
            placeholder="BOOK TITLE"
            className="w-full max-w-5xl input input-bordered "
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="AUTHOR"
            className="w-full max-w-2xl input input-bordered "
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-wide">
            ADD A BOOK
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
