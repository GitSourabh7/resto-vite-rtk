import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "../../features/userSlice";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button"; // Import Button from Material-UI
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
import { setCartItems } from "../../features/cartSlice";

const defaultTheme = createTheme();

export default function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const authenticated = useSelector(selectUser);
  const dispatch = useDispatch();

  const showToast = (message, type) => {
    toast[type](message);
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
        showToast("Login successful", "success");

        dispatch(
          setUser({
            firstName: data.user.first_name,
            lastName: data.user.last_name,
            email: data.user.email,
            photo: data.user.avatar_url,
            id: data.user.id,
          })
        );

        localStorage.setItem("jwtToken", data.token);

        // Trigger a new request to fetch cart data
        const cartResponse = await fetch("http://localhost:3000/cart", {
          method: "GET",
          headers: {
            "X-User-ID": data.user.id, // Include the user ID in the request headers
          },
        });

        const cartData = await cartResponse.json();

        // Dispatch the cart data to set cart items in the Redux store
        dispatch(setCartItems(cartData));

        // Redirect to the menu page after 3 seconds
        setTimeout(() => {
          // Redirect to the menu page by changing the URL
          window.location.href = "/menu";
        }, 3000); // 3000 milliseconds (3 seconds)
      } else {
        showToast(`Login failed: ${data.message}`, "error");
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      showToast(
        "An unexpected error occurred. Please try again later.",
        "error"
      );
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      dispatch(setUser()); // You might want to implement a way to retrieve user data based on the token
    }
  }, [dispatch]);

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
            {authenticated.firstName
              ? `Welcome, ${authenticated.firstName}`
              : "Log in"}
          </Typography>
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
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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
        </Box>
      </Container>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </ThemeProvider>
  );
}
