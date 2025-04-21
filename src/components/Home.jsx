import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Ritesh_Gupta_Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
import { FaInstagram, FaGithubSquare,FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';

import { SiMongodb, SiExpress ,SiGmail} from 'react-icons/si';
import './home.css/'

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `Welcome to my profile...<br>
        My Name is <span style="color: yellow;">Ritesh Gupta...</span><br>
        I'm a <span style="color: yellow;">MERN Stack Developer....</span>`
      ],
      typeSpeed: 20,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container my-0 homee"  id="home">
      <div className="row ">
        {/* Left Side */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="d-flex align-items-center mb-3">
            <div className=" text-info font-weight-bold ml-2">
              <h2 ref={typedRef} className=" fs-1"></h2>
            </div>
          </div>
          <p className="text-white fs-5 ">
          Hi, I'm Ritesh Gupta, currently working as a Software Developer with hands-on experience in MERN stack, DevOps practices, and modern web technologies. I enjoy building scalable web apps, automating workflows, and delivering clean, efficient code. Passionate about learning, collaborating, and creating impactful digital solutions.          </p>
          <div className="d-flex flex-column flex-md-row justify-content-between mt-4">
  <div className="text-center mb-4 mb-md-0">
    <h5 className="font-weight-bold">Available on</h5>
    <div className="social-icons d-flex justify-content-center">
      <div className="icon-container">
        <a href="https://www.instagram.com/ritesh_gupta.19/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaInstagram className="icon facebook-icon "  />
        </a>
      </div>
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/ritesh-gupta-developer/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin className="icon linkedin-icon" />
        </a>
      </div>
      <div className="icon-container">
        <a href="https://github.com/RiteshGupta19" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithubSquare className="icon youtube-icon" />
        </a>
      </div>
      <div className="icon-container">
        <a href="mailto:riteshgupta0968@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link">
          <SiGmail className="icon telegram-icon" />
        </a>
      </div>
    </div>
  </div>
  <div className="text-center">
  <h5 className="font-weight-bold">Hands-On Experience In</h5>
  <div className="tech-icons d-flex justify-content-center">
    <div className="icon-container">
      <SiMongodb className="icon mongodb-icon" />
    </div>
    <div className="icon-container ">
      <SiExpress className="icon express-icon text-white" />
    </div>
    <div className="icon-container">
      <FaReact className="icon react-icon" />
    </div>
    <div className="icon-container">
      <FaNodeJs className="icon nodejs-icon" />
    </div>
  </div>
</div>

</div>

          <div className="text-center my-4">
        <a
          href={pdf}
          download="Ritesh_Gupta_Resume.pdf"
          className="btn btn-outline-warning"
        >
          Download Resume
        </a>
      </div>
        </div>

        
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center mx-0 px-0">
          <div className="imgg" data-aos="zoom-in-up" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" className=""  />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
