import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { apiUrl } from "../../../apiConfig";

const Signup = () => {
  const defaultTheme = createTheme();

  // State variables for form fields and error messages
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState(""); // New state for general errors

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset general error message
    setGeneralError("");

    // Validate form fields
    const validationErrors = {};
    if (!firstName) {
      validationErrors.firstName = "First name is required";
    }
    if (!lastName) {
      validationErrors.lastName = "Last name is required";
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!password || password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(validationErrors).length > 0) {
      // If there are validation errors, update the state and don't submit the form
      setErrors(validationErrors);
      return;
    }

    // Create an object with user data
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Send a POST request to your server to create the user
      const response = await fetch(apiUrl + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // User registration was successful, show a success toast
        toast.success("User registered successfully");

        // Redirect to the login page after 3 seconds
        setTimeout(() => {
          window.location.href = "/login"; // Replace with your login page URL
        }, 3000); // 3000 milliseconds = 3 seconds
      } else {
        // Handle errors from the server
        const errorData = await response.json();

        if (errorData.errors) {
          // Update the errors state with the server-provided error messages
          setErrors(errorData.errors);
        } else if (errorData.message) {
          // Check if the error message is about a duplicate email
          if (errorData.message === "Email address already in use") {
            // Show a toast indicating that the email is already registered
            toast.error("Email address already registered.");
          } else {
            // Set the general error message
            setGeneralError(errorData.message);
          }
        }
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred during registration:", error);
      setGeneralError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {generalError && (
              <Typography variant="caption" color="error">
                {generalError}
              </Typography>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <Typography variant="caption" color="error">
                    {errors.firstName}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <Typography variant="caption" color="error">
                    {errors.lastName}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <Typography variant="caption" color="error">
                    {errors.email}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <Typography variant="caption" color="error">
                    {errors.password}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </ThemeProvider>
  );
};

export default Signup;
