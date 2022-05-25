import React from "react";
import Iframe from "react-iframe";
import { ToastContainer, toast } from "react-toastify";
import randomColor from "randomcolor";
import { BrowserRouter, Routes, Route, Link,outlet } from "react-router-dom";
import "../footer/footer.css";

export default function Footer() {
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
    <div>
      <div className="footer">
        <div className="foo-logo">
          <h1 style={{color:randomColor()}}>Rockspace</h1>
        </div>
        <ToastContainer />
        <div className="foo_container">
          <h2>Rocket Tools</h2>
          <ul>
            <li>
            <Link to={'/Rockspce/allrocket'} style={{textDecoration:'none'}}> <a href="">All Rocket </a></Link>
            </li>
            <li>
            <Link to={'/Rockspce/rocket-comparator'} style={{textDecoration:'none'}}><a href="">Rocket comparator</a></Link>
            </li>
        
            <li>
              <a  onClick={notify1}>Rocket engine comparator</a>
            </li>
            <li>
              <a onClick={notify1}>Launch cost comparator</a>
            </li>
          </ul>
        </div>

        <div className="foo_container">
          <h2>Space Tools</h2>
          <ul>
            <li>
              <a onClick={notify1}>Planet comparator</a>
            </li>
            <li>
              <a onClick={notify1}>Star comparator</a>
            </li>
            <li>
              <a onClick={notify1}>Distance calculator</a>
            </li>

          </ul>
        </div>
        <div>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2354109226594!2d75.81897991744384!3d26.927750500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db14e7cecdb6d%3A0x4fac654e345e9567!2sObservatorul%20Astronomic%20Jaipur!5e0!3m2!1sen!2sin!4v1653015600490!5m2!1sen!2sin"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
      </div>
    </div>
  );
}
