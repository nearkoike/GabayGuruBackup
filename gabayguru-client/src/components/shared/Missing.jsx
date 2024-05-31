import React from "react";
import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <h1>Missing</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Missing;
