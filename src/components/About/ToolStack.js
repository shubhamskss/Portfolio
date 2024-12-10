import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiUbuntu } from "react-icons/si";

function Toolstack() {
  const flockIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgTQJ0iqJhgZl4AUcuyVMfmez_ZlmJJOkrg&s"

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={flockIcon} alt="Flock" style={{ width: "150px", height: "100px" }} />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
    </Row>
  );
}

export default Toolstack;
