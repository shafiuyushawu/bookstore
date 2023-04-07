import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/bookSlice';

const BookList = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="px-10 mx-24 card card-side bg-base-100">
      <div className="grid grid-cols-2 gap-x-32 card-body border-2 border-[#e8e8e8] shadow-md drop-shadow-sm my-3">
        <ul className="font-['Roboto-Slap']">
          <li>{book.category}</li>
          <li className="text-4xl text-[#121212] font-extrabold not-italic  tracking-[-0.2] leading-normal mt-[0.188rem] ">
            {book.title}
          </li>
          <li className="mt-[0.25rem] text-2xl  not-italic leading-normal font-light">
            {book.author}
          </li>
          <li>
            <ul className="mt-[0.25rem] flex gap-2">
              <li className="pr-3  border-r-2  border-[#e8e8e8] ">
                <button type="button" className="btn btn-sm btn-primary">
                  Comments
                </button>
              </li>
              <li className=" border-r-2  border-[#e8e8e8] pr-3">
                <button
                  onClick={handleClick}
                  type="button"
                  className="btn btn-sm btn-secondary"
                >
                  Remove
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-sm btn-info">
                  Edit
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="flex ">
          <li className="border-r-2  border-[#e8e8e8] mr-16">
            <ul className="flex gap-10 mr-32">
              <li>
                <div
                  className="radial-progress text-primary"
                  style={{ '--value': 70 }}
                />
              </li>
              <li>
                <ul className="font-['Montserrat']">
                  <li className="text-5xl">70%</li>
                  <li className="text-[#e8e8e8] text-xl">Completed</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="ml-16 font-['Roboto-Slap']">
            <ul className="flex flex-col gap-5 ">
              <li className="text-[#e8e8e8] text-xl">CURRENT CHAPTER</li>
              <li className="text-xl">Chapter 17</li>
              <li>
                {' '}
                <button type="button" className="btn btn-sm btn-primary">
                  UPDATE PROGRESS
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
BookList.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BookList;
