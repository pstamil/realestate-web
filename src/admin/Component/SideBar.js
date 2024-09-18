import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import CategoryIcon from "@mui/icons-material/Category";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { Avatar, Badge, Menu, MenuItem, Stack, Tooltip } from "@mui/material";
import {
  AddHome,
  Logout,
  Mail,
  NotificationsActive,
  PersonAdd,
  PersonPin,
  SpaceDashboard,
} from "@mui/icons-material";
import { useState } from "react";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#29323C",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#29323C",
    },
  }),
  [theme.breakpoints.down("xs")]: {
    position: "absolute",
  },
}));

export default function SideBar({ userRole, setIsAuthenticated }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  console.log(userRole);

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const profileOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear the user's authentication state and redirect to the login page
    setIsAuthenticated(null);
    navigate("/");
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            bgcolor: "#29323C",
            display: "flex",
            justifyContent: "center",
            alignItems: "space-between",
            height: "80px",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Stack spacing={4} direction="row">
                <Badge badgeContent={4} color="error">
                  <Mail sx={{ color: "white" }} />
                </Badge>
                <Badge badgeContent={4} color="success">
                  <NotificationsActive sx={{ color: "white" }} />
                </Badge>
              </Stack>
              <Tooltip title="Profile">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 43, height: 43 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={profileOpen}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 3,
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
              <Link
                to={`/${userRole}/profile`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
                  <Avatar /> Profile
                </MenuItem>
              </Link>
              <Divider />
              {userRole !== "employee" && (
                <Link
                  to={`/${userRole}/adduser`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add new user
                  </MenuItem>
                </Link>
              )}

              <Link
                to={`/${userRole}/allproperty`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
                  <ListItemIcon>
                    <CategoryIcon fontSize="small" />
                  </ListItemIcon>
                  Properties
                </MenuItem>
              </Link>
              <Link
                to={`/${userRole}/addproperty`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose} sx={{ fontSize: "14px" }}>
                  <ListItemIcon>
                    <AddHome fontSize="small" />
                  </ListItemIcon>
                  Add Property
                </MenuItem>
              </Link>
              <MenuItem
                sx={{ fontSize: "14px" }}
                onClick={() => {
                  handleLogout();
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader sx={{ height: "78px" }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon sx={{ color: "white" }} />
              ) : (
                <ChevronLeftIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate(`/${userRole}`);
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <SpaceDashboard />
                </ListItemIcon>

                <ListItemText
                  primary="DashBoard"
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate(`/${userRole}/allproperty`);
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <CategoryIcon />
                </ListItemIcon>

                <ListItemText
                  primary="All Property"
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate(`/${userRole}/addproperty`);
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <AddHome />
                </ListItemIcon>

                <ListItemText
                  primary="Add Property"
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
            {userRole !== "employee" && (
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/admin/adduser");
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <PersonAdd />
                  </ListItemIcon>

                  <ListItemText
                    primary="Add user"
                    sx={{ opacity: open ? 1 : 0, color: "white" }}
                  />
                </ListItemButton>
              </ListItem>
            )}

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate(`/${userRole}/profile`);
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <PersonPin />
                </ListItemIcon>

                <ListItemText
                  primary="Profile"
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={handleLogout}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Logout />
                </ListItemIcon>

                <ListItemText
                  primary="LogOut"
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <Box
        sx={{
          ml: open
            ? { xs: 0, sm: "240px", md: "240px", lg: "240px" }
            : { xs: "55px", sm: "65px", md: "65px", lg: "65px" },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
