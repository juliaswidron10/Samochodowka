import '../App.scss';
import React from 'react';
import Title from './title';
// import { useState } from "react";

function Wip() {
  return (
    <div className="wip">
        
        <img src={`${process.env.PUBLIC_URL}/assets/wip.svg`} alt="illustration of people building the website" />
        <div>
            <Title title="Coming Soon!" underline="lightblue" text="darkblue" />
            <p>Sorry, the page you're looking for is under construction</p>
        </div>
    </div>
  );
}

export default Wip;
