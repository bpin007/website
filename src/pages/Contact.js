import React from "react";
import Left from "../asset/home.jpg";
import "../styleSheet/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Left})` }}
      ></div>
      <div className="rightSide">
        <h1 id="contact"> To Contact Us</h1>

        <form id="contact-form" method="POST">
          <label id="name" htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label id='email' htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label id="feedback" htmlFor="feedback">Feedback</label>
          <textarea
            rows="6"
            placeholder="Please give feedback"
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;