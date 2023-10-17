import PropTypes from "prop-types";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import { Link, NavLink, useLocation } from "react-router-dom";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import logo from "../../assets/logo.png";

const drawerWidth = 240;

function MobileNav(props) {
  const { window, handleDrawerToggle, mobileOpen } = props;

  const [propertyOpen, setPropertyOpen] = useState(false);
  const location = useLocation();

  const handlePropertyClick = () => {
    setPropertyOpen(!propertyOpen);
    handleDrawerToggle();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src={logo}
        alt="logo"
        style={{ width: "200px", height: "80px", marginTop: "10px" }}
      />
      <Divider />
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 3,
          mt: 2,
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton
            disablePadding
            sx={{ display: "flex", justifyContent: "start", ml: 5 }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </NavLink>
        <NavLink
          to="premium"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton
            disablePadding
            sx={{ display: "flex", justifyContent: "start", ml: 5 }}
          >
            <ListItemText primary="Premium" />
          </ListItemButton>
        </NavLink>
        <NavLink to="nri" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton
            disablePadding
            sx={{ display: "flex", justifyContent: "start", ml: 5 }}
          >
            <ListItemText primary="NRI" />
          </ListItemButton>
        </NavLink>
        {location.pathname === "/properties" ||
        location.pathname === "/properties/commercial" ||
        location.pathname === "/properties/residential" ||
        location.pathname === "/properties/land" ? (
          <>
            <ListItemButton onClick={handlePropertyClick} sx={{ ml: 3 }}>
              Properties
              {propertyOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </ListItemButton>
            <Collapse in={propertyOpen} timeout="auto" unmountOnExit>
              <NavLink
                to="/properties/commercial"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton
                  disablePadding
                  sx={{ display: "flex", justifyContent: "start", ml: 5 }}
                >
                  <ListItemText primary="Commercial" />
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/properties/residential"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton
                  disablePadding
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    ml: 5,
                    mt: 2,
                  }}
                >
                  <ListItemText primary="Residential" />
                </ListItemButton>
              </NavLink>
              <NavLink
                to="/properties/land"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton
                  disablePadding
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    ml: 5,
                    mt: 2,
                  }}
                >
                  <ListItemText primary="Lands" />
                </ListItemButton>{" "}
              </NavLink>
            </Collapse>
          </>
        ) : (
          <NavLink
            to="properties"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton
              disablePadding
              sx={{ display: "flex", justifyContent: "start", ml: 5 }}
            >
              <ListItemText primary="Properties" />
            </ListItemButton>
          </NavLink>
        )}
        <NavLink
          to="contact"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton
            disablePadding
            sx={{ display: "flex", justifyContent: "start", ml: 5 }}
          >
            <ListItemText primary="Contact" />
          </ListItemButton>{" "}
        </NavLink>
        <NavLink to="faq" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton
            disablePadding
            sx={{ display: "flex", justifyContent: "start", ml: 5 }}
          >
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </NavLink>

        <Divider />
        <Link to="login" style={{ textDecoration: "none" }}>
          <ListItemButton
            disablePadding
            sx={{ display: "flex", justifyContent: "start", ml: 5 }}
          >
            <Button
              startIcon={<AccountCircleOutlined />}
              sx={{
                color: "black",
                textTransform: "none",
                display: { xs: "flex", sm: "none", md: "none", lg: "none" },
              }}
            >
              LogIn
            </Button>
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
}

MobileNav.propTypes = {
  window: PropTypes.func,
};

export default MobileNav;
