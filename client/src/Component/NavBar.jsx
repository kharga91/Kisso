// components/NavBar.js

import Link from 'next/link';
import { FaSearch } from "react-icons/fa"
import { MdShoppingCart } from "react-icons/md"
import { FiAlignJustify } from "react-icons/fi"
import { FiChevronDown } from "react-icons/fi"
const NavBar = () => {
  return (
    <header className="bg-purple-400 ring-4 mobile-hidden">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center px-24">

          <img src='' alt="Logo" className="h-10 w-10" />
        </div>

        {/* Search Bar */}
        <div className="flex    mx-4">
          <input
            type="search"
            id='search'
            name='search'
            placeholder="Search Product for Lips Care"
            className="  text-center w-52 justify-center px-4 py-2 border rounded-md"

          />
          <FaSearch />
        </div>

        {/* Sign Up and Cart Buttons */}
        <div className="flex items-center space-x-4">
          <Link legacyBehavior href="/signup">
            <a className="px-4 py-2 bg-white text-red-950 rounded-full">Sign Up</a>
          </Link>
          <Link legacyBehavior href="/cart">
            <a className="px-4 py-2  text-red-950 rounded-full"><MdShoppingCart className=' w-10 h-10' /></a>
          </Link>
        </div>
      </div>

      <div className="bg-purple-400 py-1 px-45 ">
        <div className="container mx-auto px-4 flex justify-between  ">
          <div>

            <button className='bg-purple-600 px-16 flex w-full h-full text-red-950 rounded-full' legacyBehavior href="/All-categories">
              <FiAlignJustify />
              <a className="hover:text-blue-500">All categories</a>
              <FiChevronDown />
            </button>

          </div>
          <div>
            <Link legacyBehavior href="/">
              <a className="hover:text-blue-500">Home</a>
            </Link>
            <Link legacyBehavior href="/lips-care">
              <a className="hover:text-blue-500">Lips Care</a>
            </Link>
            <Link legacyBehavior href="/Shop">
              <a className="hover:text-blue-500">Shop</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
