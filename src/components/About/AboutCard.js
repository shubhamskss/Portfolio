import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Kumar Singh</span> from{" "}
            <span className="purple">Lohardaga, Jharkhand, India.</span>
            <br />
            I am currently working as a{" "}
            <span className="purple">Software Engineer at Sarv.com</span>, where I contribute
            to both frontend and backend development — building scalable, high-performance
            modules and improving overall system efficiency.
            <br />
            <br />
            Previously, I worked for around{" "}
            <span className="purple">2.5 years at GoPaisa Netventures Pvt. Ltd.</span>,
            focusing on backend API development, database design, and admin panel features
            for better product management.
            <br />
            <br />
            I hold a <span className="purple">B.Tech degree</span> from{" "}
            <span className="purple">Techno India, Banipur</span>.
            <br />
            <br />
            Apart from coding, here are a few activities I enjoy in my leisure time:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Shubham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
