import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const SignUpMentor = () => {

  return (
    <>
      <div className="card-body my-5 items-center text-center">
        <h2 className="card-title text-4xl font-bold">Sign Up</h2>
        <p>
          Our platform provides you with a unique opportunity to mentor and
          guide, shaping future leaders and experts.
        </p>

        {/* Page Content */}
        <Outlet/>
      </div>
    </>
  );
};

export default SignUpMentor;
