import user from "./img/template_3.jpg";
import edit from "./img/edit.png";
import inbox from "./img/envelope.png";
import settings from "./img/settings.png";
import help from "./img/question.png";
import logout from "./img/log-out.png";
import product from "./img/template_3.jpg";
import { LuTrash } from "react-icons/lu";
import "./profile.css";
import { Link } from "react-router-dom";

import React, { useState, useEffect, useRef } from "react";

function Profile() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div
          // xl:ml-[7.5rem] lg:ml-[9rem] md:ml-[5.5rem] sm:ml-[10rem]
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={user}></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <div className="dropdown-body">
            <h3>
              سبد خرید
              <br />
              <br />
              <span>امیر حسین</span>
            </h3>
            <ul>
              <DropdownItem
                img={product}
                text={"اسم محصول"}
                price={"200 هزارتومن"}
              />
              <DropdownItem
                img={product}
                text={"اسم محصول"}
                price={"200 هزارتومن"}
              />
              <DropdownItem
                img={product}
                text={"اسم محصول"}
                price={"200 هزارتومن"}
              />
              <DropdownItem
                img={product}
                text={"اسم محصول"}
                price={"200 هزارتومن"}
              />
              <DropdownItem
                img={product}
                text={"اسم محصول"}
                price={"200 هزارتومن"}
              />
              {/* <DropdownItem img={edit} text={"Edit Profile"} />
              <DropdownItem img={inbox} text={"Inbox"} />
              <DropdownItem img={settings} text={"Settings"} />
              <DropdownItem img={help} text={"Helps"} />
              <DropdownItem img={logout} text={"Logout"} /> */}
            </ul>
          </div>
          <div className="pay-body">
            {/* button */}
            <div className="flex items-center text-center gap-6 pl-5">
              <Link
                to=""
                className="bg-violet-700 w-full hover:bg-violet-800 text-white px-4 py-3 
            rounded-lg transition font-DanaBold"
              >
                پرداخت و خرید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem dropdown-prdoct-item">
      <img src={props.img}></img>
      <p> {props.text} </p>
      <p> {props.price} </p>
      <LuTrash className="Delete-icon" />
    </li>
  );
}

export default Profile;
