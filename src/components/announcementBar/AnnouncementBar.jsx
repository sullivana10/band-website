import React from "react";
import "./announcementBar.scss";

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="page-width">
        <a
          className="announcement-link"
          href="https://youtu.be/zGQeV71I5xg"
          onClick={(event) =>
            window.open("https://youtu.be/zGQeV71I5xg", "_blank")
          }
        >
          <span className="text">listen to the new single</span>
          <span className="link-text">Cold Spots</span>
        </a>
      </div>
    </div>
  );
}
