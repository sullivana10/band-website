import React from "react";
import "./album.scss";

export default function Album() {
  return (
    <div className="album">
      <div className="page-width">
        <div className="albumCover">
          <img className="albumImg" src="assets/disc.webp" alt="album cover" />
        </div>
        <div className="albumInfo">
          <h1 className="title">dead matter jewel case</h1>
          <span className="price">$10.00</span>
          <strong className="releaseDate">release date: april 10 2020</strong>
          <strong className="quantity">Only 1000 available</strong>
          <strong className="trackList">track listing</strong>
          <ol className="songs">
            <li>Oblivion - 3:53</li>
            <li>Soul Conductor - 2:46</li>
            <li>Toxic Earth - 3:11</li>
            <li>Castle Walls - 3:47</li>
            <li>Cold Spots - 3:53</li>
            <li>Mimic - 3:09</li>
            <li>Virulent - 4:18</li>
            <li>Silver - 3:17</li>
            <li>Wendigo - 4:01</li>
            <li>Home Entity - 3:29</li>
            <li>Dead Matter - 3:35</li>
            <li>Slasher - 2:44</li>
            <li>The Siren's Call - 3:27</li>
            <li>Deep Gloom - 3:35</li>
          </ol>
          <button className="cart">add to cart</button>
          <button className="pay">Buy Now </button>
          <p className="options">More payment options</p>
          <p className="installments">
            Pay in 4 interest-free installments for orders over $50 with shop
            pay. <span>Learn more</span>
          </p>
        </div>
      </div>
    </div>
  );
}
