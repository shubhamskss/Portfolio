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
              I am <span className="purple">Shubham Kumar Singh</span>, a
              passionate Software Developer from{" "}
              <span className="purple">Lohardaga, Jharkhand, India</span>, with
              a B.Tech degree and strong enthusiasm for backend technologies.
              <br />
              <br />
              My core expertise lies in{" "}
              <b className="purple">software development</b>, where I work
              extensively with{" "}
              <b className="purple">
                JavaScript, Node.js, MySQL, MongoDB, ElasticSearch
              </b>{" "}
              and <b className="purple">Redis</b>.
              <br />
              <br />I am well-versed in designing scalable systems and love
              working with:
              <ul>
                <li>
                  <b className="purple">Cloud:</b> AWS EC2, S3
                </li>
                <li>
                  <b className="purple">Databases:</b> MongoDB, MySQL,
                  ElasticSearch, Redis
                </li>
                <li>
                  <b className="purple">Version Control:</b> Git
                </li>
                <li>
                  <b className="purple">Dev Tools:</b> Docker, Socket.io,
                  Firebase
                </li>
                <li>
                  <b className="purple">Frontend:</b> React.js, Pug, EJS
                </li>
              </ul>
              <br />
              Currently, I work as a{" "}
              <b className="purple">Software Developer</b> at{" "}
              <b className="purple">sarv.com</b>, where I build robust APIs,
              scalable backend solutions, and efficient systems for managing
              high-volume traffic products.
              <br />
              <br />
              Previously, I was a developer at{" "}
              <b className="purple">Gopaisa Netventures Pvt Ltd</b>, focusing on
              backend/API development, database architecture, and intuitive
              admin panel creation.
              <br />
              <br />
              I’m always excited about learning new technologies, solving real
              problems, and delivering impactful software solutions.
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
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shubhamskss/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shubham-kumar-singh-techie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
