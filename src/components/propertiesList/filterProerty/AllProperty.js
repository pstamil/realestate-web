import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Divider,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import {
  BedOutlined,
  BusinessOutlined,
  ControlCameraOutlined,
  East,
  PhotoSizeSelectSmallOutlined,
  PlaceOutlined,
  West,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const PropertyCard = ({ property }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ position: "relative" }}>
      <RouterLink
        to={`/properties/${property.propertyType.toLowerCase()}/${property.propertyFor.toLowerCase()}/${
          property.id
        }`}
        style={{ textDecoration: "none" }}
      >
        <Card>
          <CardMedia
            sx={{ height: 200 }}
            component="img"
            alt={property.propertyName}
            src={property.imageUrl}
          />
          <CardContent
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {property.propertyName}
              </Typography>
              <span style={{ color: "#0F9D58", fontSize: "12px" }}>
                {property.category}
              </span>
            </Box>

            <Typography
              variant="body2"
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                color: "gray",
                gap: 1,
                fontSize: "13px",
              }}
            >
              <PlaceOutlined fontSize="small" sx={{ color: "#4285F4" }} />
              {property.address.locality},&nbsp;{property.address.city}
            </Typography>

            <Divider variant="middle" sx={{ mb: 1 }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  color: "black",
                }}
              >
                <ControlCameraOutlined
                  fontSize="small"
                  sx={{ color: "#EB6753" }}
                />{" "}
                {property.propertySize}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  color: "black",
                }}
              >
                {property.propertyType === "Residential" && (
                  <>
                    <BedOutlined fontSize="small" sx={{ color: "#EB6753" }} />{" "}
                    {property.propertyPlan}
                  </>
                )}
                {property.propertyType === "Commercial" && (
                  <>
                    <BusinessOutlined
                      fontSize="small"
                      sx={{ color: "#EB6753" }}
                    />{" "}
                    {property.propertyPlan}
                  </>
                )}

                {property.propertyType === "Land" && (
                  <>
                    <PhotoSizeSelectSmallOutlined
                      fontSize="small"
                      sx={{ color: "#EB6753" }}
                    />{" "}
                    {property.unitSize}
                  </>
                )}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Box
          sx={{
            position: "absolute",
            width: "75px",
            height: "25px",
            bgcolor:
              property.propertyFor === "Buy" || property.propertyFor === "Sale"
                ? "#eb6753"
                : "#00C194",
            top: 40,
            left: 40,
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
      </RouterLink>
    </Grid>
  );
};

//shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const AllProperty = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [properyPerPage, setPropertyPerPage] = useState(3);

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://64c9e941b2980cec85c2877a.mockapi.io/properties"
      );
      // Shuffle the filtered data
      const shuffledData = shuffleArray(response.data);

      setData(shuffledData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const totalPageCount = Math.ceil(data.length / properyPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPageCount - 1 ? prevPage + 1 : prevPage
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const startIndex = currentPage * properyPerPage;
  const endIndex = startIndex + properyPerPage;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setPropertyPerPage(1);
      } else if (window.innerWidth < 960) {
        setPropertyPerPage(2);
      } else if (window.innerWidth < 1200) {
        setPropertyPerPage(2);
      } else {
        setPropertyPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", mt: 5, mb: 10, bgcolor: "#F8F9FA" }}>
      <Container>
        <Box
          sx={{
            mb: 5,
            mt: 10,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <hr
            style={{
              background: "#7A73EA",
              width: "40px",
              height: "3px",
              border: "none",
            }}
          />
          <h1 style={{ fontWeight: "500" }}>Popular Properties</h1>
        </Box>
        <Grid container spacing={3} mt={1}>
          {data.length > 0 ? (
            data
              .slice(startIndex, endIndex)
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 5,
                width: "100%",
                height: 390,
              }}
            >
              <Box className="loader" sx={{ color: "#ff5a5f" }}></Box>
              <p style={{ fontSize: "13px", fontWeight: "300" }}>Loading...</p>
            </Box>
          )}
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mb: 5,
            mt: 5,
          }}
        >
          <IconButton
            onClick={prevPage}
            disabled={currentPage === 0}
            disableRipple
          >
            <West fontSize="large" />
          </IconButton>
          <IconButton
            onClick={nextPage}
            disabled={currentPage === totalPageCount - 1}
            disableRipple
          >
            <East fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default AllProperty;
