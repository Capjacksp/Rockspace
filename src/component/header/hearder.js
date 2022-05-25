import $ from 'jquery'; 
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, Link,outlet } from "react-router-dom";
import React, { useState, useEffect,useRef } from "react";
import "../header/header.css";
import { CSSTransition } from "react-transition-group";




let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};






export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  let domNode = useClickOutside(() => {
    setNavVisibility(false);
  });
  

  
  const notify = () => toast.info("In development",{position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,});
  return (
    <header className="Header">
      <Link to={'/Rockspce'} style={{textDecoration:'none'}}><a className="Logo" alt="logo" >Rockspace</a></Link>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav" ref={domNode}>
        <Link to={'/Rockspce'} style={{textDecoration:'none'}}><a onClick={toggleNav}>Home</a></Link>
        <Link to={'/Rockspce/all-tools'} style={{textDecoration:'none'}}><a onClick={toggleNav}>All Tools</a></Link>
        <Link to={'/Rockspce/aboutus'} style={{textDecoration:'none'}}><a onClick={toggleNav}>About-us</a></Link>
          <button onClick={notify}>Blog</button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="menu">
        <i  className="fa fa-bars mobile-nav-toggle"></i>
        
      </button>
    </header>
  );
}

  