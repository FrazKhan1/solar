import React from "react";
import Heading from "../Heading";
import IconBlurb from "../IconBlurb";
import "./index.css";
import icon1 from "../../assets/images/WhyUsImages/Group.png";
import icon2 from "../../assets/images/WhyUsImages/Group1.png";
import icon3 from "../../assets/images/WhyUsImages/Group2.png";
import icon4 from "../../assets/images/WhyUsImages/1.png";
import icon5 from "../../assets/images/WhyUsImages/2.png";
import icon6 from "../../assets/images/WhyUsImages/3.png";
import icon7 from "../../assets/images/WhyUsImages/4.png";
import SmallBlurb from "../SmallBlurb";

const WhySire = () => {
  return (
    <div id="WhySIRE" className="py-5">
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <div>
          <Heading title="Perchè S.I.R.E." />
        </div>
        <div className="d-flex column align-items-center justify-content-center w-75">
          <IconBlurb
            title="Risparmio Energetico"
            description="Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore."
            icon={icon1}
          />
          <IconBlurb
            title="Mobilità Elettrica"
            description="L'unica soluzione che rende l’utilizzo di un’auto elettrica veramente economico.  L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero."
            icon={icon2}
          />
          <IconBlurb
            title="Comunità Energetica"
            description="Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete."
            icon={icon3}
          />
        </div>
      </div>
      <div className="d-flex column justify-content-center align-items-center bg-light mt-5 pb-5">
        <SmallBlurb
          className="row-blurb"
          title=" 110%"
          description="Superbonus"
          icon={icon4}
        />
        <SmallBlurb
          title="65%"
          description="Detrazione DOMOTICA"
          icon={icon5}
        />
        <SmallBlurb
          title=""
          description="Progettazione personalizzata"
          icon={icon6}
        />
        <SmallBlurb
          title=""
          description="consulenza fiscale sui  bonus"
          icon={icon7}
        />
      </div>
    </div>
  );
};

export default WhySire;
