import "./App.css";
import React from 'react';


import {Route, Routes} from "react-router-dom";
import Landing from "./pages/landing.jsx";

import Abc from "./pages/landing(lawyer).jsx";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      
      </div>
      
      <Routes>
            <Route path="/" element={<Landing/>}/>
       
            <Route path="/lawyer" element={<Abc/>}/>
        </Routes>
    </div>
  );
}

export default App;
