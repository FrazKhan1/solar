import React from "react";
import logo from "../../assets/images/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import NavBar from "./NavBar";

const TopBar = () => {
  return (
    <div class="container-fluid  d-none d-lg-block ">
      <div className="d-flex d-none d-lg-block ">
        <div className="row d-flex justify-content-center align-items-center py-3 border-bottom  w-100">
          <div className="d-flex w-75">
            <div className="col-lg-2 col-sm-6 start ">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-lg-8 col-sm-6 d-flex justify-content-end align-items-center  ">
              <BsFillTelephoneFill color="#86be3f" size={20} className="mx-4" />
              0203 519 4420
              <IoIosMail size={24} color="#86be3f" className="mx-4" />
              info@solarinnovatio.com
            </div>
            <div className=" d-flex col-lg-3 col-sm-6">
              <div className="w-100">
                <button className="button">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
