// https://webninjadeveloper.com/react/react-js-webcam-project-to-take-selfie-picture-and-display-it-in-browser-using-useeffect-useref-in-javascript/
import React, { useEffect, useRef, useState } from "react";
// import Modal from "react-modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
// import Webcam from 'react-webcam'
import { display } from "@mui/system";
// import React, { useState } from "react";
import Webcam from "react-webcam";
import './FaceCapture.css';
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
// const WebcamComponent = ()=><Webcam/>
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


function FaceCapture() {

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
        position:'relative',right:'10rem',top:'3rem'
      });


  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let videoRef = useRef(null);

  let photoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePicture = () => {
    const width = 400;
    const height = width / (16 / 9);

    let video = videoRef.current;

    let photo = photoRef.current;

    photo.width = width;

    photo.height = height;

    let ctx = photo.getContext("2d");

    ctx.drawImage(video, 0, 0, width, height);

    // setShow(!show);
  };

  const clearImage = () => {
    let photo = photoRef.current;

    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  const [data , setData] = useState({
    image : '',
  })

  const handleImageUpload = (e) => {
    console.log("Handle Image Upload");
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    setData({...data , image:e.target.files[0]})
  }

  const handleImageSubmit = async (e) => {
    console.log(data);
    console.log(data.image, data.image.name);
    console.log("Handle Submit");
    e.preventDefault();
    let url = "http://localhost:8080/addListing";
    const formdata = new FormData();
    formdata.append("file", data.image);
    console.log("After appending in formData");
    try {
      let response = await axios.post(url , formdata)
      if(response.status === 200) {
        console.log("addListing API successfully called from frontend");
      }
    } catch(e) {
      console.log(e);
    }
  }


  useEffect(() => {
    getVideo();
  }, [videoRef]);

//   const [show, setShow] = useState(false)
//   const WebcamComponent = () => <Webcam />
// const videoConstraints = {
//   width: 400,
//   height: 400,
//   facingMode: 'user',
// }
//   const [picture, setPicture] = useState('')
//   const webcamRef = React.useRef(null)
//   const capture = React.useCallback(() => {
//     const pictureSrc = webcamRef.current.getScreenshot()
//     setPicture(pictureSrc)
//   })

const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });

  const handleSubmit=()=>{
    console.log(picture);
  }


  return (
    
    <>
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="container" style={{margin:'2rem'}}>
            <h1 className="text-center">Camera Selfie App in React</h1>

            <video ref={videoRef} className="container"></video>

            <SubmitBtn onClick={takePicture} onChange={handleImageUpload}>Take Picture</SubmitBtn>

            <canvas className="container" ref={photoRef} onChange={handleImageUpload}></canvas>
            <SubmitBtn onClick={clearImage} style={{display : show}}>Clear Image</SubmitBtn>
            <SubmitBtn onSubmit={handleSubmit} style={{position:'relative',right:'9rem',top:'3rem',display : show}}>Submit</SubmitBtn>
            <br />
            <br />
          </div>
        </Modal> */}
        <Modal open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description" >
        {/* <h2 className="mb-5 text-center">
        React Photo Capture using Webcam Examle
      </h2> */}
      {/* <div>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div> */}
      {/* <div>
        {picture != '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            className="btn btn-primary"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-danger"
          >
            Capture
          </button>
        )}
      </div> */}
    <div>
      <div className="mainDiv">
        <h2 className="mb-5 text-center">
          React Photo Capture using Webcam Examle
        </h2>
        <div>
          {picture === "" ? (
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              width={400}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={picture} />
          )}
        </div>
        <div>
          {picture != "" ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setPicture();
              }}
              className="btn btn-primary"
            >
              Retake
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              className="btn btn-danger"
            >
              Capture
            </button>
          )}
        </div>
        <div>
          <img src={picture}></img>
        </div>
        {picture!=""?
        <button onClick={handleSubmit}>Submit</button>
        :<button style={{display:"none"}}></button>}
      </div>
    </div>
        </Modal>
      </div>
    </>
  );
}

export default FaceCapture;
