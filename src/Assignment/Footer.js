import React from 'react';
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="social-links">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <MdFacebook size={30} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter  size={30}/>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram  size={30}/>
        </a>
      </div>
      <p class="copyright"> @ All rights reserved albanero.io 2024</p>
    </footer>
  );
};

export default Footer;
