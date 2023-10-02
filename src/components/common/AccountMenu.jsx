import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

//MUI components
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";

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

// Styled components
const AccountButton = styled(IconButton)`
  margin-left: 2px;
`;

const StyledAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  padding: 10px;
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMenu = styled(Menu)`
  && {
    overflow: visible;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32));
    margin-top: 1.5rem;

    .MuiAvatar-root {
      width: 32px;
      height: 32px;
      margin-left: -0.5rem;
      margin-right: 1rem;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 14px;
      width: 10px;
      height: 10px;
      background-color: "background.paper";
      transform: translateY(-50%) rotate(45deg);
      z-index: 0;
    }
  }
`;

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
