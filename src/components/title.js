import '../App.scss';
import React from 'react';
// import { useState } from "react";

function Title(props) {
  return (
    <div className="title-container">
        <h1 className={props.text+'text'} >{ props.title }</h1>
        <div className={props.underline+'underline'}></div>
    </div>
  );
}

export default Title;
