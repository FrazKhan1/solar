import React from "react";
import image1 from "../../assets/images/SireImages/image1.png";
import image2 from "../../assets/images/SireImages/image2.png";
import pattern1 from "../../assets/images/SireImages/pattern2.png";
import pattern2 from "../../assets/images/SireImages/pattern1.png";
import rouund from "../../assets/images/SireImages/round.png";
import "./index.css";

const SIRE = () => {
  return (
    <div className="padding" id="SIRE">
      <div className="d-flex around justify-content-center align-items-center position-relative ">
        <div className="d-flex around w-75 justify-content-around align-items-center">
          <div>
            <img className="p1" src={pattern1} alt="patttern" />
            <img className="p2" src={pattern1} alt="patttern" />
            <img className="p3" src={pattern2} alt="patttern" />
            <img className="p4" src={rouund} alt="patttern" />
          </div>
          <div className="elipse">
            <img className="image--ba" src={image1} alt="Image1" />
            <img className="image--ab" src={image2} alt="Image2" />
          </div>
          <div className="w-50 sire">
            <h4>S.I.R.E</h4>
            <h1> Smart Integrated Renewable Energy</h1>
            <div className="line my-4"></div>
            <p>
              S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per
              la
              <br /> produzione, conversione e gestione dell'energia solare,
              studiato
              <br /> specificatamente per installazioni all'interno di
              condomini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIRE;
