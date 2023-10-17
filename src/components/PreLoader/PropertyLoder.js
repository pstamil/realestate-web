import React from "react";
import { CircularProgress, Box } from "@mui/material";

function PropertyLoader() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#eb6753" }} />
      </Box>
    </>
  );
}

export default PropertyLoader;
