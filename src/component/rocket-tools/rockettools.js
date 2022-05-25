import React from "react";
import '../rocket-tools/rockettools.css'
import { BrowserRouter, Routes, Route, Link,outlet } from "react-router-dom";
import randomColor from "randomcolor";
import { ToastContainer, toast } from "react-toastify";
export default function Rockettool(){
    const notify1 = () =>
    toast.info("In-development", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return (
        <div className="too-body">
            <h1 style={{color:randomColor()}}>Available tools</h1>
        <div className="too">
        <Link to={'/allrocket'} style={{textDecoration:'none'}}><a> 
            <div className="too-btn" >
            <div className="too-btn-img">
                    <img src={require('../pictures/V2.png')} alt="Image of image comparetor" />
                </div>
                <div className="too-btn-text" >
                    <h2>All Rockets</h2>
                </div>
            </div></a></Link>
            <Link to={'/rocket-comparator'} style={{textDecoration:'none'}}><a> 
            <div className="too-btn" >
            <div className="too-btn-img">
                    <img src={require('../pictures/rocketco1.png')} alt="Image of image comparetor" />
                </div>
                <div className="too-btn-text" >
                    <h2>Rocket comparetor</h2>
                </div>
            </div></a></Link>
            


        </div>
        <h1 style={{color:randomColor()}}>In development</h1>
        <div className="too">
            <a onClick={notify1}> 
            <div className="too-btn too-btn1" >
            <div className="too-btn-img">
                    <img src={require('../pictures/engine1.png')} alt="Image of image comparetor" />
                </div>
                <div className="too-btn-text" >
                    <h2>All Rockets engine</h2>
                </div>
            </div></a>
            <a onClick={notify1}> 
            <div className="too-btn too-btn1" >
            <div className="too-btn-img">
                    <img src={require('../pictures/rocket3.png')} alt="Image of image comparetor" />
                </div>
                <div className="too-btn-text" >
                    <h2>Rocket engine comparetor</h2>
                </div>
            </div></a>
            
            <a onClick={notify1}> 
            <div className="too-btn too-btn1" >
            <div className="too-btn-img">
                    <img src={require('../images/rocket-launch-costs.jpg')} alt="Image of image comparetor" />
                </div>
                <div className="too-btn-text" >
                    <h2>Launch price comparetor</h2>
                </div>
            </div></a>
            


        </div>
        </div>
    );
}