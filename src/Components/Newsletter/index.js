import React from "react";
import "./index.css";
import icon from "../../assets/images/NewletterImages/icon.png";

const NewsLetter = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center bg-newletter">
      <div className=" w-65  d-flex justify-content-between align-items-center mobi ">
        <div className="  content">
          <h4>Subscribe for Newsletter</h4>
          <p>
            Leo dui fermentum tristique urna tellus eget amet aliquam. Id
            <br /> vitae orci maecenas tortor odio
          </p>
        </div>
        <div className="  d-flex justify-content-end">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: "#fff",
              borderRadius: "25px",
              width: "427px",
              height: "50px",
            }}
          >
            <input
              placeholder="Inserisci la tua email"
              style={{ backgroundColor: "transparent", border: "none" }}
            />
            <div
              style={{
                backgroundColor: "#86BE3F",
                width: "39px",
                height: "39px",
                borderRadius: "25px",
                marginRight: "5px",
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <img src={icon} alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
