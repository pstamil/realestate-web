import React from "react";
import { Box } from "@mui/material";
import Loader from "../../assets/loader.gif";
import Loading from "../../assets/Loading.svg";

const Preloader = () => {
  return (
    <Box sx={{ background: "#E7EEF4", width: "100%", height: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={Loading}
          alt="loader"
          style={{ width: "60px", height: "60px" }}
          className="loader"
        />
        <span>Find Your Heaven!!</span>
      </Box>
    </Box>
  );
};

export default Preloader;
