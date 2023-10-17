import { AdminPanelSettings, CurrencyExchange, Key } from "@mui/icons-material";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import services from "../assets/services.jpg";

function Services() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={11}
          sm={11}
          md={6}
          lg={6}
          mt={5}
          sx={{
            pl: "8.5%",
            mb: 5,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              textAlign: "left",
            }}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Let's Find The Right Selling Option For You
          </h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              gap: 10,
            }}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                height: "80px",
              }}
            >
              <Avatar
                sx={{
                  background: "hsla(8,79%,62%,.07)",
                  padding: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },
                  color: "black",
                  borderRadius: "50%",
                  "&:hover": {
                    background: "#EB6753",
                    color: "white",
                    transition: "all .4s ease",
                  },
                }}
              >
                <AdminPanelSettings fontSize="large" />
              </Avatar>
              <div>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "28px",
                      md: "28px",
                      lg: "28px",
                    },
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  Property Management
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                    },
                  }}
                >
                  Nullam sollicitudin blandit eros eu pretium. Nullam maximus
                  ultricies auctor.
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                height: "80px",
              }}
            >
              <Avatar
                sx={{
                  background: "hsla(8,79%,62%,.07)",
                  padding: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },
                  color: "black",
                  borderRadius: "50%",
                  "&:hover": {
                    background: "#EB6753",
                    color: "white",
                    transition: "all .4s ease",
                  },
                }}
              >
                <Key fontSize="large" />
              </Avatar>
              <div>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "28px",
                      md: "28px",
                      lg: "28px",
                    },
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  Property Management
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                    },
                  }}
                >
                  Nullam sollicitudin blandit eros eu pretium. Nullam maximus
                  ultricies auctor.
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                height: "80px",
              }}
            >
              <Avatar
                sx={{
                  background: "hsla(8,79%,62%,.07)",
                  padding: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },
                  color: "black",
                  borderRadius: "50%",
                  "&:hover": {
                    background: "#EB6753",
                    color: "white",
                    transition: "all .4s ease",
                  },
                }}
              >
                <CurrencyExchange fontSize="large" />
              </Avatar>
              <div>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "28px",
                      md: "28px",
                      lg: "28px",
                    },
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  Property Management
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                    },
                  }}
                >
                  Nullam sollicitudin blandit eros eu pretium. Nullam maximus
                  ultricies auctor.
                </Typography>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={2} md={0.5} sm={1} xs={1}></Grid>
        <Grid item xs={12} sm={12} md={5.5} lg={4}>
          <img src={services} width="100%" height="100%" alt="services" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
