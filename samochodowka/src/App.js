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
import Specializations from './components/specializations';
import Specialization from './components/specialization';
import Footer from './components/footer';
import Wip from './components/wip';

function App() {
  return (
    <div className="App">
    <Navigation />
    <div className="body-container" >
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialization" element={<Specialization />} />
        <Route path="parents" element={<ForParents />}/>
        <Route path="students" element={<ForStudents />}/>
        <Route path="recruitation" element={<Recruitation />}/>
        <Route path="about" element={<About />} />
        <Route path="specializations" element={<Specializations />} />
        <Route path="specializations/*" element={<Specialization/>} />
        <Route path="wip" element={<Wip />}/>

      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
