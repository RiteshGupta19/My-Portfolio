import React from "react";
import experience from "./data/experience.json";
import './experience.css/'

const Experience = () => {
  return (
    <>
      <div className=" w-100" style={{paddingBottom:"100px"}} id="experience">
        <h1 style={{paddingTop:"100px"}}>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
            <div className="row m-0 p-0 ex-items text-center my-5 w-100 py-3">
             
                <div className="left col-md-3">
                  <img className="" style={{}} src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right col-md-9">
                  <h2>{data.organisation}</h2>
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
             
        </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
