import React from "react";
import "./index.css";
import Heading from "../Heading";
import IconBox from "../IconBox";

const Features = () => {
  return (
    <div id="SIREFeatures" className="mt-4 bg-pattern">
      <div className="d-flex flex-column align-items-center justify-content-center w-100 ">
        <div>
          <Heading title="Connesso, Intelligente, Resistente" />
        </div>
        <div className="d-flex flex-column w-75 justify-content-center align-items-center py-5 ">
          <div className="d-flex justify-content-between align ">
            <IconBox
              title="Versatile"
              description="Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare"
            />
            <IconBox
              title="Indipendente e Green"
              description="dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà."
            />
          </div>
          <div className="d-flex justify-content-between align ">
            <IconBox
              title="Automatizzato"
              description="Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano l'esposizione in base alle condizioni atmosferiche.		"
            />
            <IconBox
              title="Connesso"
              description="Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta."
            />
          </div>
          <div className="d-flex justify-content-between align ">
            <IconBox
              title="Efficiente"
              description="Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose."
            />
            <IconBox
              title="Resistente"
              description="Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
