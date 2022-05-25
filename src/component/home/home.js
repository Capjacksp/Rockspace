import React from 'react';
import Background from "../images/stars.jpg"
import { BrowserRouter, Routes, Route, Link,outlet } from "react-router-dom";
import randomColor from 'randomcolor';
import Contact from '../contact/contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css'

export default function Home(){
  
    return(
        <div style={{backgroundColor:"#e6ffff"}}>
            <div className="up-body" style={{backgroundImage:  `url(${Background})`}}>
    <div className="front-image">
      <img src={require("../images/internet.png")} alt="Logo-image"/>
    </div>
    <div className="front-text">
      <h1> We provide tools for <span className='space-rocket'  style={{backgroundColor:'black'}}></span> science research. </h1>

    </div>
  </div>

  <div className="quote-body">
    <div className="quotes">
      <img src={require("../images/von.png")} alt="Wernher von Braun"/>
      <div className="quote">
        <p><q>It [the rocket] will free man from his remaining chains, the chains of gravity which still tie him to this planet. It will open to him the gates of heaven.</q></p>
        <h3>~ Wernher von Braun</h3>
      </div>
    </div>

    <div className="quotes">
      <img src={require("../images/carl-sagan.png")} alt="Carl sagan"/>
      <div className="quote">
        <p><q>The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.</q></p>
        <h3>~ Carl sagan</h3>
      </div>
    </div>
  </div>

  <div className="dotted-box"></div>

  <div className="tools">
    <h1> Our tools </h1>
    <div className="btn1">
      <div className="img-btn">
        <img src={require("../images/sls.jpg")} alt="rocket-image"/>

      </div>
      <div className="btn-text">
        <h2>Rocket Science Tools</h2>
        <h3>These tools are use to calculate complex rocket science equtions. </h3>
        <p>Available tools</p>
        <Link to={'/allrocket'} style={{textDecoration:'none'}}><li>All rockets</li></Link>
        <Link to={'/rocket-comparator'} style={{textDecoration:'none'}}><li>Rocket comparator</li></Link>
        <div className="btn">
        <Link to={'/rocket-tools'} style={{textDecoration:'none'}}><a>All tools</a></Link>
        </div>
      </div>
    </div>

    <div className="btn1">
      <div className="img-btn">
        <img src={require("../images/nab.jpg")} alt="Space-image"/>
      </div>
      <div className="btn-text">
        <h2>Space Science Tools</h2>
        <p>These tools are use to calculate complex Astronomy and space science equtions. </p>
        <p>Available tools</p>
        <div className="btn">
        <Link to={'/space-tools'} style={{textDecoration:'none'}}><a>All tools</a></Link>
        </div>
      </div>
    </div>
  </div>

  <Contact></Contact>

   </div>
    );
}