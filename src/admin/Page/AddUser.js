import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grid,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import {
  GpsFixed,
  Groups,
  Leaderboard,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

function AddUser() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    userType: "employee", // Default to 'employee'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleTogglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a server or perform client-side validation.
    if (userData.password === userData.confirmPassword) {
      console.log(userData);
      // Clear input fields after submission
      setUserData({
        username: "",
        password: "",
        confirmPassword: "",
        userType: "employee",
      });
      setShowPassword(false);
    } else {
      // Passwords do not match, show an error message
      alert("Passwords do not match");
    }
  };

  return (
    <Box mt={15}>
      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} mt={2}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              gap: "20px",
            }}
          >
            <h2 style={{ borderBottom: "2px solid black" }}>ADD USER</h2>
            <TextField
              name="username"
              label="Username"
              variant="outlined"
              fullWidth
              required
              value={userData.username}
              onChange={handleChange}
            />

            <TextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              value={userData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => handleTogglePasswordVisibility("password")}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              type={showConfirmPassword ? "text" : "password"}
              required
              value={userData.confirmPassword}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        handleTogglePasswordVisibility("confirmPassword")
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormHelperText
              sx={{ color: "red" }}
              error={!userData.password === userData.confirmPassword}
            >
              {userData.password === userData.confirmPassword
                ? ""
                : "Passwords do not match"}
            </FormHelperText>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>User Type</InputLabel>
              <Select
                name="userType"
                value={userData.userType}
                onChange={handleChange}
                label="User Type"
              >
                <MenuItem value="admin">admin</MenuItem>
                <MenuItem value="employee">employee</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              sx={{ mt: 2, width: "100%" }}
            >
              Add user
            </Button>
          </form>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3.2}
          lg={3.2}
          xl={3.2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            height: "100%",
            mt: { xs: 3, sm: 3, md: 0, lg: 0, xl: 0 },
            p: {
              xs: "20px 35px",
              sm: "20px 70px",
              md: "20px",
              lg: "20px",
              xl: "20px",
            },
          }}
        >
          <h2 style={{ borderBottom: "1px solid black" }}>Stats</h2>
          <Box
            sx={{
              height: "110px",
              bgcolor: "#F5F5F5",
              borderRadius: "15px",
              border: "1px solid gray",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                p: "0 20px",
              }}
            >
              <h3>Employee</h3>
              <Groups fontSize="large" />
            </Box>
            <Box sx={{ pl: 3 }}>
              <h1>100 +</h1>
            </Box>
          </Box>
          <Box
            sx={{
              height: "110px",
              bgcolor: "#F5F5F5",
              borderRadius: "15px",
              border: "1px solid gray",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                p: "0 20px",
              }}
            >
              <h3>Properties</h3>
              <Leaderboard fontSize="large" />
            </Box>
            <Box sx={{ pl: 3 }}>
              <h1>500 +</h1>
            </Box>
          </Box>
          <Box
            sx={{
              height: "110px",
              bgcolor: "#F5F5F5",
              borderRadius: "15px",
              border: "1px solid gray",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                p: "0 20px",
              }}
            >
              <h3>Locations</h3>
              <GpsFixed fontSize="large" />
            </Box>
            <Box sx={{ pl: 3 }}>
              <h1>100 +</h1>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddUser;
