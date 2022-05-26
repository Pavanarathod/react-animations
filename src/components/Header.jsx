/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [showMenu, setShowMenue] = useState(false);
  return (
    <nav className="relative container mx-auto p-6">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <img src="/images/logo.svg" alt="" />
        </div>
        {/* menus */}
        <div className="hidden lg:inline-flex items-center space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue cursor-pointer">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue cursor-pointer">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue cursor-pointer">
            About us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue cursor-pointer">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue cursor-pointer">
            Community
          </a>
        </div>

        {/* BUTTON */}
        <button className="hidden lg:block p-3 px-6 text-white bg-brightRed rounded-full self-baseline hover:bg-brightRedLight">
          Get Started
        </button>

        {/* icons */}
        <div
          className="lg:hidden cursor-pointer transition-all"
          onClick={() => setShowMenue(!showMenu)}
        >
          {showMenu ? (
            <XIcon className="h-7 w-7 transition-all duration-75" />
          ) : (
            <MenuAlt2Icon className="h-7 w-7 transition-all duration-[0.5s]" />
          )}
        </div>
      </div>

      {/* MOBILE MENUE */}

      {showMenu && (
        <div className="lg:hidden transition-all duration-200 ease-in-out">
          <div className="absolute flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
