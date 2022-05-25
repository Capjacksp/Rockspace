import React from "react";
import Rockettool from "../rocket-tools/rockettools";
import Spacetool from "../space-tools/spacetools";

export default function Alltools(){
    return(
        <div style={{backgroundColor:'#e6ffff',textAlign:"center"}}>
            <h2 style={{color:"#364C59",fontFamily:"Grape Nuts",
    fontSize: '50px',
    fontWeight: '100',marginTop:"70px"}} >-:Rocket Tools:-</h2>
    <Rockettool></Rockettool>
            <h2 style={{color:"#364C59",fontFamily:"Grape Nuts",
    fontSize: '50px',
    fontWeight: '100'}} >-:Space Tools:-</h2>
    <Spacetool></Spacetool>


        </div>
    );
}