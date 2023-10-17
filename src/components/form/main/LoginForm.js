import React, { useState } from "react";
import { Lock, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

function LoginForm({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
  usernameError,
  passwordError,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="sign-in-form" onSubmit={handleLogin}>
      <h2 className="title">Welcome back!</h2>
      <p className="social-text">Please login to admin Dashboard</p>
      <Box className="input-field">
        <span>
          <Person />
        </span>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span></span>
        <br />
        {usernameError ? (
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              color: "red",
              fontSize: "12px",
              mt: 1,
              mb: 2,
            }}
          >
            Invalid username
          </Typography>
        ) : (
          <></>
        )}
      </Box>

      <Box className="input-field">
        <span>
          <Lock />
        </span>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className="eye">
          <IconButton onClick={handleTogglePasswordVisibility}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </span>
        <br />
        {passwordError ? (
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              color: "red",
              fontSize: "12px",
              mt: 1,
              mb: 2,
            }}
          >
            Invalid password
          </Typography>
        ) : (
          <></>
        )}
      </Box>

      <button type="submit" className="btn solid">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
