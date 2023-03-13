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
import Grid from "@mui/material/Unstable_Grid2";
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
import Modal from "@mui/material/Modal";
import compliantImg from '../images/compliant.png'

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

  const [openM, setOpenM] = React.useState(false);
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);

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

  const SubmitBtn = styled(Button)({
    right: "10vw",
    borderRadius: "0.5rem",
    marginLeft: "0.2rem",
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    padding: "10px 20px  ",
    backgroundColor: "black",
    // backgroundImage: " linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%)",
    "&:hover": { backgroundColor: "white", color: "black" },
    position: "relative",
    right: "10rem",
    top: "1rem",
  });
  const EditBtn = styled(Button)({
    right: "10vw",
    borderRadius: "0.5rem",
    marginLeft: "0.2rem",
    textDecoration: "none",
    color: "black",
    fontSize: "1rem",
    padding: "10px 20px  ",
    backgroundColor: "transparent",
    // backgroundImage: " linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%)",
    "&:hover": { backgroundColor: "white" },
    position: "relative",
    right: "10rem",
    top: "1rem",
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
    fontFamily:'Ubuntu',
    fontWeight:500
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
          backgroundColor: "transparent",
          top: "0vh",
        }}
        elevation={0}
      >
        <Toolbar
          style={{
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
              color: "black",
              marginLeft: resp ? "2rem" : "5rem",
            }}
          >
            <img src={compliantImg} alt="icon" style={{position: 'relative', height: '2em', width: '2em', top: '0.3em',}} ></img>
          </Typography>
          <Typography variant='h4' style={{color: 'black', marginLeft: '0.5em', fontWeight: 600, fontFamily:'Ubuntu'}}>VerifyU</Typography>
          <Box
            flexGrow={1}
            style={{
              display: resp ? "none" : "flex",
              justifyContent: "flex-end",
              position: "relative",
              marginLeft: "55rem",
            }}
            id="navbarMid"
          >
            <a href="/" className="fromcenter f1 nav-link" style={NavMidStyle}>
              Logout
            </a>
            <a href="/" className="fromcenter f1 nav-link" style={NavMidStyle}>
              <AccountCircleOutlinedIcon
                style={{ position: "relative", fontSize: "2rem" }}
                onClick={handleOpenM}
              />
            </a>
            <Modal
              open={openM}
              onClose={handleCloseM}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div>
                <Paper
                  elevation={3}
                  style={{
                    backgroundColor: "#d1faf3",
                    margin: "0rem 5rem",
                    width: "39rem",
                    padding: "1rem",
                    height: "25rem",
                  }}
                >
                  <h2
                    style={{
                      margin: "5px",
                      position: "relative",
                      top: "1rem",
                      textAlign: "left",
                    }}
                  >
                    Profile
                  </h2>
                  <Grid container spacing={2}>
                    <Grid xs={6} style={{}}>
                      <h3 style={{ position: "relative", right: "7rem" }}>
                        Name
                      </h3>
                      <h4
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                          padding: "3px 15px ",
                          textAlign: "left",
                          width: "15rem",
                        }}
                      >
                        Jigar Siddhpura
                      </h4>
                      <h3 style={{ position: "relative", right: "7.5rem" }}>
                        DOB
                      </h3>
                      <h4
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                          padding: "3px 15px ",
                          textAlign: "left",
                          width: "8rem",
                        }}
                      >
                        28-11-2003
                      </h4>
                      <h3
                        style={{
                          position: "relative",
                          left: "5rem",
                          bottom: "6.5rem",
                        }}
                      >
                        Phone No.
                      </h3>
                      <h4
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                          padding: "3px 15px ",
                          textAlign: "left",
                          width: "10rem",
                          position: "relative",
                          left: "11rem",
                          bottom: "6.5rem",
                        }}
                      >
                        8451078717
                      </h4>
                    </Grid>
                    <Grid xs={6} style={{}}>
                      <h3 style={{ position: "relative", right: "10rem" }}>
                        Email
                      </h3>
                      <h4
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                          padding: "3px 15px ",
                          textAlign: "left",
                          width: "16rem",
                          position: "relative",
                          right: "3rem",
                        }}
                      >
                        jigarssidhpura@loc.com
                      </h4>
                      <h3 style={{ position: "relative", right: "3.5rem" }}>
                        Location
                      </h3>
                      <h4
                        style={{
                          border: "1px solid black",
                          borderRadius: "10px",
                          padding: "3px 15px ",
                          textAlign: "left",
                          width: "10rem",
                          position: "relative",
                          left: "3rem",
                        }}
                      >
                        Mumbai
                      </h4>
                      {/* <Link to="/register/worker"> */}

                      <EditBtn>Edit</EditBtn>
                      <SubmitBtn>Submit</SubmitBtn>

                      {/* </Link> */}
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Modal>
          </Box>
          <Box flexGrow={1} />
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
