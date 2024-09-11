import React from "react";
// Link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 mb-12 border-b w-full">
      <div className="flex px-[7%] justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <p className="text-xl font-bold">SINA ZINSAZ</p>
        </Link>
        {/* button */}
        <div className="flex items-center gap-6 z-10">
          <Link to="/Login" className="hover:text-violet-900 transition">
            ورود
          </Link>
          <Link
            to="/Singin"
            className="bg-violet-700 hover:bg-violet-800
             text-white px-4 py-3
            rounded-lg transition"
          >
            ثبت نام
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
