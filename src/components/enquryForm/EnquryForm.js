import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Mail, Person, Phone } from "@mui/icons-material";

const EnquryForm = ({ propertyName, propertyId }) => {
  const initialFormData = {
    name: "",
    email: "",
    mobile: "",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Use refs to keep track of input elements
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);

  // Function to handle clicks outside the input fields
  const handleOutsideClick = (event) => {
    if (
      nameRef.current &&
      !nameRef.current.contains(event.target) &&
      emailRef.current &&
      !emailRef.current.contains(event.target) &&
      mobileRef.current &&
      !mobileRef.current.contains(event.target)
    ) {
      setFormErrors({ name: "", email: "", mobile: "" });
    }
  };

  useEffect(() => {
    // Add a click event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // Clear any previous error messages for the current field
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the form data
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.mobile) {
      errors.mobile = "Mobile is required";
    } else if (!isValidMobile(formData.mobile)) {
      errors.mobile = "Invalid mobile number";
    }

    if (Object.keys(errors).length === 0) {
      // Form data is valid, you can proceed with submission
      console.log("Form data submitted:", formData);
      console.log(
        propertyId,
        propertyName,
        formData.name,
        formData.email,
        formData.mobile
      );
      setFormData(initialFormData);
    } else {
      // Display validation errors
      setFormErrors(errors);
    }
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidMobile = (mobile) => {
    // Implement your mobile number validation logic here
    return /^\d{10}$/.test(mobile);
  };

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "#04AA6D",
          padding: "10px",
          borderRadius: "10px 10px 0 0",
          color: "white",
        }}
      >
        <span>Interested to buy property</span>
        <h3>{propertyName} ?</h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          bgcolor: "white",
          padding: "30px 20px",
          borderRadius: "0 0 10px 10px",
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          name="name"
          size="small"
          value={formData.name}
          onChange={handleChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
          InputProps={{
            startAdornment: <Person style={{ color: "#777" }} />,
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          size="small"
          value={formData.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
          InputProps={{
            startAdornment: <Mail style={{ color: "#777" }} />,
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Mobile"
          name="mobile"
          size="small"
          value={formData.mobile}
          onChange={handleChange}
          error={!!formErrors.mobile}
          helperText={formErrors.mobile}
          InputProps={{
            startAdornment: <Phone style={{ color: "#777" }} />,
          }}
        />
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          sx={{
            bgcolor: "#29323C",
            "&:hover": {
              bgcolor: "#04AA6D",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default EnquryForm;
