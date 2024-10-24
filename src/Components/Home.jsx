import React from "react";
import { Link } from "react-router-dom";
import hero from "./Data/hero.json";
import Skils from "./Skils";
// import Experience from "./Experience";
import Projects from "./Projects";
import Contects from "./Contects";
import Resume from "./Resume/resume.pdf";

function Home() {
  return (
    <>
      <div className="container home">
        <div className="left">
          <h2>
            Hey My Name Is Koushal Singh Pawar And I'M Working As An Front-End
            Devoloper .
          </h2>

          <Link
            to={Resume}
            download="Resume.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </Link>
        </div>
        <div className="right">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="this is an image" />
          </div>
        </div>
      </div>
      <Skils />
      <br />
      {/* <Experience /> */}
      <br /> <br />
      <br />
      <Projects />
      <br />
      <Contects />
    </>
  );
}

export default Home;
