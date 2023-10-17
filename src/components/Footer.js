import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Container, Divider, Grid, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Grid container sx={{ padding: "40px 40px 40px 0" }}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box
            sx={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <h1>LOGO</h1>
            <Box>
              <p style={{ marginBottom: 5, color: "gray", fontSize: "14px" }}>
                Address
              </p>
              <h5>
                No.13, 20th cross St,
                <br />
                west Krishna Nagar, Lawspet, Puducherry-605008.
              </h5>
            </Box>
            <Box>
              <p style={{ marginBottom: 5, color: "gray", fontSize: "14px" }}>
                Feel Free to call
              </p>
              <h5>+(91) 97873 83743</h5>
            </Box>
            <Box>
              <p style={{ marginBottom: 5, color: "gray", fontSize: "14px" }}>
                Need Support?
              </p>
              <h5>admin@cloudninerealty.in</h5>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box sx={{ padding: "10px" }}>
            <Box>
              <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
                Popular Search
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <li>
                  <Link href="#" underline="none" color="black" fontSize="14px">
                    ECR
                  </Link>
                </li>
                <li>
                  <Link href="#" underline="none" color="black" fontSize="14px">
                    North Chennai
                  </Link>
                </li>
                <li>
                  <Link href="#" underline="none" color="black" fontSize="14px">
                    Adayar
                  </Link>
                </li>
                <li>
                  <Link href="#" underline="none" color="black" fontSize="14px">
                    koyambedu
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box sx={{ padding: "10px" }}>
            <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
              Quick Links
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <li>
                <Link href="#" underline="none" color="black" fontSize="14px">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" underline="none" color="black" fontSize="14px">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                  }}
                >
                  Contact Support
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/faq"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                  }}
                >
                  FAQs
                </RouterLink>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Box sx={{ padding: "10px" }}>
            <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
              Follow us on social media
            </p>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 3, md: 4, lg: 4 },
                mt: 3,
              }}
            >
              <Link
                href="https://www.facebook.com/"
                underline="none"
                target="_blank"
              >
                <Facebook fontSize="large" sx={{ color: "black" }} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                underline="none"
                target="_blank"
              >
                <Instagram fontSize="large" sx={{ color: "black" }} />
              </Link>
              <Link
                href="https://twitter.com/"
                underline="none"
                target="_blank"
              >
                <Twitter fontSize="large" sx={{ color: "black" }} />
              </Link>
              <Link
                href="https://in.linkedin.com/"
                underline="none"
                target="_blank"
              >
                <LinkedIn fontSize="large" sx={{ color: "black" }} />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container sx={{ padding: "25px" }}>
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ fontSize: "14px" }}>
          Cloudninerealty &copy;{`${year} - All rights reserved`}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: { md: "end", lg: "end" },
            mt: { sm: 0, xs: 3, lg: 0, md: 0 },
            fontSize: "14px",
            gap: { md: 1, lg: 1 },
          }}
        >
          <span>Design and developed by</span>
          <Link href="https://github.com/pstamil">@pstamil</Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
