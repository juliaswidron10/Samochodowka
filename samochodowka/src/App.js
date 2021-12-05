import './App.scss';
import { Routes, Route } from "react-router-dom";
import ForParents from "./parents/for-parents";
import React from 'react';
// import { useState, useEffect } from "react";
import Home from "./home/home";
import Recruitation from "./recruitation/recruitation";
import ForStudents from "./students/for-students";
import About from "./about/about";
import Navigation from './home/navigation';


function App() {
  return (
    <div className="App">
    <Navigation />
    <div className="body-container" >
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="parents" element={<ForParents />}/>
        <Route path="students" element={<ForStudents />}/>
        <Route path ="recruitation" element={<Recruitation />}/>
        <Route path="about" element={<About />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
