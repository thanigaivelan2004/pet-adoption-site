import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:thanigaivelan2004@gmail.com">
          thanigaivelan2004@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/thanigaivelan-p-36014624a/">
          User Name: Thanigaivelan
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/thanigaivelan2004">
          Thanigaivelan
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/thanigai_07/">
          @thanigai_07
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+91 7604907947">
          +91 7604907947
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
