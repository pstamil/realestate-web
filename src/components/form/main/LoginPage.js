import React, { useEffect, useState } from "react";
import login from "../../../assets/login.svg";
import "./formStyle.css";
import { Box, Button, Tooltip } from "@mui/material";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";

const LoginPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    setUsernameError(false);
    setPasswordError(false);
  }, [username, password]);

  useEffect(() => {
    // Check if the user is already authenticated
    const storedUserRole = localStorage.getItem("userRole"); // You can use localStorage or sessionStorage
    if (storedUserRole) {
      setIsAuthenticated(storedUserRole);
      navigate(`/${storedUserRole}`); // Redirect to the appropriate dashboard
    }
  }, [navigate, setIsAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    setUsernameError(false);
    setPasswordError(false);

    // Perform role-based authentication
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("userRole", "admin"); // Store user role
      setIsAuthenticated("admin");
      navigate("/admin");
    } else if (username === "employee" && password === "employee123") {
      localStorage.setItem("userRole", "employee"); // Store user role
      setIsAuthenticated("employee");
      navigate("/employee");
    } else {
      setUsernameError(true);
      setPasswordError(true);
    }
  };

  return (
    <Box className="container">
      <Box className="forms-container">
        <Box className="signin-signup">
          <LoginForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
            usernameError={usernameError}
            passwordError={passwordError}
          />
        </Box>
      </Box>

      <Box className="panels-container">
        <Box className="panel left-panel">
          <Box className="content">
            <h3>One of us ?</h3>
            <p>LogIn and explore what's new!</p>
          </Box>
          <img src={login} className="image" alt="loginimg" />
        </Box>
      </Box>

      <Tooltip title="Go to Home">
        <Button
          sx={{
            position: "absolute",
            right: 10,
            top: { xs: "27%", sm: "25%", md: 10, lg: 10 },
          }}
          onClick={() => navigate("/")}
        >
          <Close fontSize="large" sx={{ color: "black" }} />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default LoginPage;
