import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import agency from "../assets/agency.png";
import arrow from "../assets/arrow.png";
import HomeSlider from "./slider/HomeSlider";
import { AutoStories, Inventory, PlayCircle, Sell } from "@mui/icons-material";
import { useState } from "react";
import VideoPlay from "./VideoPlay";
import Services from "./Services";
import ContactBanner from "./pages/Contact/ContactBanner";
import ClientCount from "./Count/ClientCount";
import AllProperty from "./propertiesList/filterProerty/AllProperty";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function Home() {
  const [playVideo, setPlayVideo] = useState(false);
  const handleClose = () => setPlayVideo(false);

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <HomeSlider />
        <Box
          sx={{ display: { xs: "none", md: "block", lg: "block", sm: "none" } }}
        >
          <img alt="agency" className="App-agency" src={agency} />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block", lg: "block", sm: "block" },
          }}
        >
          <img alt="arrow" className="App-arrow" src={arrow} />
        </Box>
        <Box
          className="App-play"
          sx={{
            display: { xs: "none", md: "block", lg: "block", sm: "block" },
            top: { md: "13%", lg: "15%", sm: "12%" },
            right: { md: "7%", lg: "12%", sm: "8%" },
          }}
        >
          <IconButton
            sx={{
              borderRadius: "50%",
              bgcolor: "rgba(255, 255, 255, 0.32)",
              border: "0.5px solid black",
              mr: 2,
            }}
            onClick={() => setPlayVideo(!playVideo)}
          >
            <PlayCircle
              sx={{
                borderRadius: "50%",
                color: "black",
                fontSize: "40px",
                "&:hover": { bgcolor: "orange", color: "white" },
              }}
            />
          </IconButton>
          <span style={{ fontWeight: "bold" }}>Watch video</span>
        </Box>

        <Container>
          <Box
            sx={{
              position: "absolute",
              top: { xs: 190, md: 220, lg: 220, sm: 190 },
            }}
          >
            <Typography
              variant="h3"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              sx={{
                maxWidth: "450px",
                fontWeight: "bold",
                fontSize: "43px",
                marginBottom: 2,
                mr: "20px",
              }}
            >
              Easy Way to Find a Perfect Property
            </Typography>
            <Typography
              variant="body1"
              mb={5}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1250"
              data-aos-easing="ease-in-out"
              sx={{ mr: "20px" }}
            >
              From as low as $10 per day with limited time offer discounts
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              variant="h6"
              sx={{
                background: "white",
                padding: "10px",
                width: "200px",
                mb: "1px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Begin your journey here
            </Typography>
            <Grid
              container
              sx={{
                display: "flex",
                gap: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                width: "100%",
                mt: 4,
              }}
            >
              <Grid
                item
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1750"
                data-aos-easing="ease-in-out"
              >
                <Button
                  sx={{
                    display: "flex",
                    gap: "10px",
                    color: "black",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      background: "white",
                      height: "30px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Inventory sx={{ color: "black", fontSize: "16px" }} />
                  </Box>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Buy
                  </span>
                </Button>
              </Grid>
              <Grid
                item
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <Button
                  sx={{
                    display: "flex",
                    gap: "10px",
                    color: "black",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      background: "white",
                      height: "30px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Sell sx={{ color: "black", fontSize: "18px" }} />
                  </Box>
                  <Link
                    to="sale"
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Sale
                  </Link>
                </Button>
              </Grid>
              <Grid
                item
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="2250"
                data-aos-easing="ease-in-out"
              >
                <Button
                  size="small"
                  sx={{
                    display: "flex",
                    gap: "5px",
                    color: "black",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "white",
                    }}
                  >
                    <AutoStories sx={{ color: "black", fontSize: "18px" }} />
                  </Box>
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Rental
                  </span>
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box mt={10}>
            <AllProperty />
          </Box>
        </Container>
        <Box sx={{ background: "#FEF7F6", mt: 5 }}>
          <Services />
        </Box>
        <Container
          sx={{ mt: 13, mb: 5, bgcolor: "#F5F5F5", position: "relative" }}
        >
          <ContactBanner />
        </Container>
        <Container sx={{ mt: 10, mb: 5 }}>
          <ClientCount />
        </Container>
        <Modal open={playVideo}>
          <Box sx={style}>
            <VideoPlay handleClose={handleClose} />
          </Box>
        </Modal>
      </Box>
    </>
  );
}

export default Home;
