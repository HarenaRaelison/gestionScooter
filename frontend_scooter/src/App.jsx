import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Home from "./components/pages/Home";
import Client from "./components/pages/Client";
import Scooter from "./components/pages/Scooter";
import Achat from "./components/pages/Achat";
import Scootera from "./components/scootera.jpg";
import LinearProgress from "@mui/material/LinearProgress";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MopedIcon from "@mui/icons-material/Moped";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  

  const drawer = (
    <div style={{ textAlign: "center" }}>
      <img
        src={Scootera}
        alt="error"
        width={"90px"}
        height={"90px"}
        className="icon"
      />
      <Divider />
      <List>
        {[
          { label: "Home", icon: <HomeIcon /> },
          { label: "Client", icon: <PeopleAltIcon /> },
          { label: "Scooter", icon: <MopedIcon /> },
          { label: "Achat", icon: <PointOfSaleIcon /> },
        ].map((item, index) => (
          <ListItem
            key={index}
            component={Link}
            to={`/${item.label.toLowerCase()}`}
          >
            <ListItemButton>
              {item.icon && (
                <ListItemIcon style={{ color: "blue" }}>
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText primary={item.label} style={{ color: "blue" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography>
            
          </Typography>
        </Toolbar>
      </AppBar>

      <LinearProgress />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: "flex",
          justifyContent: "center", // Aligne le contenu horizontalement au centre
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <div>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          className="top"
        >
          <Routes>
          <Route path="/home" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/client" element={<Client />} />
            <Route path="/scooter" element={<Scooter />} />
            <Route path="/achat" element={<Achat />} />
          </Routes>
        </Box>
      </div>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
