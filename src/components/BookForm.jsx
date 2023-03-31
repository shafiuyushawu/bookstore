import React from 'react';

const BookForm = () => (
  <div className="px-10 mx-24 shadow-xl card card-side bg-base-100">
    <div className="card-body">
      <h2 className="card-title">ADD A BOOK</h2>
      <form className="grid grid-cols-3 gap-10">
        <input
          type="text"
          placeholder="BOOK TITLE"
          className="w-full max-w-5xl input input-bordered "
        />
        <input
          type="text"
          placeholder="AUTHOR"
          className="w-full max-w-2xl input input-bordered "
        />
        <button type="button" className="btn btn-primary btn-wide">
          ADD A BOOK
        </button>
      </form>
    </div>
  </div>
);

export default BookForm;
