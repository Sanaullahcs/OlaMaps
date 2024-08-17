import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../../styles/header.css";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../assets/images/Logo.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import debounce from 'lodash/debounce'; // Import debounce from lodash

function GradientSection() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1279));
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActiveRoute = (route) => location.pathname === route;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isDeveloperActive = () => {
    return ["/documentation", "/ref"].includes(location.pathname);
  };

  const menuOpen = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 100); // Adjust debounce delay as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isActiveRoute("/") && !isScrolled && (
        <div className="gradient-section">
          <h1 className="gradient-heading">
            It's time to #ExitGoogleMaps, Switch to Fribe
          </h1>
          <Button className="gradient-button">Get 1 year free access</Button>
        </div>
      )}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: isScrolled ? "white" : "transparent",
          color: isScrolled ? "black" : "inherit",
          transition: "background-color 0.3s ease",
          top: 0,
          zIndex: 1200, // Ensure it's on top of other content
        }}
        className={`app-bar-height ${isScrolled ? "scrolled" : ""}`}
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </Box>

            {!isMobile && (
              <Box className="nav-buttons" sx={{ flexGrow: 1 }}>
                <Button
                  style={{
                    color: isActiveRoute("/") ? "#6E00DC" : "inherit",
                  }}
                  component={Link}
                  to="/"
                  className="button-nav"
                >
                  Home
                </Button>
                <Button
                  style={{
                    color: isActiveRoute("/products") ? "#6E00DC" : "inherit",
                  }}
                  component={Link}
                  to="/products"
                  className="button-nav"
                >
                  Products
                </Button>
                <Button
                  style={{
                    color: isActiveRoute("/pricing") ? "#6E00DC" : "inherit",
                  }}
                  component={Link}
                  to="/pricing"
                  className="button-nav"
                >
                  Pricing
                </Button>
                <Button
                  style={{
                    color: isActiveRoute("/downloads") ? "#6E00DC" : "inherit",
                  }}
                  component={Link}
                  to="/downloads"
                  className="button-nav"
                >
                  Downloads
                </Button>

                <Tooltip
                  title={
                    <Box className="tooltip-content">
                      <Typography
                        color="inherit"
                        component={Link}
                        to="/documentation"
                        className="button-nav"
                      >
                        Documentation
                      </Typography>
                      <Typography
                        color="inherit"
                        className="button-nav"
                        component={Link}
                        to="/ref"
                      >
                        API Reference
                      </Typography>
                    </Box>
                  }
                  arrow
                  placement="bottom-end"
                  sx={{ cursor: "pointer" }}
                >
                  <Box
                    className={`menu-box ${
                      isDeveloperActive() ? "active" : ""
                    }`}
                  >
                    <Typography className="button-nav">Developer</Typography>
                    <ExpandMoreIcon
                      color="inherit"
                      className={`developer-icon ${
                        isDeveloperActive() ? "active" : ""
                      }`}
                    />
                  </Box>
                </Tooltip>

                <Button
                  style={{
                    color: isActiveRoute("/support") ? "#6E00DC" : "inherit",
                  }}
                  component={Link}
                  to="/support"
                  className="button-nav"
                >
                  Support
                </Button>
              </Box>
            )}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!isMobile && (
              <Button variant="text" className="right-button">
                SignIn
              </Button>
            )}

            {isMobile && (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label={menuOpen ? "close menu" : "open menu"}
                  onClick={menuOpen ? handleMenuClose : handleMenuClick}
                  sx={{ marginLeft: "auto" }}
                >
                  {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={handleMenuClose}
                  PaperProps={{
                    sx: {
                      width: "100%",
                      borderRadius: "8px",
                      mt: 1.5,
                    },
                  }}
                  MenuListProps={{
                    sx: {
                      padding: 0,
                    },
                  }}
                >
                  <MenuItem
                    component={Link}
                    to="/"
                    selected={isActiveRoute("/")}
                    onClick={handleMenuClose}
                    sx={{ paddingLeft: 2 }}
                  >
                    Home
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/products"
                    selected={isActiveRoute("/products")}
                    onClick={handleMenuClose}
                    sx={{ paddingLeft: 2 }}
                  >
                    Products
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/pricing"
                    selected={isActiveRoute("/pricing")}
                    onClick={handleMenuClose}
                    sx={{ paddingLeft: 2 }}
                  >
                    Pricing
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/downloads"
                    selected={isActiveRoute("/downloads")}
                    onClick={handleMenuClose}
                    sx={{ paddingLeft: 2 }}
                  >
                    Downloads
                  </MenuItem>

                  <Accordion
                    className="custom-accordion"
                    sx={{
                      boxShadow: "none",
                      "&:before": {
                        display: "none",
                      },
                      "& .MuiAccordionSummary-content": {
                        borderBottom: "none",
                      },
                      "& .MuiAccordionDetails-root": {
                        borderTop: "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={null}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        borderBottom: "none",
                        padding: "0",
                      }}
                    >
                      <Typography>Developer</Typography>
                      <ExpandMoreIcon
                        color="inherit"
                        className="developer-icon"
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box>
                        <MenuItem
                          component={Link}
                          to="/documentation"
                          onClick={handleMenuClose}
                          sx={{ paddingLeft: 2 }}
                        >
                          Documentation
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/ref"
                          onClick={handleMenuClose}
                          sx={{ paddingLeft: 2 }}
                        >
                          API Reference
                        </MenuItem>
                      </Box>
                    </AccordionDetails>
                  </Accordion>

                  <MenuItem
                    component={Link}
                    to="/support"
                    selected={isActiveRoute("/support")}
                    onClick={handleMenuClose}
                    sx={{ paddingLeft: 2 }}
                  >
                    Support
                  </MenuItem>
                  <Button variant="text" className="right-button">
                    SignIn
                  </Button>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default GradientSection;
