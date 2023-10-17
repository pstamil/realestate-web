import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  DirectionsBus,
  Medication,
  PlaceOutlined,
  School,
  Tram,
} from "@mui/icons-material";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import PropertyLoader from "../../../PreLoader/PropertyLoder";
import EnquryForm from "../../../enquryForm/EnquryForm";

function PropertyDetails() {
  const { id: propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://64c9e941b2980cec85c2877a.mockapi.io/properties"
        );
        const propertyData = response.data.find(
          (p) => p.id === parseInt(propertyId)
        );

        setProperty(propertyData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getData();
  }, [propertyId]);

  if (!property) {
    return <PropertyLoader />;
  }

  //BreadcrumbLinks
  const pathParts = location.pathname
    .split("/")
    .filter((part) => part.trim() !== "");
  pathParts.pop();
  const breadcrumbLinks = pathParts.map((part, index) => {
    const url = `/${pathParts.slice(0, index + 1).join("/")}`;
    return (
      <Link
        key={url}
        href={url}
        sx={{ textDecoration: "none", color: "#EB6753" }}
      >
        {part}
      </Link>
    );
  });

  return (
    <>
      <Box sx={{ padding: "20px 0 20px 10px", mb: 5, mt: 13 }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "14px" } }}
        >
          <Link href="/" sx={{ textDecoration: "none", color: "#EB6753" }}>
            Home
          </Link>
          {breadcrumbLinks}
          <Typography
            color="textPrimary"
            sx={{
              fontSize: { xs: "10px", sm: "12px", md: "14px", lg: "14px" },
            }}
          >
            {property.propertyName} Details
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={7}
            xl={7}
            sx={{ position: "relative" }}
          >
            <Box
              sx={{
                padding: "20px",
                bgcolor: "#f5f5f5",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <h2>{property.propertyName}</h2>
                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    color: "gray",
                    gap: 1,
                    fontSize: "14px",
                  }}
                >
                  <PlaceOutlined sx={{ color: "red" }} />
                  {property.address.locality},&nbsp;{property.address.city}
                </Typography>
              </Box>
              <Divider variant="middle" sx={{ mt: 2, mb: 2.5 }} />
              <Box>
                <img
                  src={property.imageUrl}
                  alt={property.propertyName}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <h4 style={{ margin: "20px 0" }}>Property details</h4>
              <Box sx={{ display: "flex" }}>
                <List
                  sx={{
                    width: "50%",
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="gray"
                          >
                            Property For :
                          </Typography>
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            &nbsp;{property.propertyFor}
                          </span>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="middle" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="gray"
                          >
                            Property Type :
                          </Typography>
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            &nbsp;{property.propertyType}
                          </span>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="middle" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="gray"
                          >
                            Category :
                          </Typography>
                          <span style={{ fontWeight: "bold" }}>
                            &nbsp;{property.category}
                          </span>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
                <List
                  sx={{
                    width: "50%",
                    bgcolor: "background.paper",
                  }}
                >
                  {property.propertyPlan && (
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="gray"
                              >
                                Property Plan :
                              </Typography>
                              <span style={{ fontWeight: "bold" }}>
                                {" "}
                                &nbsp;{property.propertyPlan}
                              </span>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="middle" component="li" />
                    </>
                  )}

                  <ListItem alignItems="flex-start">
                    <ListItemText
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="gray"
                          >
                            Unit Size :
                          </Typography>
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            &nbsp;{property.unitSize}
                          </span>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  {property.propertySize && (
                    <>
                      <Divider variant="middle" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="gray"
                              >
                                Property Size :
                              </Typography>
                              <span style={{ fontWeight: "bold" }}>
                                {" "}
                                &nbsp;{property.propertySize} sqft
                              </span>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </>
                  )}
                </List>
              </Box>
            </Box>
            <Box
              sx={{
                padding: "15px 20px",
                bgcolor: "#f5f5f5",
                borderRadius: "10px",
                mt: 3,
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>Description</h2>
              <span style={{ fontSize: "13px" }}>{property.description}</span>
              <Divider variant="middle" sx={{ mt: 1, mb: 1 }} />
              <React.Fragment>
                <Typography
                  sx={{ display: "inline", fontWeight: "bold" }}
                  component="span"
                  variant="body2"
                  color="black"
                >
                  Fetures :
                </Typography>
                <span style={{ fontSize: "13px" }}>
                  {" "}
                  &nbsp;{property.features.join(", ")}
                </span>
              </React.Fragment>
            </Box>
            {property.distances && (
              <Box
                sx={{
                  padding: "15px 20px",
                  bgcolor: "#f5f5f5",
                  borderRadius: "10px",
                  mt: 3,
                }}
              >
                <h2 style={{ marginBottom: "10px" }}>Distances</h2>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "15px 0",
                  }}
                >
                  {property.distances.hospital !== 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Medication sx={{ fontSize: "40px" }} />
                      <span style={{ fontSize: "12px" }}>
                        Hospital: {property.distances.hospital}km
                      </span>
                    </Box>
                  )}
                  {property.distances.busStop !== 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <DirectionsBus sx={{ fontSize: "40px" }} />
                      <span style={{ fontSize: "12px" }}>
                        Busstop: {property.distances.busStop}km
                      </span>
                    </Box>
                  )}
                  {property.distances.railwayStation !== 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Tram sx={{ fontSize: "40px" }} />
                      <span style={{ fontSize: "12px" }}>
                        Railway: {property.distances.railwayStation}km
                      </span>
                    </Box>
                  )}
                  {property.distances.school !== 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <School sx={{ fontSize: "40px" }} />
                      <span style={{ fontSize: "12px" }}>
                        School: {property.distances.school}km
                      </span>
                    </Box>
                  )}
                </Box>
              </Box>
            )}
            <Box
              sx={{
                position: "absolute",
                width: "80px",
                height: "30px",
                bgcolor:
                  property.propertyFor === "Buy" ||
                  property.propertyFor === "Sale"
                    ? "#eb6753"
                    : "#00C194",
                top: { xs: 60, sm: 28, md: 28, lg: 28 },
                right: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
              }}
            >
              <span style={{ fontSize: "13px", color: "white" }}>
                For {property.propertyFor}
              </span>
            </Box>
          </Grid>
          <Grid item xs={12} sm={0} md={0} lg={0.5} xl={0.5}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4.5}
            xl={4.5}
            sx={{
              mt: { xs: 3, sm: 3, md: 3, lg: 0, xl: 0 },
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: 85,
                bgcolor: "#F5F5F5",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <p style={{ padding: "0 0 10px 0", fontWeight: "bold" }}>
                More Images :
              </p>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ mr: 1 }}>
                  <img
                    src={property.imageUrl}
                    alt={property.propertyName}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Box>
                  <img
                    src={property.imageUrl}
                    alt={property.propertyName}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <EnquryForm
                  propertyName={property.propertyName}
                  propertyId={propertyId}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PropertyDetails;
