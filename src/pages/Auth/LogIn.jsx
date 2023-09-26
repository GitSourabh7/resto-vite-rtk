import { useState, useEffect } from "react";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [authenticated, setAuthenticated] = useState(false); // Track authentication state
  const [jwtToken, setJwtToken] = useState(""); // Store JWT token

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showToast = (message, type) => {
    toast[type](message);
  };

  const handleLogout = () => {
    // Implement logout logic here, e.g., clear JWT token and set authentication to false
    setJwtToken("");
    setAuthenticated(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Successful login
        showToast("Login successful", "success");
        setJwtToken(data.token); // Store the received JWT token
        setAuthenticated(true); // Set authentication to true
        console.log("Login successful:", data);
      } else {
        // Handle login failure, e.g., display an error message
        showToast(`Login failed: ${data.message}`, "error");
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      showToast(
        "An unexpected error occurred. Please try again later.",
        "error"
      );
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    // Check for stored JWT token on page load
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      // Verify the token on the server (you need to implement this)
      // If valid, set authentication to true
      setAuthenticated(true);
      setJwtToken(storedToken);
    }
  }, []);

  useEffect(() => {
    // Store JWT token in local storage whenever it changes
    localStorage.setItem("jwtToken", jwtToken);
  }, [jwtToken]);

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
            {authenticated ? "Welcome" : "Log in"}
          </Typography>
          {authenticated ? (
            <Button
              onClick={handleLogout}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logout
            </Button>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 3 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </ThemeProvider>
  );
}
