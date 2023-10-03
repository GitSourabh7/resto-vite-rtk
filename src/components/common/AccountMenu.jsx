import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//MUI components
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

//MUI Icons
import PersonIcon from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import Logout from "@mui/icons-material/Logout";

//Import slices
import { clearCart } from "../../features/cartSlice";
import { clearUser } from "../../features/userSlice";

//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  AccountButton,
  StyledAvatar,
  StyledTypography,
  StyledMenuItem,
  StyledMenu,
} from "./AccountMenu.styled";

export default function AccountMenu() {
  const authenticated = useSelector((state) => !!state.user.id);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleLogout = () => {
    console.log("Logging out...");
    dispatch(clearUser());
    dispatch(clearCart());
    localStorage.removeItem("jwtToken");
    handleClose();

    toast.success("You have been logged out", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <AccountButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {authenticated ? (
              <StyledAvatar src={user.avatarUrl} />
            ) : (
              <StyledAvatar />
            )}
          </AccountButton>
        </Tooltip>
      </Box>
      <StyledMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <StyledTypography>
          {authenticated ? `${user.firstName} ${user.lastName}` : "Guest"}
        </StyledTypography>
        <Divider />
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          My account
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </StyledMenuItem>

        {authenticated ? (
          <StyledMenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </StyledMenuItem>
        ) : (
          <StyledMenuItem onClick={handleLogin}>
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            Login
          </StyledMenuItem>
        )}
      </StyledMenu>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
