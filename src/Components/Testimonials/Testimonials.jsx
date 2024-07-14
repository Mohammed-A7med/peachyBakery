import React from "react";
import Styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
   <div className="bgColor">
     <div className={`${Styles.bgImgTestimonials} py-4`}>
      <div className="container">
        <h2 className="text-center text-white">testimonials</h2>
        <div className="row d-flex align-items-center justify-content-evenly g-4">
          <div className="col-md-6 col-lg-5 col-12">
            <div className="bg-white rounded-4 p-3">
              <h5 className="mainColor">Kathryn Murphy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <p className="mainColor">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 col-12">
            <div className="bg-white rounded-4 p-3">
              <h5 className="mainColor">Kathryn Murphy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <p className="mainColor">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 col-12">
            <div className="bg-white rounded-4 p-3">
              <h5 className="mainColor">Kathryn Murphy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <p className="mainColor">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-5 col-12">
            <div className="bg-white rounded-4 p-3">
              <h5 className="mainColor">Kathryn Murphy</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
              <p className="mainColor">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-4">
          <button className="btn bg-warning rounded-5 text-white">
            Contact us
          </button>
        </div>
      </div>
    </div>
   </div>
  );
}
