import React from "react";
import "./Portfolios.css";
import Headers from "./Headers";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <Headers/>
      <div className="contact-info">
        <div className="info">
          <h2>Contact</h2>
          <h4>Looking forward to hearing from you</h4>

          <h3>Phone</h3>
          <h4>9885565700</h4>

          <h3>Email</h3>
          <h4>ubbanirubenkiranmai@gmail.com</h4>
        </div>

        <div className="Details">
          <div className="Details1">
            <div className="input-group">
              <label for="firstName">FirstName</label>
              <input id="firstName" name="firstName" type="text" />
            </div>
            <div className="input-group">
              <label for="lastName">LastName</label>
              <input id="lastName" name="lastName" type="text" />
            </div>
          </div>
          <div className="Details2">
            <div className="input-group">
              <label for="email">Email</label>
              <input id="email" name="email" type="email" />
            </div>
            <div className="input-group">
              <label for="subject">Subjects</label>
              <input id="subject" name="subject" type="text" />
            </div>
          </div>
          <div className="Details3">
            <div className="input-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" type="text" />
            </div>
            <div className="input-group">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Contact;
