import Typography from "@mui/material/Typography";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Box,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";


const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navbar = () => {
  // const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout");
    console.log("Logout successfully");
  };

  // adding event listener for responsiveness
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const response = { responsive: width < 1040 };
  const resp = response.responsive;
  //

  const LoginButton = styled(Button)({
    right: resp ? "10vw" : "10vw",
    borderRadius: "0.5rem",
    marginLeft: "0.2rem",
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    padding: "10px 20px  ",
    backgroundColor: "red",
    "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.5)" },
  });

  const SignupButton = styled(Button)({
    right: resp ? "15vw" : "12vw",
    borderRadius: "0.5rem",
    // marginLeft: "0.2rem",
    margin: "0",
    textDecoration: "none",
    color: "white",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "red",
    "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.5)" },
  });

  const NavMidStyle = {
    // right: resp ? "20vw" : "12vw",
    // marginLeft: "0.2rem",
    margin: "0",
    textDecoration: "none",
    // color: "white",
    color: "black",
    padding: "10px 17px",
    fontSize: "1.4rem",
  };

  // hamburger

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        open={open}
        sx={{
          position: "sticky",
          // position:'fixed' causes overlap
          backgroundColor:'transparent',
          top: "0vh",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
            // backgroundColor: "black",
            // backgroundColor: "white",
            padding: "1rem 0",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: "none" }),
              margin: "0 1rem",
              display: resp ? "" : "none",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            style={{ 
              // color: "white",
              color:'black',
             marginLeft: resp ? "2rem" : "5rem" }}
          >
            VerifyU
          </Typography>
          <Box
            flexGrow={1}
            style={{
              display: resp ? "none" : "flex",
              justifyContent: "flex-end",
              position:'relative',
              marginLeft:'55rem'
            }}
            id="navbarMid"
          >
            <a href="/" className="fromcenter f1 nav-link" style={NavMidStyle}>
              Logout
            </a>
            <a href="/" className="fromcenter f1 nav-link" style={NavMidStyle}>
              <AccountCircleOutlinedIcon style={{position:'relative', fontSize:'2rem'}}/>
            </a>
          </Box>
          <Box flexGrow={1} />
          {/* <Link to="/register/client"> */}
          {/* <SignupButton>Sign up</SignupButton> */}
          {/* </Link> */}
          {/* <Link to="/register/worker"> */}
          {/* <LoginButton>Login</LoginButton> */}
          {/* </Link> */}
          <AccountCircleOutlinedIcon
            style={{ color: "white", fontSize: "2rem", display: "none" }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "black" }}>
          <CloseIcon onClick={handleDrawerClose} sx={{ color: "white" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </CloseIcon>
        </DrawerHeader>
        {/* <Divider /> */}
        <List
          sx={{ backgroundColor: "black", color: "white", height: "100vh" }}
        >
          {["Anything", "Anything", "Anything"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
