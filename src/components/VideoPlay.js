import React from "react";
import video from "../assets/video.mp4";
import { Close } from "@mui/icons-material";

function VideoPlay({ handleClose }) {
  return (
    <div>
      <Close
        sx={{
          position: "fixed",
          top: -20,
          right: -40,
          cursor: "pointer",
          fontSize: "35px",
          color: "black",
          "&:hover": {
            color: "white",
          },
        }}
        onClick={handleClose}
      />
      <video
        src={video}
        muted
        autoPlay
        controls
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default VideoPlay;
