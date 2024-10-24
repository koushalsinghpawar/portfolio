import React from "react";
import projects from "./Data/projects.json";

function Projects() {
  return (
    <>
      <div className="container projects my-3 ">
        <h2>PROJECTS</h2>
        <div className="row mx-4">
          {projects.map((Data) => {
            return (
              <>
                <div key={Data.id} className="col-md-4 col-sm-6  col-lg-  my-4">
                  <div
                    className="card bg-dark text-light"
                    style={{ width: "18rem" }}
                  >
                    <div className="img">
                      <img
                        src={Data.imageSrc}
                        className="card-img-top"
                        alt=""
                        style={{
                          width: "250px",
                          height: "200px",
                          margin: "20px",
                        }}
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-center"> {Data.title}</h4>
                      <p className="card-text text-center">
                        {Data.description}
                      </p>

                      <div className="text-center">
                        <a
                          href={Data.demo}
                          className="btn btn-primary mx-2  text-center"
                        >
                          {" "}
                          See demo
                        </a>

                        <a
                          href={Data.source}
                          className="btn btn-success   text-center"
                        >
                          {" "}
                          See code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
