import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Box,
  Container,
  styled,
  TableCell,
  InputLabel,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Tooltip,
  CircularProgress,
  TablePagination,
} from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { BorderColor, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

const PropertyTable = () => {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://64c9e941b2980cec85c2877a.mockapi.io/property"
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = data.filter((property) =>
    property.propertyName.toLowerCase().includes(search.toLowerCase())
  );

  //Delete confirm dialog
  const [open, setOpen] = useState(false);

  //delete
  const [delId, setDelId] = useState(null);
  const handleClickDel = async () => {
    await axios.delete(
      "https://64c9e941b2980cec85c2877a.mockapi.io/property/" + delId
    );
    await getData();

    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledHeadCell = styled(TableCell)({
    color: "white",
  });

  return (
    <>
      <Container>
        <Box sx={{ mt: 13, mb: 10 }}>
          <h2 style={{ borderBottom: "2px solid black" }}>All properties</h2>
          <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
            <InputLabel
              sx={{
                mt: 1,
                mr: 1,
                display: {
                  xs: "none",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              Find:
            </InputLabel>
            <TextField
              label="Search property name"
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Box>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress sx={{ color: "#29323C" }} />
            </Box>
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ bgcolor: "#29323C", padding: "10px 30px" }}>
                  <TableRow>
                    <StyledHeadCell>S.no</StyledHeadCell>
                    <StyledHeadCell>PropertyName</StyledHeadCell>
                    <StyledHeadCell>PropertyType</StyledHeadCell>
                    <StyledHeadCell>PropertyFor</StyledHeadCell>
                    <StyledHeadCell>PropertyCategory</StyledHeadCell>
                    <StyledHeadCell>SpecialProperty</StyledHeadCell>
                    <StyledHeadCell>Approval</StyledHeadCell>
                    <StyledHeadCell>LandArea</StyledHeadCell>
                    <StyledHeadCell>BuiltUpArea</StyledHeadCell>
                    <StyledHeadCell>CarpetArea</StyledHeadCell>
                    <StyledHeadCell>Age Of Building</StyledHeadCell>
                    <StyledHeadCell>TotalFlats</StyledHeadCell>
                    <StyledHeadCell>BedRooms</StyledHeadCell>
                    <StyledHeadCell>BathRooms</StyledHeadCell>
                    <StyledHeadCell>PowerBackup</StyledHeadCell>
                    <StyledHeadCell>WaterFacility</StyledHeadCell>
                    <StyledHeadCell>Facing</StyledHeadCell>
                    <StyledHeadCell>Furnished</StyledHeadCell>
                    <StyledHeadCell>Lift</StyledHeadCell>
                    <StyledHeadCell>CarParking</StyledHeadCell>
                    <StyledHeadCell>Address</StyledHeadCell>
                    <StyledHeadCell>Distance(km)</StyledHeadCell>
                    <StyledHeadCell>Description</StyledHeadCell>
                    <StyledHeadCell>Actions</StyledHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((property, index) => (
                      <TableRow key={property.id} sx={{ padding: "10px 30px" }}>
                        <TableCell># {index + 1}</TableCell>
                        <TableCell>{property.propertyName}</TableCell>
                        <TableCell>{property.propertyType}</TableCell>
                        <TableCell>{property.propertyFor}</TableCell>
                        <TableCell>{property.propertyCategory}</TableCell>
                        <TableCell>{property.specialProperty}</TableCell>
                        <TableCell>{property.approval}</TableCell>
                        <TableCell>{property.landArea}</TableCell>
                        <TableCell>{property.builtUpArea}</TableCell>
                        <TableCell>{property.carpetArea}</TableCell>
                        <TableCell>{property.ageOfBuilding}</TableCell>
                        <TableCell>{property.totalFlats}</TableCell>
                        <TableCell>{property.bedRooms}</TableCell>
                        <TableCell>{property.bathRooms}</TableCell>
                        <TableCell>{property.powerBackup}</TableCell>
                        <TableCell>{property.waterFacility}</TableCell>
                        <TableCell>{property.facing}</TableCell>
                        <TableCell>{property.furnished}</TableCell>
                        <TableCell>{property.lift}</TableCell>
                        <TableCell>{property.carParking}</TableCell>
                        <TableCell>
                          {property.address.locality}, {property.address.city}
                        </TableCell>
                        <TableCell>
                          School: {property.distance.schoolDistance}, Hospital:{" "}
                          {property.distance.hospitalDistance}, BusStop:{" "}
                          {property.distance.busStandDistance}, RailWay:{" "}
                          {property.distance.railwayStationDistance}
                        </TableCell>
                        <TableCell>
                          {property.description &&
                          property.description.length > 100
                            ? `${property.description.substring(0, 100)}...`
                            : property.description}
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex", gap: 2 }}>
                            <Tooltip title="Edit" arrow>
                              <Link to={`edit/${property.id}`}>
                                <IconButton
                                  id="Edit"
                                  size="small"
                                  color="primary"
                                >
                                  <BorderColor fontSize="inherit" />
                                </IconButton>
                              </Link>
                            </Tooltip>
                            <Tooltip title="Delete" arrow>
                              <IconButton
                                id="Delete"
                                color="error"
                                size="small"
                                onClick={() => {
                                  setDelId(property.id);
                                  setOpen(true);
                                }}
                              >
                                <Delete fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <TablePagination
            rowsPerPageOptions={[3, 5, 10]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Container>

      <Box>
        <Dialog open={open} onClose={handleClose} aria-labelledby="del-title">
          <DialogTitle id="del-title" sx={{ fontSize: "18px" }}>
            {"Are you sure to delete this property?"}
          </DialogTitle>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClickDel}
              size="small"
              color="error"
            >
              Confirm
            </Button>
            <Button
              onClick={handleClose}
              autoFocus
              size="small"
              color="success"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default PropertyTable;
