import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from "./component/Context";
import Dashboard from "./component/Dashboard";

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


function App() {
  return (
    
      <Router>
        <UserContextProvider>
      <Toaster position = 'bottom-right' toastOptions ={{duration: 2000}}/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>

        </Routes>
        </UserContextProvider>
      </Router>
      
  );
}

export default App;
