import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./DocumentationNav.css";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
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
import debounce from "lodash/debounce";

function GradientSection() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1279));
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElDeveloper, setAnchorElDeveloper] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActiveRoute = (route) => location.pathname === route;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeveloperMenuClick = (event) => {
    setAnchorElDeveloper(event.currentTarget);
  };

  const handleDeveloperMenuClose = () => {
    setAnchorElDeveloper(null);
  };

  const isDeveloperActive = () => {
    return ["/documentation", "/ref"].includes(location.pathname);
  };

  const menuOpen = Boolean(anchorEl);
  const developerMenuOpen = Boolean(anchorElDeveloper);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 100);

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
        position="relative"
        elevation={isScrolled ? 4 : 0}
        sx={{
          backgroundColor: isScrolled ? "white" : "white",
          color: isScrolled ? "black" : "inherit",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          top: 0,
          zIndex: 10,
          boxShadow: isScrolled ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
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
                    marginLeft: "15px",
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
                    marginLeft: "15px",
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
                    marginLeft: "15px",
                  }}
                  component={Link}
                  to="/downloads"
                  className="button-nav"
                >
                  Downloads
                </Button>

                <Button
                  aria-controls={developerMenuOpen ? "developer-menu" : undefined}
                  aria-haspopup="true"
                  onClick={handleDeveloperMenuClick}
                  style={{
                    color: isDeveloperActive() ? "#6E00DC" : "inherit",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                  className="button-nav"
                >
                  Developer
                  <ExpandMoreIcon
                    color="inherit"
                    className={`developer-icon ${
                      developerMenuOpen ? "active" : ""
                    }`}
                  />
                </Button>

                <Box sx={{ zIndex: "10001!important" }}>
                  <Menu
                    id="developer-menu"
                    anchorEl={anchorElDeveloper}
                    open={developerMenuOpen}
                    onClose={handleDeveloperMenuClose}
                    MenuListProps={{
                      "aria-labelledby": "developer-button",
                    }}
                  >
                    <MenuItem
                      component={Link}
                      to="/documentation"
                      onClick={handleDeveloperMenuClose}
                    >
                      Documentation
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/ref"
                      onClick={handleDeveloperMenuClose}
                    >
                      API Reference
                    </MenuItem>
                  </Menu>
                </Box>

                <Button
                  style={{
                    color: isActiveRoute("/support") ? "#6E00DC" : "inherit",
                    marginLeft: "1px",
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
                    sx={{
                      paddingLeft: 3,
                      paddingRight: 2,
                      paddingTop: isMobile ? 2 : 1,
                      paddingBottom: isMobile ? 2 : 1,
                    }}
                  >
                    Home
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/products"
                    selected={isActiveRoute("/products")}
                    onClick={handleMenuClose}
                    sx={{
                      paddingLeft: 3,
                      paddingRight: 2,
                      paddingTop: isMobile ? 2 : 1,
                      paddingBottom: isMobile ? 2 : 1,
                    }}
                  >
                    Products
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/pricing"
                    selected={isActiveRoute("/pricing")}
                    onClick={handleMenuClose}
                    sx={{
                      paddingLeft: 3,
                      paddingRight: 2,
                      paddingTop: isMobile ? 2 : 1,
                      paddingBottom: isMobile ? 2 : 1,
                    }}
                  >
                    Pricing
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/downloads"
                    selected={isActiveRoute("/downloads")}
                    onClick={handleMenuClose}
                    sx={{
                      paddingLeft: 3,
                      paddingRight: 2,
                      paddingTop: isMobile ? 2 : 1,
                      paddingBottom: isMobile ? 2 : 1,
                    }}
                  >
                    Downloads
                  </MenuItem>

                  <Accordion
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
                      <Typography pl={3}>Developer</Typography>
                      <ExpandMoreIcon
                        color="inherit"
                        className="developer-icon"
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        sx={{
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          borderRadius: "8px",
                          padding: 2,
                          backgroundColor: "white",
                        }}
                      >
                        <MenuItem
                          component={Link}
                          to="/documentation"
                          onClick={handleMenuClose}
                          sx={{
                            paddingLeft: 3,
                            paddingRight: 2,
                            paddingTop: isMobile ? 2 : 1,
                            paddingBottom: isMobile ? 2 : 1,
                          }}
                        >
                          Documentation
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/ref"
                          onClick={handleMenuClose}
                          sx={{
                            paddingLeft: 3,
                            paddingRight: 2,
                            paddingTop: isMobile ? 2 : 1,
                            paddingBottom: isMobile ? 2 : 1,
                          }}
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
                    sx={{
                      paddingLeft: 3,
                      paddingRight: 2,
                      paddingTop: isMobile ? 2 : 1,
                      paddingBottom: isMobile ? 2 : 1,
                    }}
                  >
                    Support
                  </MenuItem>
                  <div
  style={{
    paddingLeft: 8, 
    paddingRight: 8,
    paddingTop: isMobile ? 2 : 1,
    paddingBottom: 15,
  }}
>
  <Button variant="text" className="right-button">
    SignIn
  </Button>
</div>

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
