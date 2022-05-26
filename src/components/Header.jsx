/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
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
      </div>
    </nav>
  );
};

export default Header;
