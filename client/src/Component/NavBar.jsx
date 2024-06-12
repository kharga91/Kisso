// components/NavBar.js

import Link from 'next/link';
import { FaSearch } from "react-icons/fa"
import { MdShoppingCart } from "react-icons/md"
import { FiAlignJustify } from "react-icons/fi"
import { FiChevronDown } from "react-icons/fi"
import Image from 'next/image';
import { SearchIcon } from '@/Component/SearchIcon/SearchIcon';
import SignInForm from '@/Component/SignIn/SignIn';


const NavBar = () => {
  return (
    
    <header className="bg-white ring-1 mobile-hidden">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center px-18">

          <Image src="/logo.png" width={150} height={50} alt="logo" />
        </div>

        {/* Search Bar */}
        <div className="flex">
          <input

            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10 hidden lg:block",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />

        </div>

        {/* Sign Up and Cart Buttons */}
        <div className="flex items-center space-x-4">
          <Link legacyBehavior href="/signup">
            <a className="px-4 py-2 bg-slate-500 text-red-950 rounded-full">Sign Up</a>
          </Link>
          <Link legacyBehavior href="/cart">
            <a className="px-4 py-2  text-red-950 rounded-full"><MdShoppingCart className=' w-10 h-10' /></a>
          </Link>
        </div>
      </div>

      <div className=" py-1 px-45  ">
        <div className="container mx-auto px-4 flex  justify-between  ">
          <div>

            <button className='bg-purple-600 px-16 flex w-8 h-8 text-red-950 rounded-full' legacyBehavior href="/All-categories">
              <FiAlignJustify />
              <a className="hover:text-blue-500">All categories</a>
              <FiChevronDown />
            </button>

          </div>
          <div className='bg-gray '>
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
      <SignInForm/>
    </header>
  );
};

export default NavBar;
