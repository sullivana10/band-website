import React from "react";
import "./toolbar.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <div className="page-width">
        <div className="iconContainer">
          <div className="icon">
            <InstagramIcon
              onClick={(event) =>
                window.open(
                  "https://www.instagram.com/bythethousands",
                  "_blank"
                )
              }
              sx={{ fontSize: 20 }}
            />
          </div>
          <div className="icon">
            <FacebookIcon
              onClick={(event) =>
                window.open("https://www.facebook.com/bythethousands", "_blank")
              }
              sx={{ fontSize: 20 }}
            />
          </div>
          <div className="icon">
            <TwitterIcon
              onClick={(event) =>
                window.open("https://www.twitter.com/bythethousands", "_blank")
              }
              sx={{ fontSize: 20 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
