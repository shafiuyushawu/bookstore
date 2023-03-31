import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar bg-base-100 text-5xl px-24">
    <Link
      to="/"
      className="btn btn-ghost normal-case text-4xl font-bold text-primary hover:bg-primary hover:text-white"
    >
      BookStore CMS
    </Link>
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost normal-case text-2xl">
        Books
      </Link>
      <Link
        to="/category"
        className="btn btn-ghost normal-case text-2xl text-[#b3b3b3]"
      >
        Categories
      </Link>
    </div>
    <div className="avatar">
      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
    </div>
  </div>
);

export default Navbar;
