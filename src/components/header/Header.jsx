import React from "react";
import "./header.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <div className="header">
      <div className="page-width">
        <div className="top">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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
          <a
            href="https://bythethousands.bigcartel.com/"
            target="_blank"
            rel="noreferrer"
            className="navLink"
          >
            shop
          </a>
          <a href="/" className="navLink">
            intl
          </a>
          <a href="/" className="navLink">
            news
          </a>
          <a href="/" className="navLink">
            about
          </a>
          <div className="dropdown">
            <button className="navLink">music</button>
            <div className="dropdown-content">
              <a
                href="https://open.spotify.com/artist/7jbkCD5BIRbdCLOz5J6S1Y"
                target="_blank"
                rel="noreferrer"
              >
                spotify
              </a>
              <a
                href="https://music.apple.com/us/artist/by-the-thousands/903145305"
                target="_blank"
                rel="noreferrer"
              >
                apple
              </a>
              <a
                href="https://music.youtube.com/channel/UCv-85PZZJMcJ1D6ybUMLnqA?feature=share"
                target="_blank"
                rel="noreferrer"
              >
                youtube
              </a>
              <a
                href="https://store.tidal.com/us/artist/5866876"
                target="_blank"
                rel="noreferrer"
              >
                tidal
              </a>
              <a
                href="https://music.amazon.com/artists/B00M4DCVFS/by-the-thousands?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_v5EeMvvx4y5jv4lyH49LhPy6Z"
                target="_blank"
                rel="noreferrer"
              >
                amazon
              </a>
              <a
                href="https://deezer.page.link/xQVjM84SqjoSyW3W9"
                target="_blank"
                rel="noreferrer"
              >
                deezer
              </a>
            </div>
          </div>
          <a href="/" className="navLink">
            tour
          </a>
        </div>
      </div>
    </div>
  );
}
