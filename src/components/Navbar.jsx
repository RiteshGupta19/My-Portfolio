import React, { useState } from "react";
import './navbar.css/'
import { FiAlignJustify } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <>
     <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left logo">Portfolio</div>
        
        {/* Toggle Icon for Small Screens */}
        <div className="iconn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX className=" display-4"/> : <FiAlignJustify className=" fs-1" />}
        </div>
        
        {/* Navigation Links */}
        <div className={`rightt ${isOpen ? "open" : ""}`}>
          <a href="#home" className="nav_items" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#experience" className="nav_items" onClick={() => setIsOpen(false)}>
            Experience
          </a>
          <a href="#education" className="nav_items" onClick={() => setIsOpen(false)}>
            Education
          </a>
          <a href="#skills" className="nav_items" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="nav_items" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="nav_items" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      </div>

      <style jsx>{`
        .iconn {
          display: none;
          cursor: pointer;
        }

        .rightt {
          display: flex;
        }

        /* For smaller screens */
        @media (max-width: 768px) {
          .iconn {
            display: block;
          }

          .rightt {
            display: ${isOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 80px;
            right: 0;
             background-color: rgba(173, 216, 230, 0.8);
            width: 100%;
            text-align: center;
            padding: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }

          .nav_items {
            padding: 10px 0;
          }
          .nav_items:hover {
            border-bottom: 3px solid rgb(255, 255, 255);
            color: aqua;
            background: rgba(255, 255, 255, 0.5); 
            backdrop-filter: blur(10px);
}
        }
      `}</style>
      <style jsx>{`
        .iconn {
          display: none;
          cursor: pointer;
        }

        .rightt {
          display: flex;
        }

        /* For smaller screens */
        @media (max-width: 768px) {
          .iconn {
            display: block;
          }

          .rightt {
            display: ${isOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 80px;
            right: 0;
             background-color: rgba(173, 216, 230, 0.8);
            width: 100%;
            text-align: center;
            padding: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }

          .nav_items {
            padding: 10px 0;
          }
          .nav_items:hover {
            border-bottom: 3px solid rgb(255, 255, 255);
            color: aqua;
            background: rgba(255, 255, 255, 0.5); 
            backdrop-filter: blur(10px);
}
        }
      `}</style>
    </>
  );
};

export default Navbar;