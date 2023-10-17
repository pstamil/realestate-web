import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Divider,
  Box,
} from "@mui/material";
import { Pagination } from "@mui/material";
import {
  BedOutlined,
  BusinessOutlined,
  ControlCameraOutlined,
  PhotoSizeSelectSmallOutlined,
  PlaceOutlined,
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 650, behavior: "smooth" });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <h1
        style={{
          fontWeight: "bold",
          marginBottom: "30px",
          padding: "10px 0",
          borderBottom: "2px solid #EB6753",
        }}
      >
        Discover Popular Properties
      </h1>
      <Grid container spacing={3} mt={1}>
        {currentItems &&
          currentItems.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          width: "100%",
          mt: 5,
        }}
      >
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default AllProperty;
