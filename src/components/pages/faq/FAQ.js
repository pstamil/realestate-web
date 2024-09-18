import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import ContactBanner from "../Contact/ContactBanner";
import faq from "../../../assets/faq.jpg";
import faqsvg from "../../../assets/faq.svg";

function FAQ() {
  const faqQus = [
    {
      id: 1,
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    },
    {
      id: 2,
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
    },
    {
      id: 3,
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
    },
    {
      id: 4,
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
    },
    {
      id: 5,
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
    },
    {
      id: 6,
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
    },
    {
      id: 7,
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
    },
  ];

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${faq})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: { xs: "60vh", sm: "60vh", md: "70vh", lg: "100vh" },
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "10%", sm: "15%", md: "18%", lg: "18%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
          p: {
            xs: "0 0 0 3%",
            sm: "0 0 0 3%",
            md: "0 0 0 10%",
            lg: "0 0 0 9%",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "40px", sm: "40px", md: "48px", lg: "48px" },
            fontWeight: "bold",
            mb: 2,
          }}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Got a question?
        </Typography>
        <h2
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          Get your answer !
        </h2>
      </Box>
      <Container sx={{ mt: 10, mb: 10 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ bgcolor: "#F5F5F5", padding: "20px" }}
          >
            <h2>We are here to help you !</h2>
            <span>Browse through the most frequently asked questions</span>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} mt={5}>
            {faqQus?.map((faq) => (
              <Accordion key={faq.id} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="body1">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            mt={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                padding: "30px",
                borderRadius: "10px",
                bgcolor: "#F5F5F5",
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "column",
                  lg: "column",
                },
              }}
            >
              <img
                src={faqsvg}
                alt="faq"
                style={{ width: "100%", height: "150px" }}
              />
              <Box sx={{ mt: { xs: 2, sm: 0, md: 2, lg: 2 } }}>
                <h2>Can't find what you looking for ?</h2>
                <p style={{ fontSize: "14px" }}>
                  Email your query to&nbsp;
                  <Link href="mailto:admin@cloudninerealty.in" underline="none">
                    admin@cloudninerealty.in
                  </Link>
                </p>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 1,
                  }}
                >
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{ mt: 13, mb: 5, bgcolor: "#F5F5F5", position: "relative" }}
      >
        <ContactBanner />
      </Container>
    </Box>
  );
}

export default FAQ;
