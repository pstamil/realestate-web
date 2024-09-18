import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CountUp from "react-countup";
import sold from "../../assets/sold.svg";
import property from "../../assets/property.svg";
import location from "../../assets/location.svg";
import agent from "../../assets/agent.svg";
import ScrollTrigger from "react-scroll-trigger";

function ClientCount() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <Grid container mt={5} mb={5} sx={{ padding: "10px 0" }}>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              src={agent}
              alt="agentimg"
              style={{ width: "40px", height: "40px" }}
            />
            <h1>
              {counterOn && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
              +
            </h1>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
              }}
            >
              EXPERT AGENTS
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              src={location}
              alt="loactionimg"
              style={{ width: "40px", height: "40px" }}
            />
            <h1>
              {counterOn && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
              +
            </h1>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
              }}
            >
              LOCATIONS COVERS
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          sx={{ mt: { sm: 5, xs: 5, md: 0, lg: 0, xl: 0 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              src={property}
              alt="propertyimg"
              style={{ width: "40px", height: "40px" }}
            />
            <h1>
              {counterOn && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
              +
            </h1>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
              }}
            >
              PROPERTIES LISTED
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          sx={{ mt: { sm: 5, xs: 5, md: 0, lg: 0, xl: 0 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              src={sold}
              alt="soldimg"
              style={{ width: "40px", height: "40px" }}
            />
            <h1>
              {counterOn && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
              +
            </h1>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
              }}
            >
              PROPERTIES SOLD
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ScrollTrigger>
  );
}

export default ClientCount;
