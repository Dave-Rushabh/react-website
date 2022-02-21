import React from "react";
import Services from "./Services";
import ServicesData from "./ServicesData";
import { ServicesData2 } from "./ServicesData";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Services.css";
import "../CSS/Footer.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <p className="title-services"> Our Services</p>
      </div>
      <div className="services-container">
        <div className="main">
          {ServicesData.map((value, index) => {
            return (
              <>
                <Services img={value.img} text={value.text} key={index} />
              </>
            );
          })}
        </div>

        <div className="main">
          {ServicesData2.map((value, index) => {
            return (
              <>
                <Services img={value.img} text={value.text} key={index} />
              </>
            );
          })}
        </div>
      </div>

      <div className="accordion-main">
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
                Why you should choose us ?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                ~ Having delivered more 100 + Web apps, Mobile Apps and
                extensively good amount of IT counsulting to over 57 clients
                worldwide; we believe that there is a great need to transform
                the way we are building the apps.
                <br />~ We have a huge team of tech enthusiasts who believe to
                be updated with industry edge technologies for better User
                Experience and hastle free database managements; the whole team
                is committed and we have delivered 68 mega projects even brfore
                the deadline !
                <br />~ We understand your needs, share a demo project skeleton
                to ensure there is nothing left out; this stratergy gives
                transperency and more valuable insights can be taken from the
                clienets. This way we are trying to give full freedom to our
                clienets about how they want an app to be, without imposing our
                pre-built designs.
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
                What is our Motto ?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                " Always deliver more than expected "
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
                What Technologies we work on ?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                ~ React Js
                <br />~ Angular
                <br /> ~ Vue
                <br /> ~ Python
                <br /> ~ PHP
                <br /> ~ .Net
                <br /> ~ Mongo DB
                <br /> ~ AWS Cloud
                <br /> ~ Android
                <br /> ~ iOS
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
