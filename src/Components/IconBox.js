import React from "react";
import icon from "../assets/images/FeaturesImages/icon.png";

const IconBox = ({ title, description }) => {
  return (
    <div className="w-50 width d-flex justify-content-center align-items-center ">
      <div className="d-flex width align-items-start w-75  ">
        <img className="mr-3" src={icon} alt="icon" />
        <div className="icon-box">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default IconBox;
