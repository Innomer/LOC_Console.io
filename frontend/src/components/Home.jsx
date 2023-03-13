import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Button , CardContent , Typography,CardActions } from "@mui/material";
import './Home.css';
import Navbar from './Navbar.jsx';
import './Navbar.css';
import { ProjectCard } from './Documents.jsx';
import AadharCard from '../images/AadharCard.jpg';
import { useState } from "react";
import axios from "axios";
import abc from "./abc.jpg";

const Home = () => {
    // const projects = [
    //     {
    //         title: 'Aadhar Card',
    //         imgUrl: '../images/AadharCard.jpg',
    //     },
    //     {
    //         title: 'Aadhar Card',
    //         imgUrl: '../images/AadharCard.jpg',
    //     },
    // ]

    const [values, setValues] = useState({
        // Multiple File upload hooks
        multipleFiles: {},
        selectMultipleFiles: false,
        multipleOpen: false,
      });
    
    
    function CustomButton(props) {
        const bgc = props.bgc ? props.bgc : '';
        const color = props.col ? props.col : '#2941ab';
        const classes = `link-button scale-button ${props.buttonColor}`;
        const type = props.type ? props.type : '';
        return (
          <Button
            variant="contained"
            sx={{
              mx: 2,
              color: color,
              backgroundColor: bgc,
            }}
            className={classes}
            size="large"
            onClick={props.thing ? () => props.onClick(props.thing) : props.onClick}
            type={type}
          >
            {props.name}
          </Button>
        );
      }

    //   const handleChange = (prop) => (event) => {
    //     if (prop === 'singleFile') {
    //       const singleSong = event.target.files[0];
    //       if (singleSong) {
    //         setValues({
    //           ...values,
    //           singleFile: singleSong,
    //           selectSingleFile: true,
    //         });
    //       } else {
    //         setValues({
    //           ...values,
    //           selectSingleFile: false,
    //         });
    //       }
    //     } else if (prop === 'multipleFiles')
    //       setValues({
    //         ...values,
    //         multipleFiles: event.target.files,
    //         selectMultipleFiles: true,
    //       });
    //     else setValues({ ...values, [prop]: event.target.value });
    //   };    

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            multipleFiles: event.target.files,
            selectMultipleFiles: true,
          });
        console.log("asdfghj",values);
    };    

      const handleMultipleSubmit = async (event) => {
        event.preventDefault();
        console.log(values.multipleFiles);
        // converting into the form object
        const formData = new FormData();
        formData.append('title', values.multipleTitle);
        formData.append('artist', values.multipleArtist);
        for (let i = 0; i < values.multipleFiles.length; i++) {
          formData.append('files', values.multipleFiles[i]);
        }
    
        // making request to the server
        let reqOptions = {
          url: 'http://localhost:8080/api/userDoc/addUserDoc',
          method: 'POST',
          data: formData,
        };
    
        try {
          const response = await axios.request(reqOptions);
          console.log(response);
          // Setting the hook back to default values
          setValues({
            ...values,
            multipleFiles: {},
            selectMultipleFiles: false,
            multipleTitle: '',
            multipleArtist: '',
            multipleOpen: true,
          });
          event.target.reset();
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <>
        <Box className="background">
            <Navbar />
            <Box sx={{display: 'flex'}}>
                <Box className='document'>
                  <img src={abc} height="650" width={"500"} ></img>
                </Box>
                {/* <Box className='tab-box'>   
                    {
                        projects.map((project,index) => {
                        return (
                            <ProjectCard key={index} {...project} />
                        )
                    })
                    }
                </Box> */}
                 <Box>
                 <Grid item sm={6}>
          <h1 fontFamily="Ubuntu"> Documents upload</h1>
          <form onSubmit={handleMultipleSubmit}>
            <TextField
              // Multiple song files Input
              sx={{width:300 , marginLeft:12}}
              name="files"
              type="file"
              required
              inputProps={{
                // style: { color: 'white' },
                // accept: 'audio/*',
                multiple: true,
              }}
              onChange={handleChange()}
            />
            {values.selectMultipleFiles ? (
              Object.keys(values.multipleFiles).map((keyName, keyIndex) => (
                <div key={keyIndex}>
                  {/* <p>Song no. {keyIndex + 1} </p>
                  <p>Filename: {values.multipleFiles[keyName].name}</p>
                  <p>Filetype: {values.multipleFiles[keyName].type}</p>
                  <p>
                    Last modified:{' '}
                    {values.multipleFiles[
                      keyName
                    ].lastModifiedDate.toLocaleDateString()}
                  </p>
                  <br /> */}
                  <React.Fragment>
                    <CardContent sx={{backgroundColor:"#81cdc6" , marginTop:5,marginLeft:4 , borderRadius:6}}>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {values.multipleFiles[keyName].name}
                      </Typography>
                      <Typography variant="h5" component="div">
                      {values.multipleFiles[keyName].type}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Last modified:{' '}
                    {values.multipleFiles[
                      keyName
                    ].lastModifiedDate.toLocaleDateString()}
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </React.Fragment>
                </div>
              ))
            ) : (
              <p>Select a file to show details</p>
            )}
            <br />
            <br />
            <CustomButton
              // Multiple songs upload button
              name="Upload"
              col="white"
              bgc="blue"
              buttonColor="blue-button"
            />
          </form>
        </Grid>

                 {/* <form> */}
                    
          {/* <TextField
            required
            id="outlined-required"
            label="Name"
            name="fileName"
            placeholder="Kreena"
            sx={{ ml: 10, mt: 5 }}
            fullWidth
          /> */}
          {/* <Button
            variant="contained"
            type="submit"
            sx={{ ml: 20, mt: 3, width: "26ch", backgroundColor: "teal" }}
          >
            Submit
          </Button> */}
        {/* </form> */}

                 </Box>
            </Box>
        </Box>
        </>
    )
}

export default Home;