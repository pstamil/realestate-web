import React from "react";
import contact from "../../../assets/contact.jpg";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactBanner from "./ContactBanner";

function Contact() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${contact})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: { xs: "12%", sm: "15%", md: "15%", lg: "15%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: "32px",
            marginBottom: 2,
          }}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "13px", sm: "16px", md: "16px", lg: "16px" },
          }}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          Talk to our experts or Browse through more properties.
        </Typography>
      </Box>
      <Container>
        <Grid container mb={5}>
          <Grid
            mt={5}
            mb={6}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="body1" color="gray">
              Get in touch!
            </Typography>
            <h1 style={{ fontSize: "42px" }}>CONTACT</h1>
          </Grid>
          <Grid item xs={12} sm={5} md={6} lg={6}>
            <ContactInfo />
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={6}
            lg={6}
            sx={{ mt: { sm: 0, xs: 5, md: 0, lg: 0 } }}
          >
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{ mt: 13, mb: 10, bgcolor: "#F5F5F5", position: "relative" }}
      >
        <ContactBanner />
      </Container>
    </Box>
  );
}

export default Contact;
