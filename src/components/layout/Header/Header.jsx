import { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import "./HeaderStyle.css";
import AccountMenu from "../../common/AccountMenu";
import { motion } from "framer-motion";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"45"} width="140" />
      </Typography>

      {/* This divider gets displayed when drawer is expanded */}
      <Divider />

      <ul className="mobile-navigation">
        <li>
          <motion.div
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on click
          >
            <NavLink activeclassname="active" to={"/"}>
              Home
            </NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on click
          >
            <NavLink to={"/menu"}>Menu</NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on click
          >
            <NavLink to={"/about"}>About</NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on click
          >
            <NavLink to={"/contact"}>Contact</NavLink>
          </motion.div>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#1976d2" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "flex" }}
            >
              <NavLink to={"/"}>
                <img src={Logo} alt="logo" height={"45"} width="150" />
              </NavLink>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <motion.div
                    whileHover={{ scale: 1.1 }} // Scale up on hover
                    whileTap={{ scale: 0.9 }} // Scale down on click
                  >
                    <NavLink activeclassname="active" to={"/"}>
                      Home
                    </NavLink>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    whileHover={{ scale: 1.1 }} // Scale up on hover
                    whileTap={{ scale: 0.9 }} // Scale down on click
                  >
                    <NavLink to={"/menu"}>Menu</NavLink>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    whileHover={{ scale: 1.1 }} // Scale up on hover
                    whileTap={{ scale: 0.9 }} // Scale down on click
                  >
                    <NavLink to={"/about"}>About</NavLink>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    whileHover={{ scale: 1.1 }} // Scale up on hover
                    whileTap={{ scale: 0.9 }} // Scale down on click
                  >
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </motion.div>
                </li>
              </ul>
            </Box>
            <Box>
              <AccountMenu />
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
