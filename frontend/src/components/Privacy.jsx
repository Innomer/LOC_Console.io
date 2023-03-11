import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Navbar from "./Navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";

const Privacy = () => {
    const fieldStyle = { color: "white", marginBottom: "1rem", width: "25rem" };
    const SubmitBtn = styled(Button)({
        right:"10vw",
        borderRadius: "0.5rem",
        marginBottom:'2rem',
        marginLeft: "0.2rem",
        textDecoration: "none",
        color: "white",
        fontSize: "1rem",
        padding: "10px 20px  ",
        backgroundColor:'black',
        height:'3.3rem',
        // backgroundImage: " linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%)",
        "&:hover": { backgroundColor: "white" , color:'black'},
        position:'relative',left:'2rem'
      });

      const CssTextField = styled(TextField)({
        "& label.Mui-focused": {
          color: "white",
        },
        "& label": {
          color: "white",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "white",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
          "& input": {
            color: "white", // color of the text entered by the user
          },
        },
      });
  return (
    <>
      <Paper
        style={{
          backgroundColor: "#d1faf3",
        }}
      >
        <Navbar />
        <div style={{margin:'5rem 30rem', color:'black'}}>
          <p>Current as of March 2023</p>
          <h2>Terms and Conditions</h2>
          <p>
            By accessing our website, you are agreeing to be bound by these
            terms of service, all applicable by laws and regulations, and agree
            that you are responsible for compliance with any applicable laws
          </p>
          <div style={{display:'flex', flexDirection:'row', margin:'3rem'}}>
            {/* <CssTextField label="Enter your Email" id="custom-css-outlined-input" style={{width:'20rem'}}/> */}
            <TextField
              id="outlined-search"
              label="Enter your Email"
              type="search"
              name="Name"
              style={fieldStyle}
            />
            <SubmitBtn>Submit</SubmitBtn>
          </div>
        </div>
      </Paper>

      <h2
        style={
          {
            //   textAlign: "start",
          }
        }
      >
        Privacy Policy
      </h2>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "#d1faf3",
          margin: "1rem 5rem",
          padding: "3rem",
          //   display: "flex",
          textAlign: "start",
        }}
      >
        <p>
          This privacy policy (“Privacy Policy”) is in the context of and to
          govern the access and usage of the VerifyU System application and
          VerifyU Portal/website an initiative of MeitY (Ministry of
          Electronics & Information Technology), Government of India. This
          Privacy Policy describes and determines how VerifyU application
          (referred to as MeitY or We/Us or VerifyU System or VerifyU
          Account holder), handle and/ or deal with your (referred to as You or
          User) personal and usage information, in accordance with the
          applicable laws of India. This Privacy Policy is liable to change
          without notice at the discretion of the Ministry of Electronics &
          Information Technology, Government of India. Any change in the Privacy
          policy will be notified to all the VerifyU Account holders. The
          Privacy Policy for the VerifyU System as described below has been
          kept as simple as possible and provides the details of personal and
          usage information as collected from the user. In case the user is not
          familiar with certain technical terms he/she is advised to read the
          key terms first.
        </p>
        <ul>
            <h2 style={{marginTop:'1rem'}}>What information do we collect?</h2>
          <li>
            The VerifyU System allows the user to browse the site without
            signing up. In this case it will not capture any specific personal
            information about the user (for example name, phone number, email
            ID) that may not allow us to identify anyone individually.
          </li>
          <h2 style={{marginTop:'1rem'}}>How do we use your information?</h2>
          <li>
            In case the user wishes to sign up for VerifyU Account, the user
            must provide his/her personal mobile number. Subsequently the user
            may link their account with Aadhaar number for the purpose of
            authentication. As part of the Aadhaar authentication, eKYC details
            of the user are collected and associated with VerifyU account.
          </li>
          <h2 style={{marginTop:'1rem'}}>Do we use Cookies and other technologies?</h2>
          <li>
            The VerifyU Account holder will be at liberty to share his/ her
            uploaded documents or URIs to any individual or Organization at
            his/her own accord and free will by providing his/her express
            consent. The responsibility of sharing of documents with requesters
            or other entities lies with the user only as VerifyU system
            merely facilitates the sharing of documents.
          </li>
          <h2 style={{marginTop:'1rem'}}>How long do we keep your information?</h2>
          <li>
            The VerifyU System does not share/ disclose any information
            including eKYC details of the user collected from Aadhaar at the
            time of sign up with any individual or Organization (public or
            private) unless and until it is required by law or it is authorized
            by the account holder with his/her consent.
          </li>
          <h2 style={{marginTop:'1rem'}}>How do we keep your information safe?</h2>
          <li>
            VerifyU Portal collects information such as Internet Protocol
            (IP) Addresses, Domain name, Browser type, Operating System, Date
            and Time of the visit, Pages visited, Referring URLs etc. However no
            attempt is being made to link these with the identity of individuals
            visiting the VerifyU Portal unless an unlawful attempt to
            violate/infringe the VerifyU service and privacy policy or
            provisions of the Information Technology Act, 2000 or under any law
            for the time being in force has been detected.
          </li>
          <h2 style={{marginTop:'1rem'}}>What are your privacy rights?</h2>
          <li>
            In case the Ministry of Electronics & Information Technology,
            Government of India at some point of time decides to license other
            public or private Digital Locker Service providers to provide a
            similar Digital Locker service, it will be ensured that the
            confidentiality of personal and usage information is maintained in
            accordance with the provisions of this Privacy Policy, the
            Information Technology Act, 2000 and Rules made thereunder or any
            other law for the time being in force.
          </li>
        </ul>
      </Paper>
    </>
  );
};

export default Privacy;
