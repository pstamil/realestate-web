import { Email, KeyboardArrowUp, Phone, WhatsApp } from "@mui/icons-material";
import { Avatar, Box, IconButton, Link, Tooltip } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function BackToTop() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          bottom: top ? "120px" : "20px",
          right: top ? "60px" : "80px",
        }}
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
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
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: top ? "170px" : "20px",
          right: top ? "60px" : "30px",
        }}
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
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
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: top ? "220px" : "20px",
          right: top ? "60px" : "130px",
        }}
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
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
      {top && (
        <Tooltip
          title="Scroll to top"
          placement="top"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <IconButton
            sx={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
              bgcolor: "#eee",
              borderRadius: "50%",
              width: "55px",
              height: "55px",
            }}
            onClick={scrollUp}
          >
            <KeyboardArrowUp sx={{ color: "black" }} fontSize="large" />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
}

export default BackToTop;
