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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const user = localStorage.getItem("token");
  const user = true;
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Landing/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          {user && <Route path="/home" element={<Home/>}>
          </Route>}
          {user && <Route path="/form" element={<Form/>}>
          </Route>}
          {user && <Route path="/profile" element={<Profile/>}>
          </Route>}
          {user && <Route path="/privacy" element={<Privacy/>}>
          </Route>}
          {user && <Route path="/faceCapture" element={<FaceCapture/>}>
          </Route>}

        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
