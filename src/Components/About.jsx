import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../CSS/About.css";
import "../CSS/Footer.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-main">
          <div className="content1">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What Kind of Projects we have delivered so far ?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    ~ E-commerece Apps
                    <br />
                    <br />
                    ~ Food delivery Apps
                    <br />
                    <br />
                    ~ weather Apps
                    <br />
                    <br />
                    ~ Video Games
                    <br />
                    <br />
                    ~ Matrimony Apps
                    <br />
                    <br />
                    ~ EV industry Apps
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Our Ofiices
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    ~ Banglore, India
                    <br />
                    <br />
                    ~ Berlin, Germany
                    <br />
                    <br />
                    ~ Halifax, Canada
                    <br />
                    <br />
                    ~ Abu Dhabi, UAE
                    <br />
                    <br />
                    ~ Denver, USA
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Articles published about us
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    ~ Linkedin Link
                    <br />
                    <br />
                    ~ Business Times India Link
                    <br />
                    <br />
                    ~ Nova Scotia Think Tank Link
                    <br />
                    <br />
                    ~ The Economist Link
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content2">
            <div className="about-text">
              We are Tech Enthusiasts <br /> from around the world...
            </div>
          </div>
          <div className="content3">
            <img
              className="img-about"
              src="Images/about-1.jpg"
              alt="could not be found"
            />
          </div>
          <div className="content7">
            <div className="social-media-links">
              <div className="social-text">Follow Us :</div>
              <div className="fb">
                <FacebookIcon />
              </div>
              <div className="ig">
                <InstagramIcon />
              </div>
              <div className="linked">
                <LinkedInIcon />
              </div>
              <div className="yt">
                <YouTubeIcon />
              </div>
              <div className="tweet">
                <TwitterIcon />
              </div>
              <div className="git">
                <GitHubIcon />
              </div>
            </div>
          </div>
          <div className="content4">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  width="100%"
                  height="325px"
                  src="Images/about-2.jpg"
                  alt=""
                />
                <Carousel.Caption>
                  <h3>Company A, France</h3>
                  <p>
                    We received the best services with all our needs fulfilled,
                    thanks RD.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  width="100%"
                  height="325px"
                  src="Images/about-2.jpg"
                  alt=""
                />

                <Carousel.Caption>
                  <h3>Company B, Ireland</h3>
                  <p>
                    Project finished by RD before deadlines and minimum calls of
                    query.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  width="100%"
                  height="325px"
                  src="Images/about-2.jpg"
                  alt=""
                />

                <Carousel.Caption>
                  <h3>Company C, Argentina</h3>
                  <p>
                    RD has a team of great developers, they built highly
                    professional apps.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="content6">
            <div className="about-text">
              Our Happy Clients <br /> from around the Globe...{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
