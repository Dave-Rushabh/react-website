import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../CSS/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-main-1">
          <div className="home-main-1-sub-1"></div>
          <div className="home-main-1-sub-2"></div>
          <div className="home-main-1-sub-3">
            You <br /> Are <br /> Exactly <br /> Where <br /> You <br /> Should{" "}
            <br /> Be..
          </div>
          <div className="home-main-1-sub-4">
            You Are Exactly Where You Should Be..
          </div>
        </div>
        <div className="home-main-2">
          <div className="home-main-2-sub-1"></div>
          <div className="home-main-2-sub-2"></div>
          <div className="home-main-1-sub-3">
            Explore <br /> Our <br /> Services <br /> And <br /> Contact US{" "}
            <br /> For <br /> Your Business Needs
          </div>
          <div className="home-main-2-sub-4">
            Explore Our Services And Contact US For Your Business Needs
          </div>
        </div>
        {/* <div className="home-main-2">
          <div className="home-main-2-sub-1"></div>
          <div className="home-main-2-sub-2"></div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
