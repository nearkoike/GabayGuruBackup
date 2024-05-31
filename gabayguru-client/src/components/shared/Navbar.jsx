import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBell, FaUser } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/BrowseMentor">Browse Mentors</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  const { user, logout } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout().then(() => {
      // Sign-out successful.
      window.location.reload();
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <header className="min-w-full shadow-md bg-light-bg mx-auto my-0 container sticky top-0 z-10">
      <div className="navbar mx-auto my-0" style={location.pathname.startsWith('/dashboard') ? { maxWidth: '1650px' } : { maxWidth: '1400px' }}>
        <div className="navbar-start w-1/3">
          {/* Hamburger Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          {/* Logo */}
          <a className="" href="/">
            <img
              src="/gabayguru-logo.png"
              alt="GabayGuru Logo"
              className="max-w-52"
            />
          </a>
        </div>

        {/* Navbar Items */}
        <div className="navbar-end w-2/3 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {user && (
              <li>
                <Link to="/dashboard/student">Dashboard</Link>
              </li>
            )}
            {navItems}
            {!user && (
              <li>
                <Link to="/auth/signin">Sign In</Link>
              </li>
            )}
          </ul>
          {!user && (
            <Link
              to="/auth/signup"
              className="btn bg-blue text-white px-6 ml-6"
            >
              Sign Up
            </Link>
          )}
          {user && <div className="flex">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn-ghost btn-circle flex items-center justify-center">
                  <div className="indicator">
                    <FaBell className='text-black'/>
                  </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span>Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-blue btn-block">View All</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn-ghost btn-circle flex items-center justify-center">
                  <div className="indicator">
                    <FaUser className='text-black'/>
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a onClick={handleLogout}>Logout</a></li>
                </ul>
              </div>
            </div>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
