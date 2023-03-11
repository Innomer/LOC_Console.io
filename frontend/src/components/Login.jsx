import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { blue } from "@mui/material/colors";
import React from "react";
import { animated, useTrail } from "@react-spring/web";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  palette: {
    naigara: {
      main: "#569f5d",
    },
  },
});

const defaultValue = {
  email: "",
  password: "",
};

const signupDefaultValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Login = () => {
  const showToastMessage = () => {
    toast.success('Logged In  !', {
        position: toast.POSITION.BOTTOM_LEFT,
        
    });
};
  const showToastMessage2 = () => {
    toast.success('Registered Successfully  !', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
};

  // adding event listener for responsiveness
  const [width, setWindowWidth] = useState(0);

  const color = blue;

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsiveness = { responsive: width < 1053 };
  const resp = responsiveness.responsive;
  //

  // login pg func start

  const [user, setUser] = useState(defaultValue);

  const [errorS, setError] = useState({});

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validate = (values) => {
    const errors = {};
    const regex = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i;
    if (!values.email) {
      errors.email = "Email required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter valid email";
    }
    if (!values.password) {
      errors.password = "Password required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be of more than 4 characters";
    }
    return errors;
  };

  const [login, setLogin] = useState(false);

  // login func end

  // signup func start

  const [signupUser, setSignupUser] = useState(signupDefaultValue);

  const signupHandleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setSignupUser({ ...signupUser, [e.target.name]: e.target.value });
  };

  const signupValidate = (values) => {
    const errors = {};
    const regex = /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i;
    if (!values.fname) {
      errors.fname = "First Name required";
    }
    if (!values.lname) {
      errors.lname = "last Name required";
    }
    if (!values.email) {
      errors.email = "Email required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter valid email";
    }
    if (!values.password) {
      errors.password = "Password required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be of more than 4 characters";
    }
    return errors;
  };

  // signup func end

  const SignupButton = styled(Button)({
    // backgroundColor: "#96feff",
    // backgroundColor: "#2E2532",
    backgroundImage: "  linear-gradient(90deg, #64c0c2 8%, #9bc0bb 93%)",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "10rem",
    color: "white",
    fontSize: "0.8rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });

  const CreateButton = styled(Button)({
    // backgroundColor: "#96feff",
    // backgroundColor: "#2E2532",
    backgroundImage: " linear-gradient(90deg, #0f2daf 8%, #7ea1d1 93%)",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "10rem",
    color: "white",
    fontSize: "0.8rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });

  const ChangeButton = styled(Button)({
    backgroundColor: "#036a6b",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "10rem",
    color: "white",
    fontSize: "0.8rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });

  const [open, setOpen] = useState(true);

  const [registrationStatus, setRegistrationStatus] = useState(true);
  const [registrationFStatus, setFRegistrationStatus] = useState(true);

  const changeRegStat = () => {
    setTimeout(() => {
      setRegistrationStatus(!registrationStatus);
    }, 50);
  };
  const changeFRegStat = () => {
    setFRegistrationStatus(!registrationFStatus);
    changeRegStat();
  };

  const flipDur = 1000;

  const AnimatedGrid = animated(Grid);
  //   login img
  const trails = useTrail(1, {
    opacity: registrationFStatus ? 0 : 1,
    from: {
      opacity: 0,
      transform: registrationFStatus ? "translateX(100vw)" : "translateX(50vw)",
    },
    to: {
      opacity: 1,
      transform: registrationFStatus ? "translateX(50vw)" : "translateX(0vw)",
    },
    config: {
      duration: registrationFStatus ? flipDur : flipDur,
    },
  });
  // signup img
  const trails2 = useTrail(1, {
    opacity: registrationFStatus ? 1 : 0,
    from: {
      opacity: 0,
      transform: registrationFStatus ? "translateX(-50vw)" : "translateX(0vw)",
    },
    to: {
      opacity: 1,
      transform: registrationFStatus ? "translateX(0vw)" : "translateX(50vw)",
    },
    config: {
      duration: registrationFStatus ? flipDur : flipDur - 500,
    },
  });
  const formTrails = useTrail(1, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // rotateX: registrationFStatus ? 90 : 180,
    opacity: registrationFStatus ? 0 : 1,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: registrationFStatus ? flipDur : flipDur + 2000 },
    // config:{duration:flipDur}
  });
  const formTrails2 = useTrail(1, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // rotateX: registrationFStatus ? 0 : 90,
    opacity: registrationFStatus ? 1 : 0,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: registrationFStatus ? flipDur + 2000 : flipDur },
    // config:{duration:flipDur}
  });

  const LoginComponent = () => {
    return (
      <Grid container spacing={0} className="login_main_container">
        {formTrails.map((props) => (
          <AnimatedGrid item xs={6} style={props}>
            <form
              className="inputBox"
              // onSubmit={handleSubmit}
            >
              <Box
                sx={{
                  maxWidth: 500,
                  width: 500,
                  height: 500,
                  // border: "2px solid black",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: resp ? "center" : "flex-start",
                  padding: "1rem",
                }}
              >
                <h1 style={{ margin: "4px 0" }}>
                  <span style={{ color: "#05e1e3", margin: "0 5px 0 0" }}>
                    Welcome
                  </span>
                  back!
                </h1>

                <FormControl
                  style={{ margin: "1rem 0", width: resp ? "40ch" : "50ch" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email"
                    endAdornment={
                      <InputAdornment position="end">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    }
                    type="email"
                    label="Email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl
                  sx={{ width: resp ? "40ch" : "50ch" }}
                  variant="outlined"
                  value={user.password}
                  onChange={handleChange}
                  required
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    name="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <p className="error_message">{errorS.password}</p>

                <span style={{ color: "gray", margin: "1rem 0" }}>
                  New here?
                  <a
                    href=""
                    style={{
                      textDecoration: "none",
                      color: color,
                      margin: "0 0.7rem",
                    }}
                    onClick={changeFRegStat}
                  >
                    Sign Up
                  </a>
                </span>

                <div style={{ display: "flex" }}>
                  {/* <Link to="/password-reset"> */}
                  <ChangeButton>Forgot Password</ChangeButton>
                  <SignupButton type="submit" onClick={showToastMessage}>Log in</SignupButton>
                  <ToastContainer/>
                  {/* </Link> */}
                </div>
              </Box>
            </form>
          </AnimatedGrid>
        ))}
        {trails.map((props) => (
          <AnimatedGrid
            item
            xs={6}
            style={props}
            className="img1 c"
          ></AnimatedGrid>
        ))}
      </Grid>
    );
  };

  const SignUpComponent = () => {
    return (
      <Grid container spacing={0} className="signUp_main_container">
        {trails2.map((props) => (
          <AnimatedGrid
            item
            xs={6}
            style={props}
            className="img2 c"
          ></AnimatedGrid>
        ))}
        {formTrails2.map((props) => (
          <AnimatedGrid
            item
            xs={6}
            style={props}
            // className="formGrid"
          >
            <form
              className="inputBox"
              // onSubmit={signupHandleSubmit}
            >
              <Box
                sx={{
                  maxWidth: 500,
                  width: 500,
                  height: 500,
                  //   border: "2px solid black",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: resp ? "center" : "flex-start",
                  padding: "1rem",
                }}
              >

                <h1 style={{ margin: "4px 0", color: "black" }}>
                  Create
                  <span style={{ color: "#0f2daf", margin: "0 5px " }}>
                    new
                  </span>
                  account
                </h1>
                <span style={{ color: "gray" }}>
                  Already A Member?{" "}
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: color }}
                    onClick={changeFRegStat}
                  >
                    Log in
                  </a>{" "}
                </span>
                <div style={{ display: "flex" }}>
                  <TextField
                    id="name"
                    required
                    type="text"
                    label="FirstName"
                    placeholder="First Name"
                    name="fname"
                    value={signupUser.fname}
                    onChange={signupHandleChange}
                    style={{ margin: "1rem 0", width: resp ? "17ch" : "24ch" }}
                  />
                  <p className="error_message">{errorS.fname}</p>
                  <TextField
                    id="lname"
                    type="text"
                    label="Lastname"
                    placeholder="Last Name"
                    name="lname"
                    value={signupUser.lname}
                    onChange={signupHandleChange}
                    required
                    style={{ margin: "1rem ", width: resp ? "17ch" : "24ch" }}
                  />
                  <p className="error_message">{errorS.lname}</p>
                </div>
                <FormControl
                  sx={{ width: resp ? "40ch" : "50ch" }}
                  variant="outlined"
                  value={signupUser.password}
                  onChange={signupHandleChange}
                  required
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <p className="error_message">{errorS.password}</p>

                <FormControl
                  style={{ margin: "1rem 0", width: resp ? "40ch" : "50ch" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email"
                    endAdornment={
                      <InputAdornment position="end">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    }
                    type="email"
                    label="Email"
                    placeholder="Email"
                    name="email"
                    value={setSignupUser.email}
                    onChange={signupHandleChange}
                    required
                  />
                </FormControl>
                <p className="error_message">{errorS.email}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "50ch",
                  }}
                >
                  <CreateButton type="submit" onClick={showToastMessage2}>Create account</CreateButton>
                  <ToastContainer/>
                </div>
              </Box>
            </form>
          </AnimatedGrid>
        ))}
      </Grid>
    );
  };

  return (
    <>
      {registrationStatus && SignUpComponent()}
      {!registrationStatus && LoginComponent()}
    </>
  );
};

export default Login;
