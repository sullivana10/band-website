import React from "react";
import "./apparel.scss";

export default function Apparel() {
  return (
    <div className="apparel">
      <div className="page-width">
        <h2 className="section-header">by the thousands apparel</h2>
        <div className="content">
          <div className="container">
            <div
              className="imgContainer"
              onClick={(event) =>
                window.open(
                  "https://bythethousands.bigcartel.com/product/horror-tee",
                  "_blank"
                )
              }
            >
              <img
                src="assets/skull-front-3.4.jpeg"
                alt="skullFront"
                className="skullFront"
              />
              <img
                src="assets/skull-back-3.4.jpeg"
                alt="skullBack"
                className="skullBack"
              />
            </div>
            <p className="description">skull wavy logo t-shirt</p>
            <p className="price">$25.00</p>
          </div>
          <div className="container">
            <div
              className="imgContainer"
              onClick={(event) =>
                window.open(
                  "https://bythethousands.bigcartel.com/product/acid-wash-tee",
                  "_blank"
                )
              }
            >
              <img
                src="assets/tiedye-3.4.jpeg"
                alt="tiedye"
                className="tieDye"
              />
            </div>
            <p className="description">tie-dye logo t-shirt</p>
            <p className="price">$30.00</p>
          </div>
          <div className="container">
            <div className="imgContainer">
              <img
                src="assets/mn-hoodie-front-3.4.jpeg"
                alt="mnHoodie"
                className="mnHoodieFront"
              />
              <img
                src="assets/mn-hoodie-back-3.4.jpeg"
                alt="mnHoodie"
                className="mnHoodieBack"
              />
            </div>
            <p className="description">minnesota pull-over hoodie</p>
            <p className="price">$40.00</p>
          </div>
        </div>
        <button className="view">view all</button>
      </div>
    </div>
  );
}
