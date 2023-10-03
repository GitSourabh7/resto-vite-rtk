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
import Logo from "../../../assets/logo.svg";
import { motion } from "framer-motion";
import AccountMenu from "../../common/AccountMenu";
import GradientLogo from "../../common/GradientLogo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavLinkStyled,
  MobileNavigation,
  MobileNavigationItem,
  MobileNavLink,
} from "./Header.styled";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <GradientLogo />

      <Divider />

      <MobileNavigation>
        <MobileNavigationItem>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MobileNavLink to="/" activeClassName="active">
              Home
            </MobileNavLink>
          </motion.div>
        </MobileNavigationItem>
        <MobileNavigationItem>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MobileNavLink to="/menu">Menu</MobileNavLink>
          </motion.div>
        </MobileNavigationItem>
        <MobileNavigationItem>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MobileNavLink to="/about">About</MobileNavLink>
          </motion.div>
        </MobileNavigationItem>
        <MobileNavigationItem>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </motion.div>
        </MobileNavigationItem>
      </MobileNavigation>
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
              <NavLinkStyled to="/">
                <img src={Logo} alt="logo" height={"45"} width="150" />
              </NavLinkStyled>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <NavigationMenu>
                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <NavLinkStyled to="/" activeClassName="active">
                      Home
                    </NavLinkStyled>
                  </motion.div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <NavLinkStyled to="/menu">Menu</NavLinkStyled>
                  </motion.div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <NavLinkStyled to="/about">About</NavLinkStyled>
                  </motion.div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <NavLinkStyled to="/contact">Contact</NavLinkStyled>
                  </motion.div>
                </NavigationMenuItem>
              </NavigationMenu>
            </Box>
            <AccountMenu />
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
