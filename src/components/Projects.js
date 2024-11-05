import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/Metamask.jpg";
import projImg5 from "../assets/img/Resume.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Lexical Analyzer",
      description: "C Programming",
      imgUrl: projImg1,
      link: "https://github.com/omerty/Lexical-Analysis" // Replace with actual link
    },
    {
      title: "Full-Stack Serverless Web Application",
      description: "React, Node.Js, AWS (Lambda, API Gateway, DynamoDB, S3)",
      imgUrl: projImg2,
      link: "https://github.com/omerty/AWS-InventoryManagment" // Replace with actual link
    },
    {
      title: "Network Packet Capture Tool",
      description: "Python, Raw Sockets",
      imgUrl: projImg3,
      link: "https://github.com/omerty/Packet-Capture-Tool" // Replace with actual link
    }
  ];

  // New projects for the "Currently Working" and "Resume" tabs
  const ongoingProjects = [
    {
      title: "CryptoCurrency Selling Platform",
      description: "Blockchain, JavaScript, React, Prism, Azure SQL, AWS, RDS, S3.",
      imgUrl: projImg4,
      link: "https://github.com/omerty/BlockChain-Project" // Replace with actual link
    },
  ];

  const resumeProjects = [
    {
      title: "Resume",
      description: "My Resume",
      imgUrl: projImg5,
      link: "https://drive.google.com/file/d/16MxQVdeEpJssVCJ-KmjjErDj8P8JyPSw/view?usp=sharing" // Replace with actual link
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I've worked on that showcase my skills in programming and software development. Each project demonstrates my ability to tackle different challenges and implement effective solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Development Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Currently Working</Nav.Link>
                      </Nav.Item>
                      <Nav.Item> 
                        <Nav.Link eventKey="third">Resume</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            ongoingProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            resumeProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration" />
    </section>
  );
}
