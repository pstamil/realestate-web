import { Avatar, Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import banner from "../../../assets/contactBanner.png";
import { Email, Phone, WhatsApp } from "@mui/icons-material";

function ContactBanner() {
  return (
    <Grid container>
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        lg={8}
        sx={{
          padding: "30px 0",
        }}
      >
        <Box sx={{ padding: "0 0 0 20px" }}>
          <Typography
            variant="h1"
            sx={{
              color: "#EB6753",
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "16px", md: "28px", lg: "28px" },
            }}
          >
            Find Your Heaven!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", sm: "18px", md: "20px", lg: "20pxx" },
            }}
          >
            We are Offering The Best Real Estate Property For All
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={10} sm={10} md={3} lg={2}>
        <Box
          sx={{
            mt: { xs: 0, sm: 0, lg: 5, md: 5 },
            mb: { sm: 5, xs: 6.5, lg: 0, md: 0 },
            ml: { sm: 3, xs: 2.5, lg: 0, md: 0 },
            display: "flex",
            gap: 2,
          }}
        >
          <Link
            href="https://wa.me/9787383743?text=Im%20searching%20for%20property"
            target="_blank"
          >
            <Avatar
              sx={{
                bgcolor: "#25D366",
                width: 36,
                height: 36,
              }}
            >
              <WhatsApp sx={{ fontSize: "22px", color: "white" }} />
            </Avatar>
          </Link>
          <Link href="mailto:admin@cloudninerealty.in" target="_blank">
            <Avatar
              sx={{
                bgcolor: "#EA4335",
                width: 36,
                height: 36,
              }}
            >
              <Email sx={{ fontSize: "22px", color: "white" }} />
            </Avatar>
          </Link>
          <Link href="tel:9787383743" target="_blank">
            <Avatar
              sx={{
                bgcolor: "#1DA1F2",
                width: 36,
                height: 36,
              }}
            >
              <Phone sx={{ fontSize: "22px", color: "white" }} />
            </Avatar>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={2}>
        <Box
          sx={{
            width: { xs: "220px", sm: "260px", md: "200px", lg: "200px" },
            height: { xs: "220px", sm: "250px", md: "190px", lg: "190px" },
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <img
            src={banner}
            alt="contactBanner"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactBanner;
