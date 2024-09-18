import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState({
    propertyName: "",
    propertyType: "",
    propertyFor: "",
    propertyCategory: "",
    specialProperty: "",
    approval: "",
    landArea: "",
    builtUpArea: "",
    carpetArea: "",
    ageOfBuilding: "",
    totalFlats: "",
    bedRooms: "",
    bathRooms: "",
    powerBackup: "",
    waterFacility: "",
    facing: "",
    furnished: "",
    lift: "",
    carParking: "",
    address: {
      city: "",
      locality: "",
    },
    distance: {
      schoolDistance: "",
      hospitalDistance: "",
      busStandDistance: "",
      railwayStationDistance: "",
    },

    description: "",
  });

  useEffect(() => {
    // Fetch the property details using propertyId
    axios
      .get(`https://64c9e941b2980cec85c2877a.mockapi.io/property/${id}`)
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.error("Error fetching property details: ", error);
      });
  }, [id]);

  const handleFormSubmit = () => {
    axios
      .put(
        `https://64c9e941b2980cec85c2877a.mockapi.io/property/${id}`,
        property
      )
      .then((response) => {
        // Handle success, e.g., show a success message or navigate to another page
        navigate("/admin/allproperty");
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error updating property: ", error);
      });
  };

  const handleNestedChange = (field, value, nestedField) => {
    setProperty((prevProperty) => ({
      ...prevProperty,
      [field]: {
        ...prevProperty[field],
        [nestedField]: value,
      },
    }));
  };

  return (
    <Box mt={15} mb={10}>
      <form
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <h2 style={{ borderBottom: "2px solid black" }}>EDIT PROPERTY</h2>
        <Grid container mt={1} mb={5} spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Property Name"
                variant="outlined"
                value={property.propertyName}
                onChange={(e) =>
                  setProperty({ ...property, propertyName: e.target.value })
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Property Type</InputLabel>
              <Select
                label="Property Type"
                variant="outlined"
                value={property.propertyType}
                onChange={(e) =>
                  setProperty({ ...property, propertyType: e.target.value })
                }
              >
                <MenuItem value="Residential">Residential</MenuItem>
                <MenuItem value="Commercial">Commercial</MenuItem>
                <MenuItem value="Lands">Lands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Property For</InputLabel>
              <Select
                label="Property For"
                variant="outlined"
                value={property.propertyFor}
                onChange={(e) =>
                  setProperty({ ...property, propertyFor: e.target.value })
                }
              >
                <MenuItem value="Buy">Buy</MenuItem>
                <MenuItem value="Rent">Rent</MenuItem>
                <MenuItem value="Sale">Sale</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Property category</InputLabel>
              <Select
                label="Property category"
                variant="outlined"
                value={property.propertyCategory}
                onChange={(e) =>
                  setProperty({ ...property, propertyCategory: e.target.value })
                }
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                    },
                  },
                }}
              >
                <MenuItem value="Flat">Flat</MenuItem>
                <MenuItem value="Duplex">Duplex</MenuItem>
                <MenuItem value="Indepentent House">Indepentent House</MenuItem>
                <MenuItem value="Villa">Villa</MenuItem>
                <MenuItem value="Pent House">Pent House</MenuItem>
                <MenuItem value="Row House">Row House</MenuItem>
                <MenuItem value="Office">Office</MenuItem>
                <MenuItem value="Showroom">Showroom</MenuItem>
                <MenuItem value="Godown">Godown</MenuItem>
                <MenuItem value="Ware House">Ware House</MenuItem>
                <MenuItem value="Commercial">Commercial</MenuItem>
                <MenuItem value="Residential">Residential</MenuItem>
                <MenuItem value="Agriculture">Agriculture</MenuItem>
                <MenuItem value="Farm">Farm</MenuItem>
                <MenuItem value="Industrial">Industrial</MenuItem>
                <MenuItem value="Mixed">Mixed</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Special Property</InputLabel>
              <Select
                label="Special Property"
                variant="outlined"
                value={property.specialProperty}
                onChange={(e) =>
                  setProperty({ ...property, specialProperty: e.target.value })
                }
              >
                <MenuItem value="NRI">NRI</MenuItem>
                <MenuItem value="Premium">Premium</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Approval</InputLabel>
              <Select
                label="Approval"
                variant="outlined"
                value={property.approval}
                onChange={(e) =>
                  setProperty({ ...property, approval: e.target.value })
                }
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <h3 style={{ marginBottom: "18px" }}>Property size details</h3>
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Land Area / UDS"
                type="number"
                variant="outlined"
                value={property.landArea}
                onChange={(e) =>
                  setProperty({ ...property, landArea: e.target.value })
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Built up area"
                type="number"
                variant="outlined"
                value={property.builtUpArea}
                onChange={(e) =>
                  setProperty({ ...property, builtUpArea: e.target.value })
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                type="number"
                label="Carpet area"
                variant="outlined"
                value={property.carpetArea}
                onChange={(e) =>
                  setProperty({ ...property, carpetArea: e.target.value })
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Age of Building"
                type="number"
                variant="outlined"
                value={property.ageOfBuilding}
                onChange={(e) =>
                  setProperty({ ...property, ageOfBuilding: e.target.value })
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Total # of flats"
                type="number"
                variant="outlined"
                value={property.totalFlats}
                onChange={(e) =>
                  setProperty({ ...property, totalFlats: e.target.value })
                }
              />
            </FormControl>
          </Grid>
        </Grid>

        <h3 style={{ marginBottom: "18px" }}>Property facility details</h3>
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Bed Rooms</InputLabel>
              <Select
                label="Bed Rooms"
                variant="outlined"
                value={property.bedRooms}
                onChange={(e) =>
                  setProperty({ ...property, bedRooms: e.target.value })
                }
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                    },
                  },
                }}
              >
                <MenuItem value="1 BHK">1 BHK</MenuItem>
                <MenuItem value="2 BHK">2 BHK</MenuItem>
                <MenuItem value="3 BHK">3 BHK</MenuItem>
                <MenuItem value="4 BHK">4 BHK</MenuItem>
                <MenuItem value="5 BHK">5 BHK</MenuItem>
                <MenuItem value="6 BHK">6 BHK</MenuItem>
                <MenuItem value="7 BHK">7 BHK</MenuItem>
                <MenuItem value="8 BHK">8 BHK</MenuItem>
                <MenuItem value="9 BHK">9 BHK</MenuItem>
                <MenuItem value="10 BHK">10 BHK</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Bath Rooms</InputLabel>
              <Select
                label="Bath Rooms"
                variant="outlined"
                value={property.bathRooms}
                onChange={(e) =>
                  setProperty({ ...property, bathRooms: e.target.value })
                }
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                    },
                  },
                }}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Power Backup</InputLabel>
              <Select
                label="Power Backup"
                variant="outlined"
                value={property.powerBackup}
                onChange={(e) =>
                  setProperty({ ...property, powerBackup: e.target.value })
                }
              >
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Water facility</InputLabel>
              <Select
                label="Water facility"
                variant="outlined"
                value={property.waterFacility}
                onChange={(e) =>
                  setProperty({ ...property, waterFacility: e.target.value })
                }
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Facing</InputLabel>
              <Select
                label="Facing"
                variant="outlined"
                value={property.facing}
                onChange={(e) =>
                  setProperty({ ...property, facing: e.target.value })
                }
              >
                <MenuItem value="North">North</MenuItem>
                <MenuItem value="South">South</MenuItem>
                <MenuItem value="East">East</MenuItem>
                <MenuItem value="West">West</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Furnished</InputLabel>
              <Select
                label="Furnished"
                variant="outlined"
                value={property.furnished}
                onChange={(e) =>
                  setProperty({ ...property, furnished: e.target.value })
                }
              >
                <MenuItem value="Full furnished">Full furnished</MenuItem>
                <MenuItem value="Semi furnished">Semi furnished</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Lift</InputLabel>
              <Select
                label="Lift"
                variant="outlined"
                value={property.lift}
                onChange={(e) =>
                  setProperty({ ...property, lift: e.target.value })
                }
              >
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Car Parking</InputLabel>
              <Select
                label="Car Parking"
                variant="outlined"
                value={property.carParking}
                onChange={(e) =>
                  setProperty({ ...property, carParking: e.target.value })
                }
              >
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <h3 style={{ marginBottom: "18px" }}>Property Location details</h3>
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="City"
                variant="outlined"
                value={property.address.city}
                onChange={(e) =>
                  handleNestedChange("address", e.target.value, "city")
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Locality"
                variant="outlined"
                value={property?.address.locality}
                onChange={(e) =>
                  handleNestedChange("address", e.target.value, "locality")
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="School distance(km)"
                type="number"
                variant="outlined"
                value={property.distance.schoolDistance}
                onChange={(e) =>
                  handleNestedChange(
                    "distance",
                    e.target.value,
                    "schoolDistance"
                  )
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Hospital distance(km)"
                type="number"
                variant="outlined"
                value={property.distance.hospitalDistance}
                onChange={(e) =>
                  handleNestedChange(
                    "distance",
                    e.target.value,
                    "hospitalDistance"
                  )
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Bus Stand distance(km)"
                type="number"
                variant="outlined"
                value={property.distance.busStandDistance}
                onChange={(e) =>
                  handleNestedChange(
                    "distance",
                    e.target.value,
                    "busStandDistance"
                  )
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Railway station distance(km)"
                type="number"
                variant="outlined"
                value={property.distance.railwayStationDistance}
                onChange={(e) =>
                  handleNestedChange(
                    "distance",
                    e.target.value,
                    "railwayStationDistance"
                  )
                }
              />
            </FormControl>
          </Grid>
        </Grid>

        <h3 style={{ marginBottom: "18px" }}>Property Description</h3>
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <FormControl fullWidth>
              <TextField
                placeholder="Enter property description here..."
                multiline
                rows={6}
                value={property.description}
                onChange={(e) =>
                  setProperty({ ...property, description: e.target.value })
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <h4 style={{ marginBottom: "10px" }}>Upload image</h4>
              <TextField
                type="file"
                variant="outlined"
                onChange={(e) =>
                  setProperty({ ...property, image: e.target.value[0] })
                }
              />
            </FormControl>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <Button
            onClick={handleFormSubmit}
            size="medium"
            color="success"
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            Update
          </Button>
          <Button
            onClick={() => navigate("/admin/allproperty")}
            size="medium"
            color="error"
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditProperty;
