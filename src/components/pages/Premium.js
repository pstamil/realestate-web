import React from "react";
import about from "../../assets/about.jpg";
import { Box, Typography } from "@mui/material";

function Premium() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${about})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h6
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          style={{
            fontWeight: "bold",
            fontSize: "44px",
            marginBottom: 2,
          }}
        >
          Premium
        </h6>
        <Typography
          variant="body1"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          sx={{
            fontSize: { xs: "13px", sm: "16px", md: "16px", lg: "16px" },
            m: "0 20px",
          }}
        >
          We're on a Mission to Change View of Real Estate Field.
        </Typography>
      </Box>
    </Box>
  );
}

export default Premium;
