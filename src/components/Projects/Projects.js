import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfo1IqIrhptoFFn5ZbeSqPJgyO-ENQ-ERzg&s"}  
    title="Earnly.in"
    description="Earnly.in is a deal-sharing platform that helps users earn extra income by sharing deals, creating income links, and promoting brands. My major work involved backend development, designing schemas, writing APIs, and integrating affiliate rules in the user-submitted links. I also worked on connecting users' social accounts with the Earnly platform based on Figma designs."
  
    demoLink="https://earnly.in"  
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bC8ULWyNRVWRvZY-Ct-4S201YBan8qBidg&s"}  
    isBlog={false}
    title="Gopaisa.com"
    description="Gopaisa.com is a cashback and deal-sharing platform. I primarily worked on the backend, particularly in developing the category and subcategory sections for the application. Additionally, I designed the bonus architecture and contributed to other backend tasks essential to the platform’s functionality."
  
    demoLink="https://gopaisa.com" 
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlG-OPq1xINbDCFZ_4Q4eLDxTedyr7K34GIg&s"} 
    isBlog={false}
    title="Netflix Clone"
    description="I created a full-stack Netflix Clone project using Node.js and Express.js for the backend, along with JWT for authentication. The app allows users to search for movies and watch them. For the video player, I used an iframe to play videos. On the frontend, I used React and Redux for state management."
    ghLink="https://github.com/shubhamskss/netflix-clone" 
    demoLink="https://github.com/shubhamskss/netflix-clone"  
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={"https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/22751_Product_Manager_desktop_4c9e5bf845.jpg"}  
    isBlog={false}
    title="Product Management"
    description="I developed the backend for a Product Management website. The application includes features like user login and signup using JWT for authentication. I implemented CRUD operations for managing products and users. Additionally, I designed schemas for product data and user accounts. The project uses JavaScript, MongoDB, Express.js, Node.js, and AWS S3 for image storage."
    ghLink="https://github.com/shubhamskss/Products-Management/tree/project/productsManagementGroupX"  
    demoLink="https://github.com/shubhamskss/Products-Management/tree/project/productsManagementGroupX"  
  />
</Col>

          

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FV4dlooBqz4kHCqst6zNLivaiGoQEW1wqQ&s"}  
    isBlog={false}
    title="Book Management"
    description="Developed a Book Management system allowing users to add, edit, delete, and view books. The project implements CRUD operations for managing books and user authentication using JWT. It also uses MongoDB for data storage and Express.js for handling API requests."
    ghLink="https://github.com/shubhamskss/Books-Management/tree/project/booksManagementGroup27"  
    demoLink="https://github.com/shubhamskss/Books-Management/tree/project/booksManagementGroup27" 
  />
</Col>


<Col md={4} className="project-card">
  <ProjectCard
    imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7B_Bwg1y8GUxvG26rItPLdE5Z78LQfHi0cQ&s"}  
    isBlog={false}
    title="Book Management"
    description="Developed a Book Management system allowing users to add, edit, delete, and view books. The project implements CRUD operations for managing books and user authentication using JWT. It also uses MongoDB for data storage and Express.js for handling API requests."
    ghLink="https://github.com/shubhamskss/-open-to-intern/tree/project/internshipGroupX"  
    demoLink="https://github.com/shubhamskss/-open-to-intern/tree/project/internshipGroupX" 
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
