import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link, NavLink } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { MenuIcon } from "lucide-react";
import MobileNav from "./MobileNav";
import { AccountCircleOutlined } from "@mui/icons-material";
import PropertyMenu from "./DropdownMenu/PropertyMenu";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          position="fixed"
          sx={{
            background: scrolling ? "white" : "transparent",
            boxShadow: scrolling
              ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3)"
              : "none",
            color: "black",
            height: "80px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              ml: { sm: 0, xs: 0, md: 0, lg: "7.1%", xl: "17%" },
              mr: { sm: 0, xs: 0, md: 0, lg: "7.1%", xl: "17%" },
            }}
          >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "200px", height: "80px", marginTop: "10px" }}
                />
                {location.pathname === "/properties" ||
                location.pathname === "/properties/commercial" ||
                location.pathname === "/properties/residential" ||
                location.pathname === "/properties/land" ? (
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "flex",
                        lg: "flex",
                      },
                      alignItems: "center",
                      gap: { xs: 0, sm: 0, md: 5, lg: 6 },
                    }}
                  >
                    <NavLink to="/" className="navLink">
                      Home
                    </NavLink>
                    <PropertyMenu />

                    <NavLink to="premium" className="navLink">
                      Premium
                    </NavLink>
                    <NavLink to="nri" className="navLink">
                      NRI
                    </NavLink>
                    <NavLink to="contact" className="navLink">
                      Contact
                    </NavLink>
                    <NavLink to="faq" className="navLink">
                      FAQ
                    </NavLink>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "flex",
                        lg: "flex",
                      },
                      alignItems: "center",
                      gap: { xs: 0, sm: 0, md: 5, lg: 6 },
                    }}
                  >
                    <NavLink to="/" className="navLink">
                      Home
                    </NavLink>
                    <NavLink to="properties" className="navLink">
                      Properties
                    </NavLink>

                    <NavLink to="premium" className="navLink">
                      Premium
                    </NavLink>
                    <NavLink to="nri" className="navLink">
                      NRI
                    </NavLink>
                    <NavLink to="contact" className="navLink">
                      Contact
                    </NavLink>
                    <NavLink to="faq" className="navLink">
                      FAQ
                    </NavLink>
                  </Box>
                )}
              </Box>

              <Box sx={{ display: "flex", gap: 3 }}>
                <Link to="login" style={{ textDecoration: "none" }}>
                  <Button
                    startIcon={<AccountCircleOutlined />}
                    sx={{
                      color: "black",
                      textTransform: "none",
                      display: {
                        xs: "none",
                        sm: "flex",
                        md: "flex",
                        lg: "flex",
                      },
                      border: "1px solid black",
                      borderRadius: "25px",
                      padding: "8px 20px",
                      "&:hover": {
                        color: "white",
                        bgcolor: "black",
                      },
                    }}
                  >
                    LogIn
                  </Button>
                </Link>

                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    mr: 2,
                    display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
                  }}
                >
                  <MenuIcon style={{ color: "black" }} />
                </IconButton>
              </Box>
              <CssBaseline />
            </Toolbar>
          </Box>
        </AppBar>
        <MobileNav
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
    </>
  );
}

export default NavBar;
