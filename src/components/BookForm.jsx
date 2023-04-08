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
      const newBook = {
        item_id: itemId,
        title,
        author,
        category: '',
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className=" card card-side bg-[#fafafa]  rounded-none mt-7">
      <div className=" border-t-2 border-[#e8e8e8]">
        <h2 className="text-[#888888] h-[1.5rem] w-[10.875rem] mb-[1.188rem] mt-5 w-[10.875rem] h-[1.5rem] font-['Montserrat'] text-[1.25rem] font-bold leading-normal tracking-[-0.18px] ">
          ADD A BOOK
        </h2>
        <form onSubmit={handleSubmit} className="mt-5">
          <input
            type="text"
            placeholder="BOOK TITLE"
            className="w-[45.5rem] h-[2.813rem] py-[0.675rem] px-[0.938rem]  mr-[2.135rem]  border-2 border-[#e8e8e8] placeholder:text-[#e8e8e8] "
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="AUTHOR"
            className="h-[2.812rem] w-[21rem] py-[0.675rem] px-[0.938rem] mr-[2.135rem] border-2 border-[#e8e8e8] placeholder:text-[#e8e8e8]"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#0290ff] w-[15rem] h-[2.813rem] items-center  text-center text-white font-normal font-bold text-[0.813rem] leading-normal tracking-[0.5px] "
          >
            ADD A BOOK
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
