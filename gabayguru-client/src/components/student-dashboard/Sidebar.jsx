import React from "react";
import { FiCreditCard, FiGrid, FiHome, FiPlay, FiSettings, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer-side h-full">
      <label
        htmlFor="drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-60 font-semibold bg-light-bg text-base-content">
        <li>
          <Link to="/dashboard/student">
            <span className="mr-2 text-black">
              <FiHome />
            </span>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard/student/sessions">
          <span className="mr-2 text-black">
              <FiGrid />
            </span>
            Sessions
          </Link>
        </li>
        <li>
          <Link to="/dashboard/student/ewallet">
            <span className="mr-2 text-black">
              <FiCreditCard />
            </span>
            E-Wallet
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

export default Sidebar;
