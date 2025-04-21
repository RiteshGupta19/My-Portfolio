import React, { useState } from "react";
import { FaInstagram, FaGithubSquare, FaPhoneAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import './contact.css/'
import { OverlayTrigger, Popover } from 'react-bootstrap';


const Contact = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handlePhoneClick = () => setShowPhoneNumber(!showPhoneNumber);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>+91 9172486340</Popover.Body>
    </Popover>
  );

  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a  href="https://www.instagram.com/ritesh_gupta.19/" target="_blank" rel="noopener noreferrer" className="items p-2 py-sm-3 ">
          <FaInstagram className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/riteshgupta19/" target="_blank" rel="noopener noreferrer" className="items p-2 py-sm-3 ">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://github.com/RiteshGupta19" target="_blank" rel="noopener noreferrer" className="items p-2 py-sm-3 ">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:riteshgupta0968@gmail.com" className="items p-2 py-sm-3">
          <SiGmail className="icons" />
        </a>
        <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={popover}
      show={showPhoneNumber}
      onToggle={handlePhoneClick}
    >
      <a href="#!" onClick={handlePhoneClick} className="items p-2 py-sm-3 ">
        <FaPhoneAlt className="icons" />
      </a>
    </OverlayTrigger>
      </div>
    </div>
  );
};

export default Contact;
