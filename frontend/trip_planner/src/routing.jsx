import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Tripform from './Tripform';
import Tripdashboard from './Tripdashboard'
import Searchbar from './searchbar';
import Signup from "./Signup"
import Logined from './Loginedhome';

function Rout() {
    console.log("router working");
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/tripform"  element={<Tripform/>} />
        <Route path="/tripdashboard"  element={<Tripdashboard/>} />
        <Route path="/searchbar"   element={<Searchbar/>} />
        <Route path="/signup"   element={<Signup/>} />
        <Route path="/loginedhome"   element={<Logined/>} />
      </Routes>
    </Router>
  );
}

export default Rout;
