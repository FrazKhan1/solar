import React from "react";

const WorkBlurb = ({ title, description, icon }) => {
  return (
    <div className=" d-flex justify-content-center align-items-center ">
      <div className="d-flex  flex-column align-items-center justify-content-center  bg-w">
        <img className="pb-3" src={icon} alt="Why Us Images" />
        <div className="work-blurb align-items-center justify-content-center d-flex flex-column ">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkBlurb;
