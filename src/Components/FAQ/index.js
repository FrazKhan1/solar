import React from "react";
import "./index.css";
import Heading from "../Heading";
import Accordion from "../Accordion";

const FAQ = () => {
  return (
    <div>
      <Heading title="Frequently Asked Questions" />

      <div className="mt-5">
        <Accordion
          title="Dove si monta S.I.R.E.?"
          description="S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra "
          id="headingOne"
          target="collapseOne"
        />
        <Accordion
          title="Chi monta l’impianto S.I.R.E.?"
          description="S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra "
          id="headingTwo"
          target="collapseTwo"
        />
        <Accordion
          title="Quanto tempo impiega l’installazione?"
          description="S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra "
          id="headingThree"
          target="collapseThree"
        />
        <Accordion
          title="E’ necessario richiedere autorizzazioni al condominio?"
          description="S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra "
          id="headingFour"
          target="collapseFour"
        />
        <Accordion
          title="E’ necessario predisporre pratiche per il GSE? "
          description="S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra "
          id="headingFive"
          target="collapseFive"
        />
        <Accordion
          title="L’impianto è garantito? "
          description="S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra "
          id="headingSix"
          target="collapseSix"
        />
        <Accordion
          title="E’ possibile usufruire di bonus fiscali?"
          description="S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra "
          id="headingSeven"
          target="collapseSeven"
        />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="button">Collegati al sole</button>
      </div>
    </div>
  );
};

export default FAQ;
