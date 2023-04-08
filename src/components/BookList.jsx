import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/bookSlice';

const BookList = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className=" card card-side bg-base-100 bg-[#fafafa]">
      <div className="grid grid-cols-2 gap-x-32 card-body border-2 border-[#e8e8e8] bg-white h-[10.625rem] my-3">
        <ul className="font-['Roboto-Slap']">
          <li>{book.category}</li>
          <li className="text-[1.375rem] text-[#121212] font-bold not-italic  tracking-[-0.2] leading-normal mt-[0.188rem] h-[1.813rem] w-[12.313rem] ">
            {book.title}
          </li>
          <li className="mt-[0.25rem] text-[#4386bf] text-[0.875rem] font-[300] not-italic leading-normal tracking-normal font-light h-[1.188rem] w-[6.688rem]">
            {book.author}
          </li>
          <li>
            <ul className="mt-[0.25rem] flex gap-2">
              <li className="pr-3  border-r-2  border-[#e8e8e8] ">
                <button
                  type="button"
                  className="text-[#4386bf] text-[0.875rem] font-[300] not-italic leading-normal tracking-normal font-light"
                >
                  Comments
                </button>
              </li>
              <li className=" border-r-2  border-[#e8e8e8] pr-3">
                <button
                  onClick={handleClick}
                  type="button"
                  className="text-[#4386bf] text-[0.875rem] font-[300] not-italic leading-normal tracking-normal font-light"
                >
                  Remove
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-[#4386bf] text-[0.875rem] font-[300] not-italic leading-normal tracking-normal font-light"
                >
                  Edit
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="flex ">
          <li className="border-r-2  border-[#e8e8e8] ">
            <ul className="flex gap-10 mr-12">
              <li>
                <div
                  className="radial-progress text-[#0290ff]"
                  style={{ '--value': 80 }}
                />
              </li>
              <li>
                <ul className="font-['Montserrat']">
                  <li className="text-[#121212] text-[2rem] leading-normal tracking-normal font-normal">
                    80%
                  </li>
                  <li className="text-[#121212] opacity-50 text-[0.875re] leading-normal tracking-normal font-normal">
                    Completed
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="ml-16 font-['Roboto-Slap']">
            <ul className="flex flex-col gap-5 ">
              <li className="text-[#121212] text-[0.813rem] font-[300] font-normal leading-normal tracking-normal opacity-50 h-[1.125rem]  w-[7.875rem]">
                CURRENT CHAPTER
              </li>
              <li className="text-[#121212] text-[1rem] font-[300] font-normal tracking-[-0.4px] leading-normal w-[4.68rem] h-[1.313rem] ">
                Chapter 17
              </li>
              <li>
                {' '}
                <button
                  type="button"
                  className="text-[0.813rem] font-[300] font-normal text-[#e8e8e8] tracking-[0.5px] leading-normal bg-[#0290ff] h-[2.063rem] w-[11.5rem] "
                >
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
