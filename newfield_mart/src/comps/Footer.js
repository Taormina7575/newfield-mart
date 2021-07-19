import React from "react";
import "./../styles/Footer.css";
import facebookLogo from "./../assets/facebookLogo.png";
import googlelogo from './../assets/googlelogo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="location">
          <h3 className="footerHeading">Find Us Here</h3>
          <p className="footerText">
          <a className="footerText" href='https://www.google.com/maps/dir//newfield+food+mart,+1381+Harding+Hwy,+Newfield,+NJ+08344/@39.5535484,-74.999819,17z/data=!3m1!5s0x89c72ceca532cc07:0x8f8e0ace950ea61f!4m8!4m7!1m0!1m5!1m1!1s0x89c72db785ced0cd:0x4a27f2019e80e46d!2m2!1d-74.9976303!2d39.5535443'>1381 Harding Hwy, Newfield,<br></br> NJ, 08344-5323</a>
          </p>
          <p className="footerText">
            Located at the intersection of<br></br> Main Road and Harding Highway
          </p>
        </div>
        <div className="contact">
          <h3 className="footerHeading">Contact Us</h3>
          <p className="footerText">
          Phone Number: (856) 839-0203
          </p>
          <p className="footerText">
          <a href="mailto:newfieldfoodmart1381@gmail.com">Email: newfieldfoodmart1381@gmail.com</a>
          </p>
          <div className='share'>
            <h3 className="footerText"> Share & Review: </h3>
            <a href="https://www.facebook.com/Newfield-Food-Mart-102478735076598/">
              <img
                alt="facebook logo"
                src={facebookLogo}
                className="facebookLogo2"
              ></img>
            </a>
            <a href="https://www.google.com/maps/place/newfield+food+mart/@39.5535484,-74.999819,17z/data=!3m1!5s0x89c72ceca532cc07:0x8f8e0ace950ea61f!4m7!3m6!1s0x89c72db785ced0cd:0x4a27f2019e80e46d!8m2!3d39.5535443!4d-74.9976303!9m1!1b1">
              <img
                alt="google logo"
                src={googlelogo}
                className="facebookLogo2"
              ></img>
            </a>
          </div>
        </div>
        <div className="hours">
          <h3 className="footerHeading">Store Hours</h3>
          <p className="footerText">
            Mon - Fri: 5:00am - 8:30pm<br></br>
            Saturday: 5:30am - 8:00pm<br></br>
            Sunday: 8:00am - 7:00pm
          </p>
        </div>
      </div>
    </footer>
  );
}
