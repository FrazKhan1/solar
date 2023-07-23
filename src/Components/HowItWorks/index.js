import React from "react";
import Heading from "../Heading";
import "./index.css";
import WorkBlurb from "../WorkBlurb";
import icon1 from "../../assets/images/HowItWorksImages/1.png";
import icon2 from "../../assets/images/HowItWorksImages/2.png";
import icon3 from "../../assets/images/HowItWorksImages/3.png";
import icon4 from "../../assets/images/HowItWorksImages/4.png";

const HowItWorks = () => {
  return (
    <div id="HowitWorks" className="py-5">
      <Heading title="Connettiti al sole anche tu" />
      <div className="d-flex how justify-content-center align-item-center work-align  mt-5">
        <div className="bg1">
          <WorkBlurb
            title="Richiedi un Preventivo"
            description="Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze
ditilizzn"
            icon={icon1}
          />
        </div>
        <div className="bg2">
          <WorkBlurb
            title="Richiedi un Preventivo"
            description="Verifica immediata della necessitâ tecniche di installazione"
            icon={icon2}
          />
        </div>
        <div className="bg3">
          <WorkBlurb
            title="Richiedi un Preventivo"
            description="Un instalIatore qualificato Solar Innovatio posizionerâ il SIRE in massimo 2 ore"
            icon={icon3}
          />
        </div>
        <div className="bg4">
          <WorkBlurb
            title="Enjoy your Sun Power"
            description="Connettiti alla APP e  goditi la tua energia  solare"
            icon={icon4}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="button">Contact us</button>
      </div>
    </div>
  );
};

export default HowItWorks;
