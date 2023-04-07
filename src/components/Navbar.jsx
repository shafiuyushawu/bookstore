import { Link } from 'react-router-dom';
import profile from '../assets/img/movie.png';

const Navbar = () => (
  <div className="px-24 text-5xl navbar bg-base-100">
    <Link
      to="/"
      className="text-4xl font-bold normal-case btn btn-ghost text-primary hover:bg-primary hover:text-white"
    >
      BookStore CMS
    </Link>
    <div className="flex-1">
      <Link to="/" className="text-2xl normal-case btn btn-ghost">
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
      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={profile} alt="profile" />
      </div>
    </div>
  </div>
);

export default Navbar;
