import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/bookSlice';

const BookList = ({ book }) => (
  <div className="px-10 mx-24 card card-side bg-base-100">
    <div className="grid grid-cols-3 card-body">
      <ul>
        <li className="text-sm font-extrabold text-[#8c8c8c]">
          {book.category}
        </li>
        <li className="text-2xl font">{book.title}</li>
        <li className="text-sm">{book.author}</li>
        <li>
          <ul className="flex gap-2">
            <li>
              <button type="button" className="btn btn-sm btn-primary">
                Comments
              </button>
            </li>
            <li>
              <button type="button" className="btn btn-sm btn-secondary">
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
      <ul className="flex gap-10">
        <li>
          <div
            className="radial-progress text-primary"
            style={{ '--value': 70 }}
          />
        </li>
        <li>
          <ul>
            <li className="text-5xl">70%</li>
            <li className="text-[#979797]">Completed</li>
          </ul>
        </li>
      </ul>
      <ul className="flex flex-col gap-5 ">
        <li className="text-[#979797]">Current Chapter</li>
        <li>Chapter 17</li>
        <li>
          {' '}
          <button type="button" className="btn btn-sm btn-primary">
            UPDATE PROGRESS
          </button>
        </li>
      </ul>
    </div>
  </div>
);
BookList.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookList;
