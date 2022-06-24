import React from "react";
import "./tour.scss";

export default function Tour() {
  return (
    <div className="tourAnnouncement">
      <div className="imgContainer">
        <img
          src="assets/dead-matter.jpg"
          alt="album cover"
          className="albumCover"
        />
        <div className="text">
          <p className="tourName">twin cities takeover tour</p>
          <h1 className="bandName">by the</h1>
          <h1 className="bandName">thousands</h1>
          <p className="dates">may 8th - may 27th</p>
          <button className="ticketsBtn">get tickets</button>
        </div>
      </div>
    </div>
  );
}
