import React from "react";


export default function NotFoundPage(){
    return(
        <div>
            <img src={require('../pictures/images.jpg')} alt="Image of kidu" />
            <p style={{textAlign:"center"}}>
              <Link to="/Rockspace/">Go to Home </Link>
            </p>
          </div>
    );
}