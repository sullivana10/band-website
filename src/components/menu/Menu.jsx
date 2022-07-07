import React from "react";
import "./menu.scss";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="IconContainer">
        <div className="closeIcon" onClick={() => setMenuOpen(!menuOpen)}>
          <CloseIcon />
        </div>
      </div>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">shop</a>
          <KeyboardArrowDownIcon />
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">intl</a>
          <KeyboardArrowDownIcon />
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">news</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">about</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">music</a>
          <KeyboardArrowDownIcon />
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">tour</a>
          <KeyboardArrowDownIcon />
        </li>
      </ul>
      <div className="logIn">
        <a href="/">Log in</a>
      </div>
      <div className="socials">
        <a href="/" className="icon">
          <InstagramIcon />
        </a>
        <a href="/" className="icon">
          <FacebookIcon />
        </a>
        <a href="/" className="icon">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}
