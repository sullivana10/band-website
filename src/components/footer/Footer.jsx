import React from "react";
import "./footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
  return (
    <div className="footer">
      <div className="page-width">
        <div className="content">
          {/* <div className="blank"></div> */}
          <div className="left">
            <a href="/" className="search">
              Search
            </a>
            <a href="/" className="contact">
              Contact Us
            </a>
            <a href="/" className="returns">
              Returns & Exchanges
            </a>
            <a href="/" className="privacy">
              Privacy Policy
            </a>
            <a href="/" className="shipping">
              Shipping FAQ
            </a>
            <a href="/" className="terms">
              Site Use Terms & Conditions
            </a>
          </div>
          <div className="right">
            <p className="signUp">sign up and save</p>
            <p className="subscribe">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals
            </p>
            <form action="/">
              <input
                type="email"
                placeholder="Enter your email"
                className="email"
              />
              {/* <button className="submit">Submit</button> */}
              {/* <div className="mailIcon">
                <MailOutlineIcon />
              </div> */}
            </form>
            <div className="iconContainer">
              <div className="icon">
                <InstagramIcon
                  onClick={(event) =>
                    window.open(
                      "https://www.instagram.com/bythethousands",
                      "_blank"
                    )
                  }
                  sx={{ fontSize: 30 }}
                />
              </div>
              <div className="icon">
                <FacebookIcon
                  onClick={(event) =>
                    window.open(
                      "https://www.facebook.com/bythethousands",
                      "_blank"
                    )
                  }
                  sx={{ fontSize: 30 }}
                />
              </div>
              <div className="icon">
                <TwitterIcon
                  onClick={(event) =>
                    window.open(
                      "https://www.twitter.com/bythethousands",
                      "_blank"
                    )
                  }
                  sx={{ fontSize: 30 }}
                />
              </div>
            </div>
          </div>
          {/* <div className="blank"></div> */}
        </div>
      </div>
    </div>
  );
}
