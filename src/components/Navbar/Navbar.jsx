import React from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbarContainer">
      
      <div className="navbarIcons">
        <div className="redesContainer">
          <a className="navRed"><FaFacebookF /></a>
          <a className="navRed"><FaInstagram /></a>
          <a className="navRed"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="navbarMenuContainer">
        <div className="navbarLogo">
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>

        <div className="navbarMenu">
          <a href="#">inicio</a>
          <a href="#">nosotros</a>
          <a href="#">multimedia</a>
          <a href="#">contacto</a>
        </div>
      </div>
        
    </div>
  )
}

export default Navbar