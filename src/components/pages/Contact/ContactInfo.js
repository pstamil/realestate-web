import { Email, FmdGood, Phone } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

function ContactInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box ml={2}>
        <h2 style={{ textAlign: "left", marginBottom: "5px" }}>
          Need to get in touch with us ?
        </h2>
        <span>
          Either fill out the form with your inquiry or find the email or
          <br />
          phone you'd like to contact below.
        </span>
      </Box>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <IconButton
          sx={{
            "&:hover": {
              color: "black",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              transition: "all .4s ease",
            },
          }}
        >
          <Phone fontSize="large" />
        </IconButton>
        <h6 style={{ fontSize: "14px", color: "gray" }}>+(91) 97873 83743</h6>
      </Box>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <IconButton
          sx={{
            "&:hover": {
              color: "black",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              transition: "all .4s ease",
            },
          }}
        >
          <Email fontSize="large" />
        </IconButton>
        <h6 style={{ fontSize: "14px", color: "gray" }}>
          admin@cloudninerealty.in
        </h6>
      </Box>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <IconButton
          sx={{
            "&:hover": {
              color: "black",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              transition: "all .4s ease",
            },
          }}
        >
          <FmdGood fontSize="large" />
        </IconButton>
        <h6 style={{ fontSize: "14px", color: "gray" }}>
          No.13, 20th cross St, west Krishna Nagar,
          <br />
          Lawspet, Puducherry-605008.
        </h6>
      </Box>
    </Box>
  );
}

export default ContactInfo;
