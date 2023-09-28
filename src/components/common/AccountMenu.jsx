// AccountMenu.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import { clearCart } from "../menu/Cart/CartSlice";
import { clearUser } from "../common/userSlice";

export default function AccountMenu() {
  const authenticated = useSelector((state) => !!state.user.id);
  const dispatch = useDispatch();

  // Use the specific selectUser selector
  const user = useSelector((state) => state.user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    // Redirect to the login page
    console.log("Clicked on Login");
  };

  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearCart()); // Clear the cart when the user logs out
    localStorage.removeItem("jwtToken");
    handleClose();
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {authenticated ? ( // Check if the user is authenticated
              <Avatar
                src={user.avatarUrl} // Use the user's avatar image URL
                sx={{ width: 32, height: 32 }}
              />
            ) : (
              <Avatar sx={{ width: 32, height: 32 }}></Avatar>
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* Display user's first and last name if authenticated, "Guest" otherwise */}
        <Typography
          sx={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          {authenticated ? `${user.firstName} ${user.lastName}` : "Guest"}
        </Typography>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        {authenticated ? (
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        ) : (
          <MenuItem onClick={handleLogin}>
            <ListItemIcon>
              <LoginIcon fontSize="small" /> {/* Add the Login icon */}
            </ListItemIcon>
            Login
          </MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
}
