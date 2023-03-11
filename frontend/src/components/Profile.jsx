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
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const Profile = () => {

    const dataStyle = {border:'1px solid black', borderRadius:'10px', padding:'3px 15px ', textAlign:'left'}
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
    position:'relative',right:'10rem',top:'1rem'
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
    position:'relative',right:'10rem',top:'1rem'
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
  return (
    <>
    <Navbar/>
    <div >
      <Paper
        elevation={3}
        style={{ backgroundColor: "#d1faf3", margin: "0rem 5rem", width:'39rem', padding:'1rem' , height:'25rem'}}
      >
        <h2 style={{ margin: "5px",  position:'relative', top:'1rem', textAlign:'left'}}>Profile</h2>
        <Grid container spacing={2}>
          
          <Grid xs={6} style={{}}>
            <h3 style={{ position:'relative', right:'7rem'}}>Name</h3>
            <h4 style={{border:'1px solid black', borderRadius:'10px', padding:'3px 15px ', textAlign:'left', width:'15rem'}}>Jigar Siddhpura</h4>
            <h3 style={{ position:'relative', right:'7.5rem'}}>DOB</h3>
            <h4 style={{border:'1px solid black', borderRadius:'10px', padding:'3px 15px ', textAlign:'left', width:'8rem'}}>28-11-2003</h4>
            <h3 style={{ position:'relative', left:'5rem', bottom:'6.5rem'}}>Phone No.</h3>
            <h4 style={{border:'1px solid black', borderRadius:'10px', padding:'3px 15px ', textAlign:'left', width:'10rem', position:'relative', left:'11rem', bottom:'6.5rem'}}>8451078717</h4>
            </Grid>
            <Grid xs={6} style={{}}>
            <h3 style={{ position:'relative', right:'10rem'}}>Email</h3>
            <h4 style={{border:'1px solid black', borderRadius:'10px', padding:'3px 15px ', textAlign:'left', width:'16rem',position:'relative', right:'3rem' }}>jigarssidhpura@loc.com</h4>
            <h3 style={{ position:'relative', right:'3.5rem'}}>Location</h3>
            <h4 style={{border:'1px solid black', borderRadius:'10px', padding:'3px 15px ', textAlign:'left', width:'10rem',position:'relative',left:'3rem'}}>Mumbai</h4>
            {/* <Link to="/register/worker"> */}
            
            <EditBtn>Edit</EditBtn> 
             <SubmitBtn onClick={showToastMessage}>Submit</SubmitBtn>

            <ToastContainer/>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
    </>
  );
};

export default Profile;
