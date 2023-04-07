import { Link } from 'react-router-dom';
import profile from '../assets/img/movie.png';

const Navbar = () => (
  <div className="px-24 text-5xl navbar bg-base-100 border-2 border-[#e8e8e8] h-[5.938rem] ">
    <Link
      to="/"
      className="text-[1.875rem] font-['Montserrat']  font-bold leading-normal tracking-normal text-[#0290ff]"
    >
      BookStore CMS
    </Link>
    <div className="flex-1 mx-7">
      <Link
        to="/"
        className="font-['Montserrat'] text-[0.813rem] font-normal leading-normal tracking-[1.9px] text-[#121212] my-[1.125rem] mx-[2.563rrem]"
      >
        BOOKS
      </Link>
      <Link
        to="/category"
        className="mx-7 font-['Montserrat'] leading-normal tracking-[1.9px] text-[#121212] font-normal text-[0.813rem] opacity-50"
      >
        CATEGORIES
      </Link>
    </div>
    <div className="avatar">
      <div className="w-10 rounded-full ring ring-[#e8e8e8] ring-offset-base-100 ring-offset-1">
        <img src={profile} alt="profile" />
      </div>
    </div>
  </div>
);

export default Navbar;
