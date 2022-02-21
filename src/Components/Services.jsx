import React from "react";
import "../CSS/Services.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Services = (props) => {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <img className="card-img" src={props.img} alt="img not found" />
          <h5 class="card-title">{props.text}</h5>
          <Link to="/contact" class="btn btn-primary">
            Tell Us Your Business Needs
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
