import { Box, Typography } from "@mui/material";
import React from "react";
import qoute from "../../../assets/quote.svg";

const QuoteDesign = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100px",
        p: "20px",
        width: "100%",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "20px" },
        }}
      >
        "Count on us and find your dream properties today.A better way to buy &
        sell real estate."
      </Typography>
      <Box sx={{ position: "absolute", top: "-20%", left: "3%" }}>
        <img
          src={qoute}
          alt="qoute"
          style={{ width: "40px", height: "40px" }}
        />
      </Box>
    </Box>
  );
};

export default QuoteDesign;
