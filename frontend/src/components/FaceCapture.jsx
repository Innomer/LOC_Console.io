// https://webninjadeveloper.com/react/react-js-webcam-project-to-take-selfie-picture-and-display-it-in-browser-using-useeffect-useref-in-javascript/
import React, { useEffect, useRef, useState } from "react";
// import Modal from "react-modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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


  const [open, setOpen] = React.useState(false);
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

    setShow(!show);
  };

  const clearImage = () => {
    let photo = photoRef.current;

    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const [show, setShow] = useState(false)

  return (
    <>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="container" style={{margin:'2rem'}}>
            <h1 className="text-center">Camera Selfie App in React</h1>

            <video ref={videoRef} className="container"></video>

            <SubmitBtn onClick={takePicture} >Take Picture</SubmitBtn>

            <canvas className="container" ref={photoRef}></canvas>

            <SubmitBtn onClick={clearImage} style={{display : show? "" : 'none'}}>Clear Image</SubmitBtn>
            <SubmitBtn style={{position:'relative',right:'9rem',top:'3rem',display : show? "" : 'none'}}>Submit</SubmitBtn>
            <br />
            <br />
          </div>
        </Modal>
      </div>
    </>
  );
}

export default FaceCapture;
