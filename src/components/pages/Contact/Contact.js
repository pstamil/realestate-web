import React from "react";
import contact from "../../../assets/contact.jpg";
import { Box, Container, Grid, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${contact})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { xs: "50vh", sm: "70vh", md: "80vh", lg: "80vh" },
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
          flexWrap: "wrap",
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
          data-aos-offset="100"
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
            textAlign: "center",
          }}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1300"
          data-aos-easing="ease-in-out"
        >
          Talk to our experts or Browse through more properties.
        </Typography>
      </Box>
      <Container>
        <Grid container mb={10}>
          <Grid
            mt={5}
            mb={6}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ textAlign: "center" }}
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
          >
            <Typography variant="body1" color="gray">
              Get in touch!
            </Typography>
            <h1 style={{ fontSize: "42px" }}>CONTACT</h1>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ContactInfo />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ mt: { sm: 5, xs: 5, md: 0, lg: 0 } }}
          >
            <ContactForm />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} mt={8}>
            <Box>
              <h3 style={{ fontWeight: 500, marginBottom: "10px" }}>
                LOCATION:
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.2880015714413!2d79.80855907423073!3d11.954550988275145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536141df4ddbeb%3A0xca50c44a582e2b90!2s13%2C%2020th%20Cross%20St%2C%20Avvai%20Nagar%2C%20Lawspet%2C%20Puducherry%2C%20605008!5e0!3m2!1sen!2sin!4v1699505564824!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowfullscreen=""
                title="location"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
