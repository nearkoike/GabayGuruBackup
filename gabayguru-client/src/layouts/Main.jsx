import React, { useContext } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";
import "../App.css";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const Main = () => {
  const { loading } = useAuth();

  return (
    <div>
      {loading ? (
        <LoadingSpinner/>
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
