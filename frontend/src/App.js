import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import Navbar  from "./components/Navbar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Privacy from "./components/Privacy";
import Home from "./components/Home";
import FaceCapture from "./components/FaceCapture";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/landing" element={<Landing/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/form" element={<Form/>}>
          </Route>
          <Route path="/profile" element={<Profile/>}>
          </Route>
          <Route path="/privacy" element={<Privacy/>}>
          </Route>
          <Route path="/" element={<FaceCapture/>}>
          </Route>

        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
