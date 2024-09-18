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

const AddProperty = () => {
  const [propertyName, setPropertyName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyFor, setPropertyFor] = useState("");
  const [propertyCategory, setPropertyCategory] = useState("");
  const [specialProperty, setSpecialProperty] = useState("");
  const [approval, setApproval] = useState("");
  const [landArea, setLandArea] = useState("");
  const [builtUpArea, setBuiltUpArea] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [ageOfBuilding, setAgeOfBuilding] = useState("");
  const [totalFlats, setTotalFlats] = useState("");
  const [bedRooms, setBedRooms] = useState("");
  const [bathRooms, setBathRooms] = useState("");
  const [powerBackup, setPowerBackup] = useState("");
  const [waterFacility, setWaterFacility] = useState("");
  const [facing, setFacing] = useState("");
  const [furnished, setFurnished] = useState("");
  const [lift, setLift] = useState("");
  const [carParking, setCarParking] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [schoolDistance, setSchoolDistance] = useState("");
  const [hospitalDistance, setHospitalDistance] = useState("");
  const [busStandDistance, setBusStandDistance] = useState("");
  const [railwayStationDistance, setRailwayStationDistance] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("https://64c9e941b2980cec85c2877a.mockapi.io/property", {
      propertyName,
      propertyType,
      propertyFor,
      propertyCategory,
      specialProperty,
      approval,
      landArea,
      builtUpArea,
      carpetArea,
      ageOfBuilding,
      totalFlats,
      bedRooms,
      bathRooms,
      powerBackup,
      waterFacility,
      facing,
      furnished,
      lift,
      carParking,
      address: {
        city,
        locality,
      },
      distance: {
        schoolDistance,
        hospitalDistance,
        busStandDistance,
        railwayStationDistance,
      },

      description,
      image,
    });

    // Reset the form fields to their initial values
    setPropertyName("");
    setPropertyType("");
    setPropertyFor("");
    setPropertyCategory("");
    setSpecialProperty("");
    setApproval("");
    setLandArea("");
    setBuiltUpArea("");
    setCarpetArea("");
    setAgeOfBuilding("");
    setTotalFlats("");
    setBedRooms("");
    setBathRooms("");
    setPowerBackup("");
    setWaterFacility("");
    setFacing("");
    setFurnished("");
    setLift("");
    setCarParking("");
    setCity("");
    setLocality("");
    setSchoolDistance("");
    setHospitalDistance("");
    setBusStandDistance("");
    setRailwayStationDistance("");
    setDescription("");
    setImage(null);
  };

  const handleReset = () => {
    // Reset the form fields to their initial values
    setPropertyName("");
    setPropertyType("");
    setPropertyFor("");
    setPropertyCategory("");
    setSpecialProperty("");
    setApproval("");
    setLandArea("");
    setBuiltUpArea("");
    setCarpetArea("");
    setAgeOfBuilding("");
    setTotalFlats("");
    setBedRooms("");
    setBathRooms("");
    setPowerBackup("");
    setWaterFacility("");
    setFacing("");
    setFurnished("");
    setLift("");
    setCarParking("");
    setCity("");
    setLocality("");
    setSchoolDistance("");
    setHospitalDistance("");
    setBusStandDistance("");
    setRailwayStationDistance("");
    setDescription("");
    setImage(null);
  };

  return (
    <Box mt={15} mb={10}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <h2 style={{ borderBottom: "2px solid black" }}>ADD PROPERTY</h2>
        <Grid container mt={1} mb={5} spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Property Name"
                variant="outlined"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Property Type</InputLabel>
              <Select
                label="Property Type"
                variant="outlined"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
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
                value={propertyFor}
                onChange={(e) => setPropertyFor(e.target.value)}
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
                value={propertyCategory}
                onChange={(e) => setPropertyCategory(e.target.value)}
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
                value={specialProperty}
                onChange={(e) => setSpecialProperty(e.target.value)}
              >
                <MenuItem value="NRI">NRI</MenuItem>
                <MenuItem value="Premium">Premium</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Approval</InputLabel>
              <Select
                label="Approval"
                variant="outlined"
                value={approval}
                onChange={(e) => setApproval(e.target.value)}
              >
                <MenuItem value="Approved">Approved</MenuItem>
                <MenuItem value="Unapproved">Unapproved</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
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
                value={landArea}
                onChange={(e) => setLandArea(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Built up area"
                type="number"
                variant="outlined"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                type="number"
                label="Carpet area"
                variant="outlined"
                value={carpetArea}
                onChange={(e) => setCarpetArea(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Age of Building"
                type="number"
                variant="outlined"
                value={ageOfBuilding}
                onChange={(e) => setAgeOfBuilding(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Total # of flats"
                type="number"
                variant="outlined"
                value={totalFlats}
                onChange={(e) => setTotalFlats(e.target.value)}
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
                value={bedRooms}
                onChange={(e) => setBedRooms(e.target.value)}
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
                value={bathRooms}
                onChange={(e) => setBathRooms(e.target.value)}
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
                value={powerBackup}
                onChange={(e) => setPowerBackup(e.target.value)}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
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
                value={waterFacility}
                onChange={(e) => setWaterFacility(e.target.value)}
              >
                <MenuItem value="Metro">Metro</MenuItem>
                <MenuItem value="Borvel">Borvel</MenuItem>
                <MenuItem value="Corporation">Corporation</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Facing</InputLabel>
              <Select
                label="Facing"
                variant="outlined"
                value={facing}
                onChange={(e) => setFacing(e.target.value)}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 300,
                    },
                  },
                }}
              >
                <MenuItem value="North">North</MenuItem>
                <MenuItem value="South">South</MenuItem>
                <MenuItem value="East">East</MenuItem>
                <MenuItem value="West">West</MenuItem>
                <MenuItem value="North-East">North-East</MenuItem>
                <MenuItem value="North-West">North-West</MenuItem>
                <MenuItem value="South-East">South-East</MenuItem>
                <MenuItem value="South-West">South-West</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Furnished</InputLabel>
              <Select
                label="Furnished"
                variant="outlined"
                value={furnished}
                onChange={(e) => setFurnished(e.target.value)}
              >
                <MenuItem value="Furnished">Furnished</MenuItem>
                <MenuItem value="Semi furnished">Semi furnished</MenuItem>
                <MenuItem value="Un furnished">Un furnished</MenuItem>
                <MenuItem value="N/A">N/A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Lift</InputLabel>
              <Select
                label="Lift"
                variant="outlined"
                value={lift}
                onChange={(e) => setLift(e.target.value)}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
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
                value={carParking}
                onChange={(e) => setCarParking(e.target.value)}
              >
                <MenuItem value="OCP">OCP</MenuItem>
                <MenuItem value="CCP">CCP</MenuItem>
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Locality"
                variant="outlined"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="School distance(km)"
                type="number"
                variant="outlined"
                value={schoolDistance}
                onChange={(e) => setSchoolDistance(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Hospital distance(km)"
                type="number"
                variant="outlined"
                value={hospitalDistance}
                onChange={(e) => setHospitalDistance(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Bus Stand distance(km)"
                type="number"
                variant="outlined"
                value={busStandDistance}
                onChange={(e) => setBusStandDistance(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <FormControl fullWidth>
              <TextField
                label="Railway station distance(km)"
                type="number"
                variant="outlined"
                value={railwayStationDistance}
                onChange={(e) => setRailwayStationDistance(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <h4 style={{ marginBottom: "10px" }}>Upload image</h4>
              <TextField
                type="file"
                variant="outlined"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            size="medium"
            color="success"
            variant="contained"
            type="submit"
          >
            Add
          </Button>

          <Button
            onClick={handleReset}
            size="medium"
            color="error"
            variant="contained"
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddProperty;
