import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { List, ListItem, ListItemText } from "@mui/material";

function PropertyMenu() {
  const [open, setOpen] = useState(false);

  // Function to close the menu
  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: "4px" }}>
      <Box sx={{ display: "flex" }} onClick={() => setOpen(!open)}>
        <Link
          className="navLink"
          color="primary"
          style={{
            cursor: "pointer",
          }}
        >
          Properties
        </Link>
        <span style={{ cursor: "pointer" }}>
          {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </span>
      </Box>

      {open && (
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            top: "14%",
            left: "26%",
            position: "fixed",
            padding: {
              xs: "0",
              sm: "0",
              md: "20px 30px",
              lg: "20px 30px 20px 70px",
            },
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            bgcolor: "#fff",
            borderRadius: "5px",
            width: "35%",
          }}
        >
          <ListItem disablePadding>
            <NavLink
              to="/properties/residential"
              className="navLink"
              onClick={handleCloseMenu}
            >
              <ListItemText primary="Residential" />
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink
              to="/properties/commercial"
              className="navLink"
              onClick={handleCloseMenu}
            >
              <ListItemText primary="Commercial" />
            </NavLink>
          </ListItem>
          <ListItem disablePadding>
            <NavLink
              to="/properties/land"
              className="navLink"
              onClick={handleCloseMenu}
            >
              <ListItemText primary="Lands" />
            </NavLink>
          </ListItem>
        </List>
      )}
    </div>
  );
}

export default PropertyMenu;
