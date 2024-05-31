import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/student-dashboard/Sidebar";
import SidebarMentor from "../pages/mentor-dashboard/SidebarMentor";

const Dashboard = () => {
  const [user, setUser] = useState('mentor');


  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <div className="bg-light-blue-bg w-full h-full flex">
            <Outlet />
          </div>
          <label
            htmlFor="drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>

        {user === 'student' && <Sidebar />}
        {user === 'mentor' && <SidebarMentor />}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
