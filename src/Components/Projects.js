import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorBg2 from "../assets/img/color-bg2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.gif"


export const Projects = () => {

    const projects = [
        {
            title: <a className="title-a" href="https://github.com/Tom1DK/Login-Page" target="_blank" rel="noopener noreferrer">Login Page</a>,
            description: "A login page, using HTML, CSS and a bit of JavaScript.",
            imgUrl: projImg1,
        },
        {
            title: <a className="title-a" href="https://github.com/Tom1DK/anime-database" target="_blank" rel="noopener noreferrer">Anime Database</a>,
            description: "An anime database, where you can search or old and new series, using JavaScript and Jikan API.",
            imgUrl: projImg2,
        },
        {
            title: <a className="title-a" href="https://github.com/B-Navchev/BidMasters" target="_blank" rel="noopener noreferrer">Auction Website</a>,
            description: "Team project. An auction website, where you can can add items for sale, built with C#, .NET framework and BootStrap.",
            imgUrl: projImg3,
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Below you can find some of the projects i've worked on during the past couple of months.</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">My First Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">In Progress</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">In Progress</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
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
                                <Tab.Pane eventKey="second"></Tab.Pane>
                                <Tab.Pane eventKey="third"></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="" src={colorBg2}></img>
        </section>
    )
}