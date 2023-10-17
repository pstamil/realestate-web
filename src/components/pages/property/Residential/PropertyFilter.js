import React, { useState } from "react";
import { Box, TextField, Button, MenuItem } from "@mui/material";

const PropertyFilter = ({ onFilter, data }) => {
  const [filters, setFilters] = useState({
    propertyFor: "Buy",
    propertyType: "",
    propertyPlan: "",
    city: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  console.log(data);

  return (
    <Box>
      <TextField
        name="propertyFor"
        label="Property For"
        select
        variant="outlined"
        fullWidth
        value={filters.propertyFor}
        onChange={handleFilterChange}
      >
        <MenuItem value="Buy">Buy</MenuItem>
        <MenuItem value="Rent">Rent</MenuItem>
      </TextField>
      <TextField
        name="propertyType"
        label="Property Type"
        variant="outlined"
        fullWidth
        value={filters.propertyType}
        onChange={handleFilterChange}
      />
      <TextField
        name="propertyPlan"
        label="Property Plan"
        variant="outlined"
        fullWidth
        value={filters.propertyPlan}
        onChange={handleFilterChange}
      />
      <TextField
        name="city"
        label="City"
        variant="outlined"
        fullWidth
        value={filters.city}
        onChange={handleFilterChange}
      />
      <Button onClick={applyFilters} variant="contained" color="primary">
        Apply Filters
      </Button>
    </Box>
  );
};

export default PropertyFilter;
