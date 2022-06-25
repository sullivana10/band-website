import React from "react";
import "./video2.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Video1() {
  return (
    <div className="video2">
      <div className="vidContainer">
        <video
          width="1629px"
          muted
          autoPlay
          loop
          src="assets/btt-despondency.mp4"
          type="video/mp4"
          className="btt-despondency"
        ></video>
        <div className="text">
          <h1 className="songName">despondency</h1>
          <div className="link">
            <button
              className="watch"
              onClick={(event) =>
                window.open("https://youtu.be/FHxMxjnCUec", "_blank")
              }
            >
              <PlayArrowIcon />
              watch now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
