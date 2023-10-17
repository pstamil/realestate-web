import {
  Grid,
  Container,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import ContactBanner from "../Contact/ContactBanner";
import property from "../../../assets/property.jpg";
import QuoteDesign from "./QuoteDesign";
import {
  ExpandLess,
  ExpandMore,
  Inventory,
  Sell,
  VolunteerActivism,
} from "@mui/icons-material";

function Properties() {
  const location = useLocation();
  const { id } = useParams();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const resiId = `/properties/residential/buy/${id}`;
  const resiId2 = `/properties/residential/rent/${id}`;
  const commId = `/properties/commercial/buy/${id}`;
  const commId2 = `/properties/commercial/rent/${id}`;
  const landId = `/properties/land/sale/${id}`;

  return (
    <Box>
      {location.pathname === resiId ||
      location.pathname === resiId2 ||
      location.pathname === commId ||
      location.pathname === commId2 ||
      location.pathname === landId ? (
        <></>
      ) : (
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              backgroundImage: `url(${property})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "350px",

              mt: 11,
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "13%", sm: "10%", md: "10%", lg: "10%" },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: {
                xs: "start",
                sm: "start",
                md: "center",
                lg: "center",
              },
              alignItems: "center",
            }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "28px", sm: "30px", md: "38px", lg: "38px" },
              }}
            >
              Let's find a property
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "30px", sm: "34px", md: "44px", lg: "46px" },
              }}
            >
              that's perfect for you
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "10%", sm: "12%", md: "15%", lg: "15%" },
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "0 20% 0 20%",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                sm={3.5}
                md={3.5}
                lg={3.5}
                sx={{
                  background:
                    location.pathname === "/properties/residential"
                      ? "#EB6753"
                      : "#E7EEF4",
                  p: "10px",
                  textAlign: "center",
                  borderRadius: "10px",
                  "&:hover": {
                    bgcolor: "#EB6753",
                  },
                }}
              >
                <Link
                  to="/properties/residential"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/properties/residential"
                        ? "white"
                        : "black",
                  }}
                >
                  Residential
                </Link>
              </Grid>
              <Grid item xs={0} sm={0.75} md={0.75} lg={0.75}></Grid>
              <Grid
                item
                xs={12}
                sm={3.5}
                md={3.5}
                lg={3.5}
                sx={{
                  background:
                    location.pathname === "/properties/commercial"
                      ? "#EB6753"
                      : "#E7EEF4",
                  p: "10px",
                  textAlign: "center",
                  borderRadius: "10px",
                  mt: { xs: 2, sm: 0, md: 0, lg: 0, xl: 0 },
                  "&:hover": {
                    bgcolor: "#EB6753",
                  },
                }}
              >
                <Link
                  to="/properties/commercial"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/properties/commercial"
                        ? "white"
                        : "black",
                  }}
                >
                  Commercial
                </Link>
              </Grid>
              <Grid item xs={0} sm={0.75} md={0.75} lg={0.75}></Grid>
              <Grid
                item
                xs={12}
                sm={3.5}
                md={3.5}
                lg={3.5}
                sx={{
                  background:
                    location.pathname === "/properties/land"
                      ? "#EB6753"
                      : "#E7EEF4",
                  p: "10px",
                  textAlign: "center",
                  borderRadius: "10px",
                  mt: { xs: 2, sm: 0, md: 0, lg: 0, xl: 0 },
                  "&:hover": {
                    bgcolor: "#EB6753",
                    color: "white",
                  },
                }}
              >
                <Link
                  to="/properties/land"
                  style={{
                    textDecoration: "none",
                    color:
                      location.pathname === "/properties/land"
                        ? "white"
                        : "black",
                  }}
                >
                  Lands
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
      <Container>
        <Box sx={{ width: "100%", mt: 2 }}>
          {location.pathname === "/properties/residential" ||
          location.pathname === "/properties/residential/buy" ||
          location.pathname === "/properties/residential/rent" ? (
            <Box sx={{ width: "100%" }}>
              <List>
                <ListItemButton
                  onClick={handleClick}
                  sx={{ bgcolor: "#EAF7F4" }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: " #EB6753" }}>
                      <VolunteerActivism sx={{ color: "#EAF7F4" }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Choose you want !" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </List>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link
                    to="/properties/residential/buy"
                    style={{ color: "#EB6753", textDecoration: "none" }}
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Inventory sx={{ color: "#EB6753" }} />
                      </ListItemIcon>
                      <ListItemText primary="For Buy" />
                    </ListItemButton>
                  </Link>{" "}
                  <Link
                    to="/properties/residential/rent"
                    style={{ color: "#00C194", textDecoration: "none" }}
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Sell sx={{ color: "#00C194" }} />
                      </ListItemIcon>
                      <ListItemText primary="For Rent" />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
          ) : (
            <></>
          )}
          {location.pathname === "/properties/commercial" ||
          location.pathname === "/properties/commercial/buy" ||
          location.pathname === "/properties/commercial/rent" ? (
            <Box sx={{ width: "100%" }}>
              <List>
                <ListItemButton
                  onClick={handleClick}
                  sx={{ bgcolor: "#EAF7F4" }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: " #EB6753" }}>
                      <VolunteerActivism sx={{ color: "#EAF7F4" }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Choose you want !" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </List>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link
                    to="/properties/commercial/buy"
                    style={{ color: "#EB6753", textDecoration: "none" }}
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Inventory sx={{ color: "#EB6753" }} />
                      </ListItemIcon>
                      <ListItemText primary="For Buy" />
                    </ListItemButton>
                  </Link>{" "}
                  <Link
                    to="/properties/commercial/rent"
                    style={{ color: "#00C194", textDecoration: "none" }}
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Sell sx={{ color: "#00C194" }} />
                      </ListItemIcon>
                      <ListItemText primary="For Rent" />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
          ) : (
            <></>
          )}
          {location.pathname === "/properties/land" ||
          location.pathname === "/properties/land/sale" ? (
            <Box sx={{ width: "100%" }}>
              <List>
                <ListItemButton
                  onClick={handleClick}
                  sx={{ bgcolor: "#EAF7F4" }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: " #EB6753" }}>
                      <VolunteerActivism sx={{ color: "#EAF7F4" }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Choose you want !" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </List>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link
                    to="/properties/land/sale"
                    style={{ color: "#00C194", textDecoration: "none" }}
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <Sell sx={{ color: "#00C194" }} />
                      </ListItemIcon>
                      <ListItemText primary="For Sale" />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </Box>
          ) : (
            <></>
          )}
        </Box>
      </Container>
      {location.pathname === "/properties" && (
        <Container
          sx={{
            mt: 7,
            mb: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <QuoteDesign />
        </Container>
      )}
      <Container sx={{ mt: 2 }}>
        <Outlet />
      </Container>

      <Container
        sx={{ mt: 13, mb: 5, bgcolor: "#F5F5F5", position: "relative" }}
      >
        <ContactBanner />
      </Container>
    </Box>
  );
}

export default Properties;
