import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
  const projects = [
    {
      title: "Restaurant",
      description: "Design",
      imgUrl: 'https://res.cloudinary.com/dtqdflngh/image/upload/v1691690529/Screenshot-2023-08-10-230110_rjnfzj.webp',
      url:'https://myhotel.surge.sh/',
    },
    {
      title: "Nft Market",
      description: "Design",
      imgUrl: 'https://res.cloudinary.com/dvg79etnq/image/upload/c_crop,w_726,h_500/v1696962258/projectnft_r1idqe.png',
      url:'https://nft-marketplaceee.web.app/',
    },
    {
      title: "Studio",
      description: "Design",
      imgUrl: 'https://res.cloudinary.com/dvg79etnq/image/upload/c_crop,w_500,h_350/v1697132508/b14df2ba-71e9-4547-b533-722e984dfd64_nha0ue.jpg',
      url:'https://wishque-interior-studio-rmo6-ko0j45ud4-techlosetwishaque.vercel.app/',
    },
    {
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: 'https://res.cloudinary.com/dvg79etnq/image/upload/c_crop,w_700,h_500/v1696962521/quizapp_uqpsrj.png',
      url:'https://quiz-postgresql-versel.vercel.app/',
    },
    {
      title: "Ecommerence Dashboard",
      description: "Design & Development",
      imgUrl: 'https://res.cloudinary.com/dvg79etnq/image/upload/c_crop,w_500,h_350/v1697132555/9bf614ad-654e-4bb2-a91a-13743c18fa85_zrwqnq.jpg',
      url:'https://joyous-gray-flannel-nightgown.cyclic.app/',
    },
    {
      title: "Notes App",
      description: "Design & Development",
      imgUrl: 'https://res.cloudinary.com/dvg79etnq/image/upload/v1697132544/482e0b54-1aea-4482-9d63-2cba174fc73e_a0ohur.jpg',
      // url:'https://admin-dashboard-eight-lilac.vercel.app/',
    },
   
   
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I can't display all projects because of client's policies</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  )
}
