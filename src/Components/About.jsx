import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Components/custum.css"; // Import custom styles
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container
      className="about-us "
      style={{ backgroundColor: "rgb(11, 26, 51)" }}
    >
      <Row className="text-center mb-4">
        <Col>
          <h2 className="">About Me</h2>
          <p className="text text-center fw-bold">
            I am a dedicated front-end developer with a passion for crafting
            beautiful and functional web applications. My journey in web
            development began with a fascination for design and technology,
            which has evolved into a commitment to creating seamless user
            experiences. I thrive on transforming complex ideas into intuitive
            interfaces that engage users and enhance their interaction with
            digital products.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4" md={12}>
          <h1>Skills </h1>
          <Card>
            <Card.Body>
              <Card.Text>
                <p>
                  <b>HTML/CSS</b> Proficient in semantic HTML and modern CSS
                  techniques, including Flexbox and Grid, to create responsive
                  layouts that adapt to various screen sizes.
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  <b>Javascript</b> avaScript: Strong understanding of
                  JavaScript fundamentals and ES6+ features, enabling me to
                  build dynamic and interactive web applications..
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  <b>Frameworks and Libraries</b> Experienced in using popular
                  frameworks like React, Vue.js, and Angular to develop
                  single-page applications (SPAs) that are both performant and
                  maintainable.
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  <b>Responsive Design</b> Committed to implementing responsive
                  design principles to ensure that applications are accessible
                  and user-friendly across all devices.
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  <b>Version Control</b> Familiar with Git for version control,
                  allowing for efficient collaboration and code management in
                  team environments.
                </p>
              </Card.Text>
              <Card.Text>
                <p>
                  <b>Frameworks and Libraries</b> Experienced in using popular
                  frameworks like React, Vue.js, and Angular to develop
                  single-page applications (SPAs) that are both performant and
                  maintainable.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-4" md={12}>
          <Card>
            <Card.Body>
              <h2>Projects</h2>
              <Card.Text>
                <ul>
                  <li className="btn btn-success">
                    <Link
                      className="text-white text-decoration-none"
                      to="/project"
                    >
                      click here to see all my projects
                    </Link>
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-4" md={12}>
          <Card>
            <Card.Body>
              <h2>Contact</h2>
              <Card.Text>
                <p>Email: koushalsingh161@gmail.com</p>
                <p>
                  LinkedIn:{" "}
                  <a
                    className=" "
                    href="https://www.linkedin.com/in/koushal-singh-pawar-196139267/"
                  >
                    contect me on linkedin
                  </a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
