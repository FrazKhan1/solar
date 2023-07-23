import React from "react";

const SmallBlurb = ({ title, description, icon }) => {
  return (
    <div className="d-flex w-50 flex-column align-items-center justify-content-center mt-5 bg-s">
      <img className="pb-3" src={icon} alt="Why Us Images" />
      <div className="small-blurb align-items-center justify-content-center d-flex flex-column ">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SmallBlurb;
