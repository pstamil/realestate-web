import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  styled,
  Box,
} from "@mui/material";
import { Alert } from "@mui/material";

const useStyles = styled((theme) => ({
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: theme.spacing(3),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [profileInfo, setProfileInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleProfileInfoChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleChangePassword = () => {
    // Add password change logic here, e.g., send a request to your server
    setPasswordChanged(true);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box mt={10}>
      <Container className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Profile Settings
        </Typography>
        <form className={classes.form}>
          <TextField
            label="First Name"
            variant="outlined"
            name="firstName"
            value={profileInfo.firstName}
            onChange={handleProfileInfoChange}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={profileInfo.lastName}
            onChange={handleProfileInfoChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={profileInfo.email}
            onChange={handleProfileInfoChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Save Profile
          </Button>
        </form>
        <Typography variant="h4" gutterBottom>
          Change Password
        </Typography>
        <form className={classes.form}>
          <TextField
            label="New Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={handleChangePassword}
          >
            Change Password
          </Button>
        </form>
        {passwordChanged && (
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity="success">
              Password changed successfully!
            </Alert>
          </Snackbar>
        )}
      </Container>
    </Box>
  );
};

export default Profile;
