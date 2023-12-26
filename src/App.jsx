import "./App.css";
import React from 'react';
import Signlawyer from "./pages/signlawyer.jsx";

import {Route, Routes} from "react-router-dom";
import Landing from "./pages/landing.jsx";
import LogIn from "./pages/logIn.jsx";
import Sign from "./pages/Sign.jsx";
import LawyerProfile from "./pages/LawyerProfile.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import A from "./pages/Lawyers.jsx";
import  B from "./pages/Notifications.jsx";
import Ab from "./pages/Schedule.jsx";
import Abc from "./pages/landing(lawyer).jsx";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      
      </div>
      
      <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/logIn" element={<LogIn/>}/>
            <Route path="/SignUp" element={<Sign/>}/>
            <Route path="/Lawyer-profile" element={<LawyerProfile/>}/>
            <Route path="/Lawyer-sign" element={<Signlawyer/>}/>
            <Route path="/About-Us" element={<AboutUs/>}/>
            <Route path="/lawyers" element={<A/>}/>
            <Route path="/Notifications" element={<B/>}/>
            <Route path="/Scheduler" element={<Ab/>}/>
            <Route path="/lawyer" element={<Abc/>}/>
        </Routes>
    </div>
  );
}

export default App;
