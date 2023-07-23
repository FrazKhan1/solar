import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center title">
      <h1>{title}</h1>
      <div className="line mt-3"></div>
    </div>
  );
};

export default Heading;
