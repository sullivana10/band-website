import React from "react";
import "./video1.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Video1() {
  return (
    <div className="video1">
      <div className="vidContainer">
        <video
          width="1629px"
          muted
          autoPlay
          loop
          src="assets/btt-coldspots.mp4"
          type="video/mp4"
          className="btt-coldspots"
        ></video>
        <div className="text">
          <h1 className="songName">cold spots</h1>
          <p className="albumName">the latest single</p>
          <a className="link" href="https://youtu.be/zGQeV71I5xg">
            <button
              className="watch"
              onClick={(event) =>
                window.open("https://youtu.be/zGQeV71I5xg", "_blank")
              }
            >
              <PlayArrowIcon />
              watch now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

// {
//   /* <iframe
//         width="1280"
//         height="720"
//         src="https://www.youtube.com/embed/zGQeV71I5xg?autoplay=1&mute=1"
//         title="By The Thousands - Cold Spots (Official Music Video)"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen
//       ></iframe> */
// }
