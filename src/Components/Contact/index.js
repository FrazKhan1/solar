import React from "react";
import Heading from "../Heading";
import icon1 from "../../assets/images/ContactImages/1.png";
import icon2 from "../../assets/images/ContactImages/2.png";
import icon3 from "../../assets/images/ContactImages/3.png";
import "./index.css";

const Contact = () => {
  return (
    <div className="d-flex w-21 flex-column justify-content-center align-items-center  py-5">
      <Heading title="CONTATTACI" />
      <div className="column-mob d-flex mt-5 justify-content-center align-items-start ">
        <div className=" left  p-2  mr-5 p-3">
          <div className="col-12 d-flex justify-content-start align-items-start data">
            <img src={icon1} alt="Location" />
            <p>
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci
            </p>
          </div>
          <div className="  col-12 d-flex justify-content-start align-items-start data">
            <img src={icon2} alt="Location" />
            <p>
              email@email.com <br />
              support@email.com
            </p>
          </div>
          <div className="  col-12 d-flex justify-content-start align-items-start data">
            <img src={icon3} alt="Location" />
            <p>+29 98595 8998</p>
          </div>
          <div className=" bup  d-flex justify-content-start align-items-start datau">
            <p>We Will get back to you within 24 hours. Or Call us Now</p>
          </div>
        </div>
        <div className="row border w-50 p-3 right">
          <form>
            <input className="col-6  " type="text" placeholder="First Name" />
            <input className="col-6 " type="text" placeholder="Last Name" />
            <input className="col-12" type="Email" placeholder="Email" />
            <input className="col-12" type="textarea" placeholder="Message" />
            <div className="d-flex justify-content-end mt-2">
              <button className="button">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
