import React, { useState } from "react";
import "../contact/contact.css";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../firebase/firebase.config";
export default function Contact() {
  
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = state;
  const handlesubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        toast.success("Sent successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((e) => {
        toast.error("Unsuccessful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    setState({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleInputchange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="contact">
      <div className="dotted-box"></div>

      <div className="contact_us_page">
        <h1> Contact us:-</h1>
        <div className="contact_us">
          <div className="contact_info">
            <h2>-:Address:-</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"></i> Headoffice
              - Earth, Milky way, Universe
            </p>
            <p>
              <i
                className="fa fa-envelope"
                aria-hidden="true"
                style={{ color: "white" }}
              ></i>{" "}
              vijay123kumawat123@gmail.com{" "}
            </p>
          </div>

          <div className="form_">
            <form id="contact-form-submit" onSubmit={handlesubmit}>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                onChange={handleInputchange}
                value={name}
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                required
              />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input
                onChange={handleInputchange}
                value={email}
                type="email"
                id="email"
                name="email"
                placeholder="Your email.."
                required
              />
              <br />
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                onChange={handleInputchange}
                value={message}
                id="message"
                name="message"
                placeholder=" Your message.."
                style={{ height: "100px", resize: "vertical" }}
                required
              ></textarea>
              <br />
              <button id="submit" type="submit" value="Submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
