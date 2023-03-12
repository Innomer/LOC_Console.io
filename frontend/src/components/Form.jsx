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
import TextField from "@mui/material/TextField";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import Toastify from 'toastify-js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const showToastMessage = () => {
        toast.success('Submit Successfully  !', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

  const fieldStyle = { color: "white", marginBottom: "1rem", width: "25rem" };
  const SubmitBtn = styled(Button)({
    right:"10vw",
    borderRadius: "0.5rem",
    marginLeft: "0.2rem",
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    padding: "10px 20px  ",
    backgroundColor:'black',
    // backgroundImage: " linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%)",
    "&:hover": { backgroundColor: "white" , color:'black'},
    position:'relative',left:'9rem',top:'1rem'
  });
  const EditBtn = styled(Button)({
    right:"10vw",
    borderRadius: "0.5rem",
    marginLeft: "0.2rem",
    textDecoration: "none",
    color: "black",
    fontSize: "1rem",
    padding: "10px 20px  ",
    backgroundColor:'transparent',
    // backgroundImage: " linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%)",
    "&:hover": { backgroundColor: "white" },
    position:'relative',left:'8rem',top:'1rem'
  });

    // ⭐⭐

    useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 100,
          delay: 200,
          easing: "ease-in-out",
          mirror: true,
          once: true,
          anchorPlacement: "top-center",
        });
      }, []);
    
      // ⭐⭐
      const [data , setData] = useState({
        name : '',
        dob : '',
        loc : '',
        email : '',
        phoneNo : '',
      })
  
      const handleChange = (e) => {
        console.log("Handle Chnage")
       console.log(e.target.name, e.target.value);
        setData({...data , [e.target.name]:e.target.value})
      }

      const handleSubmit = async (e) => {
        console.log(data);
        console.log("Handle Submit");
        e.preventDefault();
        let url = "http://localhost:8080/api/user/addUserProfile";
        try {
          let response = await axios.post(url , data)
          if(response.status === 200) {
            console.log("addListing API successfully called from frontend");
          }
        } catch(e) {
          console.log(e);
        }
      }
  


  return (
    <>
    <Navbar/>
    <div data-aos="fade-up">
      <Paper
        elevation={3}
        style={{ backgroundColor: "#d1faf3", margin: "0rem 5rem" }}
      >
        <h2 style={{ margin: "2rem 0 4rem 0",  position:'relative', top:'1rem'}}>Set up your profile</h2>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <Paper
              elevation={5}
              style={{ width: "18rem", height: "23rem" ,
               position:'relative', left:'2rem'
            }}
            ></Paper>
            <h4 style={{ margin: "2rem 0 2rem 0"}}>Enter your picture</h4>
          </Grid>
          <Grid xs={4} style={{}}>
            <h4 style={{ position:'relative', right:'10rem', marginBottom:'1rem'}}>Name</h4>
            <TextField
              id="outlined-search"
              label="Name"
              type="search"
              name="name"
              onChange={handleChange}
              required
              style={fieldStyle}
            />
            <h4 style={{ position:'relative', right:'11rem', marginBottom:'1rem'}}>DOB</h4>
            <TextField
              id="outlined-search"
              type="date"
              name="dob"
              onChange={handleChange}
              required
              style={fieldStyle}
            />
            <h4 style={{ position:'relative', right:'10rem', marginBottom:'1rem'}}>Phone No.</h4>
            <TextField
              id="outlined-search"
              label="Phone no."
              type="search"
              name="phoneNo"
              onChange={handleChange}
              required
              style={fieldStyle}
            />
            </Grid>
            <Grid xs={3} style={{}}>
            <h4 style={{ position:'relative', right:'9rem', marginBottom:'1rem'}}>Email</h4>
            <TextField
              id="outlined-search"
              label="Email"
              type="search"
              name="email"
              onChange={handleChange}
              required
              style={fieldStyle}
            />
            <h4 style={{ position:'relative', right:'8rem', marginBottom:'1rem'}}>Location</h4>
            <TextField
              id="outlined-search"
              label="location"
              type="search"
              name="loc"
              onChange={handleChange}
              required
              style={fieldStyle}
            />
            {/* <Link to="/register/worker"> */}
            
            <EditBtn>Edit</EditBtn>
            <SubmitBtn onClick={showToastMessage} onSubmit={handleSubmit}>Submit</SubmitBtn>
            <ToastContainer/>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Paper>
      </div>
    </>
  );
};

export default Form;
