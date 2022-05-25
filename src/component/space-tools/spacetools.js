import React from "react";
import '../space-tools/spacetools.css'
import randomColor from "randomcolor";
import { ToastContainer, toast } from "react-toastify";
export default function Spacetool(){
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
        </div>
        <h1 style={{color:randomColor()}}>In development</h1>
        <div className="too">
            <a onClick={notify1}> 
            <div className="too-btn too-btn1" >
            <div className="too-btn-img">
                    <img src={require('../images/planets.jpg')} alt="Image of image comparetor" />
                </div>
                <div className="too-btn-text" >
                    <h2>Planet comparator</h2>
                </div>
            </div></a>
            <a onClick={notify1}> 
            <div className="too-btn too-btn1" >
            <div className="too-btn-img">
                    <img src={require('../images/stars.png')} alt="Image of image comparetor" />
                </div>
                <div className="too-btn-text" >
                    <h2>Star comparator</h2>
                </div>
            </div></a>
            
            <a onClick={notify1}> 
            <div className="too-btn too-btn1" >
            <div className="too-btn-img">
                    <img src={require('../images/planet-distance.jpg')} alt="Image of image comparetor" />
                </div>
                <div className="too-btn-text" >
                    <h2>Distance calculator</h2>
                </div>
            </div></a>
            


        </div>
        </div>
    );
}