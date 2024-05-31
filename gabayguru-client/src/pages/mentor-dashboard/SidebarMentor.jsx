import React from "react";
import { FiCreditCard, 
  FiHome, 
  FiSettings, 
  FiUser } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const SidebarMentor = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-60 min-h-full font-semibold bg-light-bg text-base-content">
        {/* Sidebar content here */}
        <li>
          <Link to="/dashboard/mentor">
            <span className="mr-2 text-black">
              <FiHome />
            </span>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/mentor/sessions">
            <span className="mr-2 text-black">
            <MdOutlineOndemandVideo />
            </span>
            Sessions
          </Link>
        </li>
        <li>
          <Link to='/dashboard/mentor/ewallet'>
            <span className="mr-2 text-black">
              <FiCreditCard />
            </span>
            E-Wallet
          </Link>
        </li>
        <li>
          <Link to='/dashboard/mentor/session-requests'>
            <span className="mr-2 text-black">
            <BsFillExclamationCircleFill />
            </span>
            Session Requests
          </Link>
        </li>
        <li>
          <a>
            <span className="mr-2 text-black">
              <FiUser />
            </span>
            Profile
          </a>
        </li>
        <li>
          <a>
            <span className="mr-2 text-black">
              <FiSettings />
            </span>
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMentor;
