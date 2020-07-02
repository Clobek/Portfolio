import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "components/Card/Card.js";
import NavPills from "components/NavPills/NavPills.js";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Header from "components/Header/Header.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import carouselStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/carouselStyle.js";
import navbarsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js";
import styles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js";
import style from "assets/jss/nextjs-material-kit-pro/modalStyle.js";

import "assets/scss/plugins/_plugin-react-slick.scss"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(navbarsStyle);
const useStyles2 = makeStyles(styles);
const useStyles3 = makeStyles(style);
const useStyles4 = makeStyles(carouselStyle);

export default function Index (props) {
    const headerClass = useStyles();
    const navClass = useStyles2();
    const modalclass = useStyles3();
    const carouselClass = useStyles4();
    const [contact, setContact] = React.useState(false);
    const [website, setWebsite] = React.useState(false);
    const settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true
    };
    return (
      <>
      <Head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      <title>Bryce Belock Portfolio</title>
      </Head>
          <div style={{position: "sticky", top: "0", zIndex: "2", borderBottom: "solid white 1px", margin: "0 !important", padding: "0 !important"}}>
            <Header
            color="dark"
            links={
              <div className={headerClass.collapse}>
              <div className={headerClass.mrAuto} style={{fontSize: "4rem", textAlign: "center"}}>Bryce Belock</div>
              <List className={headerClass.list + " " + headerClass.mlAuto}>
                <ListItem className={headerClass.listItem}>
                  <Button
                    href="#about"
                    className={headerClass.navLink}
                    color="transparent"
                  >
                    <h2 style={{fontSize: "1.5rem"}}>About</h2>
                  </Button>
                </ListItem>
                <ListItem className={headerClass.listItem}>
                  <Button
                    href="#skills"
                    className={headerClass.navLink}
                    color="transparent"
                  >
                    <h2 style={{fontSize: "1.5rem"}}>Skills</h2>
                  </Button>
                </ListItem>
                <ListItem className={headerClass.listItem}>
                  <Button
                    href="#projects"
                    className={headerClass.navLink}
                    color="transparent"
                  >
                    <h2 style={{fontSize: "1.5rem"}}>Projects</h2>
                  </Button>
                </ListItem>
                <ListItem className={headerClass.listItem}>
                  <Button
                    href="#links"
                    className={headerClass.navLink}
                    color="transparent"
                  >
                    <h2 style={{fontSize: "1.5rem"}}>Links</h2>
                  </Button>
                </ListItem>
              </List>
              </div>
            }/>
            </div>
            <div id="about" style={{display: "block", content: "", marginTop: "-75px", height: "75px", visibility: "hidden"}}></div>
            <h1 style={{textAlign: "center", width: "100%", display: "flex", justifyContent: "center", fontSize: "3.5rem", marginBottom: "0", color: "black", paddingTop: "30px"}}>Software Engineer</h1>
            <div style={{backgroundImage: "url('https://i.imgur.com/sx7WWrA.png')", backgroundSize: "cover", width: "calc(16vw + 16vh)", height:"calc(10.64vw + 10.64vh)", margin: "auto"}}></div>
            <div style={{color: "black", textAlign: "center", fontSize: "calc(1vw + 2.5vh)", paddingBottom: "20px", letterSpacing: "1.1px", textShadow: "0 0 8px white", marginLeft: "10px", marginRight: "10px"}}>Growing up I wanted to be a game developer; that eventually evolved into an aspiring computer engineer. From an early age I have had a passion for all things computer related. Writing code has caused both frustration and at the same time some of my greatest feelings of accomplishment. The challenge drives me to continue learning every day. I enjoy the creative outlet coding offers me and I look forward to creating applications that both impress but more importantly serve a purpose.
            </div>
            <div id="skills" style={{display: "block", content: "", marginTop: "-75px", height: "75px", visibility: "hidden"}}></div>
            <div style={{backgroundColor: "#212121", borderRadius: "3px"}}>
            <h1 style={{width: "100%", display: "flex", justifyContent: "center", fontSize: "3.5rem", marginBottom: "0", color: "ghostwhite", paddingTop: "30px"}}>Skills</h1>
            <NavPills
              color="white"
              alignCenter
              tabs={[
                {
                  tabButton: "Overview",
                  tabContent: (
                    <div style={{color: "white", textAlign: "center", fontSize: "calc(1vw + 2.5vh)", paddingBottom: "20px", letterSpacing: "1.1px", paddingTop: "30px"}}>
                       <p>Beginning my coding journey in 2020, I have been able to learn many skills in a short period of time. Through a coding bootcamp, I have spent four months studying and practicing full time between twelve to fourteen hours a day. Eight hours of class with consistent four or more hours of assignments each night has given me the ability to learn the skills neccessary to create fantastic, functional applications. The scores I am giving myself is how comfortable I feel whether it be conceptually or practically. 1 being uncomfortable and 10 being very comfortable.</p>
                    </div>
                  )
                },
                {
                  tabButton: "Frontend",
                  tabContent: (
                    <div style={{color: "white", textAlign: "center", fontSize: "1.3rem", paddingBottom: "20px"}}>
                      <div>
                        JavaScript
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={75}
                      />
                      7.5/10
                      </div>
                      <br/>
                      <div>
                        HTML
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={70}
                      />
                      7/10
                      </div>
                      <br/>
                      <div>
                        CSS
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={70}
                      />
                      7/10
                      </div>
                      <br/>
                      <div>
                        SCSS
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={80}
                      />
                      8/10
                      </div>
                      <br/>
                      <div>
                        React
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={60}
                      />
                      6/10
                      </div>
                      <br/>
                      <div>
                        jQuery / Dom Manipulation
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={70}
                      />
                      7/10
                      </div>
                    </div>
                  )
                },
                {
                  tabButton: "Backend",
                  tabContent: (
                    <div style={{color: "white", textAlign: "center", fontSize: "1.3rem", paddingBottom: "20px", margin: "auto"}}>
                      <div>
                        Python
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={65}
                      />
                      6.5/10
                      </div>
                      <br/>
                      <div>
                        MongoDB
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={70}
                      />
                      7/10
                      </div>
                      <br/>
                      <div>
                        PostgreSQL
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={60}
                      />
                      6/10
                      </div>
                      <br/>
                      <div>
                        NodeJS
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={65}
                      />
                      6.5/10
                      </div>
                      <br/>
                      <div>
                        Django
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={60}
                      />
                      6/10
                      </div>
                      <br/>
                      <div>
                        Virtual Private Server
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={65}
                      />
                      6.5/10
                      </div>
                    </div>
                  )
                },
                {
                  tabButton: "Misc",
                  tabContent: (
                    <div style={{color: "white", textAlign: "center", fontSize: "1.3rem", paddingBottom: "20px"}}>
                      <div>
                        GitHub
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={70}
                      />
                      7/10
                      </div>
                      <br/>
                      <div>
                        GIMP
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={50}
                      />
                      5/10
                      </div>
                      <br/>
                      <div>
                        Problem Solving
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={70}
                      />
                      7/10
                      </div>
                      <br/>
                      <div>
                        Creativity
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={80}
                      />
                      8/10
                      </div>
                      <br/>
                      <div>
                        Communication
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={80}
                      />
                      8/10
                      </div>
                      <br/>
                      <div>
                        Teamwork
                      <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={70}
                      />
                      7/10
                      </div>
                    </div>
                  )
                }
              ]}
            />
            </div>
            <div id="projects" style={{display: "block", content: "", marginTop: "-75px", height: "75px", visibility: "hidden"}}></div>
            <h1 style={{width: "100%", display: "flex", justifyContent: "center", fontSize: "3.5rem", marginBottom: "0"}}>Projects</h1>             
            <div className={carouselClass.section} id="carousel" style={{width: "100% !important", display: "flex", justifyContent:"center", margin: "0", padding: "0"}}>
              <div className={carouselClass.container}>
                <Carousel {...settings}>
                      <div style={{width: "100% !important", border: "solid black"}}>
                      <Card style={{width: "99%", textAlign: 'center', boxShadow: "0 0 .8rem grey"}}>
                      <img
                      style={{ height: "180px", width: "100%", display: "block"}}
                      className={headerClass.imgCardTop}
                      src="https://i.imgur.com/uK3DBrS.png"
                      alt="Application Image"
                      />
                      <CardBody>
                          <h1 className={headerClass.cardTitle} style={{marginBottom: "0"}}>Landscaper</h1>
                          <h3 className={headerClass.cardSubtitle} style={{marginTop: "0"}}>Week 1 Assignment</h3>
                          <div style={{display: "flex", flexFlow: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                          <Button color="info" href="https://github.com/Clobek/Landscaper" target="_blank" rel="noopener noreferrer">Github</Button>
                          <Button color="danger" href="https://dom-landscaper.netlify.app/" target="_blank" rel="noopener noreferrer">Live Application!</Button>
                          </div> 
                      </CardBody>
                      </Card>
                      </div>
                      <div style={{width: "100% !important", border: "solid black"}}>
                      <Card style={{width: "99%", textAlign: 'center', boxShadow: "0 0 .8rem grey"}}>
                      <img
                      style={{ height: "180px", width: "100%", display: "block"}}
                      className={headerClass.imgCardTop}
                      src="https://i.imgur.com/tVJ4xa4.png"
                      alt="Application Image"
                      />
                      <CardBody>
                          <h1 className={headerClass.cardTitle} style={{marginBottom: "0"}}>Spacebattle</h1>
                          <h3 className={headerClass.cardSubtitle} style={{marginTop: "0"}}>Week 2 Assignment</h3>
                          <div style={{display: "flex", flexFlow: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                          <Button color="info" href="https://github.com/Clobek/Spacebattle" target="_blank" rel="noopener noreferrer">Github</Button>
                          <Button color="danger" href="https://dom-space-battle.netlify.app/" target="_blank" rel="noopener noreferrer">Live Application!</Button>
                          </div> 
                      </CardBody>
                      </Card>
                      </div>
                      <div style={{width: "100% !important", border: "solid black"}}>
                      <Card style={{width: "99%", textAlign: 'center', boxShadow: "0 0 .8rem grey"}}>
                      <img
                      style={{ height: "180px", width: "100%", display: "block"}}
                      className={headerClass.imgCardTop}
                      src="https://i.imgur.com/vthI2Yh.png"
                      alt="Application Image"
                      />
                      <CardBody>
                      <h1 className={headerClass.cardTitle} style={{marginBottom: "0"}}>Bookmarkd</h1>
                      <h3 className={headerClass.cardSubtitle} style={{marginTop: "0"}}>1st Team Assignment</h3>
                      <div style={{display: "flex", flexFlow: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                      <Button color="info" href="https://github.com/Clobek/Bookmarkd" target="_blank" rel="noopener noreferrer">Github</Button>
                      <Button color="danger" href="https://bookmarkd.netlify.app/" target="_blank" rel="noopener noreferrer">Live Application!</Button>
                      </div> 
                      </CardBody>
                      </Card>
                      </div>
                      <div style={{width: "100% !important", border: "solid black"}}>
                      <Card style={{width: "99%", textAlign: 'center', boxShadow: "0 0 .8rem grey"}}>
                      <img
                      style={{ height: "180px", width: "100%", display: "block"}}
                      className={headerClass.imgCardTop}
                      src="https://i.imgur.com/wt0txZA.png"
                      alt="Application Image"
                      />
                      <CardBody>
                      <h1 className={headerClass.cardTitle} style={{marginBottom: "0"}}>hORCules</h1>
                      <h3 className={headerClass.cardSubtitle} style={{marginTop: "0"}}>Unit 1 Project</h3>
                      <div style={{display: "flex", flexFlow: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                      <Button color="info" href="https://github.com/Clobek/hORCules" target="_blank" rel="noopener noreferrer">Github</Button>
                      <Button color="danger" href="https://horcules.netlify.app/" target="_blank" rel="noopener noreferrer">Live Application!</Button>
                      </div> 
                      </CardBody>
                      </Card>
                      </div>
                      <div style={{width: "100% !important", border: "solid black"}}>
                      <Card style={{width: "99%", textAlign: 'center', boxShadow: "0 0 .8rem grey"}}>
                      <img
                      style={{ height: "180px", width: "100%", display: "block"}}
                      className={headerClass.imgCardTop}
                      src="https://i.imgur.com/vmsnNcW.png"
                      alt="Application Image"
                      />
                      <CardBody>
                      <h1 className={headerClass.cardTitle} style={{marginBottom: "0"}}>Faithbook</h1>
                          <h3 className={headerClass.cardSubtitle} style={{marginTop: "0"}}>Unit 2 Project</h3>
                          <div style={{display: "flex", flexFlow: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                          <Button color="info" href="https://github.com/Clobek/FaithBook" target="_blank" rel="noopener noreferrer">Github</Button>
                          <Button color="danger" href="https://belock.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Application!</Button>
                          </div> 
                      </CardBody>
                      </Card>
                      </div>
                      <div style={{width: "100% !important", border: "solid black"}}>
                      <Card style={{width: "99%", textAlign: 'center', boxShadow: "0 0 .8rem grey"}}>
                      <img
                      style={{ height: "180px", width: "100%", display: "block"}}
                      className={headerClass.imgCardTop}
                      src="https://i.imgur.com/UjIhW5a.png"
                      alt="Application Image"
                      />
                      <CardBody>
                          <h1 className={headerClass.cardTitle} style={{marginBottom: "0"}}>Shipperific</h1>
                          <h3 className={headerClass.cardSubtitle} style={{marginTop: "0"}}>Unit 3 Project</h3>
                          <div style={{display: "flex", flexFlow: "row", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                          <Button color="info" href="https://github.com/Clobek/Shipperific" target="_blank" rel="noopener noreferrer">Github</Button>
                          <Button color="danger" href="https://shipperific.netlify.app/" target="_blank" rel="noopener noreferrer">Live Application!</Button>
                          </div> 
                      </CardBody>
                      </Card>
                      </div>
                </Carousel>
              </div>
            </div>
            <div id="links" style={{display: "block", content: "", marginTop: "-75px", height: "75px", visibility: "hidden"}}></div>
            <Footer
            theme="dark"
            content={
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%"}}>
              <div className={navClass.pullCenter}>
                <List className={navClass.list}>
                <ListItem className={navClass.inlineBlock}>
                    <a
                      className={navClass.block}
                      style={{fontSize: "1rem"}}
                      onClick={() => setWebsite(true)}
                      style={{cursor: "pointer", fontSize: "1rem"}}
                    >
                      Website Technologies
                    </a>
                    <Dialog
                    modalclass={{
                      root: modalclass.modalRoot,
                      paper: modalclass.modal
                    }}
                    open={website}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setWebsite(false)}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={modalclass.modalHeader}
                    >
                      <Button
                        simple
                        className={modalclass.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        onClick={() => setWebsite(false)}
                      >
                        {" "}
                        <Close className={modalclass.modalClose} />
                      </Button>
                      <h1 className={modalclass.modalTitle}>Technologies Used</h1>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={modalclass.modalBody}
                      style={{paddingTop: "0"}}
                    >
                      <h2>Front-End</h2>
                      <p>The front-end is written in JavaScript with NextJS as the framework. I'm making use of a UI Kit called NextJS Material Kit which is based on Material-UI, as well as some React inline styling.</p>
                      <h2>Back-End</h2>
                      <p>Originally written in Python using Django as the framework for managing the routes and storing the data in PostgeSQL. Once running on a linux based VPS through DigitalOcean, all data is now hardcoded for efficiency due to the scale and needs of my porfolio.</p>
                    </DialogContent>
                  </Dialog>
                  </ListItem>
                  <ListItem className={navClass.inlineBlock}>
                    <a
                      className={navClass.block}
                      style={{fontSize: "1rem"}}
                      onClick={() => setContact(true)}
                      style={{cursor: "pointer", fontSize: "1rem"}}
                    >
                      Contact Information
                    </a>
                    <Dialog
                    modalclass={{
                      root: modalclass.modalRoot,
                      paper: modalclass.modal
                    }}
                    open={contact}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setContact(false)}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={modalclass.modalHeader}
                    >
                      <Button
                        simple
                        className={modalclass.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        onClick={() => setContact(false)}
                      >
                        {" "}
                        <Close className={modalclass.modalClose} />
                      </Button>
                      <h1 className={modalclass.modalTitle}>Contact Information</h1>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={modalclass.modalBody}
                      style={{paddingTop: "0"}}
                    >
                      <h2>Location: Bettendorf, Iowa</h2>
                      <h2>Phone: (563)320-4663</h2>
                      <h2>Email: bryce@belock.dev</h2>
                      <p style={{textAlign: "center"}}>* I tend to not answer calls from numbers I do not know. Send a text or make sure to leave a message.</p>
                    </DialogContent>
                  </Dialog>
                  </ListItem>
                </List>
              </div>
              <div className={navClass.rightLinks}>
                <ul>
                  <li>
                    <a href="https://github.com/Clobek?tab=repositories" target="_blank" rel="noopener noreferrer">
                      <i
                        aria-hidden
                        style={{fontSize: "2rem"}}
                        className={
                          "fab fa-github-square" +
                          " " +
                          navClass.iconSocial +
                          " " +
                          navClass.btnLink
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/bryce-belock/" target="_blank" rel="noopener noreferrer">
                      <i
                        aria-hidden
                        style={{fontSize: "2rem"}}
                        className={
                          "fab fa-linkedin" +
                          " " +
                          navClass.iconSocial +
                          " " +
                          navClass.btnLink
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@belock" target="_blank" rel="noopener noreferrer">
                      <i
                        aria-hidden
                        style={{fontSize: "2rem"}}
                        className={
                          "fab fa-medium" +
                          " " +
                          navClass.iconSocial +
                          " " +
                          navClass.btnLink
                        }
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <script src="https://kit.fontawesome.com/8187678fb5.js" crossOrigin="anonymous"></script>
        </>
    )
}

// Index.getInitialProps = async () => {
//     let res, data, projects;
//     try{
//         res = await fetch('http://142.93.49.26:8000/api/v1/project/');
//         data = await res.json();
//         projects = data.objects;
//     } catch(error){
//         console.error(error);
//     }
//     return {
//         projects
//     }
// };