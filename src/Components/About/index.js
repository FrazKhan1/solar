import React from "react";
import Heading from "../Heading";
import "./index.css";
import Blurb from "../Blurb";
import person1 from "../../assets/images/blurb1.png";
import person2 from "../../assets/images/blurb2.png";
import person3 from "../../assets/images/blurb3.png";
import bgpattern from "../../assets/images/bgPattern.png";

const About = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column w-100 py-5 position-relative">
      <img className="pattern" src={bgpattern} alt="Pattern" />
      <div className="w-75 d-flex justify-content-center align-items-center flex-column">
        <Heading title="Chi Siamo" />
        <p className="text-center w-75  pt-4">
          Solar Innovatio è una PMI innovativa italiana specializzata nella
          progettazione e realizzazione di sistemi fotovoltaici intelligenti.
          Solar Innovatio unisce alla decennale esperienza maturata nel panorama
          italiano nell'ambito delle soluzioni fotovoltaiche un approccio
          ingegneristico, innovativo, digitale alla principale fonte di energia
          rinnovabile.
        </p>
      </div>
      <div className="d-flex flex-row w-75 justify-content-center align-items-center blurb ">
        <Blurb
          title="Cristian Testoni"
          description="Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica. "
          personImage={person1}
        />
        <Blurb
          title="Francesco Gavioli"
          description="Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici "
          personImage={person2}
        />
        <Blurb
          title="Massimo Fabi"
          description="Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori"
          personImage={person3}
        />
      </div>
      <div className="w-50 d-flex flex-column align-items-center justify-content-center text-center mt-5 test">
        <blockquote>
          “Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
          componente di una soluzione ingegneristica più completa che comprende
          sensoristiche avanzate e l'integrazione con i sistemi domotici di
          casa.“
        </blockquote>
        <p>-- Cristian Testoni --</p>
      </div>
    </div>
  );
};

export default About;
