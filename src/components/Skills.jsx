import React from "react";
import skills from "./data/skills.json";
import './skills.css/'

const Skills = () => {
  return (
    <>
      <div className="container skills px-0" id="skills">
        <h1 style={{ paddingTop: "100px" }}>SKILLS</h1>
        <div className="row items   justify-content-center align-items-center px-3 mx-0">
          {skills.map((data) => (
            <div className="col-12 col-sm-5 col-md-4 col-lg-3 p-3 mx-0">
              <div
              className="item  m-0"
              key={data.id}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className=" w-100">
              <img  src={`/assets/${data.imageSrc}`} alt="" className="imgs" />
              <h3>{data.title}</h3>
                </div>
            </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
