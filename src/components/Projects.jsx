import React from "react";
import project from "./data/projects.json";
import './project.css/'

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1 style={{paddingTop:"100px"}}>PROJECTS</h1>
       


        <h1 style={{ paddingTop: "100px", textDecoration: "underline", textAlign: "center" }}>
          MERN
        </h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            data.language === "mern" && (
              <div
              key={data.id}
              className="my-4 col-12 col-md-6 col-lg-6  col-xl-4  m-auto mx-0 px-0"
            >
              <div
                className="card pro bg-dark text-light m-auto"
                style={{
                  width: window.innerWidth < 410 ? "18rem" : "22rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                      src={`/assets/${data.imageSrc}`}
                      className="card-img-top"
                      alt="...."
                      style={{
                        width: window.innerWidth < 410 ?"250px": "305px",
                        height: "180px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text">{data.description}</p>
                    {/* <a href={data.demo} className="btn btn-primary mx-3">
                      Output
                    </a> */}
                    {(data.key === 11 || data.key === 16) ? (<div style={{height:'40px'}}></div>) : (
                      <a href={data.source} className="btn btn-warning">
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        <h1 style={{ paddingTop: "100px", textDecoration: "underline", textAlign: "center" }}>
          JAVASCRIPT/REACT
        </h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            (data.language === "js" || data.language === "react") && (
              <div
              key={data.id}
              className="my-4 col-12 col-md-6 col-lg-6  col-xl-4  m-auto mx-0 px-0"
            >
              <div
                className="card pro bg-dark text-light m-auto"
                style={{
                  width: window.innerWidth < 410 ? "18rem" : "22rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                      src={`/assets/${data.imageSrc}`}
                      className="card-img-top"
                      alt="...."
                      style={{
                        width: window.innerWidth < 410 ?"250px": "305px",
                        height: "180px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text">{data.description}</p>
                    {(data.key === 10) ? (<div ></div>) : (
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Output
                    </a>
                    )}
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        <h1 className="font" style={{ paddingTop: "100px", textDecoration: "underline", textAlign: "center" }}>
          HTML/CSS/BOOTSTRAP
        </h1>
        <div className="row  justify-content-center align-content-center p-0 m-0" styl>
          {project.map((data) => (
            (data.language === "html" || data.language === "boot")&& (
              <div
                key={data.id}
                className="my-4 col-12 col-md-6 col-lg-6  col-xl-4  m-auto mx-0 px-0"
              >
                <div
                  className="card pro bg-dark text-light m-auto"
                  style={{
                    width: window.innerWidth < 410 ? "18rem" : "22rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={`/assets/${data.imageSrc}`}
                      className="card-img-top"
                      alt="...."
                      style={{
                        width: window.innerWidth < 410 ?"250px": "305px",
                        height: "180px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">{data.title}</h4>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Output
                    </a>
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>


      </div>
    </>
  );
};

export default Projects;
