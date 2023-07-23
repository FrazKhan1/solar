import React from "react";

const IconBlurb = ({ title, description, icon }) => {
  return (
    <div className="d-flex w-50 flex-column align-items-center justify-content-center mt-5 bg">
      <img className="pb-3" src={icon} alt="Why Us Images" />
      <div className="icon-blurb align-items-center justify-content-center d-flex flex-column ">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IconBlurb;
