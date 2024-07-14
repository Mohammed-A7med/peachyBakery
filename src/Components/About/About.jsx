import React from "react";
import Styles from "./About.module.css";

export default function About() {
  return (
    <div className="row">
      <div className="col-lg-8 col-md-7 col-12 bgColor">
        <div className={`${Styles.contantAbout}  w-50 mx-auto text-white py-3`}>
          <h2>About</h2>
          <h2>us</h2>
          <p className={`${Styles.welcomAbout} w-75 mt-4`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="btn-contect d-flex justify-content-center align-items-center ">
            <button className="btn bg-warning rounded-5 my-3 text-white">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className={`${Styles.aboutBgCol} col-lg-4 col-md-5 col-12`}>
        <div
          className={`${Styles.aboutImg} d-flex align-items-center h-100 w-100`}
        >
          <img
            className="w-100 rounded-3"
            src="https://s3-alpha-sig.figma.com/img/37f5/2f4a/45564e95653121db1a2ec1cdbe0f67c4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CjgeloGnnA4BdAHDDMbIMxfjONb81NAycAYr96U6jeEK~-iU1nBT9TfFsotPs0LTJ41OD-D5jZAFlxwD~SIe2LPDlofqFvYhQeZTERehQwZfBwgnjGXbVt1PluDZ5nTkVs-6OodB-dCP3OoGqu0hpRhFU84GsWQJLO4dRM-52JqwAkZrWxv4~1NGqHJe8YqPlxnQlnJ4fJedEM7sIusZ77LbpA0T4ehkNGwCkY8hpCN4kpsCyOA2cm6ErzeGE5pMnJD0dSVTpgGV~oZ-K7czALd2oXgXz~bIoFb2lNHrsRdnmI1bx1J22NoGdEfZfNRLaQibVYmCSYsw7FgQXwg7-A__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
