import React from "react";
import "./news.scss";

export default function News() {
  return (
    <div className="news">
      <div className="page-width">
        <div className="section-header">
          <h2 className="header-title">news & updates</h2>
          <button className="view">view all</button>
        </div>
        <div className="content">
          <div className="container">
            <div className="imgContainer">
              <img src="assets/flyer.jpg" alt="placeholder1" className="img1" />
            </div>
            <p className="date">May 8, 2022</p>
            <p className="articleTitle">Twin Cities Takeover Tour Begins</p>
          </div>
          <div className="container">
            <div className="imgContainer">
              <img
                src="assets/album-available.jpg"
                alt="placeholder2"
                className="img2"
              />
            </div>
            <p className="date">Apr 10, 2020</p>
            <p className="articleTitle">
              Album Out Now + New Single Soul Conductor
            </p>
          </div>
          <div className="container">
            <div className="imgContainer">
              <img
                src="assets/coldspots-single.jpeg"
                alt="placeholder3"
                className="img2"
              />
            </div>
            <p className="date">Mar 13, 2022</p>
            <p className="articleTitle">New Single Cold Spots Available Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
