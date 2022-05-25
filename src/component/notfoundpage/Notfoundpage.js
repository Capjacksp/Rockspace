import React from "react";
import { BrowserRouter, Routes, Route, Link,outlet } from "react-router-dom";

export default function NotFoundPage(){
    return(
        <div style={{textAlign:"center"}} >
            <img style={{textALign:"center",marginTop:"200px"}} src={require('../pictures/images.jpg')} alt="Image of kidu" />
            <p >
              <Link to="/Rockspace/">Go to Home </Link>
            </p>
          </div>
    );
}