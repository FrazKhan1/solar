import React from "react";

const Blurb = ({ title, description, personImage }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center margin">
      <img className="position" src={personImage} alt="person1" />
      <div className="d-flex flex-column justify-content-start align-items-center about">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Blurb;
