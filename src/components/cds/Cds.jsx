import React from "react";
import "./cds.scss";

export default function Cds() {
  return (
    <div className="cds">
      <div className="page-width">
        <div className="container">
          <div className="imgContainer">
            <img src="assets/void.jpg" alt="void" className="void" />
          </div>
          <h3 className="albumName">visions of inner depth</h3>
          <p className="type">Jewel Case</p>
          <button className="buy">buy now</button>
        </div>
        <div className="container">
          <div className="imgContainer">
            <img src="assets/connect.jpg" alt="connect" className="connect" />
          </div>
          <h3 className="albumName">connect</h3>
          <p className="type">Digipak</p>
          <button className="buy">buy now</button>
        </div>
        <div className="container">
          <div className="imgContainer">
            <img src="assets/ep.jpg" alt="ep" className="ep" />
          </div>
          <h3 className="albumName">ep</h3>
          <p className="type">Jewel Case</p>
          <button className="buy">buy now</button>
        </div>
      </div>
    </div>
  );
}
