import React from "react";
import education from "./data/education.json";
import './education.css/'

const Education = () => {
  return (
    <>
      <div className="container edu px-0" style={{ paddingBottom: "100px" }} id="education">
        <h1 style={{ paddingTop: "100px" }}>EDUCATION</h1>
        {education.map((data) => {
          return (
            <div
              key={data.id}
              className="edu-items row m-0  my-5 pb-xl-0 pb-3"
              
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="left col-lg-3 col-md-6 col-12 px-0 mb-lg-4 mb-2" style={{ margin: "auto" }}>
                <img 
                className=" w-100"
                  style={{  }}
                  src={`/assets/${data.imageSrc}`}
                  alt={`${data.degree} logo`}
                />
              </div>
              <div className="right text-left col-lg-8 col-md-12 col-12 px-0">
                <h2>{data.degree}</h2>
                <h3>{data.institution}</h3>
                <h4>
                  <span style={{ color: "yellowgreen" }}>{data.duration}</span>
                </h4>
                {data.cgpa && (
                  <h5 style={{ color: "yellow" }}>CGPA: {data.cgpa}</h5>
                )}
                {data.percentage && (
                  <h5 style={{ color: "yellow" }}>Percentage: {data.percentage}</h5>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
