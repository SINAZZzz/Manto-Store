// :):
import React from "react";
import Profile from "./Profile/Profile";
// Link
import { Link } from "react-router-dom";
// Logo
import Logo from "../assets/img/logo.svg";
// Sign In
import SignIn from "./SignIn/SignIn";
const Header = () => {
  return (
    <header className="py-8 mb-12 border-b w-full">
      <div className="flex px-[7%] justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="" />
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
        {/* <Profile /> */}
      </div>
    </header>
  );
};

export default Header;
