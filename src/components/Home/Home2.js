import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <span className="purple">Shubham Kumar Singh</span>, a passionate software developer with a B.Tech degree and a deep love for programming.
              <br />
              <br />
              My primary focus and major contributions lie in <i><b className="purple">backend development</b></i>, where I work extensively with 
              <i><b className="purple"> JavaScript, Node.js,</b></i> and <i><b className="purple">TypeScript</b></i>.
              <br />
              <br />
              I have expertise in designing and implementing scalable systems, and I am skilled in working with:
              <ul>
                <li>
                  Cloud services like <i><b className="purple">AWS EC2</b></i> and <i><b className="purple">S3</b></i>.
                </li>
                <li>
                  Databases such as <i><b className="purple">MongoDB, MySQL,</b></i> and <i><b className="purple">Redis</b></i>.
                </li>
                <li>
                  Version control systems like <i><b className="purple">Git</b></i>.
                </li>
              </ul>
              On the frontend, I am proficient with 
              <i><b className="purple"> React.js</b></i>, and I have experience with templating engines like 
              <i><b className="purple"> Pug</b></i> and <i><b className="purple"> EJS</b></i>.
              <br />
              <br />
              Additionally, I have worked with tools like <i><b className="purple">Docker</b></i>, 
              <i><b className="purple">Socket.io</b></i>, and <i><b className="purple">Firebase</b></i> for real-time communication and notifications.
              <br />
              <br />
              Currently, as a Software Developer at <span className="purple">Gopaisa Netventures</span>, I am responsible for backend and API development, database design, and creating intuitive user management panels for streamlined product management.
              <br />
              <br />
              I am always excited to tackle new challenges, learn emerging technologies, and collaborate with teams to deliver impactful solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shubhamskss/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shubham-kumar-singh-techie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shubhamkumar6742"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
