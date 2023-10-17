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

import {
  ControlCameraOutlined,
  PhotoSizeSelectSmallOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Pagination } from "@mui/material";

const PropertyCard = ({ property }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <RouterLink
        to={`/properties/land/${property.propertyFor.toLowerCase()}/${
          property.id
        }`}
        style={{ textDecoration: "none" }}
      >
        <Card sx={{ position: "relative" }}>
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
                <PhotoSizeSelectSmallOutlined
                  fontSize="small"
                  sx={{ color: "#EB6753" }}
                />{" "}
                {property.unitSize}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "75px",
                height: "25px",
                bgcolor: "#eb6753",
                top: 15,
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
          </CardContent>
        </Card>
      </RouterLink>
    </Grid>
  );
};

const Land = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://64c9e941b2980cec85c2877a.mockapi.io/properties"
      );
      const filterData = response.data.filter(
        (pro) => pro.propertyType === "Land"
      );
      setData(filterData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 400, behavior: "smooth" });
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
        Land Properties
      </h1>
      <Grid container spacing={3} mt={1}>
        {currentItems &&
          currentItems.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "start", width: "100%", mt: 5 }}
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

export default Land;
