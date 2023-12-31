import React, { useState } from "react";
import "./index.css";
import Heading from "../Heading";
import Product1 from "../../assets/images/ProductImages/pic1.png";
import Product2 from "../../assets/images/ProductImages/pic2.png";
import icon1 from "../../assets/images/ProductImages/icon1.png";
import icon2 from "../../assets/images/ProductImages/icon2.png";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Product = () => {
  const [openOne, setopenOne] = useState(false);
  const [openTwo, setopenTwo] = useState(false);
  const icon = (
    <svg
      width="9"
      height="13"
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.72735 5.60515C6.17927 5.60515 6.54564 5.99376 6.54564 6.4731C6.54564 6.95233 6.17927 7.34094 5.72735 7.34094C5.27555 7.34094 4.90918 6.95233 4.90918 6.4731C4.90918 5.99376 5.27555 5.60515 5.72735 5.60515Z"
        fill="#1E1E1E"
      />
      <path
        d="M4.09045 9.07674C4.09045 9.55597 3.72408 9.94458 3.27228 9.94458C2.82088 9.94458 2.4541 9.55597 2.4541 9.07674C2.4541 8.5974 2.82088 8.20867 3.27228 8.20867C3.72408 8.20879 4.09045 8.5974 4.09045 9.07674Z"
        fill="#1E1E1E"
      />
      <path
        d="M4.09045 3.86995C4.09045 4.34917 3.72408 4.73767 3.27228 4.73767C2.82088 4.73767 2.4541 4.34917 2.4541 3.86995C2.4541 3.3906 2.82088 3.00188 3.27228 3.00188C3.72408 3.0021 4.09045 3.3906 4.09045 3.86995Z"
        fill="#1E1E1E"
      />
      <path
        d="M1.63613 11.68C1.63613 12.1594 1.26998 12.5479 0.818067 12.5479C0.366667 12.5479 -1.67727e-08 12.1594 -3.74676e-08 11.68C-5.81575e-08 11.2008 0.366694 10.8122 0.818067 10.8122C1.26998 10.8123 1.63613 11.2008 1.63613 11.68Z"
        fill="#1E1E1E"
      />
      <path
        d="M1.63646 1.26619C1.63646 1.74542 1.27009 2.13403 0.818067 2.13403C0.366667 2.13403 -1.67777e-08 1.74542 -3.74676e-08 1.26619C0.000104911 0.78705 0.366882 0.398354 0.818282 0.398354C1.27019 0.398354 1.63646 0.787079 1.63646 1.26619Z"
        fill="#1E1E1E"
      />
      <path
        d="M8.18146 5.60515C8.63337 5.60515 8.99963 5.99376 8.99963 6.4731C8.99963 6.95233 8.63337 7.34094 8.18146 7.34094C7.72955 7.34094 7.36328 6.95233 7.36328 6.4731C7.36328 5.99376 7.72955 5.60515 8.18146 5.60515Z"
        fill="#1E1E1E"
      />
      <path
        d="M6.54553 9.07662C6.54553 9.55585 6.17926 9.94446 5.72735 9.94446C5.27606 9.94446 4.90918 9.55585 4.90918 9.07662C4.90918 8.59728 5.27606 8.20855 5.72735 8.20855C6.17916 8.20866 6.54553 8.59728 6.54553 9.07662Z"
        fill="#1E1E1E"
      />
      <path
        d="M6.54553 3.86995C6.54553 4.34917 6.17926 4.73767 5.72735 4.73767C5.27606 4.73767 4.90918 4.34917 4.90918 3.86995C4.90918 3.3906 5.27606 3.00211 5.72735 3.00211C6.17916 3.00211 6.54553 3.3906 6.54553 3.86995Z"
        fill="#1E1E1E"
      />
      <path
        d="M4.09143 11.68C4.09143 12.1594 3.72506 12.5479 3.27325 12.5479C2.82185 12.5479 2.45508 12.1594 2.45508 11.68C2.45508 11.2008 2.82185 10.8122 3.27325 10.8122C3.72506 10.8123 4.09143 11.2008 4.09143 11.68Z"
        fill="#1E1E1E"
      />
      <path
        d="M4.09143 1.26619C4.09143 1.74542 3.72506 2.13403 3.27325 2.13403C2.82185 2.13403 2.45508 1.74542 2.45508 1.26619C2.45497 0.787052 2.82177 0.398355 3.27325 0.398355C3.72506 0.398355 4.09143 0.78708 4.09143 1.26619Z"
        fill="#1E1E1E"
      />
    </svg>
  );
  const iconSecond = (
    <svg
      width="6"
      height="7"
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="3" cy="3.97168" r="3" fill="#86BE3F" />
    </svg>
  );

  const product1 = [
    "Sistema Plugin",
    "Struttura meccanizzata in poliuera e sensoristica intelligente",
    "Pannelli alta efficienza da 1KW",
    "Inverter e conne ssione aII'impianto domestico",
    "App di controllo e gesti one",
  ];
  const product2 = [
    "Struttura meccanizzata in poliuera e sensoristica intelligente",
    "Pannelli alta efficienza da 1KW",
    "Inverter e conne ssione aII'impianto domestico",
    "App di controllo e gesti one",
  ];

  const Accordion1 = [
    "Te mpo di ricarica medio in estate",
    "TBD Tempo di scarica a 16A.",
    "TBD Autonomia dalla rete elettrica.",
    "TBD Autonomia in casa di blackout.",
    "2gg Immissione di CO2 da 1.022 kg a SOO kg annui",
    "Te mpo di ricarica medio in estate.",
  ];

  const Accordion2 = [
    "Siste ma 2 kW con accumuIo.",
    "Tempo di ricarica medio in estate is 5 ore e 30 minuti",
    "Te mpo di scarica a 16A is 8 ore.",
    "Autonomia dalla rete eIettrica 62Po.",
  ];

  return (
    <div
      id="SIREProduct"
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <Heading title="Scegli il tuo SIRE" />
      <div className="d-flex product-align  align-items-center justify-content-around mt-5">
        <div className="mr-5 shadow  ">
          <img src={Product1} alt="Product Pic" />
          <div className="px-4 py-3 product">
            <h3>S.I.R.E Direct</h3>
            <ul className="list-unstyled animation">
              {product1.map((item, key) => {
                return (
                  <li key={key} className="lists">
                    {icon} {item}
                  </li>
                );
              })}
            </ul>
            <div>
              <h5 className="heading5">CONSIGLIATO PER:</h5>
              <div className="d-flex justify-content-between align-items-center w-40 mt-3 mb-3 ">
                <div className="d-flex flex-column">
                  <img src={icon1} alt="Icon" className="mb-2 " />
                  Devices
                </div>
                <div className="d-flex flex-column">
                  <img src={icon2} alt="Icon" className="mb-2 " />
                  Families
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="heading5">Scopri le caratteristiche tecniche</h5>
                <div className="cursor-pointer">
                  {openOne ? (
                    <BsChevronDown onClick={() => setopenOne(false)} />
                  ) : (
                    <BsChevronUp onClick={() => setopenOne(true)} />
                  )}
                </div>
              </div>
              {openOne && (
                <div>
                  <ul className="list-unstyled">
                    {Accordion1.map((item, key) => {
                      return (
                        <li key={key} className="listsLower">
                          {iconSecond} {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mr-5 shadow  ">
          <img src={Product2} alt="Product Pic" />
          <div className="px-4 py-3 product">
            <h3>S.I.R.E Full</h3>
            <ul className="list-unstyled animation">
              {product2.map((item, key) => {
                return (
                  <li key={key} className="lists">
                    {icon} {item}
                  </li>
                );
              })}
            </ul>
            <div>
              <h5 className="heading5" style={{ marginTop: "50px" }}>
                CONSIGLIATO PER:
              </h5>
              <div className="d-flex justify-content-between align-items-center w-40 mt-3 mb-3 ">
                <div className="d-flex flex-column">
                  <img src={icon1} alt="Icon" className="mb-2 " />
                  Devices
                </div>
                <div className="d-flex flex-column">
                  <img src={icon2} alt="Icon" className="mb-2 " />
                  Families
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="heading5">
                  Title here if they have othervise remove this
                </h5>
                <div className="cursor-pointer">
                  {openTwo ? (
                    <BsChevronDown onClick={() => setopenTwo(false)} />
                  ) : (
                    <BsChevronUp onClick={() => setopenTwo(true)} />
                  )}
                </div>
              </div>
              {openTwo && (
                <div className="fade-in-down">
                  <ul className="list-unstyled ">
                    {Accordion2.map((item, key) => {
                      return (
                        <li key={key} className="listsLower fade-in-down">
                          {iconSecond} {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
