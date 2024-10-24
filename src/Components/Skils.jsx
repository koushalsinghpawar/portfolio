import React from "react";
import Skills from "./Data/skills.json";
function Skils() {
  return (
    <>
      <div className="container skills">
        <h1>Skills</h1>
      </div>

      <div className="items  ">
        {Skills.map((data) => {
          return (
            <>
              <div className="item " key={data.id}>
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <br />
                <br />
                <h4>{data.title}</h4>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Skils;
