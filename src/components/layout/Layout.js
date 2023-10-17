import React from "react";
import NavBar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import BackToTop from "../BackToTop";
import { Box } from "@mui/material";

function index() {
  return (
    <>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
      <Box sx={{ bgcolor: "#F5F5F5" }}>
        <Footer />
      </Box>

      <BackToTop />
    </>
  );
}

export default index;
