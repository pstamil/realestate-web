import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextareaAutosize,
  Box,
  Container,
  Grid,
} from "@mui/material";

const Sale = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    propertyType: "",
    message: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to the server.
    console.log(formData);
  };
  return (
    <Container>
      <Box sx={{ position: "relative", bgcolor: "red", mt: 17 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} sx={{ bgcolor: "orange" }}>
            <form
              onSubmit={handleSubmit}
              sx={{ display: "flex", justifyContent: "start" }}
            >
              <TextField
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />

              <TextField
                name="mobile"
                label="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />

              <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />

              <TextField
                name="address"
                label="Address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />

              <FormControl fullWidth required margin="normal">
                <InputLabel>Property Type</InputLabel>
                <Select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                >
                  <MenuItem value="Residential">Residential</MenuItem>
                  <MenuItem value="Commercial">Commercial</MenuItem>
                  <MenuItem value="Land">Land</MenuItem>
                </Select>
              </FormControl>

              <TextareaAutosize
                name="message"
                rowsMin={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />

              <TextField
                name="location"
                label="Location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />

              <Box mt={2}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} sx={{ bgcolor: "yellow" }}>
            2
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Sale;
