import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, IconButton, Container, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import { CenterFocusStrong } from "@mui/icons-material";
import illustration from "../images/illustration.svg";
import homeimg from "../images/homeimg.png";
import { height } from "@mui/system";
import Navbar from "./Navbar";
import '../App.css'


const Landing = () => {
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

  const response = { responsive: width < 1080 };
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
    backgroundColor:'black',
    // backgroundImage: " linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%)",
    "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.5)", textDecoration: 'none' },
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
    backgroundColor: "black",
    "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.5)" },
  });

  const searchBarStyle = {
    borderRadius: "10rem",
    color: "#9E4770",
    flexShrink: "6",
    display: "inline",
    width: resp ? "40vw" : "35vw",
    border: "2px solid #9E4770",
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.7),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#6B0EF8",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      height: "1.7rem",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const searchStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: "10rem",
    left: "7rem",
  };

  const AccountIcon = styled(AccountCircleOutlinedIcon)({
    color: "#2DBD79",
  });

  const imgStyle = {
    // backgroundImage:
    //   " linear-gradient(210deg, rgba(107, 107, 107, 0.04) 0%, rgba(107, 107, 107, 0.04) 8%,rgba(31, 31, 31, 0.04) 8%, rgba(31, 31, 31, 0.04) 100%),linear-gradient(178deg, rgba(228, 228, 228, 0.04) 0%, rgba(228, 228, 228, 0.04) 62%,rgba(54, 54, 54, 0.04) 62%, rgba(54, 54, 54, 0.04) 100%),linear-gradient(293deg, rgba(18, 18, 18, 0.04) 0%, rgba(18, 18, 18, 0.04) 37%,rgba(233, 233, 233, 0.04) 37%, rgba(233, 233, 233, 0.04) 100%),linear-gradient(422deg, rgba(201, 201, 201, 0.04) 0%, rgba(201, 201, 201, 0.04) 55%,rgba(47, 47, 47, 0.04) 55%, rgba(47, 47, 47, 0.04) 100%),linear-gradient(439deg, rgba(172, 172, 172, 0.04) 0%, rgba(172, 172, 172, 0.04) 33%,rgba(26, 26, 26, 0.04) 33%, rgba(26, 26, 26, 0.04) 100%),linear-gradient(233deg, rgba(11, 11, 11, 0.04) 0%, rgba(11, 11, 11, 0.04) 38%,rgba(87, 87, 87, 0.04) 38%, rgba(87, 87, 87, 0.04) 100%),linear-gradient(516deg, rgba(199, 199, 199, 0.04) 0%, rgba(199, 199, 199, 0.04) 69%,rgba(4, 4, 4, 0.04) 69%, rgba(4, 4, 4, 0.04) 100%),linear-gradient(482deg, rgba(36, 36, 36, 0.04) 0%, rgba(36, 36, 36, 0.04) 20%,rgba(91, 91, 91, 0.04) 20%, rgba(91, 91, 91, 0.04) 100%),linear-gradient(259deg, rgb(3,7,39),rgb(18,140,212))",
    backgroundImage: `url(${homeimg})`,
    height: "38rem",
    maxWidth: "100vw",
    width: "80vw",
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "0.9",
    position: "relative",
    top: "1rem",
  };

  const categoryImgStyle = {
    width: "8rem",
    height: "7.5rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "10px",
  };
  //     <div
  //       style={{ width: "60%", position: "relative", left: "20%", top: "30%"}}
  //     >
  //       <Grid container spacing={0}>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Cleaning and Pest Control</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Appliance Repair</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Home Painting</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Hair cut</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} style={{visibility:'hidden'}}>
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Special Service for women</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div style={{position:'relative', left:'0%'}}>
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Special Service for women</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={6} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Plumbers and Carpenters</h3>
  //       </Paper>
  //       </Grid>

  //       </Grid>
  //     </div>
  //   );

  return (
    <Paper
      style={{
        // backgroundImage: "linear-gradient(90deg, #41ccce 8%, #0d6b5e 93%)",
        backgroundColor:'#d1faf3',
        overflow: "hidden", height:'100vh'
      }}
    >
      <Navbar />
      <Grid container spacing={2}>
        <Grid
          xs={5}
          style={{
            marginTop: "5rem",
          }}
        >
          <p
            style={{
              margin: "0 0",
              position: "relative",
              right: "1rem",
              fontSize: "4rem",
              // color:'white'
              color:'black',
              fontWeight:'700',
              fontFamily:'Ubuntu'
            }}
          >
            Create your{" "}
          </p>
          <p
            style={{
              margin: "0 0",
              position: "relative",
              left: "1.8rem",
              fontSize: "4rem",
              // color:'white'
              color:'black',
              fontWeight:'700',
              fontFamily:'Ubuntu'
              
            }}
          >
            Digital Identity
          </p>
          <p
            style={{
              margin: "0 0",
              position: "relative",
              right: "4rem",
              fontSize: "1.2rem",
              // color:'white'
              color:'black',
              fontFamily:'Ubuntu'
            }}
          >
            {" "}
            Secure documents with us.{" "}
          </p>
          <div style={{position:'relative', top:'1rem', left:'7rem'}}>
            <Link to="/login">
            <SignupButton>Sign up</SignupButton>
            </Link>
            <Link to="/login">
            <LoginButton>Login</LoginButton>
            </Link>
          </div>
        </Grid>
        <Grid xs={7}>
          <div style={imgStyle}></div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Landing;
