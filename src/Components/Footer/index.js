import React from "react";
import "./index.css";
import logo from "../../assets/images/FooterImages/logo.png";
import client from "../../assets/images/FooterImages/client.png";
import icon1 from "../../assets/images/FooterImages/1.png";
import icon2 from "../../assets/images/FooterImages/2.png";
import icon3 from "../../assets/images/FooterImages/3.png";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  const quickLinks = [
    "Home",
    "Chi Siamo",
    "S.I.R.E",
    "SIRE Features",
    "Why SIRE?",
    "SIRE Product",
    "How it Works?",
  ];

  const usefulLinks = [
    "Help Center",
    "Privacy Policy",
    "Terms & Condition",
    "FAQ",
  ];

  return (
    <footer class="bg-footer  ">
      <div class="container-fluid width-footer">
        <div class="row mb-5">
          <div class="col-md-3 ftext">
            <img src={logo} alt="Logo" />
            <p>
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci maecenas tortor odio Leo dui fermentum tristique urna
              tellus eget amet aliquam.
            </p>
            <div className="py-3">
              <div>
                <img src={client} alt="Client Logo" />
                <img src={client} alt="Client Logo" />
                <img src={client} alt="Client Logo" />
              </div>

              <div>
                <img src={client} alt="Client Logo" />
                <img src={client} alt="Client Logo" />
                <img src={client} alt="Client Logo" />
              </div>
            </div>
          </div>

          <div class=" links col-md-2 ml-auto">
            <h4>Quick Links</h4>
            <ul class="list-unstyled links">
              {quickLinks.map((item, key) => {
                return <li className="listing">{item}</li>;
              })}
            </ul>
          </div>
          <div class="col-md-2 ml-auto links">
            <h4>UseFull Links</h4>
            <ul class="list-unstyled links">
              {usefulLinks.map((item, key) => {
                return <li className="listing">{item}</li>;
              })}
            </ul>
            <div>
              <h4>Documents</h4>
              <ul class="list-unstyled links">
                <li style={{ textDecoration: "underline" }} className="listing">
                  Linked Here
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 ml-auto links">
            <h4>Contact Us</h4>
            <div>
              <div className="d-flex align-items-start mt-3 ">
                <img src={icon1} alt="Icon" />

                <p style={{ marginLeft: "20px", color: "#fff" }}>
                  Leo dui fermentum tristique urna tellus eget amet aliquam.
                  Idvitae orci
                </p>
              </div>

              <div className="d-flex align-items-start mt-2 ">
                <img src={icon2} alt="Icon" />

                <p style={{ marginLeft: "20px", color: "#fff" }}>
                  email@email.com support@email.com
                </p>
              </div>

              <div className="d-flex align-items-start mt-2 ">
                <img src={icon3} alt="Icon" />
                <p style={{ marginLeft: "20px", color: "#fff" }}>
                  +29 98595 8998
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-12 pb-4">
            <div class="linefooter"></div>
          </div>
          <div class="col-md-6 text-md-left">
            <p style={{ color: "#fff" }}>All Rights Reserved</p>
          </div>
          <div class="col-md-6 text-md-right">
            <BsFacebook size={24} style={{ marginRight: "10px" }} />
            <AiOutlineInstagram style={{ marginRight: "10px" }} size={24} />
            <AiFillTwitterCircle size={26} />
          </div>
        </div>

        <div class="row">
          <div class="col-md-7"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
