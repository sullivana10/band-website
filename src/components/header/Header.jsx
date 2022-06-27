import React from "react";
import "./header.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export default function Header() {
  return (
    <div className="header">
      <div className="page-width">
        <div className="top">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <div className="blank"></div>
          <div className="logo">
            <img src="assets/plain-logo.png" alt="logo" />
          </div>
          <div className="iconContainer">
            <div className="icon icon__person">
              <PersonOutlineIcon sx={{ fontSize: 30 }} />
            </div>
            <div className="icon">
              <LocalMallOutlinedIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
        <div className="bottom">
          <a href="/" className="shop">
            shop
          </a>
          <a href="/" className="intl">
            intl
          </a>
          <a href="/" className="news1">
            news
          </a>
          <a href="/" className="about">
            about
          </a>
          <a href="/" className="music">
            music
          </a>
          <a href="/" className="tour">
            tour
          </a>
        </div>
      </div>
    </div>
  );
}
