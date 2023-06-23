import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../logo.png'

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="logo">
          <img src={logo} width={180} alt="logo" />
        </div>
        <div className="about">
          <h4>Quick Links</h4>
          <div className="links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/policy">Privacy Policy</Link>
          </div>
        </div>
        <div className="slogan">
          <h6>The greatest venture that you can have</h6>
          <div className="subs">
            <input
              className="form-check-input "
              type="email"
              placeholder="Enter your email"
            />
            <button className="">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-3">
        <div className="wrapper">
          <div className="button">
            <div className="icon">
              <a target="_blank" href="https://www.facebook.com/">
                <i>
                  <FaFacebookF />
                </i>
              </a>
            </div>
            <span>Facebook</span>
          </div>
          <div className="button">
            <div className="icon">
              <a target="_blank" href="https://twitter.com/">
                <i>
                  <FaTwitter />
                </i>
              </a>
            </div>
            <span>Twitter</span>
          </div>
          <div className="button">
            <div className="icon">
              <a target="_blank" href="https://www.instagram.com/">
                <i>
                  <FaInstagram />
                </i>
              </a>
            </div>
            <span>Instagram</span>
          </div>
          <div className="button">
            <div className="icon">
              <a target="_blank" href="https://www.youtube.com/">
                <i>
                  <FaYoutube />
                </i>
              </a>
            </div>
            <span>YouTube</span>
          </div>
        </div>
        <div className="copyright">
          <h5>All Right Reserved &copy; Younglife</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
