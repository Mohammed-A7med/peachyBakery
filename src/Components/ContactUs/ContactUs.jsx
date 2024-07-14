import React, { useState } from "react";
import Styles from "./ContactUs.module.css";
import axios from "axios";
import Joi from "joi";

export default function ContactUs() {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    name: "",
  });

  const [errorsList, setErrorsList] = useState([]);

  function validateForm() {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email({ tlds: { allow: ["com", "net"] } }),
      phone: Joi.string()
        .pattern(/^[0-9]+$/)
        .required(),
    });
    return schema.validate(user, { abortEarly: false });
  }

  function getFormValue(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function submitFormValue(e) {
    e.preventDefault();
    let validateResponse = validateForm();
    if (validateResponse.error) {
      setErrorsList(validateResponse.error.details.map((err) => err.message));
    } else {
      try {
        let { data } = await axios.post(
          `http://upskilling-egypt.com:3001/contact`,
          user
        );
        console.log(data);
      } catch (error) {
        console.log(error);
        setErrorsList(["Failed to send data. Please try again later."]);
      }
    }
  }

  return (
    <>
      <h2 className="mainColor text-center">Contact us</h2>
      <div className="container mt-5">
        <div
          className={`${Styles.changeWidthRowContact} row w-75 mx-auto d-flex justify-content-center align-items-center pt-5`}
        >
          <div className="col-lg-6 col-md-8 col-sm-10 mb-4">
            {errorsList.map((error, index) => (
              <div key={index} className="alert alert-danger">
                {error}
              </div>
            ))}
            <div className="form-Contact">
              <form onSubmit={submitFormValue}>
                <input
                  onChange={getFormValue}
                  className="form-control rounded-5 bg-form mb-3"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                />
                <input
                  onChange={getFormValue}
                  className="form-control rounded-5 bg-form mb-3"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  onChange={getFormValue}
                  className="form-control rounded-5 bg-form mb-3"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
                <div className="d-flex justify-content-center my-4">
                  <button
                    type="submit"
                    className={`${Styles.btnContact} btn btn-outline-warning rounded-5 text-black`}
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-8 col-sm-10 mb-4">
            <div className="Contact-us d-flex justify-content-center align-items-center mb-5">
              <div className="item-Contact">
                <p>
                  <i className="fa-solid mainColor mx-3 fa-envelope"></i>
                  <a href="mailto:upskilling.eg1@gmail.com">
                    upskilling.eg1@gmail.com
                  </a>
                </p>
                <p>
                  <i className="fa-solid mainColor mx-3 fa-phone"></i>
                  <span>+20 115 493 2137</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
